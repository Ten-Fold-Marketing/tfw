import houstonGolden from "@/assets/clients/golden-peterson.jpeg";
import trevinPeterson from "@/assets/clients/houston-trevin.jpeg";
import andrewRickli from "@/assets/clients/andrew-rickli.jpeg";
import davidChau from "@/assets/clients/david-chau.webp";
import raynerTeo from "@/assets/clients/rayner-teo.jpeg";
import marisaPeer from "@/assets/clients/marisa-peer.jpeg";
import lukeBassist from "@/assets/clients/luke-bassist.jpeg";
import hattieWilloughby from "@/assets/clients/hattie-willoughby.jpeg";
import anthonyMiranda from "@/assets/clients/anthony-miranda.png";
import { motion } from "framer-motion";

const moreClients = [
  {
    name: "Houston Golden",
    title: "7-Figure LinkedIn Expert",
    subscribers: "134k Subscribers on LinkedIn",
    image: houstonGolden
  },
  {
    name: "Trevin Peterson",
    title: "7-Figure Amazon Business Owner",
    subscribers: "158k Subscribers on YouTube",
    image: trevinPeterson
  },
  {
    name: "Andrew Rickli",
    title: "8-Figure Trader",
    image: andrewRickli
  },
  {
    name: "David Chau",
    title: "7-Figure Trading Expert",
    subscribers: "66k Subscribers on Instagram",
    image: davidChau
  },
  {
    name: "Luke Become A Bassist",
    title: "Music Entrepreneur",
    subscribers: "268k Subscribers on YouTube",
    image: lukeBassist
  },
  {
    name: "Rayner Teo",
    title: "8-Figure Trading Mentor",
    subscribers: "2.2M Subscribers on YouTube",
    image: raynerTeo
  },
  {
    name: "Marisa Peer",
    title: "Therapist & Best-Selling Author",
    subscribers: "1M+ Followers",
    image: marisaPeer
  },
  {
    name: "Hattie Willoughby",
    title: "Social Media Influencer",
    subscribers: "340k Followers on Instagram",
    image: hattieWilloughby
  },
  {
    name: "Anthony Miranda",
    title: "Content Creator",
    subscribers: "814k Subscribers on YouTube",
    image: anthonyMiranda
  }
];

const Clients = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Section label */}
      <div className="container-wide relative z-10">
        <div className="flex items-center justify-between mb-16">
          <span className="section-label">Selected Clients</span>
          <span className="section-label">01</span>
        </div>
        
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Some Of Our <span className="italic">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            We've had the privilege of working with incredible entrepreneurs and thought leaders across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreClients.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img 
                src={client.image} 
                alt={client.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-lg font-display text-foreground">{client.name}</h4>
                <p className="text-foreground/80 text-sm">{client.title}</p>
                {client.subscribers && (
                  <p className="text-xs text-muted-foreground mt-1">{client.subscribers}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;