"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  primary?: boolean;
}

export default function Button({ href, children, primary = false }: ButtonProps) {
  const baseClass = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-fit";

  // Primary: Bright white button that casts a heavy white glow
  const primaryClass = "bg-white text-black hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]";

  // Secondary: Dark button that illuminates with a cyan border and cyan glow
  const secondaryClass = "bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:text-cyan-50";

  const combinedClasses = `${baseClass} ${primary ? primaryClass : secondaryClass}`;

  // If it's an external link, an email trigger, or a scroll anchor
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClasses}
      >
        {children}
      </motion.a>
    );
  }

  // THE FIX: Internal Next.js Routes
  // We remove 'legacyBehavior' and use a motion.div inside the Link.
  // The Link creates the <a> tag automatically.
  return (
    <Link href={href} className="inline-block w-fit outline-none">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClasses}
      >
        {children}
      </motion.div>
    </Link>
  );
}