import { ReactNode, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const CELL_SIZE_PX = 48;

type GridState = {
  cols: number;
  rows: number;
  delays: number[];
  durations: number[];
};

const RippleGridBackground = () => {
  const [grid, setGrid] = useState<GridState>({
    cols: 0,
    rows: 0,
    delays: [],
    durations: [],
  });

  useEffect(() => {
    const update = () => {
      const cols = Math.ceil(window.innerWidth / CELL_SIZE_PX) + 2;
      const rows = Math.ceil(window.innerHeight / CELL_SIZE_PX) + 2;
      const cellCount = cols * rows;

      setGrid((prev) => {
        if (prev.cols === cols && prev.rows === rows) return prev;
        return {
          cols,
          rows,
          delays: Array.from({ length: cellCount }, () => Math.floor(Math.random() * 4000)),
          durations: Array.from({ length: cellCount }, () => 1200 + Math.floor(Math.random() * 2400)),
        };
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const cellCount = grid.cols * grid.rows;

  return (
    <div className="titano-ripple-bg">
      <div
        className="titano-ripple-grid"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, ${CELL_SIZE_PX}px)`,
          gridAutoRows: `${CELL_SIZE_PX}px`,
        }}
      >
        {Array.from({ length: cellCount }, (_, i) => (
          <div
            key={i}
            className="titano-ripple-cell"
            style={{
              ['--delay' as never]: `${grid.delays[i] ?? 0}ms`,
              ['--duration' as never]: `${grid.durations[i] ?? 1800}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <RippleGridBackground />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      </div>
    </div>
  );
};

export default MainLayout;
