import { ReactNode, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import DitherBackground from '../components/Dither';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <DitherBackground />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
