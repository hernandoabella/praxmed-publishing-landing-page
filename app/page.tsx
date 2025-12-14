import AboutBook from "./components/AboutBook";

import Author from "./components/Author";
import BonusSection from "./components/BonusSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhatMakesItDifferent from "./components/WhatMakesItDifferent";
import WhatYouWillLearn from "./components/WhatYouWillLearn";

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
