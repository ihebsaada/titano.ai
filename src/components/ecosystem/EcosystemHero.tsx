import { motion } from 'framer-motion';

const EcosystemHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />
      
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-heading font-bold mb-6 tracking-tight text-foreground"
        >
          L’Ecosistema Titano
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed"
        >
          Una piattaforma unificata che connette robot, software e operazioni reali.
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-20 pointer-events-none" />
    </section>
  );
};

export default EcosystemHero;
