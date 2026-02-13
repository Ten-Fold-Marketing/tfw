import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const CHECKOUT_URL = "#";

const blocks = [
  {
    question: "Not sure what to sell?",
    answer: "I'll custom build your product idea based on your audience, content style, and income goals.",
  },
  {
    question: "Confused about how to price it?",
    answer: "I'll map out the ideal pricing — whether low-ticket, mid-ticket, or premium — with clear reasoning based on your audience size and niche.",
  },
  {
    question: "Will this work for my niche?",
    answer: "Everything I deliver is done-for-you and personalized to YOUR situation. Not generic, not templated — I do the thinking, writing, and mapping for you.",
  },
];

const BlueprintHelp = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">How Will The</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Offer Blueprint Help?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-8 text-center"
            >
              <h3 className="font-display text-2xl text-foreground mb-3">{b.question}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-12"
        >
          <p className="text-muted-foreground">
            No matter what you sell (digital products, coaching, services) — if you want a plan that actually turns audience attention into revenue…
          </p>
          <p className="text-foreground font-medium">
            This is the only DFY plan out there built specifically to do that.
          </p>
        </motion.div>

        <div className="text-center space-y-3">
          <Button variant="hero" size="xl" className="text-lg px-12 glow-primary" asChild>
            <a href={CHECKOUT_URL}>YES! I WANT MY BLUEPRINT NOW — $97</a>
          </Button>
          <p className="text-sm text-muted-foreground">Get Your Custom Blueprint In 24 Hours Or Less</p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-primary" /> MONEY BACK GUARANTEE</span>
            <span>Trusted by 500+ Creators</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintHelp;
