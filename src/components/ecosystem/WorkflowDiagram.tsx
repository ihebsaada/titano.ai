import { motion } from 'framer-motion';
import { Link, Monitor, Layers, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WorkflowDiagram = () => {
  const { t } = useTranslation();

  const steps = [
    { title: t('workflow.connect'), icon: <Link size={24} />, desc: t('workflow.connectDesc') },
    { title: t('workflow.control'), icon: <Monitor size={24} />, desc: t('workflow.controlDesc') },
    { title: t('workflow.deploy'), icon: <Layers size={24} />, desc: t('workflow.deployDesc') },
    { title: t('workflow.optimize'), icon: <Database size={24} />, desc: t('workflow.optimizeDesc') },
  ];

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('workflow.title')}</h2>
        <p className="text-text-secondary">{t('workflow.subtitle')}</p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-foreground group-hover:text-foreground transition-all duration-300 z-10">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagram;
