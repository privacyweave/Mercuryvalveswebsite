import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ProductsSection from "@/components/home/products-section";
import IndustrialShowcase from "@/components/home/industrial-showcase";
import ClientsSection from "@/components/home/clients-section";
import ContactSection from "@/components/home/contact-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <IndustrialShowcase />
      <ClientsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
