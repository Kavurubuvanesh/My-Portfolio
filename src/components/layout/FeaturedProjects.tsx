"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import Button from "@/components/ui/Button";

const projects = [
  {
    id: "01",
    title: "GSSoC '26: Autonomous AI Agents",
    role: "Open Source Contributor & Ambassador",
    date: "May 2026 - Present",
    description: "Engineered production-grade Generative AI and backend architectures for two major repositories during GirlScript Summer of Code.",
    highlights: [
      "Fetch.ai Innovation Lab: Designed a fully autonomous dual-agent architecture using the uAgents framework and google-genai SDK for asynchronous cross-agent communication.",
      "BiblioDrift: Built an AI recommendation endpoint using Flask. Implemented strict server-side integer clamping, prompt truncation, and an MD5-hashed caching layer to reduce expensive LLM calls."
    ],
    tech: ["Python", "uAgents", "Gemini API", "Flask", "MD5 Caching"],
    color: "from-purple-500/20 to-indigo-500/5",
    border: "border-purple-500/30",
    link: "/gsoc-2026"
  },
  {
    id: "02",
    title: "FairShare | P2P Financial Ledger",
    role: "Full-Stack Architect",
    date: "Jan 2026 - Apr 2026",
    description: "Architected and deployed a secure, full-stack peer-to-peer financial ledger and relational social graph designed to handle complex group expenses.",
    highlights: [
      "Engineered the core backend using FastAPI and SQLAlchemy, integrating robust JSON Web Token (JWT) authorization.",
      "Implemented strict IDOR (Insecure Direct Object Reference) prevention mechanics and anti-fraud logic to secure custom debt splitting.",
      "Built a highly responsive, state-driven frontend dashboard using React.js."
    ],
    tech: ["FastAPI", "React.js", "JWT Auth", "IDOR Prevention", "SQLite"],
    color: "from-cyan-500/20 to-blue-500/5",
    border: "border-cyan-500/30",
    link: "/fairshare-core"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-black relative pb-20 md:pb-40">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* THE FIX: Removed 'sticky top-0 bg-black/90'. The text now scrolls away naturally, so it cannot bleed through the card gaps! */}
        <div className="pt-24 md:pt-32 pb-10 md:pb-20 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Proof of Work.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mt-6 text-lg max-w-2xl"
          >
            The systems I build are not toy scripts. I architect secure ledgers and autonomous agentic pipelines designed for production environments.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 md:gap-24 relative mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative md:sticky top-24 flex flex-col border bg-zinc-950 p-6 md:p-12 rounded-3xl shadow-2xl shadow-black ${project.border}`}
              style={{ zIndex: index + 10 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl pointer-events-none opacity-50`} />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">

                <div className="w-full md:w-1/3 flex flex-col">
                  <span className="text-zinc-500 font-mono text-sm mb-4">{project.id} // FEATURED</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">{project.title}</h3>
                  <p className="text-zinc-400 font-medium mb-1">{project.role}</p>
                  <p className="text-zinc-600 text-sm mb-8">{project.date}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <p className="text-base md:text-lg text-zinc-300 mb-6 md:mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-4 mb-8 md:mb-10">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-zinc-400 text-sm md:text-base">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 mt-auto">
                    <Button href={project.link} primary>
                      <FiGithub className="w-5 h-5" />
                      Deep Dive Architecture
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}