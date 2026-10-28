import { PROFILE } from "@/data/studentData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-transparent border-t border-zinc-900/80 text-xs font-mono text-zinc-500">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {currentYear} {PROFILE.name}. All rights reserved.
        </div>
        <div className="flex items-center space-x-6 text-zinc-400">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            github
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            linkedin
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-white transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
