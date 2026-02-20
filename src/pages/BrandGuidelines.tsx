import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const BRAND_PAGES = [
  { src: '/brand-pages/page-1.png', title: 'Cover' },
  { src: '/brand-pages/page-2.png', title: 'Logo Variations' },
  { src: '/brand-pages/page-3.png', title: 'Typography' },
  { src: '/brand-pages/page-4.png', title: 'Logo Construction' },
  { src: '/brand-pages/page-5.png', title: 'Wordmark - Light' },
  { src: '/brand-pages/page-6.png', title: 'Wordmark - Dark' },
];

const BrandGuidelines = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-heading font-bold text-3xl md:text-4xl tracking-tight"
            >
              Brand Guidelines
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/50 mt-2 text-lg"
            >
              The visual identity and assets of Titano AI.
            </motion.p>
          </div>
          
          <motion.a
            href="/brand-guidelines.pdf"
            download
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-white/90 transition-all shadow-xl shadow-white/5"
          >
            <Download size={18} />
            DOWNLOAD PDF
          </motion.a>
        </div>
      </div>

      <div className="pb-32 flex flex-col items-center">
        {BRAND_PAGES.map((page, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={page.src}
                alt={page.title}
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandGuidelines;

