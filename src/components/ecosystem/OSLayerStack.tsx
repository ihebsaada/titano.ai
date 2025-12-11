import { motion } from 'framer-motion';
import { Compass, Eye, PlaySquare, Cloud, Database } from 'lucide-react';
import MagicCard from '../MagicCard';

const layers = [
  { id: 1, title: "Navigation & Mapping", desc: "Mappatura 3D e localizzazione in tempo reale.", icon: <Compass className="w-5 h-5 text-white" /> },
  { id: 2, title: "Vision & Sensing", desc: "Riconoscimento ostacoli e analisi ambientale.", icon: <Eye className="w-5 h-5 text-white" /> },
  { id: 3, title: "Media Engine", desc: "Distribuzione contenuti contestuale e programmata.", icon: <PlaySquare className="w-5 h-5 text-white" /> },
  { id: 4, title: "Fleet Cloud", desc: "Orchestrazione centralizzata e aggiornamenti OTA.", icon: <Cloud className="w-5 h-5 text-white" /> },
  { id: 5, title: "Data Fabric", desc: "Pipeline dati unificata per analytics e reporting.", icon: <Database className="w-5 h-5 text-white" /> },
];

const OSLayerStack = () => {
  return (
    <section className="px-6 md:px-12 max-w-5xl mx-auto mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Titano OS Layer</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Un'architettura software modulare progettata per l'autonomia scalabile.
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
            <MagicCard className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 bg-[#1B1B1B] text-white border-white/10 hover:border-white/20 transition-colors" gradientColor="rgba(255, 255, 255, 0.08)">
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
