const LogoMarquee = () => {
  // Using text placeholders as we don't have partner logos yet
  // In production, these would be image paths
  const brands = [
    "Sodexo", "Grubhub", "GXO", "AWS", "Skip", "Aramark", "Keenon", "Pudu", "Segway",
    "Sodexo", "Grubhub", "GXO", "AWS", "Skip", "Aramark", "Keenon", "Pudu", "Segway"
  ];

  return (
    <div className="w-full overflow-hidden py-12 bg-white/50 backdrop-blur-sm border-y border-white/40">
      <div className="max-w-[1920px] mx-auto relative">
        <div className="flex gap-16 md:gap-32 w-max animate-marquee">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center gap-2 group cursor-default">
               <span className="text-2xl md:text-3xl font-heading font-bold text-black/20 group-hover:text-black/80 transition-colors duration-300">
                 {brand}
               </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
           {brands.map((brand, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-2 group cursor-default">
               <span className="text-2xl md:text-3xl font-heading font-bold text-black/20 group-hover:text-black/80 transition-colors duration-300">
                 {brand}
               </span>
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
