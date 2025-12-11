import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Sparkline = ({ color = "#2F80ED" }) => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="opacity-50">
    <path 
      d="M0 35 C 20 35, 20 10, 40 10 C 60 10, 60 30, 80 30 C 100 30, 100 5, 120 5" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      fill="none"
    />
    <path 
      d="M0 35 C 20 35, 20 10, 40 10 C 60 10, 60 30, 80 30 C 100 30, 100 5, 120 5 L 120 40 L 0 40 Z" 
      fill={`url(#gradient-${color})`} 
      className="opacity-20"
    />
    <defs>
      <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
        <stop stopColor={color} stopOpacity="0.5"/>
        <stop offset="1" stopColor={color} stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const Counter = ({ value, label }: { value: string, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  // Extract number from string (e.g., "500+" -> 500)
  const numberValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = numberValue / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= numberValue) {
          setCount(numberValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, numberValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-10">
         <Sparkline />
       </div>
       <div className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-2 relative z-10 tracking-tighter">
         {count}{suffix}
       </div>
       <div className="text-xs font-bold tracking-[0.2em] uppercase text-text-secondary">
         {label}
       </div>
    </div>
  );
};

const MetricsTicker = () => {
  const stats = [
    { value: "500+", label: "Robot Attivi" },
    { value: "120", label: "Venue Integrate" },
    { value: "1500", label: "Campagne Gestite" },
    { value: "1M+", label: "Ore di Autonomia" }
  ];

  return (
    <div className="glass-panel rounded-[48px] p-12 md:p-16 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10 divide-x divide-black/5">
         {stats.map((stat, i) => (
           <div key={i} className={i % 2 !== 0 && window.innerWidth < 768 ? "border-l border-black/5 pl-8" : ""}>
             <Counter value={stat.value} label={stat.label} />
           </div>
         ))}
       </div>
    </div>
  );
};

export default MetricsTicker;
