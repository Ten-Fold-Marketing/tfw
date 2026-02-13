import { motion } from "framer-motion";
import { Star } from "lucide-react";

import raynerTeo from "@/assets/clients/rayner-teo.jpeg";
import houstonTrevin from "@/assets/clients/houston-trevin.jpeg";
import andrewRickli from "@/assets/clients/andrew-rickli.jpeg";
import marisaPeer from "@/assets/clients/marisa-peer.jpeg";
import lukeBassist from "@/assets/clients/luke-bassist.jpeg";
import hattieWilloughby from "@/assets/clients/hattie-willoughby.jpeg";
import anthonyMiranda from "@/assets/clients/anthony-miranda.png";
import davidChau from "@/assets/clients/david-chau.jpeg";
import goldenPeterson from "@/assets/clients/golden-peterson.jpeg";

const testimonials = [
  {
    name: "Rayner Teo",
    title: "8-Figure Trading Mentor · 2.2M YouTube Subscribers",
    photo: raynerTeo,
    text: "Got my blueprint and within a week I had my first digital product live. The clarity on pricing alone was worth 10x the $97. Generated $40,851 in just 14 days after implementing the strategy.",
  },
  {
    name: "Houston Golden",
    title: "7-Figure LinkedIn Expert · 134k LinkedIn Subscribers",
    photo: houstonTrevin,
    text: "HUGE shout out! I was stuck for months trying to figure out what to sell. The blueprint told me exactly what product to create, how to price it, and which tools to use. Already made my money back.",
  },
  {
    name: "Trevin Peterson",
    title: "7-Figure Amazon Business Owner · 158k YouTube Subscribers",
    photo: goldenPeterson,
    text: "Quick shout out — I purchased the blueprint and got a ton of good insights and value. Well worth the cost! If you're a DIYer but want some guidance, this is it.",
  },
  {
    name: "Andrew Rickli",
    title: "8-Figure Trader",
    photo: andrewRickli,
    text: "Results after Day 1 — launched my offer at $47, already got 12 sales. The funnel map was incredibly detailed and specific to my audience. Thanks for the blueprint!",
  },
  {
    name: "Marisa Peer",
    title: "Therapist & Best-Selling Author · 1M+ Followers",
    photo: marisaPeer,
    text: "I had no clear offer structure and purely purchased to learn how to think about product creation. That alone was worth the price of admission. Don't sleep on this, it's so well worth it.",
  },
  {
    name: "Luke (Become A Bassist)",
    title: "Music Entrepreneur · 268k YouTube Subscribers",
    photo: lukeBassist,
    text: "Had my blueprint delivered same day. It helped me map out the entire offer flow. Really took the time to understand my business and gave me practical advice to implement.",
  },
  {
    name: "Hattie Willoughby",
    title: "Social Media Influencer · 340k Instagram Followers",
    photo: hattieWilloughby,
    text: "+1 for this blueprint — great value, awesome advice. You won't go wrong with this helping you out. Finally know exactly what to sell to my audience.",
  },
  {
    name: "Anthony Miranda",
    title: "Content Creator · 814k YouTube Subscribers",
    photo: anthonyMiranda,
    text: "Implemented one thing from the blueprint — added an upsell — and my average order value went from $97 to $150. Take rate has been 33% for 2 weeks straight.",
  },
  {
    name: "David Chau",
    title: "7-Figure Trading Expert · 66k Instagram Followers",
    photo: davidChau,
    text: "Shoutout to this blueprint. It held nothing back, giving me so many good ideas on how I can take my offer to the next level. Generated over $1.1M in revenue following the monetization strategy.",
  },
];

const BlueprintTestimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm text-muted-foreground">Excellent Based On Dozens Of Reviews</span>
          </div>
          <p className="section-label mb-3">What Are Others Saying About</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Blueprints I Build?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card-premium p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueprintTestimonials;
