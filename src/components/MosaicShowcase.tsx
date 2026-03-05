import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MosaicShowcase = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t('homeEcosystem.blocks.manufacturers.title'),
      desc: t('homeEcosystem.blocks.manufacturers.desc'),
      image: '/Images/New/d1dc767c-ee62-44c7-a846-4868885c2f7f.avif',
      link: '/robotic-media',
      bgPos: 'center',
    },
    {
      title: t('homeEcosystem.blocks.venues.title'),
      desc: t('homeEcosystem.blocks.venues.desc'),
      image: '/Images/New/da8f9877-ee2d-4d51-a2ad-931feeacb780.avif',
      link: '/robotic-media',
      bgPos: 'center',
    },
    {
      title: t('homeEcosystem.blocks.mediaBrands.title'),
      desc: t('homeEcosystem.blocks.mediaBrands.desc'),
      image: '/Images/New/359c3b8d-be7a-4b7a-9ac5-923ae9d3ccd5.avif',
      link: '/robotic-media',
      bgPos: 'center 30%',
    },
    {
      title: t('homeEcosystem.blocks.measurement.title'),
      desc: t('homeEcosystem.blocks.measurement.desc'),
      image: '/Images/New/8f4d7086-6611-40f5-aee1-bf335891e2b4.avif',
      link: '/robotic-media',
      bgPos: 'center',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="group relative overflow-hidden rounded-[32px] h-80 md:h-96"
        >
          <Link to={item.link} className="block w-full h-full">
            <div
              className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundPosition: item.bgPos,
              }}
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
              <div>
                <h3 className="text-3xl font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 font-medium leading-snug">
                  {item.desc}
                </p>
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