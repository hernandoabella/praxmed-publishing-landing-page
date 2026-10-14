"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAmazon } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

type BookFeatureSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  amazonUrl: string;
  reverse?: boolean;
};

export default function BookFeatureSection({
  eyebrow,
  title,
  description,
  points,
  image,
  imageAlt,
  amazonUrl,
  reverse = false,
}: BookFeatureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bfs-fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".bfs-book-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: reverse ? 30 : -30,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reverse]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={`flex justify-center ${reverse ? "lg:order-2" : ""}`}>
          <img
            src={image}
            alt={imageAlt}
            className="bfs-book-img w-full max-w-[340px] object-contain"
            style={{ filter: "drop-shadow(0 24px 40px rgba(21,48,71,0.16))" }}
          />
        </div>

        <div className={`flex flex-col gap-6 ${reverse ? "lg:order-1" : ""}`}>
          <div className="bfs-fade-up flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[var(--brand-teal)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
              {eyebrow}
            </span>
          </div>

          <h2
            className="bfs-fade-up font-black leading-[1.05] tracking-tight text-[var(--brand-navy)]"
            style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)" }}
          >
            {title}
          </h2>

          <p className="bfs-fade-up max-w-md text-base leading-relaxed text-[var(--text-muted)]">
            {description}
          </p>

          <ul className="bfs-fade-up flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/10">
                  <svg
                    className="h-3 w-3 text-[var(--brand-teal)]"
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
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="bfs-fade-up pt-2">
            <Link
              target="_blank"
              href={amazonUrl}
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
