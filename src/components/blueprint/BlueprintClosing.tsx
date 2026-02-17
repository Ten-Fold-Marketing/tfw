import { Star, ShieldCheck } from "lucide-react";
import CTAButton from "./CTAButton";
import AvatarStrip from "./AvatarStrip";

const benefits = [
  "Know exactly what to sell — no more guessing",
  "Have a clear pricing strategy backed by logic",
  "Launch with the right tools and the right funnel",
];

const BlueprintClosing = () => (
  <section className="py-16 sm:py-20">
    <div className="container max-w-4xl mx-auto px-4">
      {/* White card */}
      <div className="bg-foreground/95 rounded-2xl p-8 sm:p-12 text-background">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6">
          AND NOW I'M GIVING IT ALL TO YOU…
        </h2>

        <div className="space-y-4 text-background/80 text-base max-w-3xl mx-auto mb-6">
          <p>Most creators aren't struggling because they're lazy.</p>
          <p>They're stuck because no one's ever just told them exactly what to sell.</p>
          <p>Everyone's pushing frameworks, playbooks, or another 6-hour course that leaves you with more questions than answers.</p>
          <p>But that's not what this is…</p>
          <p>
            The 24-Hour Offer Blueprint is a <strong className="text-background">done for you</strong> blueprint built around your audience.
          </p>
          <p>You'll get a proven monetization path tailored specifically for your market, your content, and your growth goals — delivered in 24 hours or less.</p>
          <p>So you can…</p>
        </div>

        <div className="space-y-3 max-w-xl mx-auto mb-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mt-0.5">
                ✓
              </span>
              <span className="text-background/80">{b}</span>
            </div>
          ))}
        </div>

        <p className="text-background/80 text-center mb-8">
          All without wasting weeks "figuring it out" yourself.
        </p>

        <CTAButton
          text="YES! I WANT MY BLUEPRINT NOW — $47"
          subtext="Get Your Custom Blueprint In 24 Hours Or Less"
        />
      </div>

      {/* Social proof below card */}
      <div className="flex flex-col items-center mt-8 gap-2">
        <div className="flex items-center gap-2">
          <AvatarStrip />
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-muted-foreground text-xs font-semibold uppercase">
            Trusted by 500+ Creators
          </span>
        </div>
        <p className="text-foreground font-black text-xl sm:text-2xl text-center mt-4">
          <span className="bg-gradient-gold text-primary-foreground px-2 py-0.5 rounded">500+ BLUEPRINTS</span>{" "}
          BUILT AND COUNTING
        </p>
      </div>
    </div>
  </section>
);

export default BlueprintClosing;
