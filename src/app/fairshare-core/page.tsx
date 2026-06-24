"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { FiArrowLeft } from "react-icons/fi";

export default function FairShareCaseStudy() {
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
        <span className="block text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">Case Study 02</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-8">FairShare Core.</h1>
        <p className="text-xl text-zinc-400 leading-relaxed mb-12">
          A secure, full-stack peer-to-peer financial ledger and relational social graph designed to handle complex group expenses, custom debt splitting, and anti-fraud payment verifications.
        </p>

        <GlassCard className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
          <p className="text-zinc-400 mb-4">Backend routes are heavily fortified. Users attempting to URL-hack into groups or expenses they do not belong to are instantly met with 403 Forbidden barriers. Implemented strict IDOR prevention and JWT stateless session management.</p>
        </GlassCard>

        <Button href="https://github.com/Kavurubuvanesh/fairshare-core" primary>
          View Repository
        </Button>
      </div>
      <Footer />
    </main>
  );
}