"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";

const stats = [
  { value: "2+", label: "Years Industry Experience" },
  { value: "10+", label: "AI Projects" },
  { value: "Multi-Agent", label: "& RAG Systems" },
  { value: "Founder", label: "& Builder" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <SectionHeading title="About Me" />
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m an AI Engineer and entrepreneur with a deep passion for building intelligent systems that move the needle. My work sits at the intersection of applied machine learning, generative AI, and product-driven development — transforming cutting-edge research into practical, scalable solutions.
            </p>
            <p>
              Across multi-agent systems, RAG pipelines, and LLM-powered products, I focus on building things that actually work in the real world. I&apos;ve worked with enterprise environments like Bosch and independent ventures alike — bridging the gap between technical depth and business impact.
            </p>
            <p>
              Beyond engineering, I&apos;m an active startup builder. I co-found and prototype ventures that solve real problems, engage with entrepreneurship ecosystems like UnternehmerTUM and Cyber Valley, and believe strongly in the power of technology to reshape industries when guided by the right vision.
            </p>
          </div>
        </div>

        {/* Right - Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
