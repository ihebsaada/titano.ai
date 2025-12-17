import { motion } from 'framer-motion';
import SpotlightCard from '../SpotlightCard';
import { useTranslation } from 'react-i18next';

const ProofMetrics = () => {
  const { t } = useTranslation();

  const metrics = [
    { value: "450K+", label: t('proofMetrics.monthlyImpressions'), desc: t('proofMetrics.mediaPerLocation') },
    { value: "85%", label: t('proofMetrics.attentionRate'), desc: t('proofMetrics.vsStatic') },
    { value: "100%", label: t('proofMetrics.pathCoverage'), desc: t('proofMetrics.totalCoverage') },
  ];

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <SpotlightCard className="p-8 md:p-12 text-center bg-[#F8F9FA] border-white/0">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-5xl md:text-7xl font-heading font-bold text-accent mb-4 tracking-tight"
              >
                {metric.value}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{metric.label}</h3>
              <p className="text-text-secondary">{metric.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProofMetrics;
