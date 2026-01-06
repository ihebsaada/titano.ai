import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MediaCarousel = () => {
  const { t } = useTranslation();

  const slides = [
    { type: 'image', src: '/Images/New/30381065-7fac-40b9-8d18-4e6940621055.avif', caption: t('mediaCarousel.slide8') },
    { type: 'image', src: '/Images/New/d1dc767c-ee62-44c7-a846-4868885c2f7f.avif', caption: t('mediaCarousel.slide4') },
    { type: 'image', src: '/Images/New/359c3b8d-be7a-4b7a-9ac5-923ae9d3ccd5.avif', caption: t('mediaCarousel.slide5') },
    { type: 'image', src: '/Images/New/049e360d-18ea-4326-9a8f-692a95f7e6fd.avif', caption: t('mediaCarousel.slide6') },
    { type: 'image', src: '/Images/New/0f918059-c5e7-4c76-8f7f-169f9b992765.avif', caption: t('mediaCarousel.slide7') },
    { type: 'image', src: '/Images/New/2c14ed4b-900c-4962-929d-66573a16e0ce.avif', caption: t('mediaCarousel.slide1') },
    { type: 'image', src: '/Images/New/55f31b54-3707-4ae9-8cf8-4f3db432fa33.avif', caption: t('mediaCarousel.slide2') },
    { type: 'image', src: '/Images/New/61525c5f-cde0-453b-a72c-41ed3ca01706.avif', caption: t('mediaCarousel.slide3') },
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
