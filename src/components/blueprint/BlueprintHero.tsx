import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock } from "lucide-react";

const CHECKOUT_URL = "#";

const deliverables = [
  "Your Exact Product Idea",
  "A Core Promise That Converts",
  "Your Pricing Model",
  "Your Funnel Map",
  "Your Selling Strategy",
  "Your Complete Tech Stack",
  "Product Structure & Outline",
  "Delivered In 24 Hours",
];

const BlueprintHero = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Trust badge */}
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs tracking-widest uppercase border-primary/30 text-muted-foreground">
            Trusted by 500+ Creators
          </Badge>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6 text-foreground">
            I'll Personally Build Your Complete Monetization Blueprint — What to Sell, How to Price It, How to Deliver It & How to Sell It —{" "}
            <span className="text-gradient">In 24 Hours!</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            All You Have To Do Is Fill Out A Simple 10-Minute Form About Your Audience And I'll Give You A Complete Custom Monetization Plan!
          </p>

          {/* Deliverables list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10"
          >
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              Rated 5/5 · Trusted by 500+ Creators
            </span>
          </div>

          {/* Urgency */}
          <p className="text-sm text-primary font-medium mb-4">Only A Few Spots Left</p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Only</span>
            <span className="text-2xl text-muted-foreground line-through">$500.00</span>
            <span className="text-5xl font-display text-foreground">$97</span>
          </div>
          <p className="text-sm text-primary font-medium mb-8">(SAVE $403.00 TODAY)</p>

          {/* CTA */}
          <Button
            variant="hero"
            size="xl"
            className="text-lg px-12 glow-primary mb-3"
            asChild
          >
            <a href={CHECKOUT_URL}>GET YOUR BLUEPRINT NOW</a>
          </Button>
          <p className="text-sm text-muted-foreground mb-8">
            Get Your Blueprint In 24 Hours
          </p>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Secure Payments
            </div>
            <div className="flex items-center gap-3 font-semibold tracking-wider text-foreground/60">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              MONEY BACK GUARANTEE
            </div>
          </motion.div>

          <p className="mt-4 text-xs text-muted-foreground">
            Total Clarity or Your Money Back · 100% Secure 256-Bit Encrypted Checkout
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintHero;
