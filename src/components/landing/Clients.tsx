import houstonGolden from "@/assets/clients/golden-peterson.jpeg";
import trevinPeterson from "@/assets/clients/houston-trevin.jpeg";
import andrewRickli from "@/assets/clients/andrew-rickli.jpeg";
import davidChau from "@/assets/clients/david-chau.webp";
import raynerTeo from "@/assets/clients/rayner-teo.jpeg";
import marisaPeer from "@/assets/clients/marisa-peer.jpeg";
import lukeBassist from "@/assets/clients/luke-bassist.jpeg";
import hattieWilloughby from "@/assets/clients/hattie-willoughby.jpeg";
import anthonyMiranda from "@/assets/clients/anthony-miranda.png";

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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Some Of Our Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've had the privilege of working with incredible entrepreneurs and thought leaders across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreClients.map((client, index) => (
            <div 
              key={index}
              className="relative group rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="text-base font-bold text-white">{client.name}</h4>
                <p className="text-white/90 font-medium text-sm">{client.title}</p>
                {client.subscribers && (
                  <p className="text-xs text-white/70 mt-1">{client.subscribers}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
