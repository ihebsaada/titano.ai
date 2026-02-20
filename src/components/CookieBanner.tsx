import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const handleOpenSettings = () => {
      setShowSettings(true);
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);

    const savedConsent = localStorage.getItem('titano-consent');
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
      } catch (e) {
        if (savedConsent === 'true') {
          setPreferences({ necessary: true, analytics: true, marketing: true });
        }
      }
    } else {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    localStorage.setItem('titano-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('titano-consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
            />
          )}

          {!showSettings && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-6 right-6 z-[100] w-[90%] md:w-[400px]"
            >
              <div className="glass-panel p-6 rounded-3xl shadow-2xl border border-white/40">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold font-heading">{t('cookies.title')}</h4>
                  <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-black/5 rounded-full transition-colors">
                    <X size={18} className="opacity-50" />
                  </button>
                </div>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  {t('cookies.description')}
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handleAcceptAll}
                    className="flex-1 bg-foreground text-white py-2.5 rounded-xl text-sm font-bold hover:bg-black transition-colors"
                  >
                    {t('cookies.accept')}
                  </button>
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2.5 border border-black/10 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors flex items-center gap-2"
                  >
                    <Settings size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {showSettings && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6"
            >
              <div className="glass-panel p-6 md:p-8 rounded-[32px] shadow-2xl border border-white/40 bg-white/80 backdrop-blur-xl w-full max-w-[500px] max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6 sticky top-0 bg-transparent pt-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading mb-1">{t('cookies.settings')}</h3>
                    <p className="text-xs md:text-sm text-text-secondary">
                      {t('cookies.description')}
                      <Link to="/privacy-policy" className="ml-1 underline hover:text-foreground transition-colors">
                        {t('footer.privacy')}
                      </Link>
                    </p>
                  </div>
                  <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors flex-shrink-0">
                    <X size={20} className="opacity-50" />
                  </button>
                </div>

                <div className="space-y-4 md:space-y-6 mb-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h5 className="font-bold text-sm mb-1">{t('cookies.necessary')}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">{t('cookies.necessaryDesc')}</p>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-foreground/10 cursor-not-allowed opacity-50">
                      <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white transition" />
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h5 className="font-bold text-sm mb-1">{t('cookies.analytics')}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">{t('cookies.analyticsDesc')}</p>
                    </div>
                    <button 
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.analytics ? 'bg-foreground' : 'bg-black/10'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.analytics ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h5 className="font-bold text-sm mb-1">{t('cookies.marketing')}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">{t('cookies.marketingDesc')}</p>
                    </div>
                    <button 
                      onClick={() => togglePreference('marketing')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.marketing ? 'bg-foreground' : 'bg-black/10'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.marketing ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={handleAcceptAll}
                    className="flex-1 border border-black/10 py-3 rounded-2xl text-sm font-bold hover:bg-black/5 transition-colors"
                  >
                    {t('cookies.accept')}
                  </button>
                  <button 
                    onClick={handleSavePreferences}
                    className="flex-1 bg-foreground text-white py-3 rounded-2xl text-sm font-bold hover:bg-black transition-colors"
                  >
                    {t('cookies.save')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
