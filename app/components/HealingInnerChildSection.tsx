"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAmazon } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function HealingInnerChildSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heal-fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".heal-book-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        opacity: 0,
        x: -40,
        duration: 1.15,
        ease: "power3.out",
      });

      gsap.to(".heal-book-img", {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const points = [
    { text: "Understand what the inner child is and why it shapes your adult life", color: "#D96B2B" },
    { text: "Identify emotional wounds from childhood that still show up today", color: "#0B8288" },
    { text: "Learn gentle reparenting techniques to offer yourself the safety you missed", color: "#153047" },
    { text: "Break free from self-sabotage, people-pleasing, and fear of abandonment", color: "#D96B2B" },
    { text: "Build a loving, compassionate relationship with the person you really are", color: "#0B8288" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen overflow-hidden bg-[linear-gradient(180deg,var(--surface-cream)_0%,var(--surface-soft)_100%)] px-6 md:px-12"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="section-divider" />
      </div>
      <div className="mx-auto max-w-5xl grid-cols-1 items-center gap-8 py-16 lg:grid-cols-2 lg:gap-16 lg:py-0 lg:min-h-screen grid">
        <div className="flex justify-center lg:justify-end lg:order-2">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] opacity-25 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 40% 50%, #D96B2B 0%, #153047 45%, #0B8288 100%)",
              }}
            />

            <div
              className="absolute top-1/2 left-1/2 h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{ borderColor: "#0B828822" }}
            />

            <img
              src="/books-frontpage/healing-your-inner-child.jpg"
              alt="Healing Your Inner Child"
              className="heal-book-img relative z-10 w-full max-w-[360px] object-contain"
              style={{
                filter:
                  "drop-shadow(0 24px 48px rgba(21,48,71,0.18)) drop-shadow(0 6px 16px rgba(212,122,63,0.12))",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:order-1">
          <div className="heal-fade-up flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[var(--brand-clay)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-clay)]">
              Inner Child Healing
            </span>
          </div>

          <div className="heal-fade-up">
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5.5vw,4rem)" }}
            >
              <span className="text-[var(--brand-navy)]">Healing </span>
              <span className="text-[var(--brand-clay)]">Your</span>
              <br />
              <span className="text-[var(--brand-navy)]">Inner Child</span>
            </h2>
          </div>

          <p className="heal-fade-up max-w-md text-base leading-relaxed text-[var(--text-muted)]">
            A compassionate guide to understanding and reparenting your inner child.
            Break free from old patterns and build a life rooted in{" "}
            <strong className="text-[var(--brand-navy)]">self-worth</strong> and{" "}
            <strong className="text-[var(--brand-teal)]">emotional freedom</strong>.
          </p>

          <div className="heal-fade-up flex items-center gap-3">
            <div className="h-[1px] w-10 bg-[var(--brand-clay)]/40" />
            <div className="h-[1px] w-6 bg-[var(--brand-navy)]/30" />
            <div className="h-[1px] w-4 bg-[var(--brand-teal)]/25" />
          </div>

          <ul className="heal-fade-up flex flex-col gap-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <svg
                    className="h-3 w-3"
                    style={{ color: item.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="heal-fade-up flex items-center gap-5 pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0H6NZXSZ3"
              className="btn-cta-primary bg-[var(--brand-navy)] hover:bg-[var(--brand-teal)]"
            >
              <FaAmazon className="w-4 h-4" />
              Get the Book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
