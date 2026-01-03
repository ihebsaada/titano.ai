import MissionHero from '../components/about/MissionHero';
import VisionStory from '../components/about/VisionStory';
import TeamSection from '../components/about/TeamSection';
import ValuesGrid from '../components/about/ValuesGrid';
import ContactSection from '../components/about/ContactSection';

const AboutContact = () => {
  return (
    <div className="min-h-screen relative">
      <MissionHero />
      <VisionStory />
      <ValuesGrid />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default AboutContact;
