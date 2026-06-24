"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const architecturalPillars = [
  {
    title: "Deep Learning & Neural Nets",
    description: "Training and fine-tuning complex models.",
    skills: ["PyTorch", "TensorFlow", "Keras", "Transformers", "GANs"],
    accent: "text-orange-400",
  },
  {
    title: "Agentic AI & LLMs",
    description: "Building autonomous systems and prompt pipelines.",
    skills: ["uAgents Framework", "Gemini API", "GPT-4", "Claude", "NLP"],
    accent: "text-purple-400",
  },
  {
    title: "Backend & Full-Stack",
    description: "Deploying highly scalable web architectures.",
    skills: ["FastAPI", "Flask", "React.js", "RESTful APIs"],
    accent: "text-cyan-400",
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecting serverless and CI/CD pipelines.",
    skills: ["AWS", "GCP", "CI/CD Pipelines", "Git", "LVM"],
    accent: "text-yellow-400",
  },
  {
    title: "Security & Databases",
    description: "Securing ledgers and optimizing queries.",
    skills: ["JWT Auth", "IDOR Prevention", "SQLAlchemy", "PostgreSQL", "SQLite"],
    accent: "text-emerald-400",
  },
  {
    title: "Core Languages",
    description: "The foundational syntax behind the logic.",
    skills: ["Python", "C++", "C#", "C", "JavaScript"],
    accent: "text-blue-400",
  },
];

function SpotlightCard({ pillar, index }: { pillar: any; index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col border border-white/10 bg-zinc-950 p-8 rounded-2xl overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 40%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
          {pillar.title}
        </h3>
        <p className="text-sm text-zinc-500 mb-6">
          {pillar.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {pillar.skills.map((skill: string) => (
            <span
              key={skill}
              className={`text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/5 transition-colors duration-300 group-hover:border-white/20 ${pillar.accent}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="w-full py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            The Architecture.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mt-6 text-lg leading-relaxed"
          >
            A comprehensive mapping of the frameworks, cloud environments, and generative models I deploy to build production-grade systems. Hover to illuminate the stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architecturalPillars.map((pillar, index) => (
            <SpotlightCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}