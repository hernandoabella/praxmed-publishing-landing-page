import BreakingGenerationalTraumaSection from "./components/BreakingGenerationalTraumaSection";
import HealingInnerChildSection from "./components/HealingInnerChildSection";
import BookGridPage from "./components/BookGridPage";
import BonusSection from "./components/BonusSection";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Nwesletter from "./components/Nwesletter";
import RaisingEISection from "./components/Raisingeisection";
import Testimonials from "./components/Testimonials";

const featuredBooks = [
  {
    title: "Raising Emotionally Intelligent Children",
    image: "/books-frontpage/raising-emotionally-intelligent-children.jpg",
    description:
      "Practical strategies for helping children build empathy, resilience, and confidence in everyday family life.",
    accent: "#1A7A8A",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ",
      },
    ],
  },
  {
    title: "Anxious Attachment Workbook For Parents",
    image: "/books-frontpage/anxius-attachment-workbook.jpg",
    description:
      "A supportive workbook for parents who want calmer responses, more emotional safety, and stronger connection at home.",
    accent: "#514189",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GQXCYHXZ",
      },
    ],
  },
  {
    title: "Anger Management for Explosive Parents",
    image: "/books-frontpage/anger-managment-for-explosive-parents.jpg",
    description:
      "A practical guide for breaking yelling patterns, repairing trust, and responding with more calm and consistency.",
    accent: "#264C62",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF",
      },
    ],
  },
  {
    title: "Manejo de la Ira Para Padres Explosivos",
    image: "/books-frontpage/manejo-de-la-ira-para-padres-explosivos.jpg",
    description:
      "The Spanish-language edition for parents who want to regulate anger, stop yelling, and reconnect with their children.",
    accent: "#E8773A",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GT6T8SWK",
      },
    ],
  },
  {
    title: "Breaking Generational Trauma for Parents",
    image: "/books-frontpage/breaking-generational-trauma-for-parents.jpg",
    description:
      "A parent-focused guide for recognizing inherited patterns, building healthier responses, and creating a safer family dynamic.",
    accent: "#0B8288",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/gp/product/B0FNX6ZC6C",
      },
    ],
  },
  {
    title: "Healing Your Inner Child",
    image: "/books-frontpage/healing-your-inner-child.jpg",
    description:
      "A compassionate guide to understanding and reparenting your inner child, breaking free from old patterns, and building a life rooted in self-worth and emotional freedom.",
    accent: "#D96B2B",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0H6NZXSZ3",
      },
    ],
  },
  {
    title: "Healing Attachment Wounds",
    image: "/books-frontpage/healing-attachment-wounds.jpg",
    description:
      "A trauma-informed guide to understanding attachment injuries, calming relationship triggers, and rebuilding secure, trusting connections.",
    accent: "#3E6B8A",
    actions: [
      {
        label: "Get on Amazon",
        url: "#",
      },
    ],
  },
  {
    title: "Healing Toxic Shame",
    image: "/books-frontpage/healing-toxic-shame.jpg",
    description:
      "A compassionate path to releasing deep-seated shame, quieting the inner critic, and reclaiming a resilient sense of self-worth.",
    accent: "#7A5C8A",
    actions: [
      {
        label: "Get on Amazon",
        url: "#",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <BookGridPage
        eyebrow="Featured Library"
        title="Explore the full book collection."
        description="See the complete catalog side by side, with direct purchase links for every title."
        books={featuredBooks}
        whiteBackground
      />
      <Hero2 />
      <RaisingEISection />
      <Hero3 />
      <BreakingGenerationalTraumaSection />
      <HealingInnerChildSection />
      <Faq />
      <Nwesletter />
      <div className="bg-[#0F2137]">
        <Hero />
        <BonusSection transparent />
        <Testimonials transparent />
      </div>
    </main>
  );
}
