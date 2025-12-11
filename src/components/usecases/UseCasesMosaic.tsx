import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { ShoppingBag, Megaphone, Users, Footprints, Zap, BarChart3 } from 'lucide-react';

const UseCasesMosaic = () => {
  return (
    <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
        
        {/* 1. Mobility (Large Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1 md:row-span-2 group"
        >
          <MagicCard className="h-full flex flex-col justify-end bg-[#1B1B1B] text-white border-white/10 relative overflow-hidden" gradientColor="rgba(255, 255, 255, 0.1)">
            {/* Full size image background */}
            <div 
              className="absolute inset-0 z-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                style={{ backgroundImage: "url('/Images/robot-2.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-transparent" />
            </div>
            
            {/* Content with padding */}
            <div className="relative z-10 p-8">
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">Mobility</h3>
              <p className="text-gray-400">
                Presenza fisica dinamica nei punti di massimo interesse e traffico.
              </p>
            </div>
          </MagicCard>
        </motion.div>

        {/* 2. Contextual Ads */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <Megaphone size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Contextual Ads</h3>
              <p className="text-gray-400">Messaggi pertinenti al momento e al luogo esatto.</p>
            </div>
          </MagicCard>
        </motion.div>

        {/* 3. Audience Insight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <Users size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Audience Insight</h3>
              <p className="text-gray-400">Analisi demografica anonima e attention time.</p>
            </div>
          </MagicCard>
        </motion.div>

        {/* 4. Path Intelligence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <Footprints size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Path Intelligence</h3>
              <p className="text-gray-400">Mappatura dei flussi e delle heatmaps di calpestio.</p>
            </div>
          </MagicCard>
        </motion.div>

        {/* 5. Campaign Automation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-1 md:row-span-1 group"
        >
           <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)">
             <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center">
                <Zap size={20} />
             </div>
             <div>
                <h3 className="text-2xl font-heading font-bold mb-2">Automation</h3>
                <p className="text-gray-400">Programmatic buying e gestione real-time.</p>
             </div>
           </MagicCard>
        </motion.div>

        {/* 6. Reporting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:col-span-1 md:row-span-1 group"
        >
           <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)">
              <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center">
                <BarChart3 size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-2">Reporting</h3>
                <p className="text-gray-400">Dashboard granulari per ROI e performance.</p>
              </div>
           </MagicCard>
        </motion.div>

      </div>
    </section>
  );
};

export default UseCasesMosaic;
