import { motion } from 'framer-motion';
import EUReachMap from '../EUReachMap';
import SpotlightCard from '../SpotlightCard';
import { useTranslation } from 'react-i18next';

const OperationsHubSection = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t('ecosystem.impressions'), value: t('ecosystem.certified') },
    { label: t('ecosystem.campaigns'), value: t('ecosystem.realtime') },
    { label: t('ecosystem.uptime'), value: t('ecosystem.highAvailability') },
    { label: t('ecosystem.network'), value: "EU" },
  ];

  return (
    <section className="bg-[#101010] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="px-6 md:px-12 max-w-[1920px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-4"
            >
              {t('ecosystem.operationsHubTitle')}
            </motion.h2>
            <p className="text-gray-400 text-xl max-w-xl">
              {t('ecosystem.operationsHubText')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl"
              >
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-white font-mono font-bold">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SpotlightCard className="p-2 bg-white/5 border-white/10 rounded-[52px]" spotlightColor="rgba(255, 255, 255, 0.05)">
            <EUReachMap theme="dark" className="rounded-[48px]" />
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
};

export default OperationsHubSection;
