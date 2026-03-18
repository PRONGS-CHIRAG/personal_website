"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent-magenta/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-64 h-48 bg-accent-violet/10 blur-[80px] rounded-full" />
          </div>

          <div className="relative z-10">
            <p className="text-accent-magenta font-semibold text-sm uppercase tracking-widest mb-4">
              Open to Opportunities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Impactful</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              I&apos;m open to AI engineering roles, startup collaborations, research-driven builds, and ambitious opportunities where strong technology meets real-world value.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:chirag@example.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-accent-rose via-accent-magenta to-accent-violet glow-button hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Email Me
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
