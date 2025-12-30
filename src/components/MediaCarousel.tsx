import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MediaCarousel = () => {
  const { t } = useTranslation();

  const slides = [
    { type: 'image', src: '/Images/Other/02bdab73-a5c4-4f0c-8366-cecd97c66bd2.avif', caption: t('mediaCarousel.slide1') },
    { type: 'image', src: '/Images/Other/0386869e-0855-4ba7-b11d-594f52ee27e6.avif', caption: t('mediaCarousel.slide2') },
    { type: 'image', src: '/Images/Other/0df45e80-4782-4307-826b-50c650ef31c5.avif', caption: t('mediaCarousel.slide3') },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  return (
    <div 
      className="relative w-full h-[500px] md:h-[700px] rounded-[48px] overflow-hidden group bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[current].src}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
        <div className="max-w-md">
           <motion.p 
             key={`caption-${current}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-white text-2xl md:text-3xl font-heading font-bold leading-tight"
           >
             {slides[current].caption}
           </motion.p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute top-8 right-8 flex gap-2">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaCarousel;
