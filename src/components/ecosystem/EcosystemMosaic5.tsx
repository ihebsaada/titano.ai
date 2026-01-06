import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { Bot, Cpu, Database, Map, MonitorPlay } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EcosystemMosaic5 = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
        
        {/* BLOCK A: Titano OS (Top Left - Large) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 group"
        >
          <MagicCard className="h-full p-8 md:p-10 flex flex-col justify-between relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/10 p-2 rounded-xl text-white backdrop-blur-sm border border-white/10">
                      <Cpu size={32} />
                    </div>
                    <h3 className="text-3xl font-heading font-bold">{t('ecosystem.titanoOS')}</h3>
                  </div>
                  <p className="text-gray-400 text-xl max-w-md">
                    {t('ecosystem.titanoOSDesc')}
                  </p>
                </div>
             </div>
          </MagicCard>
        </motion.div>

        {/* BLOCK B: Data Fabric (Top Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 flex flex-col justify-center bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm text-white border border-white/10">
                  <Database size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold">{t('ecosystem.dataFabric')}</h3>
            </div>
            <p className="text-lg text-gray-400">{t('ecosystem.dataFabricDesc')}</p>
          </MagicCard>
        </motion.div>

        {/* BLOCK C: Operations Hub (Middle Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 md:row-span-1 group"
        >
          <MagicCard className="h-full p-8 flex items-center relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="relative z-10 flex items-center gap-6">
               <div className="bg-white/10 p-4 rounded-2xl text-white border border-white/10 backdrop-blur-sm">
                 <Map size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-heading font-bold mb-1">{t('ecosystem.operationsHub')}</h3>
                 <p className="text-gray-400">{t('ecosystem.operationsHubDesc')}</p>
               </div>
            </div>
          </MagicCard>
        </motion.div>

        {/* BLOCK D: Robotics Layer (Bottom Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 md:row-span-1 group"
        >
          <MagicCard className="h-full flex flex-col justify-center relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
            <div className="absolute inset-0 z-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                  style={{ backgroundImage: "url('/Images/New/d1dc767c-ee62-44c7-a846-4868885c2f7f.avif')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B] via-[#1B1B1B]/80 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 flex items-center gap-6">
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-white border border-white/10 shrink-0">
                <Bot size={24} />
              </div>
              <div>
                  <h3 className="text-2xl font-heading font-bold mb-1">{t('ecosystem.roboticsLayer')}</h3>
                  <p className="text-gray-300">
                    {t('ecosystem.roboticsDesc')}
                  </p>
              </div>
            </div>
          </MagicCard>
        </motion.div>

        {/* BLOCK E: Autonomous Media (Bottom Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 md:row-span-1 group"
        >
          <MagicCard className="h-full flex flex-col justify-center relative overflow-hidden bg-[#1B1B1B] text-white border-white/10" gradientColor="rgba(255, 255, 255, 0.1)" variant="dark">
             <div className="absolute inset-0 z-0">
                 <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                  style={{ backgroundImage: "url('/Images/New/55f31b54-3707-4ae9-8cf8-4f3db432fa33.avif')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#1B1B1B] via-[#1B1B1B]/80 to-transparent" />
             </div>
            <div className="relative z-10 p-8 flex flex-row-reverse items-center justify-between gap-6">
               <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                 <MonitorPlay size={24} />
               </div>
               <div className="text-right flex-grow">
                   <h3 className="text-2xl font-heading font-bold mb-1">{t('ecosystem.autonomousMedia')}</h3>
                   <p className="text-gray-300">Application Layer</p>
               </div>
            </div>
          </MagicCard>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemMosaic5;
