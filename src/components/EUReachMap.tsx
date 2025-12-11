import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const locations = [
  { name: "Milano (HQ)", coords: [45.4642, 9.1900] as [number, number] },
  { name: "Paris", coords: [48.8566, 2.3522] as [number, number] },
  { name: "Berlin", coords: [52.5200, 13.4050] as [number, number] },
  { name: "Madrid", coords: [40.4168, -3.7038] as [number, number] },
];

const EUReachMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let height = 0;

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
            height = canvasRef.current.offsetHeight;
        }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.95, 0.95, 0.95],
      markerColor: [0.184, 0.502, 0.929],
      glowColor: [0.9, 0.9, 0.9],
      markers: locations.map(loc => ({ location: loc.coords, size: 0.08 })),
      onRender: (state) => {
        // Drag interaction
        if (pointerInteracting.current !== null) {
            const delta = pointerInteractionMovement.current;
            phi += delta * 0.005;
            pointerInteractionMovement.current = 0;
        } else {
             phi += 0.003;
        }

        state.phi = phi;
        state.width = width * 2;
        state.height = height * 2;
      },
      scale: 1,
    });

    // Fade in canvas
    setTimeout(() => {
        if (canvasRef.current) {
            canvasRef.current.style.opacity = '1';
        }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#F8F9FA] rounded-[48px] overflow-hidden border border-black/5 flex items-center justify-center group">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
       
       <div className="absolute top-8 left-8 z-10 hidden md:block">
           <div className="space-y-2">
               {locations.map((loc, i) => (
                   <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                   >
                       <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                       <span className="text-sm font-medium text-foreground/70">{loc.name}</span>
                   </motion.div>
               ))}
           </div>
       </div>

       <canvas
         ref={canvasRef}
         className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-1000 opacity-0"
         style={{ width: '100%', height: '100%', objectFit: 'contain' }}
         onPointerDown={(e) => {
           pointerInteracting.current = e.clientX;
           canvasRef.current!.style.cursor = 'grabbing';
         }}
         onPointerUp={() => {
           pointerInteracting.current = null;
           canvasRef.current!.style.cursor = 'grab';
         }}
         onPointerOut={() => {
           pointerInteracting.current = null;
           canvasRef.current!.style.cursor = 'grab';
         }}
         onMouseMove={(e) => {
           if (pointerInteracting.current !== null) {
             const delta = e.clientX - pointerInteracting.current;
             pointerInteractionMovement.current = delta;
             pointerInteracting.current = e.clientX;
           }
         }}
         onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
                const delta = e.touches[0].clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta;
                pointerInteracting.current = e.touches[0].clientX;
            }
         }}
         onTouchStart={(e) => {
            if (e.touches[0]) {
                pointerInteracting.current = e.touches[0].clientX;
            }
         }}
         onTouchEnd={() => {
             pointerInteracting.current = null;
         }}
       />

       <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium shadow-sm flex items-center gap-2">
         <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
         </span>
         Global Operations Active
       </div>
    </div>
  );
};

export default EUReachMap;