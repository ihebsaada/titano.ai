import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MosaicShowcase = () => {
  const items = [
    {
      title: "Robotics",
      desc: "Navigazione autonoma e delivery.",
      image: "/Images/robot-1.jpg",
      link: "/ecosistema#robotics",
      colSpan: "md:col-span-2",
      bgPos: "center"
    },
    {
      title: "Titano OS",
      desc: "Il cervello operativo.",
      image: "/Images/dashboard.png", // using the renamed 22.png
      link: "/ecosistema#software",
      colSpan: "md:col-span-1",
      bgPos: "center"
    },
    {
      title: "Media Network",
      desc: "DOOH in movimento.",
      image: "/Images/robot-3.jpg",
      link: "/ecosistema#media",
      colSpan: "md:col-span-3",
      height: "h-96",
      bgPos: "center 30%"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`group relative overflow-hidden rounded-[32px] ${item.colSpan} ${item.height || "h-80"}`}
        >
          <Link to={item.link} className="block w-full h-full">
            {/* Image Background */}
            <div 
              className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.image}')`, backgroundPosition: item.bgPos }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
              <div>
                <h3 className="text-3xl font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 font-medium">{item.desc}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default MosaicShowcase;
