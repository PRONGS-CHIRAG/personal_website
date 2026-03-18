"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import HighlightCard from "@/components/HighlightCard";
import { Building2, Network, Rocket, GraduationCap, Globe, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Industry ML Experience",
    description: "2+ years building production ML systems at Bosch — acoustic intelligence, signal analysis, and explainable AI in real enterprise environments.",
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    description: "Designed and implemented multi-agent architectures using AutoGen, LangGraph, and CrewAI — from healthcare triage to document intelligence.",
  },
  {
    icon: Rocket,
    title: "Founder & Operator",
    description: "Founded two ventures across AI consulting and consumer social — leading everything from product strategy to technical implementation.",
  },
  {
    icon: GraduationCap,
    title: "MSc in Artificial Intelligence",
    description: "Graduate-level specialization in deep learning, NLP, generative AI, and multi-agent systems from a top German university.",
  },
  {
    icon: Globe,
    title: "Startup Ecosystem",
    description: "Active in UnternehmerTUM, Cyber Valley, and TUM ecosystems — connecting with Europe's leading AI founders, researchers, and operators.",
  },
  {
    icon: Code2,
    title: "Product-Minded Engineering",
    description: "Bridge technical depth with product thinking — building MVPs, prototypes, and production systems with a focus on user value and business impact.",
  },
];

export default function Highlights() {
  return (
    <SectionWrapper id="highlights">
      <SectionHeading
        title="Highlights & Recognition"
        subtitle="Key achievements, experiences, and milestones across AI engineering, startup building, and academia."
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </SectionWrapper>
  );
}
