import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import NextStepFooter from "@/components/NextStepFooter";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TradeFront South | Next-Generation Holding Company",
  description:
    "TradeFront South guides and manages businesses across development, technology, real estate, and enterprise—clarity, stewardship, and long-term growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <NextStepFooter />
      </body>
    </html>
  );
}
