"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import Button from "@/components/ui/Button";

const credentials = [
  {
    id: "aws-ml",
    title: "AWS Machine Learning Ecosystem",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2026",
    description: "Comprehensive certification track covering the end-to-end machine learning pipeline on AWS cloud infrastructure. Includes data preparation, feature engineering, model training, evaluation metrics, and strategic ML project planning.",
    skills: ["Cloud ML", "Feature Engineering", "MLOps"],
    images: [
      { url: "/certs/Machine Learning__Terminology and Process.jpeg", isBadge: false },
      { url: "/certs/Fundamentals of AI & ML.jpeg", isBadge: false },
      { url: "/certs/Planning a Machine Learning Project.jpeg", isBadge: false },
      { url: "/certs/Machine Learning Essentials for Business and Technical Decision Makers.jpeg", isBadge: false },
      { url: "/certs/Introduction to Machine__Learning.jpeg", isBadge: false }// Example of multiple certs in one view
    ],
    link: "https://www.linkedin.com/in/buvanesh-kavuru-b344a1322/details/certifications/"
  },
  {
    id: "qualcomm-ai",
    title: "AI Upskilling: Technical Foundation",
    issuer: "Qualcomm",
    date: "January 2026",
    description: "Deep dive into the architectural foundations of Artificial Intelligence and Neural Networks, backed by a leading hardware and edge-computing pioneer.",
    skills: ["Neural Networks", "Deep Learning", "Edge AI"],
    images: [
      { url: "/certs/qualcomm-upskilling.jpeg", isBadge: false },
      { url: "/certs/badge.png", isBadge: true }
    ],
    link: "https://www.linkedin.com/in/buvanesh-kavuru-b344a1322/details/certifications/"
  },
  {
    id: "gemini",
    title: "Google Gemini Certified Student",
    issuer: "Google",
    date: "March 2026",
    description: "Official certification demonstrating advanced proficiency in utilizing Google's Generative AI models. Validates skills in prompt engineering, autonomous workflow generation, and implementing Gemini API endpoints into production environments.",
    skills: ["Generative AI", "Prompt Engineering", "Google Cloud API"],
    images: [
      { url: "/certs/google-cert-stu.png", isBadge: false },
      { url: "/certs/gem-cert.jpg", isBadge: true }
    ],
    link: "https://www.linkedin.com/in/buvanesh-kavuru-b344a1322/details/certifications/"
  },
  {
    id: "gssoc",
    title: "Open Source Contributor Badge",
    issuer: "GirlScript Summer of Code",
    date: "May 2026",
    description: "Awarded for consistent, high-impact contributions to open-source AI pipelines. Engineered cross-agent communication protocols and scalable backend architectures for enterprise-grade repositories.",
    skills: ["Open Source", "System Architecture", "Python"],
    images: [
      { url: "/certs/Contributor.png", isBadge: true },
      { url: "/certs/Open-source-track.png", isBadge: true },
      { url: "/certs/AI-agents-track.png", isBadge: true },
      { url: "/certs/Ambassdor.png", isBadge: true },
    ],
    link: "https://github.com/Kavurubuvanesh"
  },
  {
    id: "uipath-agentic",
    title: "Agentic & Robotic Process Automation",
    issuer: "UiPath",
    date: "September 2025",
    description: "Formal training in designing and deploying agentic automation workflows. Bridges the gap between classic RPA and modern, autonomous AI agents capable of multi-step reasoning.",
    skills: ["Agentic Automation", "RPA", "Workflow Orchestration"],
    images: [
      { url: "/certs/rpa.png", isBadge: false },
      { url: "/certs/Uipath-part.jpeg", isBadge: false }
    ],
    link: "https://www.linkedin.com/in/buvanesh-kavuru-b344a1322/details/certifications/"
  },
  {
    id: "gsdc-prompt",
    title: "Advanced Prompt Engineering Certification",
    issuer: "Global Skill Development Council (GSDC)",
    date: "June 2026",
    description: "Specialized training in designing effective prompts to unlock the full potential of Large Language Models (LLMs). Covers structured prompt frameworks, context management, role-based prompting, and prompt optimization for real-world business use cases.",
    skills: ["LLMs", "Context Management", "Prompt Optimization"],
    images: [
      { url: "/certs/Participant-certificate-prompt-masterclass.png", isBadge: false }
    ],
    link: "https://www.gsdcouncil.org/share-certificate?cnid=6a362889a84ea76d0e3ae979&ctid=Participant-certificate-prompt-masterclass-19-june-2026&templateId=Participant-certification-prompt-masterclass-19-june"
  },
];

export default function CredentialShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const active = credentials[activeIndex];

  const handleSwap = (index: number) => {
    setActiveIndex(index);
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % active.images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + active.images.length) % active.images.length);
  };

  return (
    <section className="w-full py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-4"
          >
            <FiAward className="w-10 h-10 text-purple-400" />
            Credentials & Certifications.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mt-6 text-lg max-w-2xl"
          >
            Verified domain expertise. Select a credential below to view the official documentation and context.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE: Visual Viewer */}
          <div className="flex flex-col w-full">
            <h3 className="text-2xl font-bold text-white mb-2">{active.title}</h3>
            <p className="text-cyan-400 font-mono text-sm mb-6">{active.issuer} // {active.date}</p>

            <div className="relative w-full aspect-[4/3] bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black flex items-center justify-center p-4 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={`${active.id}-${imageIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={active.images[imageIndex].url}
                  alt={active.title}
                  // THE FIX: Changed 'object-cover' to 'object-contain' and added 'p-2'
                  className={`relative z-10 drop-shadow-2xl rounded-lg ${
                    active.images[imageIndex].isBadge 
                      ? "object-contain w-3/5 h-3/5" 
                      : "object-contain w-full h-full p-2"
                  }`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </AnimatePresence>

              {active.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-20">
                  <button onClick={prevImage} className="text-zinc-400 hover:text-white transition-colors">
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-zinc-300">
                    {imageIndex + 1} / {active.images.length}
                  </span>
                  <button onClick={nextImage} className="text-zinc-400 hover:text-white transition-colors">
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Context & Deep Dive */}
          <div className="flex flex-col pt-2 lg:pt-20">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full"
            >
              <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-8 mb-8">
                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Verification Context</h4>
                <p className="text-zinc-300 leading-relaxed text-lg mb-8">
                  {active.description}
                </p>

                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Validated Skills</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-300 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <Button href={active.link} primary>
                  <FiExternalLink className="w-4 h-4" /> Validate Credential
                </Button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM SELECTION TRACK */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-4 justify-center">
          {credentials.map((cred, idx) => (
            <button
              key={cred.id}
              onClick={() => handleSwap(idx)}
              className={`px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 ${activeIndex === idx
                ? "bg-white text-black font-bold scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-white/5"
                }`}
            >
              {idx + 1}. {cred.title}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}