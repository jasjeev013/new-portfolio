This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Docker

Both modes expect a `.env.local` file in the project root with:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=   # baked in at build time (inlined into the client bundle)
RECAPTCHA_SECRET_KEY=             # read at runtime by app/api/contact/route.ts
EMAIL_USER=                       # Gmail address used by nodemailer
EMAIL_PASS=                       # Gmail App Password (not your account password)
```

**Development** (hot reload, bind-mounted source):

```bash
docker compose --env-file .env.local -f docker-compose.dev.yml up --build
```

**Production** (multi-stage build, standalone Next.js output):

```bash
docker compose --env-file .env.local -f docker-compose.prod.yml up --build -d
```

`--env-file .env.local` is required (not just `env_file:` in the compose file) because `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` must reach the production build as a Docker build-arg, and Compose only substitutes `${VAR}` references from the file passed via `--env-file`. Both modes serve the app on [http://localhost:3000](http://localhost:3000).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


