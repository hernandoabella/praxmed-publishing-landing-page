import BookGridPage from "../components/BookGridPage";

const giftBooks = [
  {
    title: "Juan Cigarron",
    image: "/books-frontpage/juan-cigarron.jpg",
    description:
      "Bonus PDF book ready to share by email as a gift download for families and readers.",
    accent: "#E8773A",
    previewPdf: "/pdf-books/juan-cigarron.pdf",
    actions: [
      {
        label: "Open PDF",
        url: "/pdf-books/juan-cigarron.pdf",
      },
      {
        label: "Download Gift",
        url: "/pdf-books/juan-cigarron.pdf",
      },
    ],
  },
  {
    title: "Cuentos Para Dormir",
    image: "/books-frontpage/cuentos-para-dormir.png",
    description:
      "A bedtime bonus book that can be shared as part of your email gift flow.",
    accent: "#0B8288",
    previewPdf: "/pdf-books/cuentos-para-dormir.pdf",
    actions: [
      {
        label: "Open PDF",
        url: "/pdf-books/cuentos-para-dormir.pdf",
      },
      {
        label: "Download Gift",
        url: "/pdf-books/cuentos-para-dormir.pdf",
      },
    ],
  },
];

const previewBooks = [
  {
    title: "Raising Emotionally Intelligent Children",
    image: "/books-frontpage/raising-emotionally-intelligent-children.jpg",
    description:
      "Preview the book online or go straight to Amazon for the full edition.",
    accent: "#1A7A8A",
    previewPdf: "/pdf-books/raising-emotionally-intelligent-children.pdf",
    actions: [
      {
        label: "View Preview",
        url: "/pdf-books/raising-emotionally-intelligent-children.pdf",
      },
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ",
      },
    ],
  },
  {
    title: "Anger Management for Explosive Parents",
    image: "/books-frontpage/anger-managment-for-explosive-parents.jpg",
    description:
      "Includes a visible PDF preview plus a direct purchase link for readers who want the complete book.",
    accent: "#264C62",
    previewPdf: "/pdf-books/anger-managment-for-explosive-parents.pdf",
    actions: [
      {
        label: "View Preview",
        url: "/pdf-books/anger-managment-for-explosive-parents.pdf",
      },
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
      "Spanish edition with a PDF preview and a direct link to the Amazon page.",
    accent: "#E8773A",
    previewPdf: "/pdf-books/manejo-de-la-ira-para-padres-explosivos.pdf",
    actions: [
      {
        label: "View Preview",
        url: "/pdf-books/manejo-de-la-ira-para-padres-explosivos.pdf",
      },
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
      "A parent-focused guide with a live PDF preview and a direct Amazon purchase link.",
    accent: "#0B8288",
    previewPdf: "/pdf-books/breaking-generational-trauma-for-parents.pdf",
    actions: [
      {
        label: "View Preview",
        url: "/pdf-books/breaking-generational-trauma-for-parents.pdf",
      },
      {
        label: "Get on Amazon",
        url: "https://www.amazon.com/-/es/gp/product/B0FNX6ZC6C",
      },
    ],
  },
];

export default function BonusBookPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#fffdf7_0%,#ffffff_34%,#f5f9f8_100%)]">
      <BookGridPage
        eyebrow=""
        title="Free bonus books"
        description=""
        books={giftBooks}
      />

      <section className="mx-auto max-w-6xl px-6 pt-8">
        <div className="mb-8 max-w-2xl" />
      </section>

      <BookGridPage
        eyebrow="PDF Preview"
        title="More books readers can explore"
        description="Each card includes its image, a PDF preview, and a direct link to keep browsing or buy the full book."
        books={previewBooks}
      />
    </main>
  );
}
