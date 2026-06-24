"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/components/data/constants";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter text-white">
          Buv<span className="text-cyan-400">.</span>
        </Link>
        <div className="flex gap-6 text-sm font-mono text-zinc-400">
          <Link href={SITE_DATA.github} target="_blank" className="hover:text-white transition-colors">GitHub</Link>
          <Link href={SITE_DATA.linkedin} target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </motion.nav>
  );
}