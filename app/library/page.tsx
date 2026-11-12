import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Library | PRAXMED Publishing",
  description: "Medical concepts, psychological definitions, healthcare terminology, and scientific explanations.",
};

const items = [
  { title: "Medical Concepts", desc: "Core ideas in anatomy, physiology, and clinical care." },
  { title: "Psychological Definitions", desc: "Clear explanations of key mental health terms." },
  { title: "Healthcare Terminology", desc: "Everyday clinical vocabulary for professionals." },
  { title: "Scientific Explanations", desc: "Evidence-based summaries of research findings." },
];

export default function LibraryPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-black tracking-tight text-[#153047] md:text-5xl">Knowledge Library</h1>
          <p className="mt-4 max-w-3xl text-[#5b6d78]">
            Biblioteca de conceptos médicos, definiciones psicológicas, terminología sanitaria y explicaciones científicas.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-[#153047]">{item.title}</h2>
                <p className="mt-2 text-[#5b6d78]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
