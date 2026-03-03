import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import NextStepFooter from "@/components/NextStepFooter";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TradeFront South | Real Estate Services in the Dominican Republic",
  description:
    "Escrow for DR real estate. REIT-style investment and dividends. Trusted agency connections to sell your property. Speak to an advisor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <NextStepFooter />
      </body>
    </html>
  );
}
