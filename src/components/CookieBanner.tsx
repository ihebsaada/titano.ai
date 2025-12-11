import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already consented
    const consented = localStorage.getItem('titano-consent');
    if (!consented) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('titano-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 w-[90%] md:w-[400px]"
        >
          <div className="glass-panel p-6 rounded-3xl shadow-2xl border border-white/40">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold font-heading">Privacy & Data</h4>
              <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-black/5 rounded-full transition-colors">
                <X size={18} className="opacity-50" />
              </button>
            </div>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Utilizziamo tecnologie minime per garantire il funzionamento della piattaforma e analizzare l'uso anonimo. Nessun tracciamento invasivo.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-foreground text-white py-2.5 rounded-xl text-sm font-bold hover:bg-black transition-colors"
              >
                Accetta
              </button>
              <button className="px-4 py-2.5 border border-black/10 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors flex items-center gap-2">
                <Settings size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
