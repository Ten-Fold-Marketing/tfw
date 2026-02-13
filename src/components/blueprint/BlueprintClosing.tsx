import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

const CHECKOUT_URL = "#";

const BlueprintClosing = () => {
  return (
    <>
      {/* Final Pitch */}
      <section className="section-padding bg-gradient-section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              AND NOW I'M GIVING IT ALL TO YOU…
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>Most creators aren't struggling because they're lazy.</p>
            <p className="text-foreground font-medium">They're stuck because no one's ever just told them exactly what to sell.</p>
            <p>Everyone's pushing frameworks, playbooks, or another 6-hour course that leaves you with more questions than answers.</p>
            <p className="text-foreground font-medium">But that's not what this is…</p>
            <p>The 24-Hour Offer Blueprint is a done for you blueprint built around your audience.</p>
            <p>You'll get a proven monetization path tailored specifically for your market, your content, and your growth goals — delivered in 24 hours or less.</p>
            <p className="text-foreground font-medium">So you can…</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground/90">Know exactly what to sell — no more guessing</span></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground/90">Have a clear pricing strategy backed by logic</span></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground/90">Launch with the right tools and the right funnel</span></div>
            </div>
            <p>All without wasting weeks "figuring it out" yourself.</p>
          </motion.div>

          <div className="text-center mt-12 space-y-3">
            <Button variant="hero" size="xl" className="text-lg px-12 glow-primary" asChild>
              <a href={CHECKOUT_URL}>YES! I WANT MY BLUEPRINT NOW — $97</a>
            </Button>
            <p className="text-sm text-muted-foreground">Get Your Custom Blueprint In 24 Hours Or Less</p>
            <p className="text-xs text-muted-foreground">Trusted by 500+ Creators</p>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="section-label">500+ BLUEPRINTS BUILT AND COUNTING</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              LIMITED TIME SPECIAL — GET YOUR PERSONALIZED BLUEPRINT FOR JUST $97
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Only Done-For-You Solution To Get Your Monetization Plan In 24 Hours or Less…
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              I've spent years architecting offers and building monetization plans for creators — which has given me the ability to give you a winning blueprint for your market almost instantly after completing your form!
            </p>

            <div className="pt-4 space-y-3">
              <Button variant="hero" size="xl" className="text-lg px-12 glow-primary" asChild>
                <a href={CHECKOUT_URL}>YES! I WANT MY BLUEPRINT NOW — $97</a>
              </Button>
              <p className="text-sm text-muted-foreground">Get Your Custom Blueprint In 24 Hours Or Less</p>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-primary" /> MONEY BACK GUARANTEE</span>
                <span>Trusted by 500+ Creators</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlueprintClosing;
