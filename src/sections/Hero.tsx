"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

const floatingCards = [
  { label: "Agentic AI Systems", color: "from-accent-rose/20 to-accent-magenta/20" },
  { label: "Applied ML", color: "from-accent-violet/20 to-blue-500/20" },
  { label: "Founder Ventures", color: "from-accent-magenta/20 to-accent-rose/20" },
  { label: "RAG + LLM Products", color: "from-blue-500/20 to-accent-violet/20" },
];

const badges = ["Bosch Alumni", "MSc in AI", "Founder", "Germany"];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24 pb-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Name & Role */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3">
              Chirag N<br />
              <span className="gradient-text">Vijay</span>
            </h1>
            <p className="text-accent-magenta font-semibold text-lg tracking-wide">
              AI Engineer • Entrepreneur • Builder of Intelligent Systems
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
            I design and build practical AI products — from agentic multi-agent systems and RAG pipelines to startup ventures that turn emerging technology into real-world impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-accent-rose via-accent-magenta to-accent-violet glow-button hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:chirag@example.com"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Futuristic Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Gradient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-accent-magenta/10 blur-[80px]" />
            <div className="absolute w-60 h-60 rounded-full bg-accent-violet/10 blur-[60px]" />
          </div>

          {/* Floating Card Grid */}
          <div className="relative grid grid-cols-2 gap-4 z-10">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${card.color} hover:scale-105 transition-transform duration-300 cursor-default`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 mb-3" />
                <p className="text-white font-semibold text-sm leading-tight">{card.label}</p>
              </motion.div>
            ))}

            {/* Center Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass-card rounded-full px-5 py-2.5 border border-accent-violet/30"
            >
              <p className="text-white font-semibold text-sm whitespace-nowrap">
                🤖 Building the Future with AI
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
