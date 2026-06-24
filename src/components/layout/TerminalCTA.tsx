"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Button from "@/components/ui/Button"; // <-- Using our new magnetic button
import { SITE_DATA } from "@/components/data/constants"; // <-- Pulling your real links

const jsonLines = [
  "{",
  '  "status": 200,',
  `  "engineer": "${SITE_DATA.developerName}",`,
  '  "focus": ["AI/ML Architecture", "Backend Systems", "Full-Stack"],',
  `  "availability": "${SITE_DATA.availability}",`,
  '  "location": "Global / Remote",',
  '  "action": "Awaiting direct connection..."',
  "}"
];

export default function TerminalCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [curlTyped, setCurlTyped] = useState("");
  const fullCurl = "curl -X GET https://api.buvanesh.dev/v1/status";
  const [isCurlDone, setIsCurlDone] = useState(false);

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const interval = setInterval(() => {
        setCurlTyped(fullCurl.slice(0, i + 1));
        i++;
        if (i >= fullCurl.length) {
          clearInterval(interval);
          setTimeout(() => setIsCurlDone(true), 300);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="contact" ref={containerRef} className="w-full bg-black py-32 relative flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">System Status.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Currently building autonomous systems for GSSoC '26. <br className="hidden md:block"/>
            Actively open for <span className="text-cyan-400 font-semibold">Software Engineering Internships (Summer 2027)</span>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full bg-zinc-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/5"
        >
          <div className="w-full bg-zinc-900 border-b border-white/5 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs font-mono text-zinc-500">buvanesh@root: ~/availability</span>
          </div>

          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed min-h-[300px]">
            <div className="flex gap-4 text-zinc-400">
              <span className="text-cyan-500">➜</span>
              <span>
                {curlTyped}
                {!isCurlDone && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"
                  />
                )}
              </span>
            </div>

            {isCurlDone && (
              <div className="mt-4 text-emerald-400 flex flex-col">
                {jsonLines.map((line, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                    className="whitespace-pre-wrap"
                  >
                    {line}
                  </motion.span>
                ))}
              </div>
            )}

            {isCurlDone && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: jsonLines.length * 0.1 + 0.2 }}
                className="mt-4 flex gap-4 text-zinc-400"
              >
                <span className="text-cyan-500">➜</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2.5 h-5 bg-zinc-400 inline-block"
                />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* THE FIX: Replaced dead HTML tags with our new Glowing Magnetic Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <Button href={`mailto:${SITE_DATA.email}`} primary>
            <FiMail className="w-5 h-5" />
            Initialize Contact
          </Button>
          <Button href={SITE_DATA.linkedin}>
            <FiLinkedin className="w-5 h-5" />
            LinkedIn Network
          </Button>
          <Button href={SITE_DATA.github}>
            <FiGithub className="w-5 h-5" />
            GitHub Repositories
          </Button>
        </motion.div>

      </div>
    </section>
  );
}