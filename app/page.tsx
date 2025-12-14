import Author from "./components/Author";
import BonusSection from "./components/BonusSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <BonusSection />
      <Author />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
