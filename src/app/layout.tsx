import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chirag N Vijay — AI Engineer & Entrepreneur",
  description:
    "Portfolio of Chirag N Vijay, AI Engineer and Entrepreneur building agentic systems, RAG pipelines, and AI-native ventures.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Chirag N Vijay — AI Engineer & Entrepreneur",
    description:
      "Premium portfolio for an AI founder building intelligent products, multi-agent systems, and AI-native ventures.",
    url: "https://example.com",
    siteName: "Chirag N Vijay",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen bg-[#050510] bg-[radial-gradient(circle_at_top,_#1f2937_0,_transparent_55%),radial-gradient(circle_at_bottom,_#020617_0,_transparent_55%)] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

