import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SpotlightCard from '../components/SpotlightCard';

const ChiETitano = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-12 text-center">
            {t('chiETitano.title')}
          </h1>

          <SpotlightCard className="p-8 md:p-12 rounded-[40px] backdrop-blur-2xl border border-white/10">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                {t('chiETitano.mainText')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h3 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">{t('chiETitano.hqLabel')}</h3>
                  <p className="text-xl text-white">{t('chiETitano.hqValue')}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h3 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">{t('chiETitano.scopeLabel')}</h3>
                  <p className="text-xl text-white">{t('chiETitano.scopeValue')}</p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-white">
                {t('chiETitano.sectorsTitle')}
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-text-secondary mb-12">
                <li>{t('chiETitano.sector1')}</li>
                <li>{t('chiETitano.sector2')}</li>
                <li>{t('chiETitano.sector3')}</li>
              </ul>

              <div className="bg-accent/10 border border-accent/20 p-8 rounded-2xl mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-white">
                  {t('chiETitano.clarificationTitle')}
                </h2>
                <p className="text-lg text-white/80 italic">
                  {t('chiETitano.clarificationText')}
                </p>
              </div>

              <p className="text-text-secondary">
                {t('chiETitano.footerText')}
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ChiETitano;
