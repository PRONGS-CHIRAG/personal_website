"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "ZestLearn",
    tagline: "AI-driven digital consultant for Pharma & Life Science SMEs",
    description: "Helping companies reduce uncertainty in AI adoption through intelligent consulting workflows and collective learning concepts.",
    tags: ["LLMs", "Agentic AI", "RAG", "Product Strategy"],
  },
  {
    title: "MedAssist MAS",
    tagline: "Multi-agent healthcare triage assistant with red-flag detection",
    description: "AI-driven support system with symptom reasoning and guided outputs for safer healthcare navigation.",
    tags: ["AutoGen", "Healthcare AI", "Multi-Agent", "Gradio"],
  },
  {
    title: "DocChat",
    tagline: "Verified document Q&A with multi-agent RAG",
    description: "Reliable document intelligence using retrieval, reasoning, and verification agents for accurate, grounded answers.",
    tags: ["RAG", "LangChain", "LLMs", "Vector DB"],
  },
  {
    title: "AI NourishBot",
    tagline: "Vision-based nutrition intelligence assistant",
    description: "AI assistant that interprets food imagery and provides detailed nutritional insights and recommendations.",
    tags: ["Computer Vision", "Nutrition AI", "LLMs", "Product"],
  },
  {
    title: "Bosch Applied ML",
    tagline: "Acoustic intelligence and applied machine learning",
    description: "Real-world ML work focused on signal analysis, audio processing, and explainable systems in an industry context.",
    tags: ["Audio ML", "XAI", "Applied ML"],
  },
  {
    title: "Afterz",
    tagline: "Social platform for safer nightlife and faster connections",
    description: "Consumer-facing venture focused on accessibility, safety, and social discovery in the nightlife space.",
    tags: ["Startup", "Consumer App", "UX", "Product"],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="A showcase of AI systems, startup products, and applied ML work spanning agentic architectures, RAG pipelines, and real-world deployments."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
