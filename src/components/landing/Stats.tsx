import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

const values = [
  "Money loves speed",
  "Be your true fucking self",
  "Attack things with confidence",
  "Have a blast making dreams come true"
];

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
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <span className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
      {prefix}{count}{suffix}
    </span>
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
          <div className="flex items-center justify-between mb-16">
            <span className="section-label">Benefits</span>
            <span className="section-label">02</span>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Our Principles for <span className="italic">Lasting</span> Results
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
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