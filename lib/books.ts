export type BookAction = {
  label: string;
  url: string;
};

export type Book = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  accent: string;
  badge?: string;
  collection: "medical" | "parenting" | "children" | "psychology" | "audio";
  author?: string;
  formats?: string[];
  amazonUrl?: string;
  actions: BookAction[];
  previewPdf?: string;
  audioSrc?: string;
  duration?: string;
  narrator?: string;
  publishedDate?: string;
  retailers?: { name: string; url: string; logo?: string }[];
};

export const books: Book[] = [
  {
    slug: "raising-emotionally-intelligent-children",
    title: "Raising Emotionally Intelligent Children",
    description:
      "Practical strategies for helping children build empathy, resilience, and confidence in everyday family life.",
    image: "/books-frontpage/raising-emotionally-intelligent-children.jpg",
    accent: "#1A7A8A",
    collection: "parenting",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback"],
    amazonUrl: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ",
    actions: [{ label: "Get on Amazon", url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ" }],
  },
  {
    slug: "anxious-attachment-workbook-for-parents",
    title: "Anxious Attachment Workbook For Parents",
    description:
      "A supportive workbook for parents who want calmer responses, more emotional safety, and stronger connection at home.",
    image: "/books-frontpage/anxius-attachment-workbook.jpg",
    accent: "#514189",
    collection: "parenting",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback"],
    amazonUrl: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GQXCYHXZ",
    actions: [{ label: "Get on Amazon", url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GQXCYHXZ" }],
  },
  {
    slug: "anger-management-for-explosive-parents",
    title: "Anger Management for Explosive Parents",
    description:
      "A practical guide for breaking yelling patterns, repairing trust, and responding with more calm and consistency.",
    image: "/books-frontpage/anger-managment-for-explosive-parents.jpg",
    accent: "#264C62",
    collection: "parenting",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback", "Audiobook"],
    amazonUrl: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF",
    actions: [{ label: "Get on Amazon", url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF" }],
    audioSrc: "/audio/anger-management-for-explosive-parents/Introduction_AngerManagementExplosive.mp3",
    duration: "3:55",
    narrator: "Nettie Rose",
    publishedDate: "March 31, 2026",
    retailers: [
      { name: "Amazon Audible", url: "https://www.amazon.com/Anger-Management-Explosive-Parents-Understand/dp/B0HCCNTXTT", logo: "/logos/amazon-kindle.png" },
      { name: "Apple Books", url: "https://books.apple.com/us/audiobook/anger-management-for-explosive-parents-stop-yelling/id1890140076", logo: "/logos/apple-books.png" },
      { name: "Kobo", url: "https://www.kobo.com/us/en/audiobook/anger-management-for-explosive-parents-15", logo: "/logos/kobo.png" },
      { name: "Storytel", url: "http://storytel.com/tv/books/anger-management-for-explosive-parents-stop-yelling-understand-your-triggers-and-break-the-cycle-without-breaking-yourself-14033841" },
    ],
  },
  {
    slug: "manejo-de-la-ira-para-padres-explosivos",
    title: "Manejo de la Ira Para Padres Explosivos",
    description:
      "The Spanish-language edition for parents who want to regulate anger, stop yelling, and reconnect with their children.",
    image: "/books-frontpage/manejo-de-la-ira-para-padres-explosivos.jpg",
    accent: "#E8773A",
    collection: "parenting",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback"],
    amazonUrl: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GT6T8SWK",
    actions: [{ label: "Get on Amazon", url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GT6T8SWK" }],
  },
  {
    slug: "breaking-generational-trauma-for-parents",
    title: "Breaking Generational Trauma for Parents",
    description:
      "A parent-focused guide for recognizing inherited patterns, building healthier responses, and creating a safer family dynamic.",
    image: "/books-frontpage/breaking-generational-trauma-for-parents.jpg",
    accent: "#0B8288",
    collection: "psychology",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback"],
    amazonUrl: "https://www.amazon.com/-/es/gp/product/B0FNX6ZC6C",
    actions: [{ label: "Get on Amazon", url: "https://www.amazon.com/-/es/gp/product/B0FNX6ZC6C" }],
  },
  {
    slug: "healing-your-inner-child",
    title: "Healing Your Inner Child",
    description:
      "A compassionate guide to understanding and reparenting your inner child, breaking free from old patterns, and building a life rooted in self-worth and emotional freedom.",
    image: "/books-frontpage/healing-your-inner-child.jpg",
    accent: "#D96B2B",
    collection: "psychology",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback"],
    amazonUrl: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0H6NZXSZ3",
    actions: [{ label: "Get on Amazon", url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0H6NZXSZ3" }],
  },
  {
    slug: "healing-attachment-wounds",
    title: "Healing Attachment Wounds",
    description:
      "A trauma-informed guide to understanding attachment injuries, calming relationship triggers, and rebuilding secure, trusting connections.",
    image: "/books-frontpage/healing-attachment-wounds.jpg",
    accent: "#3E6B8A",
    collection: "psychology",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback"],
    amazonUrl: "https://us.amazon.com/Healing-Attachment-Wounds-Understand-Relationships-ebook/dp/B0HGPV3Z74",
    actions: [{ label: "Get on Amazon", url: "https://us.amazon.com/Healing-Attachment-Wounds-Understand-Relationships-ebook/dp/B0HGPV3Z74" }],
  },
  {
    slug: "healing-toxic-shame",
    title: "Healing Toxic Shame",
    description:
      "A compassionate path to releasing deep-seated shame, quieting the inner critic, and reclaiming a resilient sense of self-worth.",
    image: "/books-frontpage/healing-toxic-shame.jpg",
    accent: "#7A5C8A",
    collection: "psychology",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback"],
    amazonUrl: "https://us.amazon.com/Healing-Toxic-Shame-Evidence-Based-Understanding-ebook/dp/B0HDHNL2V4",
    actions: [{ label: "Get on Amazon", url: "https://us.amazon.com/Healing-Toxic-Shame-Evidence-Based-Understanding-ebook/dp/B0HDHNL2V4" }],
  },
  {
    slug: "medical-spanish-for-healthcare-professionals",
    title: "Medical Spanish for Healthcare Professionals",
    description:
      "Essential Spanish for healthcare professionals — phrases, patient history, emergency vocabulary, and clinical communication.",
    image: "/books-frontpage/medical-spanish-for-healthcare-professionals.jpg",
    accent: "#C47A6B",
    collection: "medical",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback", "Audio"],
    amazonUrl: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0G9VMBH6W",
    actions: [
      { label: "Get on Amazon", url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0G9VMBH6W" },
    ],
  },
  {
    slug: "juan-cigarron",
    title: "Juan Cigarron",
    description: "Bilingual Spanish-English stories for kids 7-12.",
    image: "/books-frontpage/juan-cigarron.jpg",
    accent: "#0B8288",
    collection: "children",
    author: "Aluna Publishing House",
    formats: ["Kindle", "Paperback", "PDF"],
    amazonUrl: "https://www.amazon.com/-/es/Aluna-Publishing-House-ebook/dp/B0D4LHPBPG",
    actions: [
      { label: "Get on Amazon", url: "https://www.amazon.com/-/es/Aluna-Publishing-House-ebook/dp/B0D4LHPBPG" },
      { label: "Download PDF", url: "/pdf-books/juan-cigarron.pdf" },
    ],
    previewPdf: "/pdf-books/juan-cigarron.pdf",
  },
  {
    slug: "cuentos-para-dormir",
    title: "Cuentos Para Dormir",
    description:
      "A cozy bedtime collection created for children and families who love gentle Spanish stories before sleep.",
    image: "/books-frontpage/cuentos-para-dormir.png",
    accent: "#E8773A",
    collection: "children",
    author: "Praxmed Publishing",
    formats: ["Kindle", "Paperback", "PDF"],
    amazonUrl: "https://www.amazon.com/dp/B0G9TVPB8K",
    actions: [
      { label: "Get on Amazon", url: "https://www.amazon.com/dp/B0G9TVPB8K" },
      { label: "Download PDF", url: "/pdf-books/cuentos-para-dormir.pdf" },
    ],
    previewPdf: "/pdf-books/cuentos-para-dormir.pdf",
  },
];

export const getBookBySlug = (slug: string) => books.find((b) => b.slug === slug);
export const getBooksByCollection = (collection: Book["collection"]) =>
  books.filter((b) => b.collection === collection);
