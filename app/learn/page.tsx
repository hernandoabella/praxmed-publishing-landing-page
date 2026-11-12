import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn | PRAXMED Publishing",
  description: "Interactive learning, knowledge library, and medical education resources.",
};

const topics = ["Memory", "Habits", "Emotions", "Attention"];
const library = [
  { title: "Medical Spanish Basics", desc: "Core vocabulary and phrases for clinical settings." },
  { title: "Attachment & Parenting", desc: "Understanding bonds and emotional safety." },
  { title: "Trauma-Informed Care", desc: "Principles for safe, supportive interactions." },
];

export default function LearnPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-black tracking-tight text-[#153047] md:text-5xl">Learn</h1>
          <p className="mt-4 text-[#5b6d78]">Practical, interactive learning for curious minds.</p>
        </div>
      </section>

      {/* Interactive Learning */}
      <section className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Interactive Learning</h2>
          <p className="mt-3 text-[#5b6d78]">Explore bite-sized concepts and test your understanding.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <div key={t} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-[#153047]">{t}</h3>
                <p className="mt-2 text-sm text-[#5b6d78]">Quick interactive module.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Library */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Knowledge Library</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {library.map((l) => (
              <article key={l.title} className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-[#153047]">{l.title}</h3>
                <p className="mt-2 text-sm text-[#5b6d78]">{l.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Education */}
      <section className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Medical Education</h2>
          <p className="mt-3 text-[#5b6d78]">
            Structured resources for healthcare professionals and students.
          </p>
          <Link href="/medical-spanish" className="mt-6 inline-block rounded-full bg-[#002EC1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002EC1]/90">
            Explore Medical Spanish
          </Link>
        </div>
      </section>
    </main>
  );
}
