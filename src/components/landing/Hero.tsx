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

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.15,
        duration: 0.8,
        ease: "easeOut" as const
      }
    })
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background pt-16">
      {/* Main content area - takes up available space and centers content vertically */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="container-wide relative z-10 py-12 md:py-16">
          <div className="max-w-6xl">
            {/* Main headline - Ivory style large typography */}
            <div className="mb-8 overflow-hidden">
              <motion.h1 
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.95] tracking-tight"
              >
                FINALLY GET PAID
              </motion.h1>
              <motion.h1 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.95] tracking-tight"
              >
                what <span className="italic">you're WORTH</span>
              </motion.h1>
            </div>

            {/* Subheadline and CTA row */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mt-16"
            >
              {/* Description */}
              <div className="max-w-md">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We'll invest <span className="text-foreground font-medium">$50k</span> in your business so you generate an extra <span className="text-foreground font-medium">6 to 7 figures</span> in the next 60 days—with no upfront costs or risk.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="shrink-0"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => scrollToSection("contact")}
                  className="group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - absolutely positioned at bottom center */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden lg:flex flex-col items-center gap-3 text-muted-foreground cursor-pointer group pb-8 relative z-10"
        onClick={() => scrollToSection("clients")}
      >
        <motion.div 
          className="w-12 h-12 rounded-full border border-muted-foreground/30 flex items-center justify-center group-hover:border-foreground/50 transition-colors duration-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
        <span className="text-xs uppercase tracking-[0.2em] group-hover:text-foreground transition-colors duration-300">Scroll to explore</span>
      </motion.div>

      {/* Subtle background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default Hero;