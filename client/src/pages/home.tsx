import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-white overflow-hidden">
      {/* Full-Page Fixed Meteors Layer across the entire screen */}
      <Meteors number={60} />

      {/* Minimal Top Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
