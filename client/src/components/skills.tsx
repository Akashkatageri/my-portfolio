import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Cybersecurity Tools",
      icon: Zap,
      skills: [
        { name: "Kali Linux", icon: "🐉" },
        { name: "Burp Suite", icon: "🛡️" },
        { name: "Wireshark", icon: "🦈" },
        { name: "Nmap", icon: "📡" },
        { name: "Metasploit", icon: "🎯" },
        { name: "John the Ripper", icon: "🔐" }
      ]
    },
    {
      title: "Platforms & Labs",
      icon: Cloud,
      skills: [
        { name: "TryHackMe", icon: "🏕️" },
        { name: "Hack The Box", icon: "📦" },
        { name: "OverTheWire", icon: "🧠" },
        { name: "Root-Me", icon: "🌱" },
        { name: "CTFtime", icon: "⌛" },
        { name: "VulnHub", icon: "🛠️" }
      ]
    },
    {
      title: "Languages & Scripting",
      icon: Code,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Bash", icon: "💻" },
        { name: "JavaScript", icon: "📜" },
        { name: "SQL", icon: "📊" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "PowerShell", icon: "⚡" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Cybersecurity Skills</h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Tools, platforms, and languages I use for ethical hacking, CTFs, and security testing.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <Card key={index} className="card-hover border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    <span className="text-lg skill-icon">{skill.icon}</span>
                    <span className="text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>
  );
}
