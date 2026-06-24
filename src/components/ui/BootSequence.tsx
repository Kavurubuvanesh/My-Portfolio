"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLogs = [
  "Initializing buvaneshOS v2.0.26...",
  "Mounting deep learning dependencies...",
  "Allocating PyTorch & TensorFlow tensors... [OK]",
  "Establishing secure connection to Agentic Pipeline... [OK]",
  "Bypassing standard UI... Entering developer mode.",
  "System Ready."
];

export default function BootSequence() {
  const [isVisible, setIsVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    // Check if the user has already booted up during this session
    if (typeof window !== "undefined") {
      const hasBooted = sessionStorage.getItem("boot_complete");
      if (hasBooted) {
        setIsVisible(false);
        return; // Skip the sequence entirely
      }
    }

    const timeouts: NodeJS.Timeout[] = [];

    bootLogs.forEach((log, index) => {
      const timeout = setTimeout(() => {
        setLines((prev) => prev.includes(log) ? prev : [...prev, log]);

        if (index === bootLogs.length - 1) {
          setTimeout(() => {
            setIsVisible(false);
            // Save to session storage so it doesn't run again if they click "Back"
            sessionStorage.setItem("boot_complete", "true");
          }, 800);
        }
      }, index * 250);

      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-start justify-end bg-black pb-24 pl-6 md:pl-24 pointer-events-none"
        >
          <div className="w-full max-w-2xl font-mono text-sm md:text-base text-zinc-500">
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={idx === bootLogs.length - 1 ? "text-cyan-400 mt-4 font-bold" : "mb-1"}
              >
                {`> ${line}`}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-5 bg-cyan-400 mt-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}