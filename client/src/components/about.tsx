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
                I'm Akash Katageri — an 18-year-old cybersecurity enthusiast with a deep curiosity for ethical hacking, network security, and digital privacy. 
                My journey began with a fascination for how systems can be broken — and more importantly, how they can be secured.
              </p>

              <p>
                I'm constantly learning about vulnerability analysis, Linux-based tools, and penetration testing techniques. 
                I enjoy diving into CTFs, exploring Wireshark captures, and experimenting with tools like Burp Suite and Kali Linux.
              </p>

              <p>
                I believe cybersecurity is not just about defense — it's about understanding systems inside out and thinking like both an attacker and a protector. 
                My goal is to contribute to a safer digital world while continuously evolving my technical and analytical skills.
              </p>

              <p>
                Feel free to reach out to me at <a href="mailto:akash@05122006.xyz" className="text-primary underline">akash@05122006.xyz</a>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-slate-600 font-medium">CTFs Participated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-slate-600 font-medium">Home Labs Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-slate-600 font-medium">Curiosity to Learn</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
                  alt="Akash Katageri"
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
