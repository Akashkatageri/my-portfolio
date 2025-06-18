import { Download, Github, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleDownloadResume = () => { link.href = "/AkashKatageri_Resume.pdf"; // Ensure this file is in the public folder
    link.download = "AkashKatageri_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // In a real app, this would trigger a resume download
    console.log("Resume download would be triggered here");
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Akashkatageri",
      color: "hover:text-gray-900"
    },
   
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/AkashK66272218",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/akash.k0512",
      color: "hover:text-pink-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:akash@05122006.xyz",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-accent">Akash Katageri</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-slate-100">
              Cybersecurity Enthusiast & Ethical Hacking Learner
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            I specialize in learning how to break, analyze, and secure systems. Passionate about ethical hacking, CTFs, and securing the web.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-200 transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
