import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Vue.js", icon: "💚" },
        { name: "JavaScript", icon: "📜" }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "⚡" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "Flutter", icon: "🦋" },
        { name: "iOS", icon: "🍎" },
        { name: "Android", icon: "🤖" },
        { name: "Expo", icon: "⚡" },
        { name: "PWA", icon: "🌐" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚙️" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Nginx", icon: "🌐" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      skills: [
        { name: "Git", icon: "📝" },
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎨" },
        { name: "Postman", icon: "📮" },
        { name: "Jest", icon: "🧪" },
        { name: "Webpack", icon: "📦" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Zap,
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Leadership", icon: "👥" },
        { name: "Communication", icon: "💬" },
        { name: "Project Management", icon: "📊" },
        { name: "Mentoring", icon: "🎯" },
        { name: "Agile/Scrum", icon: "🔄" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I work with modern technologies and frameworks to build scalable, 
            efficient solutions across the full development stack.
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
                        <span className="text-lg skill-icon">
                          {skill.icon}
                        </span>
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Always Learning
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and methodologies to stay at the forefront of development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                GraphQL
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Rust
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Web3
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Microservices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}