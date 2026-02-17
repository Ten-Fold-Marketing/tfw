import { HelpCircle, Star, ShieldCheck } from "lucide-react";
import CTAButton from "./CTAButton";
import heroMockup from "@/assets/hero-mockup.jpg";

const objections = [
  {
    q: "Not sure what to sell?",
    a: "I'll custom build your product idea based on your audience, content style, and income goals.",
  },
  {
    q: "Confused about how to price it?",
    a: "I'll map out the ideal pricing — whether low-ticket, mid-ticket, or premium — with clear reasoning based on your audience size and niche.",
  },
  {
    q: "Will this work for my niche?",
    a: "Everything I deliver is done-for-you and personalized to YOUR situation. Not generic, not templated — I do the thinking, writing, and mapping for you.",
  },
];

const BlueprintHelp = () => (
  <section className="py-16 sm:py-24 relative overflow-hidden bg-secondary/30">
    <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
    <div className="container max-w-5xl mx-auto px-4 relative z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2">
        How Will The
      </h2>
      <h3 className="text-center mb-10">
        <span className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded text-xl sm:text-2xl font-black">
          Offer Blueprint
        </span>{" "}
        <span className="text-2xl sm:text-3xl md:text-4xl font-black">Help?</span>
      </h3>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          {objections.map((obj, i) => (
            <div key={i}>
              <h4 className="flex items-center gap-2 font-bold text-foreground mb-2">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                {obj.q}
              </h4>
              <p className="text-muted-foreground text-sm pl-7">{obj.a}</p>
            </div>
          ))}
          <p className="text-muted-foreground text-sm">
            No matter what you sell (digital products, coaching, services) — if you want a plan that actually turns{" "}
            <span className="text-primary font-semibold">audience attention into revenue…</span>
          </p>
          <p className="text-foreground font-bold text-sm">
            This is the only <span className="underline">DFY plan</span> out there built specifically to do that.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={heroMockup}
            alt="Offer Blueprint Preview"
            className="rounded-xl shadow-card max-w-sm w-full"
          />
        </div>
      </div>

      <div className="mt-12">
        <CTAButton
          text="YES! I WANT MY BLUEPRINT NOW — $47"
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

export default BlueprintHelp;
