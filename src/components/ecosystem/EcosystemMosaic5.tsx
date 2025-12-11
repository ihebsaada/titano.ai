import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { Bot, Cpu, Database, Map, MonitorPlay } from 'lucide-react';

const EcosystemMosaic5 = () => {
  return (
    <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
        
        {/* BLOCK A: Robotics Layer (Large Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 group"
        >
          <MagicCard className="h-full flex flex-col justify-end relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="absolute inset-0 z-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                  style={{ backgroundImage: "url('/Images/robot-1.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
                <Bot size={24} />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Robotics Layer</h3>
              <p className="text-lg text-gray-300 max-w-md">
                Autonomia multi-marca per robot indoor in centri commerciali, aeroporti, hospitality e retail.
              </p>
            </div>
          </MagicCard>
        </motion.div>

        {/* BLOCK B: Titano OS (Top Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 md:p-10 flex flex-col justify-center relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
             <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/10 p-2 rounded-xl text-white backdrop-blur-sm border border-white/10">
                      <Cpu size={24} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">Titano OS</h3>
                  </div>
                  <p className="text-gray-400 text-lg">
                    Navigazione, sensing, media e intelligenza di flotta.
                  </p>
                </div>
                <div className="hidden md:block w-32 h-32 bg-white/5 rounded-full blur-3xl absolute right-12 top-1/2 -translate-y-1/2" />
             </div>
          </MagicCard>
        </motion.div>

        {/* BLOCK C: Data Fabric (Middle Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm text-white border border-white/10">
              <Database size={20} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Data Fabric</h3>
              <p className="text-sm text-gray-400">Motore di insight dal mondo reale.</p>
            </div>
          </MagicCard>
        </motion.div>

        {/* BLOCK D: Autonomous Media (Middle Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 md:row-span-1 group"
        >
          <MagicCard className="h-full flex flex-col justify-between relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
             <div className="absolute inset-0 z-0">
                 <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                  style={{ backgroundImage: "url('/Images/robot-3.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-black/40 to-transparent" />
             </div>
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
               <div className="bg-white/10 backdrop-blur-md w-10 h-10 rounded-xl flex items-center justify-center border border-white/10">
                 <MonitorPlay size={20} />
               </div>
               <h3 className="text-xl font-heading font-bold">Autonomous Media</h3>
            </div>
          </MagicCard>
        </motion.div>

        {/* BLOCK E: Operations Hub (Bottom Wide) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 md:p-10 flex items-center relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="relative z-10 flex items-center gap-6">
               <div className="bg-white/10 p-4 rounded-2xl text-white border border-white/10 backdrop-blur-sm">
                 <Map size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-heading font-bold mb-1">Operations Hub (EU)</h3>
                 <p className="text-gray-400">Monitoraggio attivo e gestione remota della flotta globale.</p>
               </div>
            </div>
          </MagicCard>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemMosaic5;
