import { motion } from 'framer-motion';
import { Bot, Layers, Activity, MonitorPlay, Database } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const Ecosystem = () => {
  const layers = [
    {
      id: "robotics",
      title: "Robotics Layer",
      subtitle: "Hardware + Automazione",
      icon: <Bot className="w-12 h-12 text-accent" />,
      content: (
        <ul className="space-y-4 text-lg text-text-secondary">
          <li><strong className="text-foreground">Navigazione autonoma:</strong> Muoversi in ambienti complessi.</li>
          <li><strong className="text-foreground">Delivery:</strong> Consegna di beni e servizi.</li>
          <li><strong className="text-foreground">Interazione:</strong> Voce, touch, gesti.</li>
          <li><strong className="text-foreground">Media integrato:</strong> Schermi ad alta luminosità.</li>
          <li><strong className="text-foreground">Multi-brand support:</strong> Keenon, Pudu, Segway. Titano è hardware-agnostic.</li>
        </ul>
      )
    },
    {
      id: "software",
      title: "Software Layer",
      subtitle: "Titano OS",
      icon: <Layers className="w-12 h-12 text-accent" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-text-secondary">
          <div className="bg-white/40 p-4 rounded-2xl">
            <h4 className="font-bold text-foreground mb-1">Navigation & Mapping</h4>
            <p className="text-sm">Mappatura 3D in tempo reale.</p>
          </div>
          <div className="bg-white/40 p-4 rounded-2xl">
            <h4 className="font-bold text-foreground mb-1">Vision & Sensing</h4>
            <p className="text-sm">Percezione avanzata dell'ambiente.</p>
          </div>
          <div className="bg-white/40 p-4 rounded-2xl">
            <h4 className="font-bold text-foreground mb-1">Media Engine</h4>
            <p className="text-sm">Gestione campagne DOOH contestuali.</p>
          </div>
          <div className="bg-white/40 p-4 rounded-2xl">
            <h4 className="font-bold text-foreground mb-1">Fleet Cloud</h4>
            <p className="text-sm">Orchestrazione flotta centralizzata.</p>
          </div>
          <div className="md:col-span-2 bg-white/40 p-4 rounded-2xl">
            <h4 className="font-bold text-foreground mb-1">Data Fabric</h4>
            <p className="text-sm">Integrazione dati da ogni sensore.</p>
          </div>
        </div>
      )
    },
    {
      id: "operations",
      title: "Operations Layer",
      subtitle: "24/7 Global Remote Ops",
      icon: <Activity className="w-12 h-12 text-accent" />,
      content: (
        <ul className="space-y-4 text-lg text-text-secondary">
          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent"></span>Fleet monitoring costante.</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent"></span>Issue resolution in tempo reale.</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent"></span>Supporto venue dedicato.</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent"></span>Partner integratori certificati.</li>
          <li className="mt-4 p-4 bg-accent/10 rounded-2xl text-accent font-medium"><strong>India Ops Hub + EU Core</strong>: Efficienza globale.</li>
        </ul>
      )
    },
    {
      id: "media",
      title: "Media Layer",
      subtitle: "Autonomous DOOH",
      icon: <MonitorPlay className="w-12 h-12 text-accent" />,
      content: (
        <div className="text-lg text-text-secondary space-y-6">
          <p>I robot diventano schermi intelligenti che mostrano contenuti in base al luogo, all’ora e al contesto.</p>
          <div className="flex flex-wrap gap-3">
             {["Partnership brand globali", "Interattività utente", "Dati e insight precisi"].map((tag, i) => (
               <span key={i} className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium border border-white/40 shadow-sm">
                 {tag}
               </span>
             ))}
          </div>
        </div>
      )
    },
    {
      id: "data",
      title: "Data Layer",
      subtitle: "The Intelligence Fabric",
      icon: <Database className="w-12 h-12 text-accent" />,
      content: (
        <div className="text-lg text-text-secondary space-y-4">
          <p>Tutto ciò che un robot vede, fa, percorre, mostra diventa dato.</p>
          <div className="bg-dark text-white p-6 rounded-3xl mt-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 opacity-90">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Dashboard, insight, analytics in tempo reale.
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Ottimizzazione automatica di percorsi e media.
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Un unico cervello globale in evoluzione continua.
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-block"
        >
          <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8 text-foreground tracking-tight">
            L'Ecosistema
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-light"
        >
          Robot intelligenti, tecnologie software e una piattaforma media integrata.
          Ogni componente lavora insieme per creare un’autonomia scalabile, sicura e utile.
        </motion.p>
      </section>

      {/* Layers */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {layers.map((layer, index) => (
          <motion.div 
            key={layer.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <SpotlightCard className="p-8 md:p-12 w-full">
              <div className={`flex flex-col md:flex-row gap-12 md:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual/Icon Side */}
                <div className="w-full md:w-5/12 flex justify-center items-center bg-white/50 rounded-[32px] p-12 min-h-[300px] shadow-inner border border-white/60 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-6 bg-white rounded-2xl shadow-lg shadow-accent/10">
                      {layer.icon}
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-foreground">{layer.title}</h3>
                    <p className="text-lg text-accent font-medium mt-2">{layer.subtitle}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 flex flex-col justify-center relative z-10">
                  <div className="mb-6 hidden md:block">
                     <span className="text-sm font-bold tracking-widest text-accent uppercase opacity-60">Layer {index + 1}</span>
                     <h3 className="text-4xl font-heading font-bold mt-2 text-foreground">{layer.title}</h3>
                  </div>
                  
                  <div className="prose prose-lg">
                    {layer.content}
                  </div>
                </div>
                
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;
