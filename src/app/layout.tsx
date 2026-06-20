import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hokma IT | Intelligent IT Solutions",
  description:
    "Hokma IT delivers secure, scalable and intelligent IT solutions for enterprises, government and growing businesses across South Africa.",
  keywords: [
    "IT solutions provider",
    "Managed IT services",
    "Cloud solutions",
    "Cybersecurity services",
    "Software development",
    "IT support South Africa",
    "Pretoria IT company",
  ],
  openGraph: {
    title: "Hokma IT | Intelligent IT Solutions",
    description:
      "Secure, scalable and innovative IT services designed to accelerate digital transformation.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}