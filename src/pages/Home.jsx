import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import useScrollFade from "../hooks/useScrollFade";
import Testimonial from "../components/Testimonial";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/StatsSection";
import FAQSection from "../components/FAQSection";
import WhyChooseUs from "../components/WhyChooseUs";
import OurTeam from "../components/OurTeam";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" />
      <StatsSection />
      <WhyChooseUs />
      <OurTeam />
      <FAQSection />
      <GallerySection className="fade-left" />
      <Testimonial className="fade-right" />
      <ContactSection className="fade-up" />



    </>
  );
};

export default Home;