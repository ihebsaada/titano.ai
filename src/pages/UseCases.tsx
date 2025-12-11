import UseCasesHero from '../components/usecases/UseCasesHero';
import UseCasesMosaic from '../components/usecases/UseCasesMosaic';
import CampaignFlowDiagram from '../components/usecases/CampaignFlowDiagram';
import ProofMetrics from '../components/usecases/ProofMetrics';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const UseCases = () => {
  return (
    <div className="bg-background min-h-screen pt-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: 'linear-gradient(#808080 1px, transparent 1px), linear-gradient(90deg, #808080 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <UseCasesHero />
      <UseCasesMosaic />
      <CampaignFlowDiagram />
      <ProofMetrics />

      {/* Final CTA */}
      <section className="px-6 md:px-12 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black/90 backdrop-blur-3xl border border-white/10 text-white rounded-[48px] p-12 md:p-24 relative overflow-hidden max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Pronto a innovare?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Porta il tuo brand in movimento. Contattaci per scoprire le opportunità del network Titano.
            </p>
            <Link 
              to="/about-contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg"
            >
              Contattaci per partnership media
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default UseCases;
