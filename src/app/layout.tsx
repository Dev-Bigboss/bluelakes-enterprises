import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// In layout.tsx

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bluelakes Enterprises",
  description:
    "We Buy, Renovate, and Sell Properties, Professional Property Investment & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />

      <body className={`${cinzel.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
