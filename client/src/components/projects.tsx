import { ArrowUpRight, Zap } from "lucide-react";
import { PROJECTS } from "@/data/studentData";

export default function Projects() {
  const kletaq = PROJECTS[0];

  return (
    <section id="projects" className="py-20 px-6 sm:px-10 bg-transparent border-t border-zinc-900/80">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Projects
          </h2>
        </div>

        {kletaq && (
          <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-sm p-7 sm:p-9 hover:border-zinc-700 transition-all overflow-hidden group">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-zinc-700/15 transition-all" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {kletaq.title}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {kletaq.status || "Active Development"}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                  {kletaq.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {kletaq.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center pt-2 md:pt-0">
                <a
                  href={kletaq.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 whitespace-nowrap"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Launch {kletaq.linkLabel || "trykletaq.cv"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
