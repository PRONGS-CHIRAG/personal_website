"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Brain, Cpu, Server, Wrench } from "lucide-react";

const stacks = [
  {
    category: "AI / ML",
    icon: Brain,
    skills: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Explainable AI", "Model Evaluation"],
    gradient: "from-accent-rose/10 to-accent-magenta/5",
    iconColor: "text-accent-rose",
  },
  {
    category: "LLMs / Agentic AI",
    icon: Cpu,
    skills: ["OpenAI API", "LangGraph", "LangChain", "LlamaIndex", "CrewAI", "AutoGen", "Tool Calling", "RAG"],
    gradient: "from-accent-magenta/10 to-accent-violet/5",
    iconColor: "text-accent-magenta",
  },
  {
    category: "Backend / Retrieval",
    icon: Server,
    skills: ["FastAPI", "Gradio", "Streamlit", "ChromaDB", "FAISS", "SQL", "APIs", "JSON schemas"],
    gradient: "from-accent-violet/10 to-blue-500/5",
    iconColor: "text-accent-violet",
  },
  {
    category: "Tools / Product / Deployment",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Hugging Face", "Vercel", "Framer", "n8n", "MVP Development"],
    gradient: "from-blue-500/10 to-accent-rose/5",
    iconColor: "text-blue-400",
  },
];

export default function TechStack() {
  return (
    <SectionWrapper id="stack">
      <SectionHeading
        title="Tech Stack & Capabilities"
        subtitle="Tools and technologies I use to build intelligent systems and ship products."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${stack.gradient} hover:border-white/15 transition-colors duration-300`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <stack.icon size={18} className={stack.iconColor} />
              </div>
              <h3 className="text-lg font-bold text-white">{stack.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
