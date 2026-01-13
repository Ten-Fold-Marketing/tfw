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
import { useState, useRef, useEffect, useCallback } from "react";

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
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentTranslateX = useRef(0);
  
  // Duplicate clients for seamless loop
  const duplicatedClients = [...moreClients, ...moreClients, ...moreClients];

  // Card width including gap (380px + 24px gap on md+, 320px + 24px on smaller)
  const cardWidth = 380 + 24;
  const totalWidth = moreClients.length * cardWidth;

  // Auto-scroll animation
  const animate = useCallback(() => {
    if (!isPaused && !isDragging && marqueeRef.current) {
      currentTranslateX.current -= 0.5; // Speed: pixels per frame
      
      // Reset when we've scrolled one full set
      if (Math.abs(currentTranslateX.current) >= totalWidth) {
        currentTranslateX.current = currentTranslateX.current + totalWidth;
      }
      
      marqueeRef.current.style.transform = `translateX(${currentTranslateX.current}px)`;
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging, totalWidth]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = clientX;
    scrollStartX.current = currentTranslateX.current;
    
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !marqueeRef.current) return;
    
    const deltaX = clientX - dragStartX.current;
    let newTranslateX = scrollStartX.current + deltaX;
    
    // Wrap around for infinite scroll feel
    if (newTranslateX > 0) {
      newTranslateX = newTranslateX - totalWidth;
    } else if (Math.abs(newTranslateX) >= totalWidth * 2) {
      newTranslateX = newTranslateX + totalWidth;
    }
    
    currentTranslateX.current = newTranslateX;
    marqueeRef.current.style.transform = `translateX(${newTranslateX}px)`;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Resume auto-scroll after 2 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
    if (!isDragging) {
      setIsPaused(false);
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="clients" className="section-padding bg-card relative overflow-hidden">
      {/* Section label */}
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <span className="section-label">Partners</span>
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
            Some Of Our <span className="italic">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            We've had the privilege of working with incredible entrepreneurs and thought leaders across various industries. Here are some of them.
          </p>
        </motion.div>
      </div>
      
      {/* Swipable Marquee */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => !isDragging && setIsPaused(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        
        <div
          ref={marqueeRef}
          className="flex gap-6 w-fit"
          style={{ 
            willChange: 'transform',
          }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative w-[320px] md:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 pointer-events-auto"
            >
              {/* Image with proper styling */}
              <div className="absolute inset-0 bg-muted">
                <img 
                  src={client.image} 
                  alt={client.name}
                  width={380}
                  height={285}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <h4 className="text-lg font-display text-foreground mb-1">
                  {client.name}
                </h4>
                <p className="text-foreground/80 text-sm">{client.title}</p>
                {client.subscribers && (
                  <p className="text-xs text-muted-foreground mt-1">
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