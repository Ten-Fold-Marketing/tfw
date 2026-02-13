import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Target, DollarSign, Layout, Cpu, GitBranch, Megaphone, Shield } from "lucide-react";

const CHECKOUT_URL = "#";

const deliverables = [
  {
    icon: Users,
    title: "Your Most Monetizable Audience Segment",
    desc: "The specific slice of your audience most likely to pay — based on their pain points and what they'll spend money on.",
  },
  {
    icon: Lightbulb,
    title: "Your Exact Product Idea — Defined and Named",
    desc: "Course, coaching, templates, community — I'll tell you exactly which format fits your audience and goals.",
  },
  {
    icon: Target,
    title: "A Core Promise That Converts",
    desc: "The specific transformation your product delivers. Who it's for, what they get, and in what timeframe.",
  },
  {
    icon: DollarSign,
    title: "Your Pricing Model (With Reasoning)",
    desc: "Should you charge $27, $97, $297, or $997? I'll tell you WHY based on your audience and goals.",
  },
  {
    icon: Layout,
    title: "Your Product Structure",
    desc: "Exactly what modules, lessons, templates, or resources to include. How long. What format.",
  },
  {
    icon: Cpu,
    title: "Your Tech Stack",
    desc: "Payment processor. Delivery platform. Email tool. Landing page builder. Exact tools named.",
  },
  {
    icon: GitBranch,
    title: "Your Funnel Map",
    desc: "Content → lead → buyer. Lead magnet, email sequence, traffic — all mapped out.",
  },
  {
    icon: Megaphone,
    title: "Your Selling Strategy",
    desc: "How to sell on YOUR platform — YouTube, IG, TikTok, email, or podcast — no ads needed.",
  },
];

const BlueprintDeliverables = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">HERE'S WHAT YOU'LL GET WITH YOUR</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            OFFER BLUEPRINT
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-premium p-6"
            >
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-3">
          <Button variant="hero" size="xl" className="text-lg px-12 glow-primary" asChild>
            <a href={CHECKOUT_URL}>YES! I WANT MY BLUEPRINT NOW — $97</a>
          </Button>
          <p className="text-sm text-muted-foreground">Get Your Custom Blueprint In 24 Hours Or Less</p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-primary" /> MONEY BACK GUARANTEE</span>
            <span>Total Clarity Guaranteed</span>
            <span>Trusted by 500+ Creators</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintDeliverables;
