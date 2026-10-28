import { ArrowUpRight, Github, Mail, Zap } from "lucide-react";
import { PROFILE } from "@/data/studentData";

export default function Hero() {
  return (
    <section 
      id="top" 
      className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-16 px-6 bg-transparent"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-6">
        
        {/* Active Focus Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Currently Building Kletaq</span>
        </div>

        {/* Main Title & Bio */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            {PROFILE.name}
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
            Developer building <span className="text-white font-semibold underline underline-offset-4 decoration-zinc-700">Kletaq</span>. 
            I use AI to build and ship software fast.
          </p>

          <p className="text-sm text-zinc-500 font-mono">
            {PROFILE.location}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="https://trykletaq.cv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-colors"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>View Kletaq</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-200 text-xs hover:bg-zinc-800 transition-colors backdrop-blur-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-200 text-xs hover:bg-zinc-800 transition-colors backdrop-blur-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{PROFILE.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
