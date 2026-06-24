"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { FiArrowLeft } from "react-icons/fi";

export default function GsocCaseStudy() {
  return (
    <main className="bg-black min-h-screen text-white pt-32">
      <Navbar />
      <div className="container mx-auto px-6 max-w-4xl pb-32">

        {/* THE ESCAPE HATCH: Forced into its own flex row to prevent collisions */}
        <div className="flex mb-16">
          <Button href="/">
            <FiArrowLeft className="w-5 h-5" />
            Return to Core
          </Button>
        </div>

        {/* HEADER: Added 'block' and 'mb-4' so it breaks cleanly to the next line */}
        <span className="block text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">Case Study 01</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Agentic AI Pipelines.</h1>
        <p className="text-xl text-zinc-400 leading-relaxed mb-12">
          Official open-source contributions for GirlScript Summer of Code 2026. Designed fully autonomous dual-agent architectures utilizing the uAgents framework and IBM Granite.
        </p>

        <GlassCard className="mb-12">
          <h3 className="text-2xl font-bold mb-4">The Latency Trap Override</h3>
          <p className="text-zinc-400 mb-4">Standard LLMs are too slow to drive a car directly. I solved the latency trap by engineering an asynchronous Edge-to-Cloud architecture. A 50Hz local physics engine handles real-time survival, while the LLM handles complex race strategy.</p>
        </GlassCard>

        <Button href="https://github.com/Kavurubuvanesh/apextensor-may-2026" primary>
          View AeroMind Engine
        </Button>
      </div>
      <Footer />
    </main>
  );
}