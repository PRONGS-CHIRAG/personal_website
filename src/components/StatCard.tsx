"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="glass-card rounded-2xl p-6 text-center"
    >
      <p className="text-3xl font-bold gradient-text mb-2">{value}</p>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
    </motion.div>
  );
}
