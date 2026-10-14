import BookGridPage from "../components/BookGridPage";

const books = [
  {
    title: "Juan Cigarron",
    image: "/books-frontpage/juan-cigarron.jpg",
    description:
      "BILINGUAL SPANISH - ENGLISH STORIES FOR KIDS 7 - 12",
    accent: "#0B8288",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Aluna-Publishing-House-ebook/dp/B0D4LHPBPG",
      },
      {
        label: "Download PDF",
        url: "/pdf-books/juan-cigarron.pdf",
      },
    ],
  },
  {
    title: "Cuentos Para Dormir",
    image: "/books-frontpage/cuentos-para-dormir.png",
    description:
      "A cozy bedtime collection created for children and families who love gentle Spanish stories before sleep.",
    accent: "#E8773A",
    actions: [
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/dp/B0G9TVPB8K",
      },
      {
        label: "Download PDF",
        url: "/pdf-books/cuentos-para-dormir.pdf",
      },
    ],
  },
];

export default function ForKidsPage() {
  return (
    <main>
      <BookGridPage
        eyebrow="For Kids"
        title="Books for curious, growing minds."
        description="Explore a friendly collection of books created to support emotional growth, communication, and confident learning for children."
        books={books}
      />
    </main>
  );
}
