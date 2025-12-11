import { motion } from 'framer-motion';
import { Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const AboutContact = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      {/* Mission */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-block"
        >
          <h1 className="text-5xl md:text-8xl font-heading font-bold mb-12 text-foreground tracking-tight">
            La nostra missione
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl font-light leading-tight text-foreground max-w-5xl mx-auto"
        >
          Portare l’autonomia nelle città, nelle imprese e negli spazi pubblici. 
          Trasformare robot, dati e media in un’unica infrastruttura utile, potente e accessibile.
        </motion.p>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SpotlightCard className="rounded-[48px] p-12 md:p-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-12 text-foreground">La nostra filosofia</h2>
                <div className="space-y-8">
                  {[
                    "Tecnologia invisibile",
                    "Design minimalista",
                    "Etica e sicurezza",
                    "Standard europei"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-2xl md:text-3xl text-foreground/80 border-b border-black/5 pb-6"
                    >
                      <span className="text-accent mr-6 text-sm font-bold tracking-widest">0{i + 1}.</span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-white/50 rounded-[32px] h-[500px] flex items-center justify-center text-text-secondary relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-50" />
                <span className="text-lg relative z-10 font-medium tracking-widest uppercase">Visione & Futuro</span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-16 text-center text-foreground">Contatti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Business", email: "business@titano.ai" },
            { title: "Press", email: "press@titano.ai" },
            { title: "Investors", email: "investors@titano.ai" },
            { title: "Careers", email: "careers@titano.ai" }
          ].map((contact, index) => (
            <motion.a 
              key={index}
              href={`mailto:${contact.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block h-full group"
            >
              <SpotlightCard className="p-8 hover:bg-white/60 flex flex-col justify-between h-72 relative transition-all duration-300">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
                  <ArrowUpRight className="w-6 h-6 text-accent" />
                </div>

                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{contact.title}</h3>
                  <div className="flex items-center text-text-secondary group-hover:text-accent font-medium">
                    Scrivici <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
