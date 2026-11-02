import type { Metadata, Viewport } from "next";
import React, { ReactNode } from "react";
import {
  Plus_Jakarta_Sans,
  Instrument_Serif,
  JetBrains_Mono,
  Fraunces,
  Spline_Sans_Mono,
  Big_Shoulders,
} from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { NextThemeProvider } from "@/components/ThemeProvider";
import { AestheticProvider } from "@/context/AestheticContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wildanrizkii.vercel.app"),
  title: {
    default: "Wildan Rizki Nurfauzi | Full Stack Web Developer & Designer",
    template: "%s | Wildan Rizki",
  },
  description:
    "Portfolio of Wildan Rizki Nurfauzi, a Web Designer and Full Stack Web Developer specializing in clean UI, reactive architectures, and optimized web applications.",
  icons: "/images/logo-web.png",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wildanrizkii.vercel.app",
    siteName: "Wildan Rizki Portfolio",
    title: "Wildan Rizki Nurfauzi | Full Stack Web Developer",
    description: "Web Designer & Full Stack Developer building clean, robust digital products.",
    images: [
      {
        url: "/images/about-main-me.webp",
        width: 800,
        height: 800,
        alt: "Wildan Rizki Nurfauzi",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  const root = document.documentElement;

                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else {
                    root.classList.remove('dark');
                  }
                  
                  const aesthetic = localStorage.getItem('aesthetic') || 'broadsheet';
                  root.classList.remove('aesthetic-hallmark', 'aesthetic-original', 'aesthetic-broadsheet');
                  root.classList.add('aesthetic-' + aesthetic);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${splineSansMono.variable} ${bigShoulders.variable} antialiased`}
        suppressHydrationWarning
      >
        <AestheticProvider>
          <CustomCursor />
          <NextThemeProvider>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </NextThemeProvider>
        </AestheticProvider>
      </body>
    </html>
  );
}
