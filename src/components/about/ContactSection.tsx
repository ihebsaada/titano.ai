import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { Mail, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const contacts = [
  { title: "Business", email: "business@titano.ai" },
  { title: "Partnerships", email: "partners@titano.ai" },
  { title: "Media", email: "press@titano.ai" },
  { title: "Investors", email: "investors@titano.ai" }
];

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
      <h2 className="text-3xl font-heading font-bold mb-12">{t('about.contactTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((contact, index) => (
          <motion.a 
            key={index}
            href={`mailto:${contact.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="block group"
          >
            <MagicCard className="p-8 h-48 flex flex-col justify-between transition-all duration-300 bg-[#1B1B1B] text-white border-white/10 hover:border-white/20" gradientColor="rgba(255, 255, 255, 0.05)" variant="dark">
              <div className="flex justify-between items-start">
                <div className="bg-white/10 w-12 h-12 rounded-xl text-white transition-colors border border-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <ArrowUpRight size={20} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-1 font-heading">{contact.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{contact.email}</p>
              </div>
            </MagicCard>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
