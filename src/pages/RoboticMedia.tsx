import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Download, ExternalLink, ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";
import TeamSection from "../components/about/TeamSection";
import Seo from "../components/Seo";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const sanitize = (s: string) => s.replace(/^\s*[-–—•]+\s*/g, "").trim();

const RoboticMedia = () => {
  const { t, i18n } = useTranslation();
  const isIT = (i18n.resolvedLanguage ?? i18n.language).startsWith("it");

  const primaryPdf = isIT
    ? "/robotic-media/whitepaper-it.pdf"
    : "/robotic-media/whitepaper-en.pdf";
  const secondaryPdf = isIT
    ? "/robotic-media/whitepaper-en.pdf"
    : "/robotic-media/whitepaper-it.pdf";
  const primaryLabel = isIT
    ? t("roboticMedia.download.downloadIT")
    : t("roboticMedia.download.downloadEN");
  const secondaryLabel = isIT
    ? t("roboticMedia.download.downloadEN")
    : t("roboticMedia.download.downloadIT");

  /* ── Ecosystem blocks ── */
  const ecoKeys = [
    "manufacturers",
    "venues",
    "mediaBrands",
    "measurement",
  ] as const;

  /* ── Use-case cards ── */
  const useCaseKeys = ["retail", "events", "campuses", "mobility"] as const;

  return (
    <div className="min-h-screen pt-32 pb-24 relative">
      <Seo
        title="Robotic Media ™ | A New Physical Media Infrastructure"
        description="Robotic Media transforms autonomous machines into programmable media nodes across real-world environments—enabling dynamic delivery, audience interaction, and certified measurement."
        path="/robotic-media"
      />

      {/* ═══════════════════════  HERO  ═══════════════════════ */}
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-28">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-7xl font-heading font-bold mb-4 text-foreground tracking-tight max-w-lg">
                  {t("roboticMedia.hero.title")}
                </h1>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 font-light">
                  {t("roboticMedia.hero.attribution")}
                </p>
                <p className="text-xl md:text-2xl text-accent font-heading font-semibold mb-8">
                  {t("roboticMedia.hero.subtitle")}
                </p>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                  {t("roboticMedia.hero.lead")}
                </p>
                <a
                  href="#whitepaper"
                  className="inline-flex items-center gap-3 bg-foreground text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:shadow-xl transition-all duration-300 shadow-lg"
                >
                  {t("roboticMedia.hero.cta")}
                  <ArrowDown size={20} />
                </a>
              </div>

              {/* Image */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex-1 relative flex items-center justify-center"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[80%] h-[80%] bg-accent/10 rounded-full blur-3xl" />
                </div>
                <div className="relative rounded-[40px] border border-white/10 backdrop-blur-2xl overflow-hidden bg-white/5 shadow-xl shadow-black/10">
                  {/* <img
                    src="/robotic-media/img1.jpeg"
                    alt={t("roboticMedia.images.heroAlt")}
                    loading="lazy"
                    decoding="async"
                    className="w-full max-h-[520px] object-cover mx-auto"
                  /> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════  DEFINITION  ═══════════════════════ */}
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-20">
            <SpotlightCard className="p-8 md:p-12 rounded-[40px] backdrop-blur-2xl border border-white/10">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                <div className="flex-1 lg:max-w-[55%]">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                    {t("roboticMedia.definition.title")}
                  </h2>
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium mb-6">
                    {t("roboticMedia.definition.statement")}
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed font-light">
                    {t("roboticMedia.definition.body")}
                  </p>
                </div>
                <div className="flex-1 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[70%] h-[70%] bg-accent/5 rounded-full blur-3xl" />
                  </div>
                  <div className="relative rounded-[32px] border border-white/10 overflow-hidden bg-white/5 shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/15">
                    <img
                      src="/robotic-media/img2.jpeg"
                      alt={t("roboticMedia.images.definitionAlt")}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover rounded-[32px]"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════  TITANO OS  ═══════════════════════ */}
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-20">
            <SpotlightCard className="p-8 md:p-12 rounded-[40px] backdrop-blur-2xl border border-white/10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                {t("roboticMedia.titanoOS.title")}
              </h2>
              <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-14 items-start">
                <div className="flex-1 lg:max-w-[55%]">
                  <p className="text-lg text-text-secondary leading-relaxed mb-6 font-light">
                    {t("roboticMedia.titanoOS.p1")}
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6 font-light">
                    {t("roboticMedia.titanoOS.p2")}
                  </p>
                  <ul className="space-y-3">
                    {([0, 1, 2, 3] as const).map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-lg text-foreground font-medium">
                          {sanitize(t(`roboticMedia.titanoOS.bullets.${i}`))}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 relative flex items-center justify-center lg:min-h-[320px]">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[70%] h-[70%] bg-accent/5 rounded-full blur-3xl" />
                  </div>
                  <div className="relative rounded-[32px] border border-white/10 overflow-hidden bg-white/5 shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/15">
                    <img
                      src="/robotic-media/img4.jpeg"
                      alt={t("roboticMedia.images.titanoOSAlt")}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover rounded-[32px]"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════  ECOSYSTEM (dark block)  ═══════════════════════ */}
      <section className="px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-black/90 backdrop-blur-3xl border border-white/10 text-white rounded-[48px] p-10 md:p-20 relative overflow-hidden max-w-7xl mx-auto shadow-2xl shadow-black/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-purple-900/15" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
              {t("roboticMedia.ecosystem.title")}
            </h2>
            <p className="text-xl text-gray-300 mb-14 max-w-2xl mx-auto text-center leading-relaxed">
              {t("roboticMedia.ecosystem.subtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ecoKeys.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {t(`roboticMedia.ecosystem.blocks.${key}.title`)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {t(`roboticMedia.ecosystem.blocks.${key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════  GLOBAL NETWORK  ═══════════════════════ */}
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-20">
            <SpotlightCard className="p-8 md:p-12 rounded-[40px] backdrop-blur-2xl border border-white/10">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                <div className="flex-1 lg:max-w-[55%]">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                    {t("roboticMedia.globalNetwork.title")}
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed mb-8 font-light">
                    {t("roboticMedia.globalNetwork.body")}
                  </p>
                  <ul className="space-y-4">
                    {([0, 1, 2] as const).map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-lg text-foreground font-medium">
                          {sanitize(
                            t(`roboticMedia.globalNetwork.bullets.${i}`),
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 relative flex items-center justify-center lg:min-h-[320px]">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[70%] h-[70%] bg-accent/5 rounded-full blur-3xl" />
                  </div>
                  <div className="relative rounded-[32px] border border-white/10 overflow-hidden bg-white/5 shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/15">
                    <img
                      src="/robotic-media/img3.jpeg"
                      alt={t("roboticMedia.images.globalNetworkAlt")}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover rounded-[32px]"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════  USE CASES (compact)  ═══════════════════════ */}
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground text-center">
              {t("roboticMedia.useCases.title")}
            </h2>
            <p className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto font-light">
              {t("roboticMedia.useCases.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCaseKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <SpotlightCard className="p-6 rounded-[24px] backdrop-blur-2xl border border-white/10 h-full flex flex-col">
                  <h3 className="text-lg font-heading font-bold mb-2 text-foreground">
                    {t(`roboticMedia.useCases.cards.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light flex-1">
                    {t(`roboticMedia.useCases.cards.${key}.desc`)}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Link
              to="/use-cases"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-lg"
            >
              {t("roboticMedia.useCases.cta")}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════  TEAM  ═══════════════════════ */}
      <TeamSection />

      {/* ═══════════════════════  FINAL CTA (dark block)  ═══════════════════════ */}
      <section className="px-6 md:px-12 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-black/90 backdrop-blur-3xl border border-white/10 text-white rounded-[48px] p-10 md:p-20 relative overflow-hidden max-w-7xl mx-auto shadow-2xl shadow-black/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-purple-900/15" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              {t("roboticMedia.finalCta.title")}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("roboticMedia.finalCta.text")}
            </p>
            <Link
              to="/about-contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              {t("roboticMedia.finalCta.cta")}
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════  WHITEPAPER DOWNLOAD  ═══════════════════════ */}
      <div className="px-6 md:px-12 mt-10">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} id="whitepaper" className="scroll-mt-32">
            <SpotlightCard className="p-8 md:p-12 rounded-[40px] backdrop-blur-2xl border border-white/10 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                {t("roboticMedia.download.title")}
              </h2>
              <p className="text-lg text-text-secondary mb-10 font-light">
                {t("roboticMedia.download.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={primaryPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:shadow-xl transition-all duration-300 shadow-lg"
                >
                  <Download size={20} />
                  {primaryLabel}
                </a>
                <a
                  href={secondaryPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-black/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-black/5 transition-all duration-300"
                >
                  <Download size={20} />
                  {secondaryLabel}
                </a>
              </div>

              <a
                href="https://github.com/lorenzomacali/Robotic-Media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                <ExternalLink size={16} />
                {t("roboticMedia.download.githubLabel")}
              </a>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoboticMedia;
