"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaAmazon } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BookAction = {
  label: string;
  url: string;
};

type Book = {
  title: string;
  description: string;
  accent: string;
  badge?: string;
  image?: string;
  previewPdf?: string;
  actions: BookAction[];
};

type BookGridPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  books: Book[];
  whiteBackground?: boolean;
};

export default function BookGridPage({
  eyebrow,
  title,
  description,
  books,
  whiteBackground = false,
}: BookGridPageProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".book-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="library"
      ref={sectionRef}
      className={whiteBackground ? "bg-white" : "bg-[linear-gradient(180deg,var(--surface-cream)_0%,#ffffff_34%,var(--surface-mist)_100%)]"}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h1 className="text-4xl font-bold tracking-tight text-[var(--brand-navy)] md:text-5xl">
              {title}
            </h1>
          ) : null}
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.title}
              className="book-card overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-white shadow-[0_24px_60px_rgba(21,48,71,0.08)] transition-shadow duration-300 hover:shadow-[0_32px_80px_rgba(21,48,71,0.14)]"
            >
              <div
                className="flex min-h-[240px] sm:min-h-[320px] items-center justify-center p-6 sm:p-8"
                style={{
                  background: `radial-gradient(circle at top, ${book.accent}20 0%, #ffffff 68%)`,
                }}
              >
                {book.image ? (
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={260}
                    height={360}
                    className="h-auto max-h-[280px] w-auto object-contain"
                  />
                ) : (
                  <div className="rounded-[24px] border border-dashed border-slate-300 bg-white/70 px-8 py-14 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                      PDF Preview
                    </p>
                    <p className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                      {book.title}
                    </p>
                  </div>
                )}
              </div>
              <div className="border-t border-slate-100 p-6 transition-colors duration-300 group-hover:bg-slate-50/50">
                {book.badge ? (
                  <div className="mb-4 inline-flex items-center rounded-full bg-[var(--brand-teal)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
                    {book.badge}
                  </div>
                ) : null}
                <h2 className="text-xl font-semibold text-[var(--brand-navy)]">
                  {book.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {book.description}
                </p>

                {book.previewPdf ? (
                  <div className="mt-5 overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50">
                    <div className="border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Preview
                    </div>
                    <iframe
                      src={`${book.previewPdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                      title={`Preview of ${book.title}`}
                      className="h-64 w-full bg-white"
                    />
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {book.actions.map((action) => (
                    <a
                      key={`${book.title}-${action.label}`}
                      href={action.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--brand-navy)] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[var(--brand-teal)] flex-1 min-w-0"
                    >
                      {action.label.includes("Amazon") && (
                        <FaAmazon className="h-4 w-4" />
                      )}
                      {action.label.includes("Download") && (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      )}
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
