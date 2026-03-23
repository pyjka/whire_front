import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import SubtleNodeNetworkBackground from "@/components/SubtleNodeNetworkBackground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Whire | Agentic AI Payment Infrastructure",
  description:
    "Whire gives AI agents the payment rails to charge, settle, route, and reconcile money with confidence."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} relative min-h-screen bg-background font-sans text-foreground antialiased`}>
        <SubtleNodeNetworkBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
