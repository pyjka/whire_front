import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { site } from "@/lib/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap"
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline.replace(/\.$/, "")}`,
    template: `%s · ${site.name}`
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
    title: `${site.name} · ${site.tagline.replace(/\.$/, "")}`,
    description: site.description
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline.replace(/\.$/, "")}`,
    description: site.description
  },
  robots: { index: true, follow: true }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} min-h-screen bg-surface-app font-sans text-fg-body antialiased`}
      >
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
