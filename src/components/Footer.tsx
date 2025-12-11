import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">TITANO.</h2>
            <p className="text-gray-400 max-w-md text-lg">
              L’infrastruttura europea della robotica autonoma e dei media in movimento.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6">Sitemap</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/ecosistema" className="hover:text-white transition-colors">Ecosistema</Link></li>
              <li><Link to="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
              <li><Link to="/about-contact" className="hover:text-white transition-colors">About & Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6">Contatti</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="mailto:info@titano.ai" className="hover:text-white transition-colors">info@titano.ai</a></li>
              <li><span className="opacity-50">Milano, Italia</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Titano AI. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
