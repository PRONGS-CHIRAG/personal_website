"use client";

import { motion } from "framer-motion";

const organizations = ["Bosch", "UnternehmerTUM", "TUM", "HNU", "Cyber Valley", "TH Nürnberg"];

export default function TrustBar() {
  return (
    <div className="border-y border-white/5 bg-background-secondary/50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <p className="text-slate-600 text-sm font-medium uppercase tracking-widest mr-4">Associated with</p>
          {organizations.map((org, i) => (
            <motion.span
              key={org}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-slate-500 font-semibold text-sm tracking-wide hover:text-slate-300 transition-colors cursor-default"
            >
              {org}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
