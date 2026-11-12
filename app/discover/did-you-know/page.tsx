import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Did You Know? | PRAXMED Publishing",
  description: "Curiosities about the brain, science, biology, psychology, and human behavior.",
};

const facts = [
  "The human brain contains roughly 86 billion neurons.",
  "Habits can reduce the mental effort needed for daily decisions.",
  "Social connection influences both mood and physical health.",
  "Memory is reconstructed, not replayed, each time we recall it.",
  "Stress responses can be shaped by past experiences and context.",
];

export default function DidYouKnowPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black tracking-tight text-[#153047] md:text-5xl">Did You Know?</h1>
          <p className="mt-4 text-[#5b6d78]">
            Curiosidades sobre el cerebro, ciencia, biología, psicología y comportamiento humano.
          </p>
        </div>
      </section>
      <section className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <ul className="space-y-3">
            {facts.map((f) => (
              <li key={f} className="rounded-2xl bg-white p-5 text-[#5b6d78]">{f}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
