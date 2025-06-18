export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
            </div>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey started 
                with a curiosity about how websites work, and it has evolved into a 
                deep love for crafting elegant, efficient code.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Node.js, 
                TypeScript, and cloud platforms. I believe in writing clean, 
                maintainable code and creating user experiences that are both 
                beautiful and functional.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or enjoying the outdoors. 
                I'm always eager to take on new challenges and collaborate with 
                amazing teams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-slate-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-slate-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
                  alt="John Smith"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}