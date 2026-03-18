"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Ventures", href: "#ventures" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 24);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex justify-center px-4 py-3 transition-all sm:px-6 lg:px-8",
        scrolled ? "backdrop-blur-xl" : "backdrop-blur-sm"
      )}
    >
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#050510]/70 px-4 py-2.5 shadow-lg shadow-black/40">
        <div className="text-sm font-semibold tracking-tight text-zinc-50 sm:text-base">
          Chirag N Vijay
        </div>
        <div className="hidden items-center gap-6 text-xs font-medium text-zinc-400 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button size="sm">Let&apos;s Connect</Button>
        </div>
      </nav>
    </header>
  );
}
