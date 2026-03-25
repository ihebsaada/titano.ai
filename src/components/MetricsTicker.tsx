import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import { ExternalLink } from 'lucide-react';

const MetricsTicker = () => {
  const { t } = useTranslation();

  const cases = [
    {
      title: t("realWorldData.case1Title"),
      stats: t("realWorldData.case1Stats"),
      footer: t("realWorldData.case1Footer"),
      // link: "https://vm.tiktok.com/ZNRMw2HA5/"
    },
    {
      title: t("realWorldData.case2Title"),
      stats: t("realWorldData.case2Stats"),
      footer: t("realWorldData.case2Footer"),
      // link: "https://www.instagram.com/reel/DSK5t3CkaBO/"
    },
    {
      title: t("realWorldData.case3Title"),
      stats: t("realWorldData.case3Stats"),
      footer: t("realWorldData.case3Footer"),
      // link: "https://www.instagram.com/reel/DP1ZU-fjEqX/"
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          {t("realWorldData.title")}
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl">
          {t("realWorldData.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-[32px] flex flex-col h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
          >
            <a
              //  href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group/link border-b border-white/10 pb-4 mb-6 hover:text-gray-400 transition-colors"
            >
              <h3 className="text-lg font-bold text-foreground group-hover/link:text-gray-400 flex-grow pr-4">
                {item.title}
              </h3>
              {/* <ExternalLink size={18} className="text-text-secondary group-hover/link:text-gray-400 transition-colors flex-shrink-0" /> */}
            </a>
            <div className="flex-grow mb-8 space-y-3">
              {item.stats.split("\n").map((line, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl font-mono font-medium text-foreground"
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="text-sm text-text-secondary mt-auto pt-4 border-t border-white/5 italic">
              {item.footer}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center border-t border-white/10 pt-8">
        <p className="text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider max-w-3xl mx-auto">
          {t("realWorldData.disclaimer")}
        </p>
      </div>
    </div>
  );
};

export default MetricsTicker;
