import { SITE_DATA } from "@/components/data/constants";

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-white/5 bg-black py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm font-mono">
          © {new Date().getFullYear()} {SITE_DATA.developerName}. All systems operational.
        </p>
        <div className="flex gap-2 text-xs font-mono text-zinc-600 uppercase tracking-widest">
          <span>React</span> / <span>FastAPI</span> / <span>LLMs</span>
        </div>
      </div>
    </footer>
  );
}