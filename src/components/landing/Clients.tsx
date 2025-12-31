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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut" as const
    }
  })
};

const Clients = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Section label */}
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <span className="section-label">Selected Clients</span>
          <span className="section-label">01</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Some Of Our <span className="italic">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            We've had the privilege of working with incredible entrepreneurs and thought leaders across various industries.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreClients.map((client, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image with proper styling */}
              <div className="absolute inset-0 bg-muted">
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 client-overlay opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <motion.h4 
                  className="text-lg font-display text-foreground mb-1"
                >
                  {client.name}
                </motion.h4>
                <p className="text-foreground/80 text-sm">{client.title}</p>
                {client.subscribers && (
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {client.subscribers}
                  </p>
                )}
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-foreground/0 group-hover:border-foreground/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;