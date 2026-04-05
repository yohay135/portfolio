import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yohay Mabari – Data, BI & AI Portfolio",
  description: "Industrial Engineering & Management student specializing in Python, SQL, BI, and AI-driven systems. Explore my projects and get in touch.",
  keywords: ["Yohay Mabari", "portfolio", "data analyst", "BI developer", "Python", "SQL", "Power BI", "AI", "Industrial Engineering"],
  authors: [{ name: "Yohay Mabari" }],
  openGraph: {
    type: "website",
    title: "Yohay Mabari – Data, BI & AI Portfolio",
    description: "Portfolio of Yohay Mabari — IE&M student building data-driven systems.",
    siteName: "Yohay Mabari Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
