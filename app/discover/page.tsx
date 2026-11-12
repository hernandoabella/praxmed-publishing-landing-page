"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBrain, FaHeart, FaUsers, FaBook, FaBolt } from "react-icons/fa";

const nodes = [
  { id: "emotions", label: "Emotions", icon: FaHeart, color: "#E8773A", insight: "Emotions are signals, not commands. Noticing them is the first step to choosing your response." },
  { id: "connection", label: "Connection", icon: FaUsers, color: "#002EC1", insight: "We are wired for belonging. Small moments of attunement build trust over time." },
  { id: "learning", label: "Learning", icon: FaBook, color: "#1A7A8A", insight: "Learning sticks when it is active, spaced, and tied to meaning." },
  { id: "behavior", label: "Behavior", icon: FaBolt, color: "#514189", insight: "Behavior is shaped by context, habits, and the stories we tell ourselves." },
];

const fields = [
  { slug: "psychology", title: "Psychology", desc: "Everyday thoughts, feelings, and the patterns behind them.", icon: FaBrain, color: "#514189" },
  { slug: "human-behavior", title: "Human Behavior", desc: "Why we act, react, make choices, and form habits.", icon: FaBolt, color: "#002EC1" },
  { slug: "emotional-intelligence", title: "Emotional Intelligence", desc: "Recognize emotions and respond with greater awareness.", icon: FaHeart, color: "#E8773A" },
  { slug: "memory-learning", title: "Memory & Learning", desc: "How we remember, build skills, and keep discovering.", icon: FaBook, color: "#1A7A8A" },
  { slug: "relationships", title: "Relationships", desc: "Connection, communication, empathy, and belonging.", icon: FaUsers, color: "#3E6B8A" },
];

const reads = [
  { tag: "Psychology · 5 min read", title: "Why do some memories stay with us longer than others?", desc: "Explore how attention, emotion, and repetition influence what we remember." },
  { tag: "Emotional intelligence", title: "What does emotional awareness really mean?", desc: "A practical introduction to noticing what you feel." },
  { tag: "Human behavior", title: "How habits shape everyday decisions", desc: "Understand the small cues behind repeated actions." },
];

export default function DiscoverPage() {
  const [active, setActive] = useState(nodes[0].id);
  const activeNode = nodes.find((n) => n.id === active)!;
  const ActiveIcon = activeNode.icon;

  const positions = [
    "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
    "top-1/2 right-0 translate-x-2 -translate-y-1/2",
    "bottom-0 left-1/2 -translate-x-1/2 translate-y-2",
    "top-1/2 left-0 -translate-x-2 -translate-y-1/2",
  ];

  return (
    <main className="bg-white">
      {/* Mind Explorer */}
      <section id="explorer" className="bg-[#f7f7f1] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#153047] md:text-3xl">Mind Explorer</h2>
          <p className="mt-3 text-[#5b6d78]">Click a node to explore how it shapes everyday experience.</p>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl bg-[#0B1F3A] p-6">
              {/* connection lines */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
                {nodes.map((node, i) => {
                  const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 200 + Math.cos(angle) * 120;
                  const y = 200 + Math.sin(angle) * 120;
                  return (
                    <line
                      key={node.id}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke={active === node.id ? node.color : "rgba(255,255,255,0.25)"}
                      strokeWidth={active === node.id ? 3 : 1.5}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* center brain */}
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#002EC1] text-white shadow-lg">
                <FaBrain className="h-12 w-12" />
              </div>

              {/* nodes */}
              {nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActive(node.id)}
                    className={`absolute flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 ${positions[i]} ${
                      active === node.id ? "scale-110 ring-4 ring-white" : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: node.color }}
                    aria-label={node.label}
                  >
                    <Icon className="h-7 w-7" />
                  </button>
                );
              })}
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white"
                  style={{ backgroundColor: activeNode.color }}
                >
                  <ActiveIcon className="h-7 w-7" />
                </span>
                <h3 className="text-2xl font-bold text-[#153047]">{activeNode.label}</h3>
              </div>
              <p className="mt-5 text-lg leading-7 text-[#5b6d78]">{activeNode.insight}</p>
              <div className="mt-6 flex gap-2">
                {nodes.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setActive(n.id)}
                    className={`h-2 flex-1 rounded-full transition-all ${active === n.id ? "opacity-100" : "opacity-40"}`}
                    style={{ backgroundColor: n.color }}
                    aria-label={n.label}
                  />
                ))}
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
            {fields.map((f) => {
              const Icon = f.icon;
              return (
                <Link key={f.title} href={`/discover/${f.slug}`} className="rounded-2xl border border-gray-200 p-5 transition hover:border-[#002EC1]/40 hover:shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: f.color }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-bold text-[#153047]">{f.title}</h3>
                  <p className="mt-2 text-sm text-[#5b6d78]">{f.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Journal */}
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
