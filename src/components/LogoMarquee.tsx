const LogoMarquee = () => {
  const logos = [
    { src: '/Images/Logos/1.png', alt: 'Partner Logo 1' },
    { src: '/Images/Logos/2.png', alt: 'Partner Logo 2' },
    { src: '/Images/Logos/3.png', alt: 'Partner Logo 3' },
    { src: '/Images/Logos/4.png', alt: 'Partner Logo 4' },
    { src: '/Images/Logos/5.png', alt: 'Partner Logo 5' },
    { src: '/Images/Logos/6.png', alt: 'Partner Logo 6' },
    { src: '/Images/Logos/7.png', alt: 'Partner Logo 7' },
  ];

  return (
    <div className="w-full overflow-hidden py-6 bg-white/30 backdrop-blur-md border-y border-white/20 relative group">
      {/* Gradient Mask for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-white/90 via-white/40 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-white/90 via-white/40 to-transparent z-10" />
      
      <div className="max-w-[2800px] mx-auto relative">
        <div className="flex gap-20 md:gap-32 w-max animate-marquee items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center cursor-default w-[220px] md:w-[320px]">
               <img 
                 src={logo.src} 
                 alt={logo.alt} 
                 loading="lazy"
                 decoding="async"
                 className="h-20 md:h-32 w-auto max-w-full object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105"
               />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center cursor-default w-[220px] md:w-[320px]">
               <img 
                 src={logo.src} 
                 alt={logo.alt} 
                 loading="lazy"
                 decoding="async"
                 className="h-20 md:h-32 w-auto max-w-full object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105"
               />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
