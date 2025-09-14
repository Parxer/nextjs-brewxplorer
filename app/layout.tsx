import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import Providers from "@/app/providers";
import Header from "@/app/header";
import { Toaster } from "@/app/components/toaster";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brewxplorer",
  description: "Browse BrewDog's database of beers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
