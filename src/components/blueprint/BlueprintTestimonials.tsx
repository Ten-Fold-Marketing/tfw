import { Star } from "lucide-react";
import raynerImg from "@/assets/clients/rayner-teo.jpeg";
import houstonImg from "@/assets/clients/houston-golden.jpeg";
import trevinImg from "@/assets/clients/trevin-peterson.jpeg";
import andrewImg from "@/assets/clients/andrew-rickli.jpeg";
import marisaImg from "@/assets/clients/marisa-peer.jpeg";
import lukeImg from "@/assets/clients/luke-bassist.jpeg";
import hattieImg from "@/assets/clients/hattie-willoughby.jpeg";
import anthonyImg from "@/assets/clients/anthony-miranda.png";

const testimonials = [
  {
    name: "Rayner Teo",
    title: "8-Figure Trading Mentor · 2.2M YouTube Subscribers",
    text: "Got my blueprint and within a week I had my first digital product live. The clarity on pricing alone was worth 10x the $97. Generated $40,851 in just 14 days after implementing the strategy.",
    img: raynerImg,
  },
  {
    name: "Houston Golden",
    title: "7-Figure LinkedIn Expert · 134k LinkedIn Subscribers",
    text: "HUGE shout out! I was stuck for months trying to figure out what to sell. The blueprint told me exactly what product to create, how to price it, and which tools to use. Already made my money back.",
    img: houstonImg,
  },
  {
    name: "Trevin Peterson",
    title: "7-Figure Amazon Business Owner · 158k YouTube Subscribers",
    text: "Quick shout out — I purchased the blueprint and got a ton of good insights and value. Well worth the cost! If you're a DIYer but want some guidance, this is it.",
    img: trevinImg,
  },
  {
    name: "Andrew Rickli",
    title: "8-Figure Trader",
    text: "Results after Day 1 — launched my offer at $47, already got 12 sales. The funnel map was incredibly detailed and specific to my audience. Thanks for the blueprint!",
    img: andrewImg,
  },
  {
    name: "Marisa Peer",
    title: "Therapist & Best-Selling Author · 1M+ Followers",
    text: "I had no clear offer structure and purely purchased to learn how to think about product creation. That alone was worth the price of admission. Don't sleep on this, it's so well worth it.",
    img: marisaImg,
  },
  {
    name: "Luke (Become A Bassist)",
    title: "Music Entrepreneur · 268k YouTube Subscribers",
    text: "Had my blueprint delivered same day. It helped me map out the entire offer flow. Really took the time to understand my business and gave me practical advice to implement.",
    img: lukeImg,
  },
  {
    name: "Hattie Willoughby",
    title: "Social Media Influencer · 340k Instagram Followers",
    text: "+1 for this blueprint — great value, awesome advice. You won't go wrong with this helping you out. Finally know exactly what to sell to my audience.",
    img: hattieImg,
  },
  {
    name: "Anthony Miranda",
    title: "Content Creator · 814k YouTube Subscribers",
    text: "Implemented one thing from the blueprint — added an upsell — and my average order value went from $97 to $150. Take rate has been 33% for 2 weeks straight.",
    img: anthonyImg,
  },
  {
    name: "David Chau",
    title: "7-Figure Trading Expert · 66k Instagram Followers",
    text: "Shoutout to this blueprint. It held nothing back, giving me so many good ideas on how I can take my offer to the next level. Generated over $1.1M in revenue following the monetization strategy.",
    img: null,
  },
];

const BlueprintTestimonials = () => (
  <section className="py-16 sm:py-20">
    <div className="container max-w-6xl mx-auto px-4">
      <p className="text-center mb-3">
        <span className="bg-secondary text-muted-foreground text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full inline-flex items-center gap-1">
          ⭐ Excellent Based On Dozens Of Reviews
        </span>
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-3">
        What Are Others <span className="text-gradient-gold">Saying</span> About
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10">
        Blueprints I Build?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              {t.img ? (
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.title}</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlueprintTestimonials;
