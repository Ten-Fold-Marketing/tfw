import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20">
      <div className="container-wide relative z-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Main headline - Ivory style large typography */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.95] tracking-tight">
              FINALLY GET
            </h1>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.95] tracking-tight">
              PAID <span className="italic">what you're</span>
            </h1>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.95] tracking-tight">
              WORTH
            </h1>
          </motion.div>

          {/* Subheadline and CTA row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-16"
          >
            {/* Description */}
            <div className="max-w-md">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We'll invest <span className="text-foreground font-medium">$50k</span> in your business so you generate an extra <span className="text-foreground font-medium">6 to 7 figures</span> in the next 60 days—with no upfront costs or risk.
              </p>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:flex items-center gap-3 text-muted-foreground">
              <div className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => scrollToSection("contact")}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default Hero;