import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { GraduationCap, ShoppingBag, Calendar, Plane, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCasesMosaic = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
      <div className="text-center mb-12">
         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('useCases.verticals')}</h2>
         <p className="text-xl text-text-secondary">{t('useCases.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">{t('useCases.universities')}</h3>
              <p className="text-gray-400">{t('useCases.universitiesDesc')}</p>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">{t('useCases.retail')}</h3>
              <p className="text-gray-400">{t('useCases.retailDesc')}</p>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">{t('useCases.events')}</h3>
              <p className="text-gray-400">{t('useCases.eventsDesc')}</p>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1.5 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
              <Plane size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">{t('useCases.transportation')}</h3>
              <p className="text-gray-400">{t('useCases.transportationDesc')}</p>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-1.5 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">{t('useCases.security')}</h3>
              <p className="text-gray-400">{t('useCases.securityDesc')}</p>
            </div>
          </MagicCard>
        </motion.div>

      </div>
    </section>
  );
};

export default UseCasesMosaic;
