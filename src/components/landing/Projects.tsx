const projects = [
  {
    title: "Back Pain Management",
    description: "This is a back pain management offer to help people remove their back pain so they can be free to do the activities they love doing and move forward in life."
  },
  {
    title: "Options Trading",
    description: "This is an offer in options trading aiming to help people get 30% - 40% returns annually to grow their trading account and have control over their financial future."
  },
  {
    title: "Stress Management",
    description: "This is a stress management dry-test offer to help people remove stress triggers so they can be at peace with themselves and achieve their goals."
  }
];

const Projects = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            OUR LATEST PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powerful{" "}
            <span className="text-gradient">Low-Ticket Offers</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
