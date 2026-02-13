import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowUpRight } from "lucide-react";

const CHECKOUT_URL = "#";

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Audience & Content",
    desc: "Fill out a short form with a few key details about your audience, your content, and your platforms — no lengthy surveys or strategy calls.",
    hasArrow: true,
  },
  {
    num: "02",
    title: "Get A Personalized Offer Blueprint",
    desc: "I personally analyze your situation and architect a complete monetization plan — your product idea, pricing, delivery model, tech stack, funnel, and selling strategy.",
    hasArrow: true,
  },
  {
    num: "03",
    title: "Launch With Confidence",
    desc: "You'll receive your full plan within 24 hours — so you can start building with total clarity and skip months of second-guessing.",
    hasArrow: false,
  },
];

const BlueprintHowItWorks = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">HOW DOES THE 24-HOUR BLUEPRINT</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">WORK?</h2>
          <p className="text-muted-foreground mt-4">Get A Complete Monetization Plan Built For You In Just 3 Steps…</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl text-primary/30 mb-2">STEP {step.num}</div>
              {step.hasArrow && <ArrowUpRight className="w-5 h-5 text-primary mx-auto mb-3" />}
              <h3 className="font-display text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

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

export default BlueprintHowItWorks;
