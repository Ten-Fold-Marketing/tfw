import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import davidChauImg from "@/assets/clients/david-chau.webp";
import raynerTeoImg from "@/assets/clients/rayner-teo.jpeg";

const stats = [
  {
    value: 100,
    prefix: "$",
    suffix: "M+",
    label: "Revenue Generated"
  },
  {
    value: 2.3,
    prefix: "",
    suffix: "M+",
    label: "Emails Collected"
  },
  {
    value: 100,
    prefix: "",
    suffix: "+",
    label: "Happy Partners"
  }
];

const clientWins = [
  {
    name: "David Chau",
    category: "Trading",
    amount: "$1,187,184",
    timeframe: "7 months",
    period: "January to July",
    image: davidChauImg,
    data: [
      { month: "Jan", value: 145000 },
      { month: "Feb", value: 168000 },
      { month: "Mar", value: 195000 },
      { month: "Apr", value: 280000 },
      { month: "May", value: 310000 },
      { month: "Jun", value: 295000 },
      { month: "Jul", value: 265000 },
    ],
  },
  {
    name: "Rayner Teo",
    category: "Finance",
    amount: "$58,642",
    timeframe: "14 days",
    period: "2 week sprint",
    image: raynerTeoImg,
    data: [
      { day: "D1", value: 2100 },
      { day: "D3", value: 5800 },
      { day: "D5", value: 12400 },
      { day: "D7", value: 18900 },
      { day: "D9", value: 28500 },
      { day: "D11", value: 42100 },
      { day: "D14", value: 58642 },
    ],
  },
  {
    name: "AI Revolution",
    category: "AI Mastery",
    amount: "$81,393",
    timeframe: "4 days",
    period: "Launch week",
    image: null,
    data: [
      { day: "D1", value: 18500 },
      { day: "D2", value: 35200 },
      { day: "D3", value: 58900 },
      { day: "D4", value: 81393 },
    ],
  },
];

const values = [
  "Money loves speed",
  "Be your true fucking self",
  "Attack things with confidence",
  "Have a blast making dreams come true"
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  inView
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const isDecimal = value % 1 !== 0;
  
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, isDecimal]);
  
  return (
    <span className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
      {prefix}{isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
};

const AnimatedBar = ({ 
  value, 
  maxValue, 
  delay, 
  inView,
  label
}: { 
  value: number; 
  maxValue: number; 
  delay: number; 
  inView: boolean;
  label: string;
}) => {
  const heightPercent = (value / maxValue) * 100;
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex-1 flex flex-col justify-end h-full cursor-pointer">
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: `${heightPercent}%` } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="w-full bg-gradient-to-t from-primary to-primary/70 rounded-sm hover:from-primary/90 hover:to-primary/60 transition-colors min-h-[4px]"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-card border-border text-foreground">
        <div className="text-center">
          <p className="font-display text-lg">{formatCurrency(value)}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

const ClientWinCard = ({ 
  win, 
  index, 
  inView 
}: { 
  win: typeof clientWins[0]; 
  index: number; 
  inView: boolean;
}) => {
  const maxValue = Math.max(...win.data.map(d => d.value));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden group hover:border-primary/30 transition-colors duration-300"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-4 mb-6">
        {win.image ? (
          <img 
            src={win.image} 
            alt={win.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-border"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center border-2 border-border">
            <span className="text-primary-foreground font-bold text-lg">
              {win.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div>
          <h3 className="font-display text-xl text-foreground">{win.name}</h3>
          <span className="text-sm text-muted-foreground tracking-wide uppercase">{win.category}</span>
        </div>
      </div>
      
      {/* Amount */}
      <div className="relative z-10 mb-6">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="font-display text-4xl md:text-5xl text-foreground"
        >
          {win.amount}
        </motion.span>
        <p className="text-muted-foreground mt-1">
          in <span className="text-foreground font-medium">{win.timeframe}</span>
        </p>
      </div>
      
      {/* Chart */}
      <div className="relative z-10 flex items-end gap-1.5 h-32 mb-4">
        <TooltipProvider delayDuration={0}>
          {win.data.map((point, i) => (
            <AnimatedBar
              key={i}
              value={point.value}
              maxValue={maxValue}
              delay={index * 0.2 + i * 0.1}
              inView={inView}
              label={'month' in point ? point.month : point.day}
            />
          ))}
        </TooltipProvider>
      </div>
      
      {/* X-axis labels */}
      <div className="relative z-10 flex justify-between text-xs text-muted-foreground">
        {win.data.map((point, i) => (
          <span key={i} className="flex-1 text-center">
            {'month' in point ? point.month : point.day}
          </span>
        ))}
      </div>
      
      {/* Period badge */}
      <div className="relative z-10 mt-6 pt-4 border-t border-border/50">
        <span className="inline-flex px-3 py-1.5 bg-muted text-foreground text-xs rounded-full border border-border tracking-wide uppercase">
          {win.period}
        </span>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <>
      {/* Stats section */}
      <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
        <div className="container-wide relative z-10">
          {/* Section label */}
          <div className="flex items-center justify-between mb-8">
            <span className="section-label">OUR RESULTS</span>
          </div>

          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Real Results from <span className="italic">Real</span> Partners
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              These are actual revenue numbers from our partners. No fluff, just results.
            </p>
          </div>

          {/* Client Wins grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {clientWins.map((win, index) => (
              <ClientWinCard key={win.name} win={win} index={index} inView={isInView} />
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                className="text-center md:text-left"
              >
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                  inView={isInView} 
                />
                <p className="text-muted-foreground mt-3 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values marquee */}
      <div className="w-full bg-foreground py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-12">
              {values.map((value, j) => (
                <span key={j} className="flex items-center gap-12">
                  <span className="text-background font-medium tracking-wide uppercase text-sm">
                    {value}
                  </span>
                  <span className="text-background/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;