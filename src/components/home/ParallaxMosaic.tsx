import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { 
    src: "/Images/Other/637149d4-1ff3-4ca0-9950-699e3695a760.avif", 
    title: "Titano Technology", 
    subtitle: "Advanced Neural Networks" 
  },
  { 
    src: "/Images/Other/b4334c45-be35-4cf8-a50b-a9f4146f5e99.avif", 
    title: "Data Visualization", 
    subtitle: "Real-time Analytics" 
  },
  { 
    src: "/Images/Other/fe1cf94c-2f9d-40a5-8553-7df43880f4e2.avif", 
    title: "AI Processing", 
    subtitle: "Core Computing Units" 
  },
  { 
    src: "/Images/Other/Tavola da disegno 3 copia.jpg", 
    title: "Strategic Planning", 
    subtitle: "Automated Workflows" 
  },
  { 
    src: "/Images/Other/2bce8a51-f233-437a-97b3-360431a2f4b4.avif", 
    title: "Digital Innovation", 
    subtitle: "Future-Ready Architecture" 
  }
];

import { ChevronDown } from 'lucide-react';

const ParallaxMosaic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = panelsRef.current.filter(p => p !== null);
    
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false,
      });
    });

    // Animate scroll indicator
    // Show when the container enters viewport
    ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 80%",
        onEnter: () => gsap.to(scrollIndicatorRef.current, { opacity: 1, duration: 0.5 }),
        onLeave: () => gsap.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.5 }),
        onEnterBack: () => gsap.to(scrollIndicatorRef.current, { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.5 })
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Intro / Trigger Section */}
      <div className="py-24 px-6 md:px-12 text-center bg-background relative z-10">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">System Architecture</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Explore the layers of intelligence that power Titano AI.
        </p>
      </div>

      {images.map((img, i) => (
        <div 
          key={i}
          ref={el => panelsRef.current[i] = el}
          className="panel h-screen w-full flex items-center justify-center overflow-hidden bg-background border-t border-white/10"
          style={{ zIndex: i + 1 }} // Ensure stacking order
        >
          {/* Background Image with Parallax-like feel (static in container but container moves) */}
          <div className="absolute inset-0 w-full h-full">
             <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
             <img 
               src={img.src} 
               alt={img.title} 
               className="w-full h-full object-cover opacity-80"
             />
          </div>

          {/* Tech Overlay Content */}
          <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col justify-between h-full py-24 md:py-32 pointer-events-none">
            
            {/* Top Bar */}
            <div className="flex justify-between items-start border-b border-white/20 pb-6">
              <span className="text-accent font-mono text-xl md:text-2xl">0{i + 1}</span>
            </div>

            {/* Main Title */}
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tighter uppercase">
                {img.title}
              </h3>
              <p className="text-xl md:text-2xl text-accent font-mono border-l-2 border-accent pl-4">
                {img.subtitle}
              </p>
            </div>

            {/* Bottom Tech Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400 font-mono pt-8 border-t border-white/10">
               <div>
                 <span className="block text-xs text-gray-600 mb-1">STATUS</span>
                 <span className="text-white">OPERATIONAL</span>
               </div>
               <div>
                 <span className="block text-xs text-gray-600 mb-1">LOAD</span>
                 <span className="text-white">{85 + i * 2}%</span>
               </div>
               <div className="hidden md:block">
                 <span className="block text-xs text-gray-600 mb-1">ID</span>
                 <span className="text-white">SYS-00{i + 1}-X</span>
               </div>
            </div>

          </div>

          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
              backgroundSize: '100px 100px' 
            }} 
          />
        </div>
      ))}
      
      {/* Spacing at the bottom to allow scrolling past the last panel */}
      <div className="h-[50vh] bg-background"></div>

      {/* Global Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none opacity-0"
      >
        <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Scroll to Explore</span>
        <ChevronDown className="text-accent animate-bounce w-6 h-6" />
      </div>
    </div>
  );
};

export default ParallaxMosaic;
