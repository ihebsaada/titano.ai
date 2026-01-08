import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { useTranslation } from 'react-i18next';

const team = [
  { 
    name: "Lorenzo Macali", 
    role: "CEO", 
    image: "/Images/Team/lorenzo.avif" 
  },
  { 
    name: "Francisco Javier Martin Romo", 
    role: "CEPO", 
    image: "/Images/Team/Francisco.avif" 
  },
  { 
    name: "Constantijn Vereecken", 
    role: "General Manager", 
    image: "/Images/Team/Constantijn.avif" 
  },
  { 
    name: "Jonathan Marin", 
    role: "CCO", 
    image: "/Images/Team/Jonathan.avif" 
  },
];

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32 pt-24 border-t border-black/5">
      <h2 className="text-3xl font-heading font-bold mb-12">{t('about.teamTitle')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <MagicCard className="p-6 h-full bg-[#1B1B1B] border-white/10 text-white flex flex-col items-center text-center hover:border-white/20 transition-colors" gradientColor="rgba(255, 255, 255, 0.05)" variant="dark">
                <div className="w-full aspect-[3/4] mb-6 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 relative mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img 
                      src={member.image} 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                </div>
                <h3 className="text-lg font-bold mb-1 font-heading group-hover:text-white transition-colors">{member.name}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-mono group-hover:text-gray-300 transition-colors">{member.role}</p>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
