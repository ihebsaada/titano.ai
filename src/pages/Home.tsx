import { motion } from 'framer-motion';
import BackgroundCanvas from '../components/BackgroundCanvas';
import LogoMarquee from '../components/LogoMarquee';
import MetricsTicker from '../components/MetricsTicker';
import MosaicShowcase from '../components/MosaicShowcase';
import MediaCarousel from '../components/MediaCarousel';
import EUReachMap from '../components/EUReachMap';
import VideoHero from '../components/VideoHero';
import CookieBanner from '../components/CookieBanner';
import SpotlightCard from '../components/SpotlightCard';
import AutonomousUnits from '../components/AutonomousUnits';
import ParallaxMosaic from '../components/home/ParallaxMosaic';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background min-h-screen relative">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-[0.1] z-0 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(#808080 1px, transparent 1px), linear-gradient(90deg, #808080 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <BackgroundCanvas />
      
      <VideoHero />

      {/* Floating Intro Section */}
      <div className="relative z-10 -mt-24 px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] shadow-2xl"
        >
          <SpotlightCard className="rounded-[40px] p-8 md:p-16 text-center backdrop-blur-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-foreground tracking-tight">
              {t('home.introTitle')}
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-4xl mx-auto font-light">
              {t('home.introText')}
            </p>
          </SpotlightCard>
        </motion.div>
      </div>

      {/* Trust Logos */}
      <section className="mb-32">
        <LogoMarquee />
      </section>

      {/* Mosaic Showcase (Pillars) */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="mb-12 text-center md:text-left">
           <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">{t('home.ecosystemTag')}</h3>
           <h2 className="text-4xl md:text-5xl font-heading font-bold">{t('home.ecosystemTitle')}</h2>
        </div>
        <MosaicShowcase />
      </section>

      {/* Autonomous Units */}
      <AutonomousUnits />

      {/* Metrics */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <MetricsTicker />
      </section>

      {/* Map & Scale */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t('home.scaleTitle')}</h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              {t('home.scaleText')}
            </p>
          </div>
        </div>
        <EUReachMap />
      </section>

      {/* Media Carousel */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-24">
        <div className="mb-12 text-center">
           <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('home.mediaTitle')}</h2>
           <p className="text-xl text-text-secondary">{t('home.mediaText')}</p>
        </div>
        <MediaCarousel />
      </section>

      {/* Parallax Image Mosaic */}
      <ParallaxMosaic />

      {/* CTA Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 mt-[70vh] text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t('home.ctaTitle')}</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          {t('home.ctaText')}
        </p>
        <Link 
          to="/about-contact" 
          className="inline-block bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/25"
        >
          {t('home.ctaButton')}
        </Link>
      </section>

      <CookieBanner />
    </div>
  );
};

export default Home;
