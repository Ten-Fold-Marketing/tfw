import { Users, Lightbulb, Target, DollarSign, Package, Wrench, GitBranch, Megaphone, Star, ShieldCheck } from "lucide-react";
import CTAButton from "./CTAButton";
import AvatarStrip from "./AvatarStrip";

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
    desc: "Should you charge $27, $47, $297, or $997? I'll tell you WHY based on your audience and goals.",
  },
  {
    icon: Package,
    title: "Your Product Structure",
    desc: "Exactly what modules, lessons, templates, or resources to include. How long. What format.",
  },
  {
    icon: Wrench,
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

const BlueprintDeliverables = () => (
  <section className="py-16 sm:py-24 bg-secondary/30">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2">
        HERE'S WHAT YOU'LL GET WITH YOUR
      </h2>
      <h3 className="text-center mb-12">
        <span className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded text-xl sm:text-2xl font-black">
          OFFER BLUEPRINT
        </span>
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {deliverables.map((item, i) => (
          <div key={i} className="bg-card rounded-xl p-5 border border-border shadow-card hover:border-primary/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
            <p className="text-muted-foreground text-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      <CTAButton
        text="YES! I WANT MY BLUEPRINT NOW — $47"
        subtext="Get Your Custom Blueprint In 24 Hours Or Less"
      />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
        <div className="inline-flex items-center gap-2 border-2 border-dashed border-primary/30 rounded-xl px-4 py-3">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <div>
            <p className="font-bold text-foreground text-sm">MONEY BACK GUARANTEE</p>
            <p className="text-muted-foreground text-xs">Total Clarity Guaranteed</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AvatarStrip />
          <div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground text-xs font-semibold uppercase">
              Trusted by 500+ Creators
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlueprintDeliverables;
