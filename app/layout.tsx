import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Pravesh Subba — Portfolio",
  description:
    "Personal portfolio of Pravesh Subba, a Web Developer and Computer Science student specializing in Data Science, showcasing projects built with Next.js, React, and Tailwind CSS.",
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
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
