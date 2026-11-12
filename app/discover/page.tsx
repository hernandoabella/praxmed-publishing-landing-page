"use client";

import { useState } from "react";
import Link from "next/link";

const nodes = [
  { id: "emotions", label: "Emotions", icon: "♡", color: "#E8773A", insight: "Emotions are signals, not commands. Noticing them is the first step to choosing your response." },
  { id: "connection", label: "Connection", icon: "↗", color: "#002EC1", insight: "We are wired for belonging. Small moments of attunement build trust over time." },
  { id: "learning", label: "Learning", icon: "◌", color: "#1A7A8A", insight: "Learning sticks when it is active, spaced, and tied to meaning." },
  { id: "behavior", label: "Behavior", icon: "◎", color: "#514189", insight: "Behavior is shaped by context, habits, and the stories we tell ourselves." },
];

const fields = [
  { title: "Psychology", desc: "Everyday thoughts, feelings, and the patterns behind them.", icon: "◉" },
  { title: "Human Behavior", desc: "Why we act, react, make choices, and form habits.", icon: "⌘" },
  { title: "Emotional Intelligence", desc: "Recognize emotions and respond with greater awareness.", icon: "♡" },
  { title: "Memory & Learning", desc: "How we remember, build skills, and keep discovering.", icon: "▤" },
  { title: "Relationships", desc: "Connection, communication, empathy, and belonging.", icon: "♧" },
];

const reads = [
  { tag: "Psychology · 5 min read", title: "Why do some memories stay with us longer than others?", desc: "Explore how attention, emotion, and repetition influence what we remember." },
  { tag: "Emotional intelligence", title: "What does emotional awareness really mean?", desc: "A practical introduction to noticing what you feel." },
  { tag: "Human behavior", title: "How habits shape everyday decisions", desc: "Understand the small cues behind repeated actions." },
];

export default function DiscoverPage() {
  const [active, setActive] = useState(nodes[0].id);
  const activeNode = nodes.find((n) => n.id === active)!;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#002EC1]">
            Discover · Psychology & Behavior
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#153047] md:text-6xl">
            Explore the <span className="text-[#002EC1]">Human Mind.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5b6d78]">
            Understand why we think, feel, learn, and connect. Explore clear explanations and practical ideas that make human behavior easier to understand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#explorer" className="rounded-full bg-[#002EC1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002EC1]/90">
              Explore the mind
            </a>
            <a href="#reads" className="rounded-full border border-[#002EC1] px-6 py-3 text-sm font-semibold text-[#002EC1] transition hover:bg-[#002EC1]/5">
              Read latest insights
            </a>
          </div>
        </div>
      </section>

      {/* Mind Explorer */}
      <section id="explorer" className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Mind Explorer</h2>
              <p className="mt-3 text-[#5b6d78]">Click a node to explore how it shapes everyday experience.</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {nodes.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setActive(node.id)}
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                      active === node.id
                        ? "border-[#002EC1] bg-white shadow-md"
                        : "border-gray-200 bg-white/60 hover:border-[#002EC1]/40"
                    }`}
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-white"
                      style={{ backgroundColor: node.color }}
                    >
                      {node.icon}
                    </span>
                    <span className="font-semibold text-[#153047]">{node.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white"
                  style={{ backgroundColor: activeNode.color }}
                >
                  {activeNode.icon}
                </span>
                <h3 className="text-2xl font-bold text-[#153047]">{activeNode.label}</h3>
              </div>
              <p className="mt-5 text-lg leading-7 text-[#5b6d78]">{activeNode.insight}</p>
              <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: "70%", backgroundColor: activeNode.color }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Explore the essentials</h2>
              <p className="mt-2 text-[#5b6d78]">What makes us human? Five connected fields. Countless ways to understand yourself and the people around you.</p>
            </div>
            <a href="#" className="hidden text-sm font-semibold text-[#002EC1] hover:underline md:block">
              Browse all topics →
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fields.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-200 p-5 transition hover:border-[#002EC1]/40 hover:shadow-sm">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="mt-3 font-bold text-[#153047]">{f.title}</h3>
                <p className="mt-2 text-sm text-[#5b6d78]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reads */}
      <section id="reads" className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">The Journal</h2>
          <p className="mt-2 text-[#5b6d78]">Approachable reads that turn big questions about the mind into useful insights.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reads.map((r) => (
              <article key={r.title} className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#002EC1]">{r.tag}</p>
                <h3 className="mt-3 text-lg font-bold text-[#153047]">{r.title}</h3>
                <p className="mt-2 text-sm text-[#5b6d78]">{r.desc}</p>
                <a href="#" className="mt-4 inline-block text-sm font-semibold text-[#002EC1] hover:underline">
                  Explore the idea →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Human Mind */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">The Human Mind</h2>
          <p className="mt-3 max-w-3xl text-[#5b6d78]">
            The human mind is a pattern-seeking, meaning-making system. It filters experience, predicts what comes next, and adapts through learning and connection.
          </p>
        </div>
      </section>

      {/* Did You Know? */}
      <section className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Did You Know?</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            <li className="rounded-2xl bg-white p-5 text-[#5b6d78]">Your brain uses about 20% of your body&apos;s energy.</li>
            <li className="rounded-2xl bg-white p-5 text-[#5b6d78]">Habits can reduce cognitive load by automating decisions.</li>
            <li className="rounded-2xl bg-white p-5 text-[#5b6d78]">Social connection activates reward circuits similar to food.</li>
          </ul>
          <Link href="/discover/did-you-know" className="mt-6 inline-block rounded-full bg-[#002EC1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002EC1]/90">
            Explore more facts
          </Link>
        </div>
      </section>

      {/* Self-Discovery */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Self-Discovery</h2>
          <p className="mt-3 max-w-3xl text-[#5b6d78]">
            Self-discovery is the practice of noticing your patterns, values, and triggers, then choosing growth with compassion.
          </p>
          <Link href="/discover/self-discovery" className="mt-6 inline-block rounded-full bg-[#002EC1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002EC1]/90">
            Explore Self-Discovery
          </Link>
        </div>
      </section>
    </main>
  );
}
