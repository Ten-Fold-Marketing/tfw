import marcClerouxLarge from "@/assets/team/marc-cleroux-large.webp";

const About = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-teal-blue" />
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left - Founder Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src={marcClerouxLarge} 
                alt="Marc Cleroux"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Meet The <span className="text-gradient">Founder</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Marc Cleroux is the founder of Ten Fold Marketing, a publishing company that helps creators break free from the content grind and build automated income streams.
              </p>
              <p>
                At Ten Fold Marketing, we partner with creators to transform their expertise into profitable digital offers—without any upfront costs. We handle the strategy, writing, and marketing while you focus on what you do best. Our success is tied to yours, so we only win when you do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
