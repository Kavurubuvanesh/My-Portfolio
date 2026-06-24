"use client";

import { motion } from "framer-motion";

const credentials = [
  { issuer: "Google", name: "Gemini Certified Student", color: "text-blue-400" },
  { issuer: "Anthropic", name: "AI Fluency for Students", color: "text-stone-300" },
  { issuer: "AWS", name: "Fundamentals of ML & AI", color: "text-yellow-500" },
  { issuer: "Qualcomm", name: "AI Upskilling: Technical Foundation", color: "text-red-500" },
  { issuer: "Google Cloud", name: "Implement CI/CD Pipelines", color: "text-blue-400" },
  { issuer: "UiPath", name: "Agentic Automation", color: "text-orange-500" },
  { issuer: "IBM", name: "Getting Started with AI", color: "text-blue-300" },
  { issuer: "AWS", name: "Planning a Machine Learning Project", color: "text-yellow-500" },
  { issuer: "Simplilearn", name: "Generative AI Literacy", color: "text-cyan-400" },
  { issuer: "AWS", name: "Machine Learning Essentials", color: "text-yellow-500" },
  { issuer: "Google", name: "Gemini for Application Developers", color: "text-blue-400" },
  { issuer: "AWS", name: "Machine Learning Terminology", color: "text-yellow-500" },
  { issuer: "Unstop", name: "Power BI Bootcamp", color: "text-indigo-400" },
];

export default function CredentialMarquee() {
  // Duplicated twice to create a seamless infinite loop length
  const duplicatedCredentials = [...credentials, ...credentials];

  return (
    <section className="w-full py-12 bg-black border-y border-white/5 overflow-hidden relative flex">
      {/* Gradients to fade the edges into the black background */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Framer Motion taking complete control of the infinite scroll physics */}
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50, // Adjust this number: lower is faster, higher is slower
        }}
      >
        {duplicatedCredentials.map((cred, index) => (
          <div key={index} className="flex items-center mx-8 gap-4 group cursor-default">
            <span className={`font-mono text-xs tracking-[0.2em] uppercase font-bold ${cred.color}`}>
              {cred.issuer}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-zinc-300 font-medium text-lg">
              {cred.name}
            </span>
            <span className="mx-8 text-zinc-800">/</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}