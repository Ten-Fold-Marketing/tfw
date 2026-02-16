import { Star } from "lucide-react";
import CTAButton from "./CTAButton";
import raynerImg from "@/assets/clients/rayner-teo.jpeg";
import houstonImg from "@/assets/clients/houston-golden.jpeg";
import lukeImg from "@/assets/clients/luke-bassist.jpeg";
import andrewImg from "@/assets/clients/andrew-rickli.jpeg";
import marisaImg from "@/assets/clients/marisa-peer.jpeg";
import anthonyImg from "@/assets/clients/anthony-miranda.png";

const moreTestimonials = [
  {
    name: "Rayner Teo",
    title: "8-Figure Trading Mentor",
    text: "Fantastic on giving detailed and insightful advice for my offer. He took the time to really understand my pain points, and what I was looking to accomplish. Walked away with a game plan I could execute. Highly recommend.",
    img: raynerImg,
  },
  {
    name: "Luke (Become A Bassist)",
    title: "Music Entrepreneur",
    text: "As a newbie to monetizing my audience, I got overwhelmed. The blueprint was able to break it down for me. I finally have clarity around what I need to do NOW to start building out my first product.",
    img: lukeImg,
  },
  {
    name: "Houston Golden",
    title: "7-Figure LinkedIn Expert",
    text: "Had an amazing experience with this blueprint! It definitely delivers. I left having more clarity about my offers. Asked all the right questions and then built out my whole offer architecture from front to back.",
    img: houstonImg,
  },
  {
    name: "Andrew Rickli",
    title: "8-Figure Trader",
    text: "Great experience with my blueprint for a trading community. One of the most clever ways of building a community, making money, and growing. Gave me a clear plan and solid direction for next steps.",
    img: andrewImg,
  },
  {
    name: "Marisa Peer",
    title: "Best-Selling Author",
    text: "So glad I got this. It helped me identify empty spots in my funnel and gain overall clarity. The blueprint is exactly what I've been looking for. Worth every cent.",
    img: marisaImg,
  },
  {
    name: "Anthony Miranda",
    title: "Content Creator · 814k YouTube",
    text: "Just got my blueprint and I had so many questions about what products to sell. By the end, I had a full strategy that I can't wait to implement. Super helpful and much appreciated.",
    img: anthonyImg,
  },
];

const BlueprintMoreReviews = () => (
  <section className="py-16 sm:py-20">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2">
        YES WE HAVE EVEN MORE REVIEWS FROM
      </h2>
      <h3 className="text-center mb-4">
        <span className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded text-xl sm:text-2xl font-black">
          HAPPY CUSTOMERS
        </span>
      </h3>
      <p className="text-muted-foreground text-center mb-10">
        Here's What People Are Saying About Their Custom Blueprints…
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {moreTestimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
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

      <CTAButton
        text="YES! I WANT MY BLUEPRINT NOW — $97"
        subtext="Get Your Custom Blueprint In 24 Hours Or Less"
      />
    </div>
  </section>
);

export default BlueprintMoreReviews;
