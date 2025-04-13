import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasjeev Singh Kohli - Portfolio",
  description: "Professional portfolio showcasing my work and projects",
  openGraph: {
    title: "Jasjeev Singh Kohli - Portfolio",
    description: "Professional portfolio showcasing my work and projects",
    url: "http://jasjeev-portfolio.vercel.app/", // Replace with your actual domain
    siteName: "Jasjeev's Portfolio",
    images: [
      {
        url: "./main.png", // Path to your image in public folder
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
    images: ["./main.png"], // Same image for Twitter
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
        ></Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          

          {children}
        </ThemeProvider>
      </body>

    </html>
  );
}
