import marcClerouxLarge from "@/assets/team/marc-cleroux-large.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <span className="section-label">About Us</span>
          <span className="section-label">06</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Founder Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src={marcClerouxLarge} 
                alt="Marc Cleroux"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-3 border border-border/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Meet The <span className="italic">Founder</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Marc Cleroux is the founder of Ten Fold Marketing, a publishing company that helps creators break free from the content grind and build automated income streams.
              </p>
              <p>
                At Ten Fold Marketing, we partner with creators to transform their expertise into profitable digital offers—without any upfront costs. We handle the strategy, writing, and marketing while you focus on what you do best. Our success is tied to yours, so we only win when you do.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;