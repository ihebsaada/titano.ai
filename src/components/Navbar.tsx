import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import SpotlightCard from './SpotlightCard';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'it' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: t('navbar.home'), path: '/', desc: t('navbar.homeDesc') },
    { name: t('navbar.ecosystem'), path: '/ecosistema', desc: t('navbar.ecosystemDesc') },
    { name: t('navbar.useCases'), path: '/use-cases', desc: t('navbar.useCasesDesc') },
    { name: t('navbar.about'), path: '/about-contact', desc: t('navbar.aboutDesc') },
  ];

  return (
    <>
      {/* Floating Navbar Capsule */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 mx-auto w-[92%] max-w-5xl z-50"
      >
        <SpotlightCard className="rounded-full px-6 py-3 shadow-float border border-white/30 backdrop-blur-xl bg-white/60">
          <div className="flex items-center justify-between w-full h-full">
            {/* Logo */}
            <Link to="/" className="relative z-50 flex items-center gap-2 group">
               {/* Using black logo for default navbar state */}
               <img 
                 src="/Images/Risorsa 3.png" 
                 alt="Titano AI" 
                 loading="eager"
                 decoding="async"
                 className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
               />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden',
                    location.pathname === link.path 
                      ? 'text-black bg-white shadow-sm' 
                      : 'text-gray-600 hover:text-black hover:bg-white/40'
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Language Switcher & CTA (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/40 hover:bg-white/70 transition-colors text-gray-700 hover:text-black"
                aria-label="Toggle language"
              >
                <span className="text-xs font-bold font-mono">{i18n.language === 'en' ? 'EN' : 'IT'}</span>
              </button>

              <Link 
                to="/about-contact" 
                className="px-6 py-2.5 bg-[#101010] text-white rounded-full text-sm font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-300 flex items-center gap-2"
              >
                {t('navbar.contact')}
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden relative z-50 p-2 text-black rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode='wait'>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </SpotlightCard>
      </motion.nav>

      {/* Crazy Mobile Dropdown (Fullscreen Glass) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-40 bg-[#F1F1F1]/95 backdrop-blur-3xl flex flex-col pt-32 px-6 pb-12"
          >
            {/* Background animated elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                 transition={{ duration: 10, repeat: Infinity }}
                 className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" 
               />
               <motion.div 
                 animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 0] }}
                 transition={{ duration: 15, repeat: Infinity }}
                 className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px]" 
               />
            </div>

            <div className="flex flex-col gap-4 max-w-lg mx-auto w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "group flex items-center justify-between p-6 rounded-[32px] border border-white/50 shadow-lg transition-all duration-300",
                      location.pathname === link.path 
                        ? "bg-white text-black scale-[1.02]" 
                        : "bg-white/40 hover:bg-white/70 text-gray-800"
                    )}
                  >
                    <div>
                      <span className="text-3xl font-heading font-bold block mb-1">{link.name}</span>
                      <span className="text-xs font-mono uppercase tracking-widest opacity-60">{link.desc}</span>
                    </div>
                    <div className={clsx(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                      location.pathname === link.path ? "bg-black text-white" : "bg-white text-black group-hover:bg-black group-hover:text-white"
                    )}>
                      <ArrowUpRight size={24} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto max-w-lg mx-auto w-full"
            >
              <div className="flex gap-4">
                 <Link 
                   to="/about-contact"
                   onClick={() => setIsOpen(false)}
                   className="flex-1 bg-[#101010] text-white p-6 rounded-[32px] font-bold text-center shadow-xl active:scale-95 transition-transform"
                 >
                   {t('navbar.contact')}
                 </Link>
                 <button 
                   onClick={() => { toggleLanguage(); setIsOpen(false); }}
                   className="p-6 bg-white rounded-[32px] flex items-center justify-center shadow-xl font-bold font-mono text-xl"
                 >
                    {i18n.language === 'en' ? 'EN' : 'IT'}
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
