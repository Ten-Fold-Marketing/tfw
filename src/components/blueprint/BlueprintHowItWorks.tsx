import { ClipboardList, Brain, Mail, Star, ShieldCheck } from "lucide-react";
import CTAButton from "./CTAButton";
import AvatarStrip from "./AvatarStrip";

const steps = [
  {
    num: "STEP 01",
    icon: ClipboardList,
    title: "Tell Us About Your Audience & Content",
    desc: "Fill out a short form with a few key details about your audience, your content, and your platforms — no lengthy surveys or strategy calls.",
  },
  {
    num: "STEP 02",
    icon: Brain,
    title: "Get A Personalized Offer Blueprint",
    desc: "I personally analyze your situation and architect a complete monetization plan — your product idea, pricing, delivery model, tech stack, funnel, and selling strategy.",
  },
  {
    num: "STEP 03",
    icon: Mail,
    title: "Launch With Confidence",
    desc: "You'll receive your full plan within 24 hours — so you can start building with total clarity and skip months of second-guessing.",
  },
];

const BlueprintHowItWorks = () => (
  <section className="py-16 sm:py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container max-w-5xl mx-auto px-4 relative z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2">
        HOW DOES THE{" "}
        <span className="bg-gradient-gold text-primary-foreground px-3 py-1 rounded">
          24-HOUR BLUEPRINT
        </span>
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4">
        WORK?
      </h2>
      <p className="text-muted-foreground text-center text-base sm:text-lg max-w-2xl mx-auto mb-12">
        Get A Complete Monetization Plan <span className="text-primary italic font-semibold">Built For You</span> In Just 3 Steps…
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="flex justify-center mb-4">
              <span className="bg-gradient-gold text-primary-foreground font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                {step.num}
              </span>
            </div>
            {i < 2 && (
              <div className="hidden md:block absolute top-8 -right-3 text-primary text-2xl z-10">
                ↗
              </div>
            )}
            <div className="bg-card rounded-xl p-6 border border-border shadow-card text-center h-full">
              <h3 className="font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{step.desc}</p>
              <div className="bg-secondary rounded-lg p-4 mx-auto max-w-[180px]">
                <step.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="space-y-1.5">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-2 bg-primary/20 rounded-full" style={{ width: `${80 - j * 15}%`, marginLeft: 'auto', marginRight: 'auto' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTAButton
        text="YES! I WANT MY BLUEPRINT NOW — $97"
        subtext="Get Your Custom Blueprint In 24 Hours Or Less"
      />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
        <div className="inline-flex items-center gap-2 border-2 border-dashed border-primary/30 rounded-xl px-4 py-3">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <div>
            <p className="font-bold text-foreground text-sm">MONEY BACK GUARANTEE</p>
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

export default BlueprintHowItWorks;
