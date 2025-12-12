import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';

const team = [
  { 
    name: "Lorenzo Macali", 
    role: "Founder & CEO", 
    image: "/Images/Team/1761854891483.jpeg" 
  },
  { 
    name: "Francisco Javier Romo", 
    role: "Chief Ecosystem & Partnerships Officer", 
    image: "/Images/Team/1755780004007.png" 
  },
  { 
    name: "Constantijn Vereecken", 
    role: "General Manager", 
    image: "/Images/Team/1762072517843.jpeg" 
  },
  { 
    name: "Jonathan Marin", 
    role: "Chief Commercial Officer", 
    image: "/Images/Team/1756513194328.png" 
  },
];

const TeamSection = () => {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 pt-24 border-t border-black/5">
      <h2 className="text-3xl font-heading font-bold mb-12">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <MagicCard className="p-8 h-full bg-[#1B1B1B] border-white/10 text-white flex flex-col items-center text-center hover:border-white/20 transition-colors" gradientColor="rgba(255, 255, 255, 0.05)" variant="dark">
                <div className="w-32 h-32 mb-6 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 relative mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-500 ease-out"
                    />
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading group-hover:text-white transition-colors">{member.name}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-mono group-hover:text-gray-300 transition-colors">{member.role}</p>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
