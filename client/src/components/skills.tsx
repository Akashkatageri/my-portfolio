import { SKILLS } from "@/data/studentData";

export function Skills() {
  return (
    <section id="stack" className="py-20 px-6 bg-transparent border-t border-zinc-900/80">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technologies & Tools
          </h2>
          <p className="text-sm text-zinc-400">
            What I actively use to engineer software, build Kletaq, and stream data.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {SKILLS.map((skill, idx) => (
            <span
              key={idx}
              className="px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-zinc-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
