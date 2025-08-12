import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Features } from "../../components/Features/Features";
import { Products } from "../../components/Products/Products";
import { Calculator } from "../../components/Calculator/Calculator";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Header } from "../../components/Header/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Products />
      <Calculator />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
