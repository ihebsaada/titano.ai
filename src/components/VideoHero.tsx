import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Dither from './Dither';

const VideoHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-dark">
      {/* Dither Background Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Dither 
          colorNum={2.5}
          waveColor={[0.5, 0.5, 0.5]}
          enableMouseInteraction={true}
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          mouseRadius={0.3}
        />
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-10">
         <video
            key={isMobile ? 'mobile' : 'desktop'}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={isMobile ? "/videos/video-mobile.mp4" : "/videos/Sequenza 01_4.mp4"}
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl font-light"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            to="/ecosistema"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-dark rounded-full font-bold text-lg hover:bg-gray-200 transition-all"
          >
            {t('hero.explore')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoHero;
