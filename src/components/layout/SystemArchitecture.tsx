"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMonitor, FiCpu, FiDatabase, FiArrowRight, FiGlobe, FiLayers } from "react-icons/fi";

// The true AI/ML Architect Pipeline based on your GSSoC and prototype builds
const nodes = [
  {
    id: "client",
    title: "Client & Routing",
    icon: FiGlobe,
    color: "text-cyan-400",
    glow: "shadow-cyan-500/50",
    description: "FastAPI / Flask endpoints managing incoming user context.",
    details: [
      "Asynchronous request handling and payload validation.",
      "Strict server-side integer clamping to prevent injection.",
      "Prompt length truncation and sanitization."
    ]
  },
  {
    id: "orchestration",
    title: "Agentic Orchestrator",
    icon: FiLayers,
    color: "text-purple-400",
    glow: "shadow-purple-500/50",
    description: "uAgents framework handling autonomous decision logic.",
    details: [
      "Dual-agent architecture for isolated task execution.",
      "Asynchronous cross-agent communication protocols.",
      "Automated fallback triggering and error handling."
    ]
  },
  {
    id: "compute",
    title: "LLM Compute Core",
    icon: FiCpu,
    color: "text-emerald-400",
    glow: "shadow-emerald-500/50",
    description: "Generative AI API integration with cost-optimization.",
    details: [
      "google-genai SDK for heavy contextual processing.",
      "MD5-hashed caching layer to eliminate redundant API calls.",
      "Dynamic prompt injection formatting."
    ]
  },
  {
    id: "db",
    title: "Data & State Graph",
    icon: FiDatabase,
    color: "text-blue-400",
    glow: "shadow-blue-500/50",
    description: "Persistent storage for agent state and user history.",
    details: [
      "SQLAlchemy ORM managing relational constraints.",
      "Persistent state logging for LLM conversational memory.",
      "ACID-compliant transaction management."
    ]
  }
];

export default function SystemArchitecture() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section className="w-full py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="mb-16 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Agentic AI Pipeline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mt-6 text-lg max-w-2xl"
          >
            A high-level mapping of my autonomous dual-agent architecture. Hover over the nodes to inspect the cross-agent communication and cost-optimization mechanics.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Side: The Interactive Node Graph */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 relative">
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-blue-500/20 z-0 hidden md:block" />

            {nodes.map((node) => (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node)}
                className={`relative z-10 flex items-center gap-6 p-6 rounded-2xl cursor-crosshair transition-all duration-300 border ${
                  activeNode.id === node.id 
                    ? "bg-white/10 border-white/20 scale-[1.02]" 
                    : "bg-zinc-950/50 border-white/5 hover:bg-white/5"
                }`}
              >
                <div className={`p-4 rounded-xl bg-black border border-white/10 ${activeNode.id === node.id ? `shadow-[0_0_30px_-5px] ${node.glow}` : ''} transition-shadow duration-500`}>
                  <node.icon className={`w-8 h-8 ${activeNode.id === node.id ? node.color : 'text-zinc-500'}`} />
                </div>

                <div>
                  <h3 className={`text-xl font-bold ${activeNode.id === node.id ? 'text-white' : 'text-zinc-400'}`}>
                    {node.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-1">{node.description}</p>
                </div>

                {activeNode.id === node.id && (
                  <motion.div layoutId="arrow" className="ml-auto text-white">
                    <FiArrowRight className="w-6 h-6" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: The Dynamic Terminal/Inspector */}
          <div className="w-full lg:w-1/2 sticky top-32">
            <div className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

              <div className="bg-zinc-900 border-b border-white/5 px-6 py-4 flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Node Inspector</span>
                <span className={`text-xs font-mono font-bold ${activeNode.color}`}>
                  STATUS: ACTIVE
                </span>
              </div>

              <div className="p-8 h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <activeNode.icon className={`w-10 h-10 ${activeNode.color}`} />
                      <h3 className="text-3xl font-bold text-white">{activeNode.title}</h3>
                    </div>

                    <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                      {activeNode.description}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Execution Protocol</h4>
                      <ul className="space-y-4">
                        {activeNode.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="flex items-start text-zinc-300 font-mono text-sm"
                          >
                            <span className={`${activeNode.color} mr-3 mt-1`}>➜</span>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}