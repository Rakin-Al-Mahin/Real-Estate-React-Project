import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureSection from "./components/FeaturesSection/FeaturesSection";
import Properties from "./components/Properties/Properties";
import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import FAQ from "./components/FAQ/FAQ";
import TeamSection from "./components/TeamSection/TeamSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Properties />
      <About />
      <CTA />
      <FAQ />
      <TeamSection />
      <Contact />
      <Footer />
    </>
  );
}
