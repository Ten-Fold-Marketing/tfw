import { ShieldCheck, Star } from "lucide-react";
import CTAButton from "./CTAButton";
import heroMockup from "@/assets/hero-mockup.jpg";
import AvatarStrip from "./AvatarStrip";

const BlueprintFinalCTA = () => (
  <section className="py-16 sm:py-24 relative overflow-hidden bg-secondary/30">
    <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
    <div className="container max-w-5xl mx-auto px-4 relative z-10">
      <p className="text-primary text-center text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
        LIMITED TIME SPECIAL — GET YOUR PERSONALIZED BLUEPRINT FOR JUST $97
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4">
        The Only Done-For-You Solution To Get Your
        Monetization Plan In{" "}
        <span className="bg-gradient-gold text-primary-foreground px-2 py-0.5 rounded">24 Hours</span>{" "}
        or Less…
      </h2>

      <p className="text-muted-foreground text-center text-base max-w-3xl mx-auto mb-10">
        I've spent years architecting offers and building monetization plans for creators —
        which has given me the ability to give you a winning blueprint for your market
        almost instantly after completing your form!
      </p>

      <div className="flex justify-center mb-10">
        <img
          src={heroMockup}
          alt="24-Hour Offer Blueprint"
          className="max-w-md w-full rounded-xl shadow-gold"
        />
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

export default BlueprintFinalCTA;
