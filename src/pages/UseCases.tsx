import { motion } from 'framer-motion';
import { ShoppingBag, Coffee, Plane, Utensils, Shield } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const UseCases = () => {
  const cases = [
    {
      title: "Retail & Mall",
      icon: <ShoppingBag className="w-8 h-8 text-accent" />,
      items: ["Robot-guida", "Robot-promoter", "Raccolta dati flussi", "Media dinamico"]
    },
    {
      title: "Hospitality",
      icon: <Coffee className="w-8 h-8 text-accent" />,
      items: ["Welcome robot", "Room delivery", "Concierge robotico"]
    },
    {
      title: "Aeroporti / Trasporti",
      icon: <Plane className="w-8 h-8 text-accent" />,
      items: ["Orientamento passeggeri", "Informazioni voli", "Media premium"]
    },
    {
      title: "F&B / Eventi",
      icon: <Utensils className="w-8 h-8 text-accent" />,
      items: ["Delivery + Media", "Crowd movement", "Gestione aree"]
    },
    {
      title: "Security & Night Ops",
      icon: <Shield className="w-8 h-8 text-accent" />,
      items: ["Anomaly detection", "Segnalazioni", "Pattugliamento autonomo"],
      future: true
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-heading font-bold mb-8 text-foreground tracking-tight"
        >
          Applicazioni Reali
        </motion.h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-light">
          Dal retail alla sicurezza, Titano porta valore immediato e misurabile.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full rounded-[32px] hover:shadow-glow hover:-translate-y-2 transition-all duration-300 group"
            >
              <SpotlightCard className="p-8 h-full">
                {useCase.future && (
                  <div className="absolute top-4 right-4 bg-dark text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-lg">
                    Futuro
                  </div>
                )}
                
                <div className="mb-8 w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">{useCase.title}</h3>
                
                <ul className="space-y-4">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-center text-text-secondary group-hover:text-foreground transition-colors">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
