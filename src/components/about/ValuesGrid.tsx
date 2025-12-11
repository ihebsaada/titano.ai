import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { ShieldCheck, Eye, TrendingUp, Target } from 'lucide-react';

const ValuesGrid = () => {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
      <h2 className="text-3xl font-heading font-bold mb-12">I nostri valori</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
        
        {/* Safety - Large */}
        <motion.div 
          className="md:col-span-2 md:row-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <MagicCard className="h-full p-8 md:p-12 bg-[#1B1B1B] text-white border-white/10 flex flex-col justify-center" gradientColor="rgba(255, 255, 255, 0.1)">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-heading">Safety</h3>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              La sicurezza delle persone e degli ambienti è la priorità assoluta in ogni riga di codice e in ogni movimento.
            </p>
          </MagicCard>
        </motion.div>

        {/* Clarity - Tall */}
        <motion.div 
          className="md:col-span-1 md:row-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <MagicCard className="h-full p-8 md:p-12 bg-[#1B1B1B] text-white border-white/10 flex flex-col justify-between" gradientColor="rgba(255, 255, 255, 0.1)">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 font-heading">Clarity</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Trasparenza nei dati, nella privacy e nelle operazioni. Nessuna "black box".
              </p>
            </div>
          </MagicCard>
        </motion.div>

        {/* Scalability */}
        <motion.div 
          className="md:col-span-1 md:row-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <MagicCard className="h-full p-8 bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-heading">Scalability</h3>
            <p className="text-gray-400 leading-relaxed">Progettiamo per flotte di migliaia di unità, non per demo isolate.</p>
          </MagicCard>
        </motion.div>

        {/* Precision */}
        <motion.div 
          className="md:col-span-1 md:row-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <MagicCard className="h-full p-8 bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm">
                <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-heading">Precision</h3>
            <p className="text-gray-400 leading-relaxed">Accuratezza millimetrica nella navigazione e nel targeting.</p>
          </MagicCard>
        </motion.div>

      </div>
    </section>
  );
};

export default ValuesGrid;
