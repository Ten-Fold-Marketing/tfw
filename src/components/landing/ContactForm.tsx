import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const openCalendly = () => {
    window.open('https://calendly.com', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-card relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <span className="section-label">Contact</span>
          <span className="section-label">07</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
            Book A <span className="italic">Strategy</span> Call
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Don't worry this is not a BS call where I'll pitch you our services. This is to see where you are and giving a personal roadmap to scale your business. And if you are interested in working together and we are a good fit, we'll see how it goes!
          </p>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="hero" 
              size="lg" 
              onClick={openCalendly}
              className="group"
            >
              Book A 30-Min Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-muted/30 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default ContactForm;