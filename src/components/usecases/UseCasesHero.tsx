import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const UseCasesHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none -z-10" />
      
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-black/5 text-foreground text-sm font-bold uppercase tracking-widest"
        >
          Advertising 3.0
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-heading font-bold mb-6 tracking-tight text-foreground"
        >
          {t('useCases.heroTitle')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto"
        >
          {t('useCases.heroSubtitle')}
        </motion.p>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-20 pointer-events-none" />
    </section>
  );
};

export default UseCasesHero;
