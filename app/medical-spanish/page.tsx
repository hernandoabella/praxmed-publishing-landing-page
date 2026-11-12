import Hero from "../components/Hero";
import BonusSection from "../components/BonusSection";
import Testimonials from "../components/Testimonials";
import FaqDark from "../components/FaqDark";

export const metadata = {
  title: "Medical Spanish for Healthcare Professionals | PRAXMED Publishing",
  description:
    "Learn essential medical Spanish with audio tracks, phrases, and clinical vocabulary designed for doctors, nurses, and healthcare staff.",
};

export default function MedicalSpanishPage() {
  return (
    <main className="bg-white">
      <div className="bg-[#0F2137]">
        <Hero />
        <BonusSection transparent />
        <Testimonials transparent />
      </div>
      <FaqDark />
    </main>
  );
}
