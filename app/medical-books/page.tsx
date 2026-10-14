import BookGridPage from "../components/BookGridPage";
import AudioDownload from "../components/BonusSection";
import Testimonials from "../components/Testimonials";

const books = [
  {
    title: "Medical Spanish",
    image: "/books-frontpage/medical-spanish-for-healthcare-professionals.jpg",
    description:
      "Essential Spanish for healthcare professionals — phrases, patient history, emergency vocabulary, and clinical communication.",
    accent: "#C47A6B",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0G9VMBH6W",
      },
      {
        label: "View PDF",
        url: "/pdf-books/100-healing-affirmations.pdf",
      },
    ],
  },
];

export default function MedicalBooksPage() {
  return (
    <main>
      <BookGridPage
        eyebrow="Medical Books"
        title="Medical Spanish for Healthcare Professionals"
        description="Learn essential medical Spanish with audio tracks, phrases, and clinical vocabulary designed for doctors, nurses, and healthcare staff."
        books={books}
      />
      <AudioDownload />
      <Testimonials />
    </main>
  );
}
