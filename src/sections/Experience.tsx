"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";

const timeline = [
  {
    title: "Applied ML Engineer",
    subtitle: "Bosch — Industry",
    period: "2022 – 2024",
    description:
      "Led applied ML work in acoustic intelligence and signal analysis. Built robust ML pipelines, explainable AI systems, and data-driven solutions for real-world industrial applications.",
  },
  {
    title: "Founder",
    subtitle: "ZestLearn",
    period: "2024 – Present",
    description:
      "Building an AI-powered digital consultant for Pharma & Life Science SMEs. Designing intelligent consulting workflows, RAG-driven knowledge systems, and agentic AI products from first principles.",
  },
  {
    title: "Founder",
    subtitle: "Afterz",
    period: "2023 – Present",
    description:
      "Developing a social discovery platform for safer nightlife experiences. Leading product, UX, and technology strategy from concept to prototype.",
  },
  {
    title: "MSc in Artificial Intelligence",
    subtitle: "University — Germany",
    period: "2022 – 2024",
    description:
      "Advanced graduate program covering deep learning, NLP, computer vision, multi-agent systems, and applied AI research. Thesis focus on generative AI and LLM systems.",
  },
  {
    title: "Entrepreneurship Programs",
    subtitle: "UnternehmerTUM • Cyber Valley • TUM",
    period: "2023 – 2024",
    description:
      "Active participant in Germany's top startup and deep-tech ecosystems. Engaged in startup coaching, AI ecosystem events, and venture-building programs across Munich and Stuttgart.",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <SectionHeading title="Experience & Journey" />
          <p className="text-slate-400 text-sm leading-relaxed">
            A timeline of industry work, startup building, and academic pursuits across AI engineering and entrepreneurship.
          </p>
        </div>
        <div className="lg:col-span-2">
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.title + item.subtitle}
              {...item}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
