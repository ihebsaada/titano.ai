import { motion } from 'framer-motion';
import SpotlightCard from '../SpotlightCard';
import { useTranslation } from 'react-i18next';

const RoboticsAlternating = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('ecosystem.autonomyUpgrade'),
      desc: t('ecosystem.autonomyUpgradeDesc'),
      image: "public/Images/New/049e360d-18ea-4326-9a8f-692a95f7e6fd.avif",
      align: "left"
    },
    {
      title: t('ecosystem.navigation'),
      desc: t('ecosystem.navigationDesc'),
      image: "/Images/New/55f31b54-3707-4ae9-8cf8-4f3db432fa33.avif",
      align: "right"
    },
    {
      title: t('ecosystem.interactionSafety'),
      desc: t('ecosystem.interactionSafetyDesc'),
      image: "public/Images/New/0f918059-c5e7-4c76-8f7f-169f9b992765.avif",
      align: "left"
    }
  ];

  return (
    <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32 space-y-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('ecosystem.roboticsLayer')}</h2>
        <p className="text-xl text-text-secondary">{t('ecosystem.roboticsSubtitle')}</p>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${section.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${section.image}')` }}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: section.align === 'left' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <SpotlightCard className="p-8 md:p-12 bg-white/50 border-white/40">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{section.title}</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                {section.desc}
              </p>
            </SpotlightCard>
          </motion.div>

        </div>
      ))}
    </section>
  );
};

export default RoboticsAlternating;
