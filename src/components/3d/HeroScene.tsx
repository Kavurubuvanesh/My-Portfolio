"use client";

import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import Button from "@/components/ui/Button";

export default function HeroScene() {
  return (
    // THE COLLISION FIX: Added pb-32 lg:pb-40. This forces a massive empty gap at the bottom of the section, pushing "The Architecture" safely out of the way.
    <section className="relative w-full min-h-screen pt-32 pb-32 lg:pb-40 flex items-center justify-center bg-black">

      {/* THE LAYOUT FIX: Switched from Grid to Flexbox. This guarantees the Text is ALWAYS on top, and 3D is ALWAYS on bottom on mobile. */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">

        {/* Left Column: Typography & Narrative */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left items-center lg:items-start z-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase"
          >
            AI & Machine Learning Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Hi, I'm <br className="block lg:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Buvanesh.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 max-w-lg text-base md:text-lg leading-relaxed"
          >
            Software Engineer specializing in AI/ML and full-stack architectures. With a deep focus on Python and cloud infrastructures, I am actively building complex machine learning prototypes, contributing to GSSoC, and pushing the boundaries of my technical stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            <Button href="#open-source" primary>
              View Projects
            </Button>
            <Button href="#footer">
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right Column: The 3D Canvas Mount */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative flex items-center justify-center overflow-hidden z-10">

          {/* THE ANIMATION & WATERMARK FIX:
              1. pointer-events-auto: Restores the interactive mouse tracking!
              2. scale-[1.3] & translate-x/y: Pushes the "Built with Spline" watermark permanently out of the hidden box.
          */}
          <div className="absolute inset-0 scale-[1.3] translate-y-12 translate-x-8 flex items-center justify-center pointer-events-auto">
            <Spline scene="https://prod.spline.design/F8ElfCsmCH8S03VG/scene.splinecode" />
          </div>

          {/* Top and Bottom gradient overlays to ensure the 3D model fades smoothly into the black background */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}