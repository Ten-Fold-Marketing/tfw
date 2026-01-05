import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

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

// Chart data - monthly performance
const chartData = [
  { month: "Jan", grossSales: 145000, netSales: 120000 },
  { month: "Feb", grossSales: 168000, netSales: 145000 },
  { month: "Mar", grossSales: 195000, netSales: 178000 },
  { month: "Apr", grossSales: 280000, netSales: 250000 },
  { month: "May", grossSales: 310000, netSales: 285000 },
  { month: "Jun", grossSales: 295000, netSales: 260000 },
  { month: "Jul", grossSales: 265000, netSales: 230000 },
  { month: "Aug", grossSales: 220000, netSales: 195000 },
  { month: "Sep", grossSales: 185000, netSales: 160000 },
  { month: "Oct", grossSales: 145000, netSales: 125000 },
  { month: "Nov", grossSales: 120000, netSales: 100000 },
  { month: "Dec", grossSales: 95000, netSales: 78000 },
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

const PerformanceChart = ({ inView }: { inView: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-foreground">Performance</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">David Chau – Trading</span>
          <span className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-full border border-border">
            Year To Date
          </span>
        </div>
      </div>
      
      {/* Stats row */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 pb-6 border-b border-border/50">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Gross Sales</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground">Quantity</span>
            <span className="font-display text-2xl md:text-3xl text-foreground">287</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 opacity-0">Amount</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground">Quantity</span>
            <span className="font-display text-2xl md:text-3xl text-foreground">$1,187,184</span>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Net Sales</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground">Quantity</span>
            <span className="font-display text-2xl md:text-3xl text-foreground">275</span>
          </div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="relative z-10 h-48 md:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="grossGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(148 45% 36%)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(148 45% 36%)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="netGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(45 80% 55%)" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="hsl(45 80% 55%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(45 15% 65%)', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(45 15% 65%)', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}K`}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(165 22% 17%)', 
                border: '1px solid hsl(165 15% 25%)',
                borderRadius: '8px',
                color: 'hsl(45 30% 92%)'
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            />
            <Area 
              type="monotone" 
              dataKey="grossSales" 
              stroke="hsl(148 45% 36%)" 
              strokeWidth={2}
              fill="url(#grossGradient)"
              animationDuration={2000}
              animationBegin={inView ? 0 : 99999}
            />
            <Area 
              type="monotone" 
              dataKey="netSales" 
              stroke="hsl(45 80% 55%)" 
              strokeWidth={2}
              fill="url(#netGradient)"
              animationDuration={2000}
              animationBegin={inView ? 300 : 99999}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="relative z-10 flex items-center justify-center gap-8 mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-primary" />
          <span className="text-sm text-muted-foreground">Gross Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(45 80% 55%)' }} />
          <span className="text-sm text-muted-foreground">Net Sales</span>
        </div>
      </div>
      
      {/* Footer note */}
      <p className="relative z-10 text-center text-xs text-muted-foreground mt-4">
        Based on captured transactions, updated every business day.
      </p>
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
          <div className="flex items-center justify-between mb-16">
            <span className="section-label">OUR RESULTS</span>
            <span className="section-label">02</span>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Our Principles for <span className="italic">Lasting</span> Results
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
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

          {/* Performance Chart */}
          <PerformanceChart inView={isInView} />
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