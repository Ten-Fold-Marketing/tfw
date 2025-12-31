import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Users, DollarSign } from "lucide-react";


const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

      <div className="container-wide relative z-10 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <p style={{
          animationDelay: '200ms',
          animationFillMode: 'both'
        }} className="text-xl font-medium mb-2 animate-fade-up">
            <span className="text-foreground">FINALLY GET PAID WHAT YOU'RE WORTH...</span>
          </p>

          {/* Subheadline */}
          <p style={{
          animationDelay: '400ms',
          animationFillMode: 'both'
        }} className="text-xl text-foreground max-w-4xl mx-auto mb-4 animate-fade-up md:text-6xl font-black">
            We'll Invest <span className="text-primary">$50k</span> In Your Business So You Generate An Extra{" "}
            <span className="text-primary">6 to 7 Figures</span> In The Next 60 Days…
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{
          animationDelay: '500ms',
          animationFillMode: 'both'
        }}>
            with no upfront costs or risk to your existing income!
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 animate-fade-up" style={{
          animationDelay: '600ms',
          animationFillMode: 'both'
        }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection("contact")} className="group">
              LEARN MORE
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 animate-fade-up" style={{
          animationDelay: '700ms',
          animationFillMode: 'both'
        }}>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-accent-secondary/50 transition-colors">
              <DollarSign className="w-8 h-8 text-accent-secondary mb-3" />
              <span className="text-3xl md:text-4xl font-bold text-foreground">15M+</span>
              <span className="text-muted-foreground text-sm">Revenue Generated</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-colors">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl md:text-4xl font-bold text-foreground">2.3M+</span>
              <span className="text-muted-foreground text-sm">Emails Collected</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-accent-secondary/50 transition-colors">
              <Users className="w-8 h-8 text-accent-secondary mb-3" />
              <span className="text-3xl md:text-4xl font-bold text-foreground">100+</span>
              <span className="text-muted-foreground text-sm">Happy Clients</span>
            </div>
          </div>

        </div>
      </div>

    </section>;
};
export default Hero;