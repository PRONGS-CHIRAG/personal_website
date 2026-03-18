import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// The root font is exposed as a CSS variable so utility classes can reference it globally.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Metadata here feeds document head tags for SEO, previews, and browser context.
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
    // Smooth scrolling supports the in-page anchor navigation used across the landing page.
    <html lang="en" className="scroll-smooth">
      <body
        // The base body background sets the dark gradient canvas shared by every route.
        className={`${inter.variable} min-h-screen bg-[#050510] bg-[radial-gradient(circle_at_top,_#1f2937_0,_transparent_55%),radial-gradient(circle_at_bottom,_#020617_0,_transparent_55%)] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
