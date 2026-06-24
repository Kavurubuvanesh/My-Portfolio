"use client";

import dynamic from "next/dynamic";
import BootSequence from "@/components/ui/BootSequence";
import Navbar from "@/components/layout/Navbar"; // <-- New
import Footer from "@/components/layout/Footer"; // <-- New
import TechOrbs from "@/components/3d/TechOrbs"; // <-- New
import TechStack from "@/components/layout/TechStack";
import FeaturedProjects from "@/components/layout/FeaturedProjects";
import SystemArchitecture from "@/components/layout/SystemArchitecture";
import GithubExplorer from "@/components/layout/GithubExplorer";
import CredentialShowcase from "@/components/layout/CredentialShowcase";
import TerminalCTA from "@/components/layout/TerminalCTA";

// Lazy load the heavy 3D WebGL scene
const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative">
      <BootSequence />

      {/* Global Navigation */}
      <Navbar />

      {/* Ambient floating orbs for the background */}
      <TechOrbs />

      <div className="relative w-full h-screen overflow-hidden">
        <HeroScene />
      </div>

      <TechStack />
      <FeaturedProjects />
      <SystemArchitecture />
      <GithubExplorer />
      <CredentialShowcase />
      <TerminalCTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}