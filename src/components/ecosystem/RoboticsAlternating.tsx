import { motion } from 'framer-motion';
import SpotlightCard from '../SpotlightCard';
import { useTranslation } from 'react-i18next';

const RoboticsAlternating = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('ecosystem.autonomyUpgrade'),
      desc: t('ecosystem.autonomyUpgradeDesc'),
      image: "/Images/2.png",
      align: "left"
    },
    {
      title: t('ecosystem.navigation'),
      desc: t('ecosystem.navigationDesc'),
      image: "/Images/robot-4.jpg",
      align: "right"
    },
    {
      title: t('ecosystem.interactionSafety'),
      desc: t('ecosystem.interactionSafetyDesc'),
      image: "/Images/1.png",
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
