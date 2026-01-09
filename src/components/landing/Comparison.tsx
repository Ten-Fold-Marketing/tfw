import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const Comparison = () => {
  const afterItems = [
    "Automated income growth",
    "Business running 95% on autopilot",
    "Full team dedicated to your success",
    "Unlimited growth and scale",
    "Partners with your best interest in mind"
  ];

  const beforeItems = [
    "Burnout",
    "Dependence on shady brand deals",
    "Content creator hamster wheel",
    "Unpredictable income potential"
  ];

  const industries = [
    "TRADING",
    "PARENTING",
    "FINANCE",
    "TRAVEL",
    "SIDE HUSTLE",
    "RELATIONSHIPS",
    "PERSONAL",
    "HOBBIES",
    "SPIRITUALITY",
    "MARKETING",
    "CAREER",
    "SOFTWARE"
  ];

  return (
    <section id="comparison" className="section-padding bg-background relative overflow-hidden">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <span className="section-label">Comparison</span>
          <span className="section-label">04</span>
        </div>

        <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl">
            Before And After <span className="italic">Partnering</span>&nbsp; With Us
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* BEFORE Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 border border-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display text-2xl text-foreground">Before...</h3>
            </div>
            <ul className="space-y-5">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground text-lg line-through decoration-muted-foreground/30">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 border border-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground">After...</h3>
            </div>
            <ul className="space-y-5">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Industries Section */}
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            This Works For <span className="italic">Any</span> Industry
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">As long as you have an audience</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-5 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted/50 hover:border-foreground/30 transition-all duration-300 cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;