import { motion } from 'framer-motion';

const MissionHero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8 tracking-tight text-foreground leading-tight">
          Costruiamo l’infrastruttura per l’autonomia nel mondo reale.
        </h1>
      </motion.div>
    </section>
  );
};

export default MissionHero;
