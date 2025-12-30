import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const VisionStory = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
      <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed text-text-secondary">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-foreground font-medium">{t('about.visionStory1Highlight')}</span> {t('about.visionStory1').replace(t('about.visionStory1Highlight'), '').trim()}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('about.visionStory2').split('Titano OS').map((text, i, arr) => (
            <span key={i}>
              {text}
              {i < arr.length - 1 && <span className="text-foreground font-medium">Titano OS</span>}
            </span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t('about.visionStory3')}
        </motion.p>
      </div>
    </section>
  );
};

export default VisionStory;
