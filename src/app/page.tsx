"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { StatCard } from "@/components/cards/StatCard";
import { TimelineItem } from "@/components/cards/TimelineItem";
import { HighlightCard } from "@/components/cards/HighlightCard";

const projects = [
  
  {
    title: "MedAssist MAS",
    tagline: "Multi-agent healthcare triage assistant with red-flag detection",
    description:
      "Supports clinicians with symptom reasoning, guided flows, and safety-aware recommendations.",
    tags: ["AutoGen", "Healthcare AI", "Multi-Agent", "Gradio"],
  },
  {
    title: "DocChat",
    tagline: "Verified document Q&A with multi-agent RAG",
    description:
      "Retrieval, reasoning, and verification agents for reliable document intelligence and auditability.",
    tags: ["RAG", "LangChain", "LLMs", "Vector DB"],
  },
  {
    title: "AI NourishBot",
    tagline: "Vision-based nutrition intelligence assistant",
    description:
      "Understands food imagery to provide nutritional insights and contextual recommendations.",
    tags: ["Computer Vision", "Nutrition AI", "LLMs", "Product"],
  },
  
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050510] text-zinc-50">
      {/* Gradient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12)_0,_transparent_55%)]" />

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <Section id="home" className="pt-10">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-xs font-medium text-pink-200">
                AI Engineer • Entrepreneur • Builder of Intelligent Systems
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Chirag N Vijay
              </h1>
              <p className="mt-5 max-w-xl text-sm text-zinc-300 sm:text-base">
                I design and build practical AI products — from agentic multi-agent
                systems and RAG pipelines to startup ventures that turn emerging technology
                into real-world impact.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg">View Projects</Button>
                <Button variant="secondary" size="lg">
                  Download Resume
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <span className="font-medium text-zinc-300">Connect</span>
                <a href="#" className="hover:text-zinc-100">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-zinc-100">
                  GitHub
                </a>
                <a href="#" className="hover:text-zinc-100">
                  Email
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Bosch Alumni",
                  "MSc in AI",
                  "Founder",
                  "Based in Germany",
                ].map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
            </div>

            {/* Futuristic hero visual */}
            <div className="relative flex items-center justify-center">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(248,113,113,0.16),rgba(217,70,239,0.18),rgba(139,92,246,0.2),transparent)] blur-3xl" />
              <div className="relative grid w-full max-w-md grid-cols-2 gap-3">
                {[
                  "Agentic AI Systems",
                  "Applied ML",
                  "Founder Ventures",
                  "RAG + LLM Products",
                ].map((label, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 * index }}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                  >
                    <p className="text-xs font-medium text-pink-200">
                      {label}
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-300">
                      Systems thinking, end-to-end execution, and product-grade rigor.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Trust bar */}
        <Section id="trust" className="pt-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-md sm:px-6 sm:py-5">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
              Trusted by & built with
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-zinc-300 sm:text-sm">
              {["Bosch", "UnternehmerTUM", "TUM", "HNU", "Cyber Valley", "TH Nürnberg"].map(
                (item) => (
                  <span
                    key={item}
                    className="text-zinc-400/90 hover:text-zinc-100/90"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </Section>

        {/* About */}
        <Section id="about">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <SectionHeader
                title="About Me"
                description={
                  <>
                    As an AI engineer and entrepreneur, I operate across applied machine
                    learning, generative AI, and multi-agent systems — always anchored in
                    product and real-world value. I care about systems that can be shipped,
                    maintained, and trusted.
                    <br />
                    <br />I enjoy working from first principles: mapping messy problem
                    spaces, designing pragmatic architectures, and building end-to-end
                    experiences that hide complexity behind calm, intuitive interfaces.
                    <br />
                    <br />My work spans early-stage ventures, R&D prototypes, and
                    production-facing AI systems — often in domains where safety, context,
                    and explainability matter.
                  </>
                }
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard label="Industry Experience" value="2+ Years" />
              <StatCard label="AI Projects" value="10+" />
              <StatCard label="Systems" value="Multi-Agent & RAG" />
              <StatCard label="Persona" value="Founder & Builder" />
            </div>
          </div>
        </Section>

        {/* Featured Projects */}
        <Section id="projects">
          <div className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Selected Work"
              title="Featured Projects"
              description="A sample of AI systems, startup products, and applied ML work spanning agentic systems, healthcare, document intelligence, and consumer experiences."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </Section>

        {/* Ventures */}
        <Section id="ventures">
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Founder"
              title="Ventures I’m Building"
              description="I actively validate ideas and build AI-native products — with a bias toward shipping, learning from real users, and iterating fast."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-pink-400/30 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] p-5 shadow-[0_0_60px_rgba(248,113,113,0.3)]">
                <div className="mb-3 inline-flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[11px] font-medium text-green-300">
                    Active Venture
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-50">ZestLearn</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  An AI-driven digital consultant for Pharma & Life Science SMEs,
                  designed to reduce uncertainty in AI adoption with structured workflows
                  and collective learning.
                </p>
                <p className="mt-3 text-xs text-zinc-400">
                  Focus: decision intelligence, organizational learning, and practical
                  AI roadmapping.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-400/25 bg-gradient-to-br from-[#020617] via-[#020617] to-[#111827] p-5 shadow-[0_0_60px_rgba(139,92,246,0.3)]">
                <div className="mb-3 inline-flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] font-medium text-amber-200">
                    Prototype Stage
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-50">Afterz</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  A consumer platform for safer nightlife and faster connections,
                  focused on accessibility, safety, and meaningful discovery.
                </p>
                <p className="mt-3 text-xs text-zinc-400">
                  Focus: trust, safety, and experience design in real-world social
                  environments.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Tech Stack & Capabilities */}
        <Section id="stack">
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Capabilities"
              title="Tech Stack & Capabilities"
              description="I move from research and prototyping all the way to productization — with a toolkit tuned for AI-native products."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-zinc-50">AI / ML</h3>
                <p className="mt-3 text-xs text-zinc-400">
                  Python, PyTorch, scikit-learn, Pandas, NumPy, Explainable AI,
                  Model Evaluation
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-zinc-50">LLMs / Agentic AI</h3>
                <p className="mt-3 text-xs text-zinc-400">
                  OpenAI API, LangGraph, LangChain, LlamaIndex, CrewAI, AutoGen,
                  Tool Calling, RAG
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-zinc-50">Backend / Retrieval</h3>
                <p className="mt-3 text-xs text-zinc-400">
                  FastAPI, Gradio, Streamlit, ChromaDB, FAISS, SQL, APIs, JSON
                  schemas
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-zinc-50">
                  Tools / Product / Deployment
                </h3>
                <p className="mt-3 text-xs text-zinc-400">
                  Git, GitHub, Docker, Hugging Face, Vercel, Framer, n8n, MVP
                  Development
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Experience & Journey */}
        <Section id="journey">
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Path"
              title="Experience & Journey"
              description="A mix of industry ML work, founder journeys, and structured training in AI and entrepreneurship."
            />
            <div className="relative border-l border-white/10 pl-4">
              <ol className="space-y-6">
                <TimelineItem
                  title="Bosch"
                  subtitle="Applied ML / Data Pipelines"
                  description="Worked on acoustic intelligence, data pipelines, and explainable ML systems embedded in real-world products."
                />
                <TimelineItem
                  title="Founder — ZestLearn"
                  subtitle="AI decision intelligence for SMEs"
                  description="Building an AI-driven digital consultant that helps organizations navigate AI adoption with clarity and structure."
                />
                <TimelineItem
                  title="Founder — Afterz"
                  subtitle="Safer nightlife & social discovery"
                  description="Exploring how technology can create safer, more intentional social experiences in nightlife ecosystems."
                />
                <TimelineItem
                  title="MSc in AI"
                  subtitle="Deep specialization in AI systems"
                  description="Formal training across machine learning, deep learning, and AI engineering — with a focus on real-world application."
                />
                <TimelineItem
                  title="Entrepreneurship Programs"
                  subtitle="UnternehmerTUM, Cyber Valley & more"
                  description="Participated in programs that connect research, venture building, and startup ecosystems."
                />
              </ol>
            </div>
          </div>
        </Section>

        {/* Highlights & Recognition */}
        <Section id="highlights">
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Signal"
              title="Highlights & Recognition"
              description="Themes that capture how I work, what I build, and where I add the most value."
            />
            <div className="grid gap-4 md:grid-cols-3">
              <HighlightCard
                title="Industry ML Experience"
                description="Hands-on work deploying ML systems in environments where reliability and explainability matter."
              />
              <HighlightCard
                title="Multi-Agent Systems"
                description="Designed and built agentic workflows for healthcare triage, document reasoning, and decision support."
              />
              <HighlightCard
                title="Founder Ventures"
                description="Originated and drove AI-native ventures from zero to prototype and early validation."
              />
              <HighlightCard
                title="AI Specialization"
                description="Formal MSc in AI combined with a bias toward pragmatic, product-aligned architectures."
              />
              <HighlightCard
                title="Startup Ecosystem Involvement"
                description="Engaged with leading European entrepreneurship ecosystems and innovation hubs."
              />
              <HighlightCard
                title="Product-Minded Engineering"
                description="Bridge between research, engineering, and product — focusing on experiences that feel calm yet powerful."
              />
            </div>
          </div>
        </Section>

        {/* Contact CTA */}
        <Section id="contact">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1120] via-[#020617] to-[#020617] p-8 text-center shadow-[0_0_80px_rgba(248,113,113,0.35)]">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s Build Something Impactful
            </h2>
            <p className="mt-4 text-sm text-zinc-300 sm:text-base">
              I&apos;m open to AI engineering roles, startup collaborations,
              research-driven builds, and ambitious opportunities where strong
              technology meets real-world value.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button size="lg">Email Me</Button>
              <Button variant="secondary" size="lg">
                LinkedIn
              </Button>
              <Button variant="secondary" size="lg">
                GitHub
              </Button>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/5 bg-black/40 py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-zinc-400 sm:flex-row sm:px-6 lg:px-8">
            <div>
              <div className="font-medium text-zinc-200">Chirag N Vijay</div>
              <div className="mt-1 text-[11px]">
                AI Engineer • Entrepreneur • Builder of Intelligent Systems
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-zinc-100">
                LinkedIn
              </a>
              <a href="#" className="hover:text-zinc-100">
                GitHub
              </a>
              <a href="#" className="hover:text-zinc-100">
                Email
              </a>
              <a href="#" className="hover:text-zinc-100">
                Resume
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

