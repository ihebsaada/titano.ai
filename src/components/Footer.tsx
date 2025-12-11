import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Linkedin, Twitter } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Footer = () => {
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
              L’infrastruttura europea della robotica autonoma e dei media in movimento.
              Connettiamo intelligenza artificiale e mondo reale.
            </p>
            <div className="flex items-center gap-4 text-gray-400 group cursor-default">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <MapPin size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="font-medium">Milano, Italia</span>
            </div>
          </div>
          
          {/* Spacer */}
          <div className="md:col-span-1" />

          {/* Links Column 1: Sitemap */}
          <div className="md:col-span-3">
            <h3 className="text-white font-heading font-bold text-xl mb-8">
              Esplora
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Ecosistema', path: '/ecosistema' },
                { name: 'Use Cases', path: '/use-cases' },
                { name: 'Chi Siamo', path: '/about-contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group w-fit">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Links Column 2: Connect */}
          <div className="md:col-span-3">
            <h3 className="text-white font-heading font-bold text-xl mb-8">
              Contatti
            </h3>
            <ul className="space-y-6">
              <li>
                <a href="mailto:info@titano.ai" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-fit">
                    <div className="bg-white/5 p-2 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                        <Mail size={18} />
                    </div>
                    <span>info@titano.ai</span>
                </a>
              </li>
              <li>
                  <Link to="/about-contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group">
                      Lavora con noi 
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Titano AI. Tutti i diritti riservati.</p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <div className="flex items-center gap-4 ml-4 pl-8 border-l border-white/10">
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                <Twitter size={18} />
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
