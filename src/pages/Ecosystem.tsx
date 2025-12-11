import EcosystemHero from '../components/ecosystem/EcosystemHero';
import EcosystemMosaic5 from '../components/ecosystem/EcosystemMosaic5';
import OSLayerStack from '../components/ecosystem/OSLayerStack';
import RoboticsAlternating from '../components/ecosystem/RoboticsAlternating';
import OperationsHubSection from '../components/ecosystem/OperationsHubSection';
import WorkflowDiagram from '../components/ecosystem/WorkflowDiagram';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Ecosystem = () => {
  return (
    <div className="bg-background min-h-screen pt-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: 'linear-gradient(#808080 1px, transparent 1px), linear-gradient(90deg, #808080 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <EcosystemHero />
      <EcosystemMosaic5 />
      <OSLayerStack />
      <RoboticsAlternating />
      <OperationsHubSection />
      <div className="h-32" /> {/* Spacer */}
      <WorkflowDiagram />

      {/* Final CTA */}
      <section className="px-6 md:px-12 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black/90 backdrop-blur-3xl border border-white/10 text-white rounded-[48px] p-12 md:p-24 relative overflow-hidden max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Oltre la robotica.
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Scopri come trasformiamo il movimento autonomo in un nuovo canale media misurabile e coinvolgente.
            </p>
            <Link 
              to="/use-cases"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              Scopri il Media Network
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Ecosystem;
