# Dockerize + CI/CD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing single-purpose Docker setup with a proper dev/prod split, then add a GitHub Actions pipeline that validates every branch, and builds + publishes a Docker image only for `main`.

**Architecture:** Phase 1 splits Docker into `Dockerfile.dev` / `Dockerfile.prod` (multi-stage, Next.js `standalone` output) and matching `docker-compose.dev.yml` / `docker-compose.prod.yml`, both on the Node.js 22 LTS Alpine image. Phase 2 adds a single GitHub Actions workflow with three sequential jobs — `validate` (lint, typecheck, tests — runs on every push and PR to every branch), `build` (runs only on `main`, builds the prod image, smoke-tests it), and `publish` (runs only on `main`, pushes the built image to GHCR). Server deployment (CD) is scaffolded as a manually-triggered, intentionally-empty placeholder workflow per the user's instruction to leave it for later.

**Tech Stack:** Next.js 15 (App Router, `output: 'standalone'`), Node.js 22-alpine, Docker Compose v2, GitHub Actions, GHCR (`ghcr.io`) as the image registry.

**Spec:** This plan was written directly from the user's chat request (no separate spec doc). Requirements, captured verbatim in Global Constraints below.

## Global Constraints

- Two Dockerfiles: one for dev, one for prod.
- Two Docker Compose files: one for dev, one for prod.
- Use a Node.js **LTS** base image (Node 22 Active LTS as of this writing — Node 20 goes end-of-life April 2026, so the existing `node:20-alpine` pin must be bumped).
- The app is "dockerized till certain but not good" — audit and fix the existing `Dockerfile`/`docker-compose.yml` rather than starting from zero.
- CI/CD runs in GitHub Actions.
- Pipeline stages, in order: **validate** (lint, typecheck, tests) → **build** → **publish**.
- `main` is connected to prod: build + publish only happen for `main`.
- Every other branch: pipeline still runs, but only the validate step.
- CD (actual deploy to a specific server) is out of scope for now — leave a placeholder, don't build it.

---

## Phase 1: Dockerization

### Task 1: Add a `typecheck` script and audit the current Docker setup

**Files:**
- Modify: `package.json:5-10` (scripts block)
- Read (audit only, no changes yet): `Dockerfile`, `docker-compose.yml`, `.dockerignore`

**Interfaces:**
- Produces: `npm run typecheck` — runs `tsc --noEmit`, used by Task 8's CI validate job.

**Context for the audit** (found by inspecting the repo):
- Current `Dockerfile` pins `node:20-alpine`. Node 20 is LTS but exits maintenance in April 2026 — needs bumping to Node 22 (current Active LTS).
- No `HEALTHCHECK`, no `NEXT_TELEMETRY_DISABLED`, and it's a single Dockerfile used for both purposes (no dev mode at all — `docker-compose.yml` just builds the prod image).
- `docker-compose.yml` has no dev/prod split, no build target selection, no volumes for live-reload.
- `package.json` has `dev`, `build`, `start`, `lint` scripts but no `typecheck` and no `test` script (there is no test suite in this repo yet).

- [ ] **Step 1: Add the `typecheck` script**

Edit `package.json` scripts block to:

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit"
},
```

- [ ] **Step 2: Verify it runs**

Run: `npm run typecheck`
Expected: exits 0 with no output (or reports existing type errors — if it does, that's pre-existing and out of scope for this plan; note it but continue).

- [ ] **Step 3: Commit**

```bash
git add package.json
git commit -m "chore: add typecheck script"
```

---

### Task 2: Create the production Dockerfile

**Files:**
- Create: `Dockerfile.prod`
- Delete: `Dockerfile` (superseded — its logic is folded into `Dockerfile.prod` below, improved)

**Interfaces:**
- Produces: an image built with `docker build -f Dockerfile.prod .` that serves the app on `0.0.0.0:3000`, used by `docker-compose.prod.yml` (Task 4) and the CI `build`/`publish` jobs (Tasks 9–10).

Improvements over the old `Dockerfile`: Node bumped to the 22 LTS line, telemetry disabled at build and run time, a container `HEALTHCHECK` so orchestrators/compose can detect a wedged process, and the base image pinned via an `ARG` so it's a one-line bump in the future.

- [ ] **Step 1: Write `Dockerfile.prod`**

```dockerfile
ARG NODE_IMAGE=node:22-alpine

FROM ${NODE_IMAGE} AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM ${NODE_IMAGE} AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/', r => process.exit(r.statusCode < 500 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "server.js"]
```

- [ ] **Step 2: Delete the old `Dockerfile`**

```bash
git rm Dockerfile
```

- [ ] **Step 3: Build and verify**

Run: `docker build -f Dockerfile.prod -t new-portfolio:prod-test .`
Expected: build succeeds, final stage is `runner`.

Run: `docker run --rm -d --name portfolio-prod-test -p 3000:3000 --env-file .env.local new-portfolio:prod-test`
Then: `curl -f http://localhost:3000/` — expect HTTP 200.
Then: `docker inspect --format='{{.State.Health.Status}}' portfolio-prod-test` (after ~15s) — expect `healthy`.
Cleanup: `docker stop portfolio-prod-test`

- [ ] **Step 4: Commit**

```bash
git add Dockerfile.prod
git commit -m "feat: add multi-stage production Dockerfile on Node 22 LTS"
```

---

### Task 3: Create the development Dockerfile

**Files:**
- Create: `Dockerfile.dev`

**Interfaces:**
- Produces: an image used by `docker-compose.dev.yml` (Task 5) that runs `next dev --turbopack` with the repo bind-mounted for hot reload.

- [ ] **Step 1: Write `Dockerfile.dev`**

```dockerfile
ARG NODE_IMAGE=node:22-alpine
FROM ${NODE_IMAGE}
WORKDIR /app
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
```

- [ ] **Step 2: Build and verify**

Run: `docker build -f Dockerfile.dev -t new-portfolio:dev-test .`
Expected: build succeeds.

Run: `docker run --rm -d --name portfolio-dev-test -p 3000:3000 --env-file .env.local new-portfolio:dev-test`
Then: `curl -f http://localhost:3000/` — expect HTTP 200 (Next dev server responding).
Cleanup: `docker stop portfolio-dev-test`

- [ ] **Step 3: Commit**

```bash
git add Dockerfile.dev
git commit -m "feat: add development Dockerfile with hot reload"
```

---

### Task 4: Create the production Docker Compose file

**Files:**
- Create: `docker-compose.prod.yml`
- Delete: `docker-compose.yml` (superseded by the dev/prod split)

**Interfaces:**
- Consumes: `Dockerfile.prod` (Task 2).

- [ ] **Step 1: Write `docker-compose.prod.yml`**

```yaml
services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile.prod
    image: new-portfolio:prod
    ports:
      - "3000:3000"
    env_file:
      - .env.local
    restart: unless-stopped
```

- [ ] **Step 2: Delete the old `docker-compose.yml`**

```bash
git rm docker-compose.yml
```

- [ ] **Step 3: Verify**

Run: `docker compose -f docker-compose.prod.yml up --build -d`
Then: `curl -f http://localhost:3000/` — expect HTTP 200.
Cleanup: `docker compose -f docker-compose.prod.yml down`

- [ ] **Step 4: Commit**

```bash
git add docker-compose.prod.yml
git commit -m "feat: add production docker-compose file"
```

---

### Task 5: Create the development Docker Compose file

**Files:**
- Create: `docker-compose.dev.yml`

**Interfaces:**
- Consumes: `Dockerfile.dev` (Task 3).

- [ ] **Step 1: Write `docker-compose.dev.yml`**

```yaml
services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile.dev
    image: new-portfolio:dev
    ports:
      - "3000:3000"
    env_file:
      - .env.local
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    restart: unless-stopped
```

The two anonymous volumes (`/app/node_modules`, `/app/.next`) prevent the host bind mount from shadowing the container's installed dependencies and build cache.

- [ ] **Step 2: Verify**

Run: `docker compose -f docker-compose.dev.yml up --build -d`
Then: `curl -f http://localhost:3000/` — expect HTTP 200.
Then: edit `app/page.tsx` (trivial whitespace change) and confirm the dev server recompiles (check `docker compose -f docker-compose.dev.yml logs -f portfolio` for a recompile line), then revert the edit.
Cleanup: `docker compose -f docker-compose.dev.yml down`

- [ ] **Step 3: Commit**

```bash
git add docker-compose.dev.yml
git commit -m "feat: add development docker-compose file with hot reload volumes"
```

---

### Task 6: Tighten `.dockerignore` and document Docker usage in README

**Files:**
- Modify: `.dockerignore`
- Modify: `README.md`

**Interfaces:** none (leaf task).

- [ ] **Step 1: Update `.dockerignore`**

Current content excludes `.git`, `.next`, `node_modules`, logs, `.env*`, `*.pem`, `*.tsbuildinfo`, `coverage`, `out`, `README.md`. Add CI/docs/plan directories that never belong in a build context:

```
.git
.next
node_modules
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env*
.DS_Store
*.pem
*.tsbuildinfo
coverage
out
README.md
.github
docs
Dockerfile.dev
docker-compose*.yml
```

- [ ] **Step 2: Add a "Docker" section to `README.md`**

Append after the existing "Getting Started" section:

```markdown
## Docker

**Development** (hot reload, bind-mounted source):

\`\`\`bash
docker compose -f docker-compose.dev.yml up --build
\`\`\`

**Production** (multi-stage build, standalone Next.js output):

\`\`\`bash
docker compose -f docker-compose.prod.yml up --build -d
\`\`\`

Both expect a `.env.local` file in the project root (see `.env.local` for the expected keys) and serve the app on [http://localhost:3000](http://localhost:3000).
```

- [ ] **Step 3: Commit**

```bash
git add .dockerignore README.md
git commit -m "chore: tighten dockerignore and document docker usage"
```

---

## Phase 2: CI/CD

### Task 7: Create the CI/CD workflow file with the `validate` job

**Files:**
- Create: `.github/workflows/ci-cd.yml`

**Interfaces:**
- Produces: job id `validate`, consumed by `needs: validate` in Tasks 8–9.

- [ ] **Step 1: Write the workflow skeleton with the `validate` job**

```yaml
name: CI/CD

on:
  push:
    branches: ['**']
  pull_request:
    branches: ['**']

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    name: Validate
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Typecheck
        run: npm run typecheck

      - name: Test
        run: npm run test --if-present
```

`npm run test --if-present` runs the test suite once one exists, and is a no-op today since no `test` script is defined — it will not fail the build for a script that doesn't exist yet.

- [ ] **Step 2: Verify branch/PR triggering logic locally**

There's no local GitHub Actions runner assumed here, so verify by reading the trigger: `on.push.branches: ['**']` and `on.pull_request.branches: ['**']` fire `validate` for every branch and PR, with no `if:` restricting it — satisfying "for any other branch the pipeline would work but just for validating step."

- [ ] **Step 3: Push to a non-main branch and confirm in the GitHub Actions tab**

```bash
git checkout -b ci-smoke-test
git add .github/workflows/ci-cd.yml
git commit -m "ci: add validate job (lint, typecheck, test)"
git push -u origin ci-smoke-test
```

Expected: Actions tab shows the `CI/CD` workflow running with only the `validate` job (no `build`/`publish` jobs exist yet at this point in the plan).

- [ ] **Step 4: Merge back / keep working on this branch for the remaining tasks, then commit is already done above.**

---

### Task 8: Add the `build` job (main-only, builds and smoke-tests the prod image)

**Files:**
- Modify: `.github/workflows/ci-cd.yml`

**Interfaces:**
- Consumes: `Dockerfile.prod` (Task 2), job `validate` (Task 7).
- Produces: job id `build`, consumed by `needs: build` in Task 9.

- [ ] **Step 1: Append the `build` job**

```yaml
  build:
    name: Build Docker image
    needs: validate
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Build image
        uses: docker/build-push-action@v6
        with:
          context: .
          file: ./Dockerfile.prod
          push: false
          load: true
          tags: new-portfolio:ci-${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Smoke test container
        run: |
          docker run -d --name smoke -p 3000:3000 new-portfolio:ci-${{ github.sha }}
          ok=0
          for i in $(seq 1 15); do
            if curl -fs http://localhost:3000/ >/dev/null; then ok=1; break; fi
            sleep 2
          done
          docker logs smoke
          docker stop smoke
          test "$ok" = "1"
```

The `if:` guard is what confines building to `main` pushes — it's the same condition Task 9's `publish` job uses, so a PR run (even one targeting `main`) never triggers a build.

- [ ] **Step 2: Commit and push**

```bash
git add .github/workflows/ci-cd.yml
git commit -m "ci: add build job gated to main"
git push
```

- [ ] **Step 3: Verify on a feature branch**

Push this branch (not `main`) and confirm in the Actions tab that `validate` runs but `build` is skipped (shown as skipped due to the `if:` condition), matching "for any other branch ... just the validating step."

---

### Task 9: Add the `publish` job (main-only, pushes to GHCR)

**Files:**
- Modify: `.github/workflows/ci-cd.yml`

**Interfaces:**
- Consumes: job `build` (Task 8).

- [ ] **Step 1: Append the `publish` job**

```yaml
  publish:
    name: Publish Docker image
    needs: build
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract image metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ghcr.io/${{ github.repository }}
          tags: |
            type=sha,format=long
            type=raw,value=latest

      - name: Build and push
        uses: docker/build-push-action@v6
        with:
          context: .
          file: ./Dockerfile.prod
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

This uses the built-in `GITHUB_TOKEN` against GHCR (`ghcr.io/<owner>/<repo>`) — no extra registry secret needs to be created. If the user later wants Docker Hub instead, swap the `login-action`/`images` values for Docker Hub credentials stored as repo secrets.

- [ ] **Step 2: Commit and push to `main`**

Merge this branch to `main` (via PR — the PR itself will only run `validate`, matching the "PRs only validate" rule; `build`/`publish` fire only once the merge commit lands on `main` via `push`).

- [ ] **Step 3: Verify end-to-end**

After the merge, confirm in the Actions tab that `validate` → `build` → `publish` all ran in order on `main`, and that a new package appears under the repo's "Packages" tab (`ghcr.io/<owner>/new-portfolio`) tagged `latest` and `<full-sha>`.

---

### Task 10: Scaffold the (intentionally empty) CD deploy workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

**Interfaces:** none — this is a deliberate placeholder per the user's instruction to leave server deployment for later.

- [ ] **Step 1: Write a manually-triggered placeholder workflow**

```yaml
name: Deploy

on:
  workflow_dispatch:
    inputs:
      image_tag:
        description: 'Image tag to deploy (from ghcr.io/<owner>/new-portfolio)'
        required: true
        default: 'latest'

jobs:
  deploy:
    name: Deploy to server
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Not yet implemented
        run: |
          echo "Deploy target is not configured yet."
          echo "Requested image: ghcr.io/${{ github.repository }}:${{ inputs.image_tag }}"
          echo "Next step: SSH into the target server (or use an action like appleboy/ssh-action) and run 'docker pull'/'docker compose up -d' with this image tag."
          exit 1
```

This workflow only runs when someone manually triggers it (`workflow_dispatch`) — it never fires on push, so it can't interfere with the `validate`/`build`/`publish` pipeline. It exits non-zero on purpose so nobody mistakes the echoed instructions for a real deploy. Filling this in (SSH target, secrets, actual `docker pull` + restart commands) is explicitly out of scope for this plan.

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: scaffold placeholder deploy workflow (server TBD)"
git push
```

---

## Self-Review Notes

- **Spec coverage:** two Dockerfiles (Tasks 2–3) ✓, two compose files (Tasks 4–5) ✓, LTS image chosen and justified (Task 1 context, Task 2) ✓, audit-and-fix framing (Task 1, Task 2/4 deletions) ✓, validate→build→publish ordering (Tasks 7–9) ✓, main-only build/publish via `if:` guards (Tasks 8–9) ✓, other branches validate-only (Task 7's unconditional trigger + Task 8/9's `if:` guards) ✓, CD left as placeholder (Task 10) ✓.
- **Placeholder scan:** the only "placeholder" is Task 10's deploy workflow, which is placeholder *by explicit user request* — every other task ships working, verified configuration.
- **Type/name consistency:** `Dockerfile.prod`/`Dockerfile.dev` and `docker-compose.prod.yml`/`docker-compose.dev.yml` names are used consistently across Tasks 2–6; job ids `validate` → `build` → `publish` match their `needs:` references in Tasks 8–9.
