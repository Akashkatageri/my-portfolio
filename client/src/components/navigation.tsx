import { useState, useEffect } from "react";
import { Github, Mail, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/studentData";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#top")}
          className="text-sm font-semibold text-white tracking-tight hover:text-zinc-300 transition-colors"
        >
          {PROFILE.name.toLowerCase()}
          <span className="text-zinc-500 font-normal ml-2">/ kletaq</span>
        </button>

        <div className="flex items-center space-x-6 text-xs text-zinc-400">
          <button
            onClick={() => scrollTo("#projects")}
            className="hover:text-white transition-colors"
          >
            projects
          </button>
          <button
            onClick={() => scrollTo("#stack")}
            className="hover:text-white transition-colors"
          >
            stack
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="hover:text-white transition-colors"
          >
            contact
          </button>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>github</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>
    </nav>
  );
}
