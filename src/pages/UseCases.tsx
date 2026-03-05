import UseCasesHero from '../components/usecases/UseCasesHero';
import UseCasesMosaic from '../components/usecases/UseCasesMosaic';
import CampaignFlowDiagram from '../components/usecases/CampaignFlowDiagram';
import ProofMetrics from '../components/usecases/ProofMetrics';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const UseCases = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 relative">
      <Seo
        title="Use Cases | Robotic Media™ Deployments"
        description="Robotic Media deployments across retail, events, transit hubs, campuses, and public spaces—delivering measurable DOOH with real-time analytics."
        path="/use-cases"
      />
      <UseCasesHero />
      <UseCasesMosaic />
      <CampaignFlowDiagram />
      <ProofMetrics />

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
              {t('useCases.ctaTitle')}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {t('useCases.ctaText')}
            </p>
            <Link 
              to="/about-contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg"
            >
              {t('useCases.ctaButton')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default UseCases;
