import { motion } from 'framer-motion';
import MagicCard from '../MagicCard';
import { User, Code, Briefcase, Network } from 'lucide-react';

const team = [
  { name: "Lorenzo Macali", role: "Founder & CEO", icon: <User className="w-6 h-6" /> },
  { name: "Executive Team", role: "Operations & Strategy", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Engineering", role: "R&D Robotics", icon: <Code className="w-6 h-6" /> },
  { name: "Media Lab", role: "Content & Partnerships", icon: <Network className="w-6 h-6" /> },
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
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 transition-transform duration-300 mx-auto">
                    <div className="text-white/80 group-hover:text-white transition-colors">
                        {member.icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{member.name}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-mono">{member.role}</p>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
