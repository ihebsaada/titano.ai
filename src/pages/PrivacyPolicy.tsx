import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SpotlightCard from '../components/SpotlightCard';
import { Settings } from 'lucide-react';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  const sections = [
    { title: t('privacy.section1Title'), text: t('privacy.section1Text') },
    { title: t('privacy.section2Title'), text: t('privacy.section2Text') },
    { title: t('privacy.section3Title'), text: t('privacy.section3Text') },
    { title: t('privacy.section4Title'), text: t('privacy.section4Text') },
    { title: t('privacy.section5Title'), text: t('privacy.section5Text') },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(#808080 1px, transparent 1px), linear-gradient(90deg, #808080 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-foreground tracking-tight">
            {t('privacy.title')}
          </h1>
          <p className="text-text-secondary font-mono text-sm mb-12 uppercase tracking-widest">
            {t('privacy.lastUpdated')}
          </p>

          <SpotlightCard className="p-8 md:p-12 bg-white/5 border-white/10 rounded-[40px] mb-12" spotlightColor="rgba(255, 255, 255, 0.05)">
            <p className="text-xl text-foreground leading-relaxed mb-12 font-light">
              {t('privacy.intro')}
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed text-lg font-light">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8 md:p-12 bg-white/5 border-white/10 rounded-[40px] text-center" spotlightColor="rgba(255, 255, 255, 0.05)">
            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
              {t('cookies.settings')}
            </h3>
            <p className="text-text-secondary leading-relaxed text-lg font-light mb-8 max-w-2xl mx-auto">
              {t('cookies.description')}
            </p>
            <button
              onClick={handleOpenCookieSettings}
              className="inline-flex items-center gap-2 bg-foreground text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all duration-300 shadow-lg"
            >
              <Settings size={20} />
              {t('cookies.settings')}
            </button>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
