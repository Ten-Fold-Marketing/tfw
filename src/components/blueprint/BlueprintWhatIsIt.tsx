import { motion } from "framer-motion";
import { Check } from "lucide-react";

const checkpoints = [
  "What digital product you should sell (and why it fits YOUR audience)",
  "The exact promise that makes it convert — who it's for, what they get, in what timeframe",
  "How to price it: low-ticket, mid-ticket, or high-ticket — based on your audience size and goals",
  "What goes inside it and how you deliver it (course, cohort, templates, community, or hybrid)",
  "The simplest tech stack to build and sell it — no expensive tools, no developer needed",
];

const BlueprintWhatIsIt = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-narrow">
        {/* Featured testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-2 border-primary pl-6 mb-20 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-foreground/90 italic mb-4">
            "Got my blueprint and it was exactly what I needed. Generated $40,851 in just 14 days after implementing the strategy. Worth every penny."
          </p>
          <footer className="text-sm text-muted-foreground">
            <strong className="text-foreground">Rayner Teo</strong> — 8-Figure Trading Mentor · 2.2M YouTube Subscribers
          </footer>
        </motion.blockquote>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">WHAT IS THE</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            24-HOUR OFFER BLUEPRINT?
          </h2>
        </motion.div>

        {/* Long-form copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>The 24-Hour Offer Blueprint is the fastest way to get a fully mapped monetization plan, tailored to your audience, without lifting a finger.</p>
          <p>Because let's face it — you already know you should be selling something.</p>
          <p>You've seen other creators making money from their audience…</p>
          <p>You've heard the gurus preach "launch a digital product"…</p>
          <p>And you've probably even thought about doing one out yourself…</p>
          <p className="text-foreground font-medium">But the part nobody talks about?</p>
          <p className="text-foreground text-lg font-medium">What to actually sell.</p>
          <p>What should the product be… the pricing… the delivery… the funnel…</p>
          <p className="text-foreground font-medium">But the 24-Hour Offer Blueprint flips the script.</p>
          <p>We've eliminated months worth of tedious planning, guesswork, and headaches…</p>
          <p>Instead with your custom blueprint you'll get:</p>

          {/* Checkmark list */}
          <div className="space-y-3 pt-2">
            {checkpoints.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90">{item}</span>
              </div>
            ))}
          </div>

          <p className="pt-4">We're not giving you another lengthy course…</p>
          <p>Or asking you to "figure it out" yourself…</p>
          <p className="text-foreground font-medium">More information is rarely the answer.</p>
          <p>The top 1% of creators value time over everything else…</p>
          <p>Which is why I'm personally going to hand you everything you need to start monetizing your audience — handed on a silver platter.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintWhatIsIt;
