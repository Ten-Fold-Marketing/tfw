import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import raynerTeo from "@/assets/clients/rayner-teo.jpeg";
import lukeBassist from "@/assets/clients/luke-bassist.jpeg";
import houstonTrevin from "@/assets/clients/houston-trevin.jpeg";
import andrewRickli from "@/assets/clients/andrew-rickli.jpeg";
import marisaPeer from "@/assets/clients/marisa-peer.jpeg";
import anthonyMiranda from "@/assets/clients/anthony-miranda.png";

const CHECKOUT_URL = "#";

const reviews = [
  {
    name: "Rayner Teo",
    title: "8-Figure Trading Mentor",
    photo: raynerTeo,
    text: "Fantastic on giving detailed and insightful advice for my offer. He took the time to really understand my pain points, and what I was looking to accomplish. Walked away with a game plan I could execute. Highly recommend.",
  },
  {
    name: "Luke (Become A Bassist)",
    title: "Music Entrepreneur",
    photo: lukeBassist,
    text: "As a newbie to monetizing my audience, I got overwhelmed. The blueprint was able to break it down for me. I finally have clarity around what I need to do NOW to start building out my first product.",
  },
  {
    name: "Houston Golden",
    title: "7-Figure LinkedIn Expert",
    photo: houstonTrevin,
    text: "Had an amazing experience with this blueprint! It definitely delivers. I left having more clarity about my offers. Asked all the right questions and then built out my whole offer architecture from front to back.",
  },
  {
    name: "Andrew Rickli",
    title: "8-Figure Trader",
    photo: andrewRickli,
    text: "Great experience with my blueprint for a trading community. One of the most clever ways of building a community, making money, and growing. Gave me a clear plan and solid direction for next steps.",
  },
  {
    name: "Marisa Peer",
    title: "Best-Selling Author",
    photo: marisaPeer,
    text: "So glad I got this. It helped me identify empty spots in my funnel and gain overall clarity. The blueprint is exactly what I've been looking for. Worth every cent.",
  },
  {
    name: "Anthony Miranda",
    title: "Content Creator · 814k YouTube",
    photo: anthonyMiranda,
    text: "Just got my blueprint and I had so many questions about what products to sell. By the end, I had a full strategy that I can't wait to implement. Super helpful and much appreciated.",
  },
];

const BlueprintMoreReviews = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">YES WE HAVE EVEN MORE REVIEWS FROM</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            HAPPY CUSTOMERS
          </h2>
          <p className="text-muted-foreground mt-4">Here's What People Are Saying About Their Custom Blueprints…</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card-premium p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={r.photo} alt={r.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-medium text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.title}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <Button variant="hero" size="xl" className="text-lg px-12 glow-primary" asChild>
            <a href={CHECKOUT_URL}>YES! I WANT MY BLUEPRINT NOW — $97</a>
          </Button>
          <p className="text-sm text-muted-foreground">Get Your Custom Blueprint In 24 Hours Or Less</p>
        </div>
      </div>
    </section>
  );
};

export default BlueprintMoreReviews;
