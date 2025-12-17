import { motion } from 'framer-motion';
import { Compass, Eye, PlaySquare, Cloud, Database } from 'lucide-react';
import MagicCard from '../MagicCard';
import { useTranslation } from 'react-i18next';

const OSLayerStack = () => {
  const { t } = useTranslation();

  const layers = [
    { id: 1, title: t('ecosystem.layer1Title'), desc: t('ecosystem.layer1Desc'), icon: <Compass className="w-5 h-5 text-white" /> },
    { id: 2, title: t('ecosystem.layer2Title'), desc: t('ecosystem.layer2Desc'), icon: <Eye className="w-5 h-5 text-white" /> },
    { id: 3, title: t('ecosystem.layer3Title'), desc: t('ecosystem.layer3Desc'), icon: <PlaySquare className="w-5 h-5 text-white" /> },
    { id: 4, title: t('ecosystem.layer4Title'), desc: t('ecosystem.layer4Desc'), icon: <Cloud className="w-5 h-5 text-white" /> },
    { id: 5, title: t('ecosystem.layer5Title'), desc: t('ecosystem.layer5Desc'), icon: <Database className="w-5 h-5 text-white" /> },
  ];

  return (
    <section className="px-6 md:px-12 max-w-5xl mx-auto mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t('ecosystem.osLayersTitle')}</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          {t('ecosystem.osLayersSubtitle')}
        </p>
      </div>

      <div className="space-y-4">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <MagicCard className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 bg-[#1B1B1B] text-white border-white/10 hover:border-white/20 transition-colors" gradientColor="rgba(255, 255, 255, 0.08)" variant="dark">
              <div className="bg-white/10 p-2 rounded-xl border border-white/5 shrink-0 backdrop-blur-sm w-9 h-9 flex items-center justify-center">
                {layer.icon}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold font-heading mb-1">{layer.title}</h3>
                <p className="text-gray-400">{layer.desc}</p>
              </div>

              <div className="text-sm font-mono text-white/10 hidden md:block text-2xl font-bold">
                0{layer.id}
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OSLayerStack;
