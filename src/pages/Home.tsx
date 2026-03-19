import { motion } from "framer-motion";
// import LogoMarquee from "../components/LogoMarquee";
import MetricsTicker from "../components/MetricsTicker";
// import MosaicShowcase from "../components/MosaicShowcase";
// import MediaCarousel from "../components/MediaCarousel";
import EUReachMap from "../components/EUReachMap";
import VideoHero from "../components/VideoHero";
import SpotlightCard from "../components/SpotlightCard";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative">
      <Seo
        title="Robotic Media ™ Infrastructure by Titano"
        description="Robotic Media is a new infrastructure category where autonomous machines become programmable media nodes operating in the physical world. Powered by Titano OS."
        path="/"
      />
      <VideoHero />

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
              {t("home.introTitle")}
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-4xl mx-auto font-light">
              {t("home.introText")}
            </p>
          </SpotlightCard>
        </motion.div>
      </div>

      {/* <section className="mb-32">
        <LogoMarquee />
      </section> */}

      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="mb-12 text-center md:text-left">
          <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
            {t("home.ecosystemTag")}
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            {t("home.ecosystemTitle")}
          </h2>
          <p className="text-lg text-text-secondary mt-4 max-w-3xl">
            {t("home.ecosystemSubtitle")}
          </p>
        </div>
        {/* <MosaicShowcase /> */}
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <MetricsTicker />
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t("home.scaleTitle")}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              {t("home.scaleText")}
            </p>
          </div>
        </div>
        <EUReachMap />
      </section>

      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t("home.mediaTitle")}
          </h2>
          <p className="text-xl text-text-secondary">{t("home.mediaText")}</p>
        </div>
        {/* <MediaCarousel /> */}
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          {t("home.ctaTitle")}
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          {t("home.ctaText")}
        </p>
        <Link
          to="/about-contact"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-white/25"
        >
          {t("home.ctaButton")}
        </Link>
      </section>
    </div>
  );
};

export default Home;
