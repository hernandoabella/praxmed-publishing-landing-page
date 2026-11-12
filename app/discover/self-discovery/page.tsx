import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Discovery | PRAXMED Publishing",
  description: "Reflection exercises, emotional intelligence, emotion recognition, and journaling.",
};

const exercises = [
  "Name one emotion you felt today and what triggered it.",
  "Write three things you handled well this week.",
  "Identify a recurring thought and question its evidence.",
  "List one boundary you want to strengthen.",
];

export default function SelfDiscoveryPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black tracking-tight text-[#153047] md:text-5xl">Self-Discovery</h1>
          <p className="mt-4 text-[#5b6d78]">
            Reflection exercises, emotional intelligence, recognition of emotions, and journaling.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#153047]">Reflection Exercises</h2>
          <ul className="mt-6 space-y-3">
            {exercises.map((e) => (
              <li key={e} className="rounded-2xl bg-white p-5 text-[#5b6d78]">{e}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#153047]">Emotional Intelligence</h2>
          <p className="mt-3 text-[#5b6d78]">
            Notice, name, and navigate emotions with curiosity instead of judgment.
          </p>
          <h2 className="mt-8 text-2xl font-bold text-[#153047]">Emotion Recognition</h2>
          <p className="mt-3 text-[#5b6d78]">
            Practice scanning body signals, thoughts, and context to identify what you feel.
          </p>
          <h2 className="mt-8 text-2xl font-bold text-[#153047]">Journaling</h2>
          <p className="mt-3 text-[#5b6d78]">
            A few minutes of writing can clarify thoughts and reduce mental noise.
          </p>
        </div>
      </section>
    </main>
  );
}
