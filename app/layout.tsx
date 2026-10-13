import "./globals.css";
import type { Metadata } from "next";
import { Cactus_Classical_Serif } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { site } from "@/lib/site";

const cactus = Cactus_Classical_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cactus",
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
        className={`${cactus.variable} min-h-screen bg-surface-app font-sans text-fg-body antialiased`}
      >
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
