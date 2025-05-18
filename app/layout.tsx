import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from '@vercel/analytics/next';
config.autoAddCss = false;

import "./globals.css";
import Script from "next/script";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Add for better font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Add for better font loading
});

export const metadata: Metadata = {
  title: "Jasjeev Singh Kohli - Portfolio",
  description: "Professional portfolio showcasing my work and projects",
  metadataBase: new URL("http://jasjeev-portfolio.vercel.app/"), // Add metadataBase
  openGraph: {
    title: "Jasjeev Singh Kohli - Portfolio",
    description: "Professional portfolio showcasing my work and projects",
    url: "http://jasjeev-portfolio.vercel.app/",
    siteName: "Jasjeev's Portfolio",
    images: [
      {
        url: "/main.png", // Changed from ./ to /
        width: 1200,
        height: 630,
        alt: "Jasjeev Singh Kohli Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasjeev Singh Kohli - Portfolio",
    description: "Professional portfolio showcasing my work and projects",
    images: ["/main.png"], // Changed from ./ to /
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://kit.fontawesome.com/9f0ae78aa4.js"
          crossOrigin="anonymous"
          strategy="lazyOnload" // Add lazy loading for FontAwesome
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
          <Analytics/>
        </Providers>
      </body>
    </html>
  );
}