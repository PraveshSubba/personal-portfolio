import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Personal portfolio built with Next.js",
};

/* Body font */
const soraBody = localFont({
  src: "../public/fonts/Sora-Regular.ttf",
  variable: "--font-body",
  display: "swap",
});

/* Display / heading font */
const soraDisplay = localFont({
  src: "../public/fonts/Sora-Regular.ttf",
  variable: "--font-display",
  display: "swap",
});

/* Mono font */
const mono = localFont({
  src: "../public/fonts/JetBrainsMono-Regular.ttf",
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${soraBody.variable} ${soraDisplay.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-background overflow-x-hidden font-body antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
