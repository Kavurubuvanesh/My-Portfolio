"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiFolder, FiFileText, FiStar, FiGitBranch } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const repositories = [
  {
    id: "aeromind",
    name: "apextensor-may-2026",
    language: "Python",
    stars: 32,
    forks: 8,
    readme: `# AeroMind: Real-Time Granite Race Copilot 🏎️🧠

**IBM SkillsBuild AI Builders Challenge (May Innovation Challenge)**

## 🏁 Overview
In high-speed motorsport, races are won in milliseconds. Modern F1 teams generate terabytes of telemetry data, but human race engineers can only process a fraction of it in real-time. 

**AeroMind** is a "Dual-Brain" AI Copilot that bridges the gap between high-frequency edge physics and enterprise-grade Generative AI. By decoupling a 50Hz local physics engine from the high-latency reasoning of **IBM Granite**, AeroMind processes live track telemetry to provide real-time, actionable tactical advice without ever interrupting the car's survival loop. 

This project successfully orchestrates a C++ racing simulator (TORCS) with an 8-billion parameter LLM, achieving flawless, 0-damage laps across unknown tracks.

---

## 🛠️ The AeroMind Architecture
We solved the latency trap by engineering an asynchronous Edge-to-Cloud architecture:

1. **The Reflex Brain (Edge / Python):** A custom local agent connected to the TORCS engine handles real-time survival (aerodynamic traction control, PID steering dampening, and emergency collision avoidance) at 50 FPS.
2. **The Strategist Brain (Cloud / IBM Granite):** Using **Langflow**, the system ingests live JSON telemetry streams (track radar, opponent proximity, wheel slip). 
3. **The Rulebook (RAG / Docling):** We utilize **Docling** to parse racing strategy PDFs into a vector database, grounding Granite's responses.
4. **The Latency Override:** If the AI takes too long to respond and the car approaches a hairpin, the Edge Brain detects the wall via radar and automatically overrides the LLM, slamming the brakes.

---

## 🚀 IBM Technology Stack
* **IBM Granite (granite3-dense:8b):** Acts as the core reasoning engine for the Copilot. Run locally via Ollama to minimize network latency.
* **Langflow:** Orchestrates the real-time data ingestion, prompt synthesis, and RAG pipeline.
* **Docling:** Parses complex F1 strategy documents into structured, AI-ready data.`
  },
  {
    id: "regenx",
    name: "ReGenX",
    language: "JavaScript",
    stars: 45,
    forks: 12,
    readme: `# 🌿 ReGenX
Smart Circular Bio-Waste Logistics Platform with AI scanning, real-time GPS tracking, and role-based dashboards.

ReGenX is a premium Progressive Web App (PWA) that digitizes the entire bio-waste supply chain — from hotel waste generation, through GPS-tracked rider pickup, to verified delivery at processing plants.

## ✨ Core Features

🤖 **AI-Powered Bio Scanner**
* Real-time waste image analysis using TensorFlow.js + MobileNet
* Contamination detection and organic percentage scoring
* Auto-fills dispatch form fields based on scan results

📍 **Real-Time GPS & Mapping**
* High-accuracy GPS detection with draggable pin refinement
* Address-based geocoding via Nominatim / OpenStreetMap
* Live rider tracking with Leaflet.js interactive maps

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Logic** | Vanilla JavaScript (ES6 Modules) |
| **AI / ML** | TensorFlow.js, MobileNet |
| **Maps** | Leaflet.js, OpenStreetMap, Nominatim |
| **PWA** | Service Worker, Web App Manifest |
| **Storage** | LocalStorage cache + Socket.IO realtime state sync |`
  },
  {
    id: "fetch-ai",
    name: "innovation-lab-examples",
    language: "Python",
    stars: 128,
    forks: 45,
    readme: `# Fetch.ai Innovation Lab Examples

A curated collection of **production-quality agent examples** built with Fetch.ai technologies — uAgents, ASI:One, Agentverse, A2A protocol, MCP, and more.

Whether you're building your first agent or architecting multi-agent systems with payments, this repo has a working example for you.

---

## ⚡ Quickstart

\`\`\`bash
# 1. Clone the repo
git clone https://github.com/fetchai/innovation-lab-examples.git
cd innovation-lab-examples

# 2. Create a virtual environment and install dependencies
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# 3. Run the agent
python agents/alice/agent.py
\`\`\`

## 🤖 LLM Integration
Includes rapid deployment pipelines for **Claude**, **Google Gemini** series (text, Imagen, Veo, Lyria), and parallel processing architectures.`
  },
  {
    id: "fairshare",
    name: "fairshare-core",
    language: "Python",
    stars: 24,
    forks: 5,
    readme: `# FairShare 💸

**FairShare** is a secure, full-stack peer-to-peer financial ledger and relational social graph. It is designed to handle complex group expenses, custom debt splitting, and anti-fraud payment verifications.

---

## 🚀 Key Features

### 🛡️ The Privacy Wall
* **Mutual Handshakes:** Users cannot view or interact with strangers. Connections require an exact-match search and a two-way Accept/Reject handshake.
* **The "5th Stranger" Rule:** Users can only be added to a financial group if they share at least one active, verified connection.

### 🛑 Enterprise-Grade Security
* **IDOR Prevention:** Backend routes are heavily fortified. Users attempting to URL-hack into groups they do not belong to are instantly met with \`403 Forbidden\`.
* **JWT Authentication:** Secure, token-based session management.

## 🛠️ Tech Stack
* **Frontend:** React.js (Vite), React Router DOM
* **Backend:** Python / FastAPI, SQLAlchemy (ORM)
* **Security:** Passlib & Bcrypt, PyJWT`
  },
  {
    id: "bibliodrift",
    name: "BiblioDrift",
    language: "Python",
    stars: 18,
    forks: 4,
    readme: `# 🌌 BiblioDrift — Drift Through Stories

> **"Find yourself in the pages."**

BiblioDrift transforms book discovery into an emotional journey — where stories are explored through **mood, atmosphere, and feeling** instead of endless scrolling.

## 🧠 System Architecture

* **Frontend UI:** Glassmorphism interface, ambient sounds.
* **Flask Backend:** Handles mood queries and JWT cookies.
* **LLM / AI Service:** Prompt engineering for dynamic AI-generated blurbs and conversational mood analysis.
* **Google Books API:** Real-time metadata fetching.

## 🚀 Backend Deployment
When a user clicks "Sign in with Google", the browser sends a request to \`/api/v1/auth/google\`. The frontend is deployed on Netlify, while the Flask backend operates independently, requiring strict CORS and proxy rules to handle the OAuth handshakes.`
  }
];

export default function GithubExplorer() {
  const [activeRepo, setActiveRepo] = useState(repositories[0]);

  return (
    <section id="open-source" className="w-full py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-4"
            >
              <FiGithub className="w-10 h-10 text-zinc-400" />
              Open Source.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 mt-6 text-lg max-w-2xl"
            >
              Raw documentation and architecture summaries fetched directly from my core GitHub repositories.
            </motion.p>
          </div>
          <a href="https://github.com/Kavurubuvanesh" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm flex items-center gap-2 transition-colors">
            View full GitHub profile <FiGitBranch />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row border border-white/10 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl">

          {/* Left Sidebar: Repo List */}
          <div className="w-full lg:w-1/3 bg-[#0d1117] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col">
            <div className="p-4 border-b border-white/5 text-xs font-mono text-zinc-500 uppercase tracking-widest bg-[#010409]">
              Repositories
            </div>
            <div className="flex flex-col">
              {repositories.map((repo) => (
                <button
                  key={repo.id}
                  onClick={() => setActiveRepo(repo)}
                  className={`flex flex-col text-left p-5 border-l-2 transition-all duration-200 ${
                    activeRepo.id === repo.id ? 'bg-white/5 border-cyan-500' : 'border-transparent hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FiFolder className={`w-5 h-5 ${activeRepo.id === repo.id ? 'text-cyan-400' : 'text-zinc-500'}`} />
                    <span className={`font-semibold ${activeRepo.id === repo.id ? 'text-white' : 'text-zinc-300'}`}>
                      {repo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 ml-8">
                    <span className="flex items-center gap-1"><FiStar /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><FiGitBranch /> {repo.forks}</span>
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${repo.language === 'Python' ? 'bg-blue-500' : 'bg-yellow-400'}`} />
                      {repo.language}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Pane: Native Markdown Viewer */}
          <div className="w-full lg:w-2/3 flex flex-col min-h-[600px] max-h-[600px]">
            <div className="bg-[#010409] border-b border-white/5 px-6 py-4 flex items-center gap-3 z-10">
              <FiFileText className="text-zinc-400" />
              <span className="text-sm font-mono text-zinc-300">README.md</span>
            </div>

            {/* THE FIX: We use a relative wrapper and place the scrolling directly on the motion.div */}
            <div className="flex-1 bg-[#0d1117] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRepo.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 p-8 overflow-y-auto custom-scrollbar"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white border-b border-white/10 pb-2 mb-6 mt-4" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-white mb-4 mt-8" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-xl font-medium text-zinc-200 mb-4 mt-6" {...props} />,
                      p: ({node, ...props}) => <p className="text-zinc-400 leading-relaxed mb-4 text-sm md:text-base" {...props} />,
                      a: ({node, ...props}) => <a className="text-cyan-400 hover:underline" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-4 text-zinc-400" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-4 text-zinc-400" {...props} />,
                      li: ({node, ...props}) => <li className="mb-2" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-semibold text-zinc-200" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-zinc-600 pl-4 italic text-zinc-500 mb-4" {...props} />,
                      table: ({node, ...props}) => <div className="overflow-x-auto mb-6"><table className="w-full text-left border-collapse" {...props} /></div>,
                      th: ({node, ...props}) => <th className="border-b border-white/10 py-2 px-4 text-zinc-300 font-semibold" {...props} />,
                      td: ({node, ...props}) => <td className="border-b border-white/5 py-2 px-4 text-zinc-400" {...props} />,
                      code: ({node, inline, className, children, ...props}: any) => {
                        return inline ?
                          <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-cyan-300" {...props}>{children}</code> :
                          <code className="block bg-[#010409] p-4 rounded-lg overflow-x-auto text-sm font-mono text-zinc-300 mb-6 border border-white/5" {...props}>{children}</code>
                      }
                    }}
                  >
                    {activeRepo.readme}
                  </ReactMarkdown>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}