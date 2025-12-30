const LogoMarquee = () => {
  const logos = [
    { src: '/Images/Logos/Cartken_logo-1.jpg', alt: 'Cartken' },
    { src: '/Images/Logos/E2Qmud2LC58xRCcZYFj8aGjMst4.png.webp', alt: 'Partner Logo' },
    { src: '/Images/Logos/ROBOT_COM_Logo.jpg', alt: 'Robot.com' },
    { src: '/Images/Logos/Serve-Robotics-logo.png', alt: 'Serve Robotics' },
    { src: '/Images/Logos/Starship_Technologies_logo.svg.png', alt: 'Starship Technologies' },
    { src: '/Images/Logos/images.png', alt: 'Partner Logo' },
    { src: '/Images/Logos/v7R3agQRor.png', alt: 'Partner Logo' },
  ];

  return (
    <div className="w-full overflow-hidden py-12 bg-white/50 backdrop-blur-sm border-y border-white/40">
      <div className="max-w-[1920px] mx-auto relative">
        <div className="flex gap-16 md:gap-32 w-max animate-marquee items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center group cursor-default w-[120px] md:w-[180px]">
               <img 
                 src={logo.src} 
                 alt={logo.alt} 
                 className="h-8 md:h-12 w-auto max-w-full object-contain opacity-40 grayscale transition-opacity duration-300"
               />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center group cursor-default w-[120px] md:w-[180px]">
               <img 
                 src={logo.src} 
                 alt={logo.alt} 
                 className="h-8 md:h-12 w-auto max-w-full object-contain opacity-40 grayscale transition-opacity duration-300"
               />
            </div>
          ))}
          {/* Third set for extra smoothness on large screens */}
          {logos.map((logo, index) => (
            <div key={`dup2-${index}`} className="flex items-center justify-center group cursor-default w-[120px] md:w-[180px]">
               <img 
                 src={logo.src} 
                 alt={logo.alt} 
                 className="h-8 md:h-12 w-auto max-w-full object-contain opacity-40 grayscale transition-opacity duration-300"
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
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
