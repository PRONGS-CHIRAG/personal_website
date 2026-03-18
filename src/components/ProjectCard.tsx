"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "./Badge";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href?: string;
}

export default function ProjectCard({ title, tagline, description, tags, href = "#" }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 h-full hover:border-white/15 transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <a
          href={href}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ArrowUpRight size={14} className="text-slate-400" />
        </a>
      </div>
      <p className="text-sm font-medium gradient-text">{tagline}</p>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <Badge key={tag} label={tag} variant="muted" />
        ))}
      </div>
    </motion.div>
  );
}
