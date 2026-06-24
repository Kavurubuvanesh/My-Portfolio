"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function GlassCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-zinc-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}