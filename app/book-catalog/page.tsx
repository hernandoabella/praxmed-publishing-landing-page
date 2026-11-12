import BookGridPage from "../components/BookGridPage";
import { books } from "../../lib/books";

export const metadata = {
  title: "Book Catalog | PRAXMED Publishing",
  description: "Browse the full Praxmed Publishing catalog across medical education, parenting, psychology, and children's books.",
};

export default function BooksPage() {
  const gridBooks = books.map((book) => ({
    title: book.title,
    description: book.description,
    accent: book.accent,
    image: book.image,
    badge: book.collection,
    previewPdf: book.previewPdf,
    actions: book.actions,
  }));

  return (
    <main>
      <BookGridPage
        eyebrow="Full Catalog"
        title="Explore every Praxmed title."
        description="Browse medical education, parenting, psychology, and children's books in one place."
        books={gridBooks}
      />
    </main>
  );
}
