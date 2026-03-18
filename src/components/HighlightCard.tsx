"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function HighlightCard({ icon: Icon, title, description }: HighlightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-card rounded-2xl p-6 hover:border-white/15 transition-colors duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-rose/20 to-accent-violet/20 flex items-center justify-center mb-4">
        <Icon size={20} className="text-accent-magenta" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
