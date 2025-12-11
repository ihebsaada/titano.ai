import { motion } from 'framer-motion';
import { Briefcase, Cpu, Bot, Users, PieChart, ArrowRight } from 'lucide-react';
import MagicCard from '../MagicCard';

const steps = [
  { id: "01", label: "Brand", icon: <Briefcase size={20} />, description: "Definizione KPI" },
  { id: "02", label: "Titano OS", icon: <Cpu size={20} />, description: "Configurazione AI" },
  { id: "03", label: "Robot", icon: <Bot size={20} />, description: "Attivazione Field" },
  { id: "04", label: "Audience", icon: <Users size={20} />, description: "Ingaggio Attivo" },
  { id: "05", label: "Analytics", icon: <PieChart size={20} />, description: "Report & ROI" },
];

const CampaignFlowDiagram = () => {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Il flusso della campagna</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Dalla pianificazione strategica all'analisi dei risultati in 5 step integrati.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-4">
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full md:w-48 group"
              >
                <MagicCard 
                  className="h-48 flex flex-col justify-between p-6 bg-[#1B1B1B] text-white border-white/10 hover:border-white/20 transition-colors" 
                  gradientColor="rgba(255, 255, 255, 0.08)"
                  variant="dark"
                >
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-heading font-bold text-white/5 select-none">{step.id}</span>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">{step.label}</h3>
                    <p className="text-sm text-gray-500 font-medium">{step.description}</p>
                  </div>
                </MagicCard>
              </motion.div>

              {/* Mobile Arrow (Vertical Flow) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="text-white/10 md:hidden py-2"
                >
                  <ArrowRight size={24} className="rotate-90" />
                </motion.div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CampaignFlowDiagram;
