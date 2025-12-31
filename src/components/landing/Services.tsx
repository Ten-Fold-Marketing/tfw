import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const weeks = [
  {
    number: "01",
    title: "Strategy & Lead Magnet",
    subtitle: "Week 1",
    tasks: [
      "Define the target audience and offer positioning.",
      "Plan the lead magnet, low-ticket, and mid-ticket offers.",
      "Create lead magnet (ebook, guide, checklist, video, etc.).",
      "Design the opt-in page and email automation.",
      "Write the first email nurture sequence."
    ]
  },
  {
    number: "02",
    title: "Low-Ticket Offer Development & Launch",
    subtitle: "Week 2-3",
    tasks: [
      "Outline the low-ticket product (mini-course, ebook, template, etc.).",
      "Write sales pages, videos, email sequence and membership area.",
      "Launch promotional campaigns (emails, YouTube videos, social posts).",
      "Optimize conversions and track performance."
    ]
  },
  {
    number: "03",
    title: "Mid-Ticket Offer Development",
    subtitle: "Weeks 4-5",
    tasks: [
      "Outline the mid-ticket product (course, coaching, membership, etc.).",
      "Write the sales pages, videos, email sequence and membership area.",
      "Incorporate email sequence after nurture sequence."
    ]
  },
  {
    number: "04",
    title: "Mid-Ticket Launch & Optimization",
    subtitle: "Week 6",
    tasks: [
      "Launch promotional campaigns (emails, YouTube videos, social posts).",
      "Optimize conversions and track performance.",
      "Provide creators with analytics and next steps."
    ]
  },
  {
    number: "05",
    title: "Additional Launches And Paid Ads",
    subtitle: "Week 7+",
    tasks: [
      "Plan out future low-ticket & mid-ticket launches to further monetize your audience.",
      "Optional: Launch paid ads using our own money to scale your offer to the next level."
    ]
  }
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-card relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <span className="section-label">Services</span>
          <span className="section-label">03</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl mb-6">
            Tailored Solutions for <span className="italic">Strategic</span> Growth
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            We've got you covered from A to Z with a full-blown acquisition system.
          </p>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {weeks.map((week, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-t border-border py-10 hover:bg-muted/30 transition-all duration-500 px-4 -mx-4 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex items-baseline gap-6 lg:w-1/3">
                  <motion.span 
                    className="text-muted-foreground text-sm font-medium transition-colors duration-300 group-hover:text-foreground"
                  >
                    {week.number}
                  </motion.span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-foreground/90 transition-colors">
                      {week.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{week.subtitle}</p>
                  </div>
                </div>
                <motion.div 
                  className="lg:w-2/3 lg:pl-8"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ul className="space-y-2">
                    {week.tasks.map((task, taskIndex) => (
                      <motion.li 
                        key={taskIndex} 
                        className="flex items-start gap-3 text-muted-foreground group-hover:text-muted-foreground/90 transition-colors duration-300"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-foreground/40 mt-1 group-hover:text-foreground/60 transition-colors duration-300">•</span>
                        <span>{task}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Hover arrow indicator */}
              <motion.div 
                className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <ArrowRight className="w-5 h-5 text-foreground/50" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="hero" size="lg" onClick={scrollToContact} className="group">
              Book A 30-Min Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;