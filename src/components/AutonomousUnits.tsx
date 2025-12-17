import { motion } from 'framer-motion';
import MagicCard from './MagicCard';
import { useTranslation } from 'react-i18next';

const AutonomousUnits = () => {
  const { t } = useTranslation();

  const units = [
    {
      name: "LUXA",
      subtitle: t('autonomousUnits.luxaSubtitle'),
      tags: ["Retail", "Events", "Brand Activations"],
      gradient: "rgba(47, 128, 237, 0.2)"
    },
    {
      name: "PORTA",
      subtitle: t('autonomousUnits.portaSubtitle'),
      tags: ["Venues", "Campuses", "Operations"],
      gradient: "rgba(16, 185, 129, 0.2)"
    },
    {
      name: "PRAESIDIO",
      subtitle: t('autonomousUnits.praesidioSubtitle'),
      tags: ["Access Control", "Surveillance", "Safety"],
      gradient: "rgba(245, 158, 11, 0.2)"
    }
  ];

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('autonomousUnits.title')}</h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          {t('autonomousUnits.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {units.map((unit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >
            <MagicCard 
              className="h-full p-8 flex flex-col justify-between bg-white border-gray-200 hover:border-accent/30 transition-all duration-300 min-h-[300px]" 
              gradientColor={unit.gradient}
              variant="default"
            >
              <div>
                <h3 className="text-4xl font-heading font-bold mb-2 tracking-tight">{unit.name}</h3>
                <p className="text-lg text-text-secondary font-medium mb-6">{unit.subtitle}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {unit.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>

      <div className="text-center border-t border-gray-200 pt-8 mt-12">
        <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">
          {t('autonomousUnits.disclaimer')}
        </p>
      </div>
    </section>
  );
};

export default AutonomousUnits;
