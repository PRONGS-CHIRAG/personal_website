"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight, Zap, Sparkles } from "lucide-react";

const ventures = [
  {
    name: "ZestLearn",
    status: "Active Venture",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    icon: Sparkles,
    tagline: "AI-driven consulting intelligence for the pharma and life science sector.",
    description:
      "ZestLearn is building an AI-powered digital consultant that helps Pharma & Life Science SMEs navigate AI adoption. Through intelligent consulting workflows, collective learning concepts, and RAG-driven knowledge systems, ZestLearn reduces uncertainty and accelerates transformation.",
    tags: ["LLMs", "Agentic AI", "B2B SaaS", "Pharma Tech"],
    gradient: "from-accent-rose/5 via-accent-magenta/5 to-transparent",
    glow: "group-hover:bg-accent-rose/5",
  },
  {
    name: "Afterz",
    status: "Prototype Stage",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    icon: Zap,
    tagline: "A social discovery platform for safer and more connected nightlife experiences.",
    description:
      "Afterz is a consumer-facing social platform redefining nightlife discovery and safety. Built for accessibility and real-time connection, it focuses on event discovery, safety features, and social coordination — empowering people to experience nightlife with confidence and community.",
    tags: ["Consumer App", "Social", "Mobile", "UX Design"],
    gradient: "from-accent-violet/5 via-blue-500/5 to-transparent",
    glow: "group-hover:bg-accent-violet/5",
  },
];

export default function Ventures() {
  return (
    <SectionWrapper id="ventures">
      <SectionHeading
        title="Ventures I'm Building"
        subtitle="Actively validating startup ideas and building AI-native products that create real-world value."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ventures.map((venture, i) => (
          <motion.div
            key={venture.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className={`group glass-card rounded-3xl p-8 bg-gradient-to-br ${venture.gradient} hover:border-white/15 transition-all duration-300 cursor-default`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <venture.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{venture.name}</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${venture.statusColor} mt-1`}>
                    {venture.status}
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowUpRight size={16} className="text-slate-400" />
              </a>
            </div>

            <p className="text-white font-semibold text-lg mb-3 leading-snug">{venture.tagline}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{venture.description}</p>

            <div className="flex flex-wrap gap-2">
              {venture.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
