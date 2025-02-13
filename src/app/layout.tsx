import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Onest } from 'next/font/google';
import { Oxanium } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  subsets: ['latin'],
  weight: '500', // Specify the desired weight
  variable: '--font-onest',
});

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: '700', // Choose weight between 200 and 800
  variable: '--font-oxanium',
});

export const metadata: Metadata = {
  title: "vœn",
  description: "in pursuit of the lost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
