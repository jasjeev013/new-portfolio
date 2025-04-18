// app/providers.tsx
'use client';

import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        {children}
        <Toaster position="top-right" richColors />
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}