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

const Home = () => {
  return (
    <div className="bg-background min-h-screen relative">
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
              L'autonomia nel mondo reale.
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-4xl mx-auto font-light">
              Titano integra robotica autonoma, piattaforme dati e tecnologia media in un’unica infrastruttura scalabile.
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
           <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Ecosistema</h3>
           <h2 className="text-4xl md:text-5xl font-heading font-bold">Un'unica piattaforma.</h2>
        </div>
        <MosaicShowcase />
      </section>

      {/* Metrics */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <MetricsTicker />
      </section>

      {/* Map & Scale */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Scalabilità Globale.</h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Dagli hub operativi in Europa al supporto remoto globale. La nostra rete è progettata per gestire migliaia di robot simultaneamente.
            </p>
          </div>
        </div>
        <EUReachMap />
      </section>

      {/* Media Carousel */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-24">
        <div className="mb-12 text-center">
           <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Media in Movimento.</h2>
           <p className="text-xl text-text-secondary">Coinvolgi il pubblico dove conta di più.</p>
        </div>
        <MediaCarousel />
      </section>

      <CookieBanner />
    </div>
  );
};

export default Home;
