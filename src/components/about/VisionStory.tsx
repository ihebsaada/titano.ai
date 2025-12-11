import { motion } from 'framer-motion';

const VisionStory = () => {
  return (
    <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
      <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed text-text-secondary">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-foreground font-medium">L'autonomia non è il futuro, è il presente.</span> Crediamo che i robot debbano uscire dai laboratori e integrarsi negli spazi quotidiani, portando efficienza e nuovi servizi dove le persone vivono e lavorano.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Con <span className="text-foreground font-medium">Titano OS</span>, abbiamo creato un cervello centralizzato capace di orchestrare flotte eterogenee, trasformando semplici macchine in una rete intelligente di dati e media in movimento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Nati in Europa, portiamo avanti una visione di tecnologia etica, sicura e integrata, costruendo l'infrastruttura che abiliterà la prossima generazione di servizi urbani e commerciali.
        </motion.p>
      </div>
    </section>
  );
};

export default VisionStory;
