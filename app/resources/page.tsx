import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | PRAXMED Publishing",
  description: "Worksheets, flashcards, study guides, posters, and downloadable materials.",
};

const resources = [
  { title: "Worksheets", desc: "Printable exercises for practice and review." },
  { title: "Flashcards", desc: "Quick-reference cards for key terms." },
  { title: "Study Guides", desc: "Structured notes for exam preparation." },
  { title: "Posters", desc: "Visual summaries for classrooms and clinics." },
  { title: "Downloadable Materials", desc: "PDFs and templates you can use today." },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-black tracking-tight text-[#153047] md:text-5xl">Free Resources</h1>
          <p className="mt-4 max-w-3xl text-[#5b6d78]">
            Worksheets, flashcards, study guides, posters y materiales descargables.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <article key={r.title} className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-[#153047]">{r.title}</h2>
                <p className="mt-2 text-[#5b6d78]">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
