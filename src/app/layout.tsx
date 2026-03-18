import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chirag N Vijay — AI Engineer & Entrepreneur",
  description:
    "AI Engineer and Entrepreneur building intelligent systems, agentic AI products, and startup ventures. Specializing in LLMs, RAG pipelines, multi-agent systems, and applied ML.",
  keywords: [
    "AI Engineer",
    "Entrepreneur",
    "LLM",
    "Multi-Agent Systems",
    "RAG",
    "Machine Learning",
    "Chirag N Vijay",
  ],
  authors: [{ name: "Chirag N Vijay" }],
  openGraph: {
    title: "Chirag N Vijay — AI Engineer & Entrepreneur",
    description:
      "Building intelligent systems, agentic AI products, and startup ventures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
