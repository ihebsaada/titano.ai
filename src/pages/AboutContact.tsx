import MissionHero from '../components/about/MissionHero';
import VisionStory from '../components/about/VisionStory';
import TeamSection from '../components/about/TeamSection';
import ValuesGrid from '../components/about/ValuesGrid';
import ContactSection from '../components/about/ContactSection';
import Seo from '../components/Seo';

const AboutContact = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="About Titano | The Team Behind Robotic Media™"
        description="Titano develops Titano OS, the media infrastructure powering Robotic Media networks across real-world environments."
        path="/about-contact"
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
