import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const ContactForm = () => {
  const scrollToContact = () => {
    // In a real implementation, this would open a calendar booking widget
    window.open('https://calendly.com', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Apply For Your Strategy Call
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Book A <span className="text-gradient">30-Min Strategy Call</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Don't worry this is not a BS call where I'll pitch you our services. This is to see where you are and giving a personal roadmap to scale your business. And if you are interested in working together and we are a good fit, we'll see how it goes!
          </p>

          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToContact}
            className="group"
          >
            <Calendar className="w-5 h-5" />
            Book A 30-Min Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
