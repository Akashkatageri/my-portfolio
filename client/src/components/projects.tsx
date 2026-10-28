import { ArrowUpRight, Github, Zap } from "lucide-react";
import { PROJECTS } from "@/data/studentData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-transparent border-t border-zinc-900/80">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="space-y-2">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`p-6 sm:p-7 rounded-xl border transition-all ${
                project.highlight
                  ? "bg-zinc-950/80 border-zinc-800 hover:border-zinc-700"
                  : "bg-black border-zinc-900 hover:border-zinc-800"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {project.status}
                    </span>
                  )}
                </div>

                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors self-start sm:self-auto"
                >
                  {project.isExternalWeb ? (
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  ) : (
                    <Github className="w-3.5 h-3.5" />
                  )}
                  <span>{project.linkLabel || "View Project"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
                </a>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/80 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
