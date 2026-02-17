import { Star, ShieldCheck, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import raynerImg from "@/assets/clients/rayner-teo.jpeg";
import blueprintMockup from "@/assets/blueprint-mockup.png";
import AvatarStrip from "./AvatarStrip";

const HeroSection = () => (
  <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container max-w-6xl mx-auto px-4 relative z-10">
      {/* Social proof badge */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <AvatarStrip size="md" />
        <div className="flex flex-col">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
            Trusted by 500+ Creators
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center leading-tight mb-4 max-w-4xl mx-auto">
        I'll Personally Build Your Complete{" "}
        <span className="text-gradient-gold">Monetization Blueprint</span> — What to Sell,
        How to Price It, How to Deliver It & How to Sell It —{" "}
        <span className="text-gradient-gold">In 24 Hours!</span>
      </h1>

      <p className="text-muted-foreground text-center text-base sm:text-lg max-w-3xl mx-auto mb-10">
        All You Have To Do Is Fill Out A Simple 5-Minute Form About Your Audience
        And I'll Give You A Complete Custom Monetization Plan!
      </p>

      {/* Product image + Order box */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto items-center">
        {/* Left: Product mockup */}
        <div className="flex flex-col items-center">
          <img
            src={blueprintMockup}
            alt="24-Hour Offer Blueprint"
            className="w-full max-w-sm rounded-xl shadow-gold"
          />
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              "Your Exact Product Idea",
              "A Core Promise That Converts",
              "Your Pricing Model",
              "Your Funnel Map",
              "Your Selling Strategy",
              "Your Complete Tech Stack",
              "Product Structure & Outline",
              "Delivered In 24 Hours",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Order Box */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-secondary p-4 text-center">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              ⭐ Rated 5/5 · Trusted by 500+ Creators
            </p>
          </div>

          <div className="p-5 text-center">
            <p className="font-bold text-foreground uppercase tracking-wide text-sm mb-1">
              Only A Few Spots Left
            </p>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-primary font-extrabold text-2xl">ONLY</span>
              <span className="text-muted-foreground line-through text-lg">$500.00</span>
              <span className="text-primary font-extrabold text-2xl">$47</span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">(SAVE $453.00 TODAY)</p>
            <p className="text-foreground/80 text-sm mb-4">
              Get Your Custom Blueprint For <span className="line-through">$500</span> Just $47!
              <br />Delivered in 24 Hours Or Less.
            </p>

            <a
              href="https://go.tenfoldmarketing.com/24hourofferblueprintcheckout"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-extrabold text-sm px-6 py-4 rounded-lg shadow-gold hover:scale-[1.02] transition-transform"
            >
              GET YOUR BLUEPRINT NOW
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-muted-foreground text-xs mt-2">
              Get Your Blueprint In 24 Hours
            </p>

            {/* Trust badges */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-center gap-1 text-muted-foreground text-xs mb-2">
                <Lock className="w-3 h-3" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center justify-center gap-3 mb-3">
                {["VISA", "MC", "AMEX"].map((card) => (
                  <span key={card} className="bg-secondary px-2 py-1 rounded text-xs text-muted-foreground font-bold">
                    {card}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="font-bold text-foreground text-xs">MONEY BACK GUARANTEE</p>
                  <p className="text-muted-foreground text-[10px]">Total Clarity or Your Money Back</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-[10px] mt-3 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> 100% Secure 256-Bit Encrypted Checkout
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial quote */}
      <div className="max-w-3xl mx-auto flex items-start gap-4 bg-card border border-border rounded-xl p-5">
        <img
          src={raynerImg}
          alt="Rayner Teo"
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-primary italic font-semibold text-sm mb-1">
            "Got my blueprint and it was exactly what I needed. Generated $40,851 in just 14 days after implementing the strategy. Worth every penny."
          </p>
          <p className="text-foreground font-bold text-sm">
            Rayner Teo <span className="text-muted-foreground font-normal">— 8-Figure Trading Mentor · 2.2M YouTube Subscribers</span>
          </p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
