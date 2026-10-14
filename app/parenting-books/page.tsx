import BookGridPage from "../components/BookGridPage";
import BonusResources from "../components/BonusResources";

const books = [
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
      "Tools and step-by-step guidance for breaking yelling patterns and repairing trust after conflict.",
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
      "A practical Spanish-language guide for parents who want to regulate anger, stop yelling, and reconnect with their children.",
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
    title: "Raising Emotionally Intelligent Children",
    image: "/books-frontpage/raising-emotionally-intelligent-children.jpg",
    description:
      "A practical guide for helping parents nurture empathy, emotional awareness, and confidence in everyday family life.",
    accent: "#1A7A8A",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ",
      },
    ],
  },
];

export default function ParentingBooksPage() {
  return (
    <main>
      <BookGridPage
        eyebrow="Parenting Books"
        title="Guides for calmer, more connected parenting."
        description="Browse parenting titles focused on emotional intelligence, regulation, and practical support for everyday challenges."
        books={books}
      />
      <BonusResources />
    </main>
  );
}
