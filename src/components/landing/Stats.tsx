import { DollarSign, Clock, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const stats = [{
  icon: DollarSign,
  value: 100,
  prefix: "$",
  suffix: "M+",
  label: "Profitable Ad Spend"
}, {
  icon: Clock,
  value: 8,
  prefix: "",
  suffix: " years",
  label: "of transformative client success"
}, {
  icon: TrendingUp,
  value: 3,
  prefix: "",
  suffix: "x",
  label: "Avg. Growth in Marketing ROI"
}];
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
  return <span className="text-4xl md:text-5xl font-bold text-foreground block mb-2">
      {prefix}{count}{suffix}
    </span>;
};
const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <>
      {/* Proven by numbers section */}
      <section className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
        {/* Background effects */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          {/* Section header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              RESULTS THAT SPEAK FOR THEMSELVES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Proven by{" "}
              <span className="text-gradient">the Numbers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We turn data into revenue. Through strategic analysis and proven frameworks, we help brands scale their digital presence and drive sustainable growth.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:border-accent-secondary/50 transition-all duration-300">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={isInView} />
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Values marquee banner */}
      <div className="w-full bg-[hsl(220,25%,10%)] pt-6 pb-4 overflow-hidden border-y border-border group">
        <p className="text-center font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground">Our Values</p>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...Array(4)].map((_, i) => <div key={i} className="flex items-center gap-12 mx-12">
              <span className="text-white font-semibold tracking-widest uppercase text-sm">Money loves speed</span>
              <span className="text-primary">✦</span>
              <span className="text-white font-semibold tracking-widest uppercase text-sm">Be your true fucking self</span>
              <span className="text-primary">✦</span>
              <span className="text-white font-semibold tracking-widest uppercase text-sm">Attack things with confidence</span>
              <span className="text-primary">✦</span>
              <span className="text-white font-semibold tracking-widest uppercase text-sm">Have a blast making dreams come true</span>
              <span className="text-primary">✦</span>
            </div>)}
        </div>
      </div>
    </>;
};
export default Stats;