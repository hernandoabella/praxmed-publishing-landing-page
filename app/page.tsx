import AboutBook from "./components/AboutBook";
import BonusSection from "./components/BonusSection";
import Hero from "./components/Hero";
import WhatYouWillLearn from "./components/WhatYouWillLearn";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutBook />
      <WhatYouWillLearn />
      <BonusSection />
    </main>
  );
}
