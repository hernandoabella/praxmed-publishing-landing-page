import type { Metadata } from "next";
import Link from "next/link";

const topics: Record<string, { title: string; desc: string; points: string[] }> = {
  psychology: {
    title: "Psychology",
    desc: "Everyday thoughts, feelings, and the patterns behind them.",
    points: [
      "How attention shapes perception and memory.",
      "Why habits form and how they can change.",
      "The role of beliefs in emotional responses.",
      "Practical ways to build mental flexibility.",
    ],
  },
  "human-behavior": {
    title: "Human Behavior",
    desc: "Why we act, react, make choices, and form habits.",
    points: [
      "Triggers, context, and automatic responses.",
      "How social norms influence decisions.",
      "The link between environment and action.",
      "Small changes that create lasting habits.",
    ],
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    desc: "Recognize emotions and respond with greater awareness.",
    points: [
      "Name and validate your emotions.",
      "Pause before reacting in stressful moments.",
      "Empathy as a skill, not a trait.",
      "Building emotional regulation routines.",
    ],
  },
  "memory-learning": {
    title: "Memory & Learning",
    desc: "How we remember, build skills, and keep discovering.",
    points: [
      "Spaced practice and retrieval strength.",
      "Why sleep supports memory consolidation.",
      "Active learning vs. passive review.",
      "Turning information into usable knowledge.",
    ],
  },
  relationships: {
    title: "Relationships",
    desc: "Connection, communication, empathy, and belonging.",
    points: [
      "Attachment patterns and their impact.",
      "Listening skills that build trust.",
      "Conflict repair and emotional safety.",
      "Creating meaningful everyday rituals.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const topic = topics[params.slug];
  return { title: `${topic?.title ?? "Topic"} | PRAXMED Publishing` };
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = topics[params.slug];
  if (!topic) return null;
  return (
    <main className="bg-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Link href="/discover" className="text-sm font-medium text-[#002EC1] hover:underline">
            ← Back to Discover
          </Link>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#153047] md:text-5xl">{topic.title}</h1>
          <p className="mt-4 text-lg text-[#5b6d78]">{topic.desc}</p>
          <ul className="mt-8 space-y-3">
            {topic.points.map((p) => (
              <li key={p} className="rounded-2xl border border-gray-200 p-5 text-[#5b6d78]">{p}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
