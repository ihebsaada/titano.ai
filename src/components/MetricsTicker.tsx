import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MetricsTicker = () => {
  const { t } = useTranslation();

  const cases = [
    {
      title: t('realWorldData.case1Title'),
      stats: t('realWorldData.case1Stats'),
      footer: t('realWorldData.case1Footer'),
    },
    {
      title: t('realWorldData.case2Title'),
      stats: t('realWorldData.case2Stats'),
      footer: t('realWorldData.case2Footer'),
    },
    {
      title: t('realWorldData.case3Title'),
      stats: t('realWorldData.case3Stats'),
      footer: t('realWorldData.case3Footer'),
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('realWorldData.title')}</h2>
         <p className="text-xl text-text-secondary max-w-3xl">{t('realWorldData.subtitle')}</p>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cases.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-[32px] flex flex-col h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
          >
             <h3 className="text-lg font-bold mb-6 text-accent border-b border-white/10 pb-4 min-h-[60px] flex items-center">
               {item.title}
             </h3>
             <div className="flex-grow mb-8 space-y-3">
               {item.stats.split('\n').map((line, i) => (
                 <p key={i} className="text-lg md:text-xl font-mono font-medium text-foreground">
                   {line}
                 </p>
               ))}
             </div>
             <p className="text-sm text-text-secondary mt-auto pt-4 border-t border-white/5 italic">
               {item.footer}
             </p>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="text-center border-t border-white/10 pt-8">
        <p className="text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider max-w-3xl mx-auto">
          {t('realWorldData.disclaimer')}
        </p>
      </div>
    </div>
  );
};

export default MetricsTicker;
