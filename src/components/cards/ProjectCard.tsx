import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href?: string;
  className?: string;
}

export function ProjectCard({
  title,
  tagline,
  description,
  tags,
  href = "#",
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_0_80px_rgba(248,113,113,0.25)]",
        className
      )}
    >
      <div>
        <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-xs font-medium text-pink-300 sm:text-sm">
          {tagline}
        </p>
        <p className="mt-3 text-xs text-zinc-400 sm:text-sm">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <Button variant="secondary" size="sm" className="w-max">
          <span>View Case Study</span>
        </Button>
      </div>
    </div>
  );
}
