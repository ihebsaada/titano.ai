import MissionHero from '../components/about/MissionHero';
import VisionStory from '../components/about/VisionStory';
import TeamSection from '../components/about/TeamSection';
import ValuesGrid from '../components/about/ValuesGrid';
import ContactSection from '../components/about/ContactSection';

const AboutContact = () => {
  return (
    <div className="bg-background min-h-screen relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: 'linear-gradient(#808080 1px, transparent 1px), linear-gradient(90deg, #808080 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <MissionHero />
      <VisionStory />
      <ValuesGrid />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default AboutContact;
