import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Linkedin } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative pt-24 pb-0 overflow-hidden">
       <SpotlightCard className="rounded-t-[60px] rounded-b-none border-t border-white/10 bg-black/90 backdrop-blur-3xl" spotlightColor="rgba(255, 255, 255, 0.1)" variant="dark">
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="inline-block mb-8 group">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="/Images/logo_senza_fondo-02.png" 
                  alt="Titano AI" 
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300" 
                />
            </Link>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-8 font-light">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4 text-gray-400 group cursor-default">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <MapPin size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="font-medium">{t('footer.address')}</span>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight">{t('footer.company')}</h4>
            <ul className="space-y-4">
              <li><Link to="/about-contact" className="text-gray-400 hover:text-white transition-colors">{t('navbar.about')}</Link></li>
              <li><Link to="/about-contact" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/about-contact" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight">{t('footer.technology')}</h4>
            <ul className="space-y-4">
              <li><Link to="/ecosistema" className="text-gray-400 hover:text-white transition-colors">{t('navbar.ecosystem')}</Link></li>
              <li><Link to="/use-cases" className="text-gray-400 hover:text-white transition-colors">{t('navbar.useCases')}</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.cookies')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Titano AI. {t('footer.rights')}
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
            <div className="flex items-center gap-4 ml-4 pl-8 border-l border-white/10">
              <a href="#" className="text-white hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      </SpotlightCard>
    </footer>
  );
};

export default Footer;
