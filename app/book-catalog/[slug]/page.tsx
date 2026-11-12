import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBookBySlug } from "../../../lib/books";
import HealingToxicShameSection from "../../components/HealingToxicShameSection";
import HealingAttachmentWoundsSection from "../../components/HealingAttachmentWoundsSection";
import HealingInnerChildSection from "../../components/HealingInnerChildSection";
import RaisingEISection from "../../components/Raisingeisection";
import BreakingGenerationalTraumaSection from "../../components/BreakingGenerationalTraumaSection";
import AngerManagementSection from "../../components/Hero2";
import AnxiousAttachmentSection from "../../components/Hero3";

type Params = { slug: string };

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const book = getBookBySlug(params.slug);
  if (!book) return {};
  return {
    title: `${book.title} | PRAXMED Publishing`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      type: "book",
      images: book.image ? [{ url: book.image }] : undefined,
    },
  };
}

export default function BookDetailPage({ params }: { params: Params }) {
  const book = getBookBySlug(params.slug);
  if (!book) notFound();

  const sectionBySlug: Record<string, React.ReactNode> = {
    "healing-toxic-shame": <HealingToxicShameSection />,
    "healing-attachment-wounds": <HealingAttachmentWoundsSection />,
    "healing-your-inner-child": <HealingInnerChildSection />,
    "raising-emotionally-intelligent-children": <RaisingEISection />,
    "breaking-generational-trauma-for-parents": <BreakingGenerationalTraumaSection />,
    "anger-management-for-explosive-parents": <AngerManagementSection />,
    "anxious-attachment-workbook-for-parents": <AnxiousAttachmentSection />,
  };

  return (
    <main className="bg-white">
      {sectionBySlug[book.slug] ?? null}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link href="/book-catalog" className="text-sm font-medium text-[var(--brand-teal)] hover:underline">
          ← Back to catalog
        </Link>
        <div className="mt-8 grid gap-10 md:grid-cols-[320px_1fr]">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg">
            {book.image ? (
              <Image
                src={book.image}
                alt={book.title}
                fill
                sizes="320px"
                className="object-cover object-top"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center p-8 text-center text-slate-500">
                {book.title}
              </div>
            )}
          </div>
          <div>
            {book.badge ? (
              <span className="inline-flex rounded-full bg-[var(--brand-teal)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
                {book.badge}
              </span>
            ) : null}
            <h1 className="mt-4 text-3xl font-black tracking-tight text-[var(--brand-navy)] md:text-4xl">
              {book.title}
            </h1>
            {book.author ? (
              <p className="mt-2 text-sm font-medium text-slate-500">By {book.author}</p>
            ) : null}
            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">{book.description}</p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {book.collection ? (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Collection</dt>
                  <dd className="mt-1 text-sm text-slate-700">{book.collection}</dd>
                </div>
              ) : null}
              {book.formats?.length ? (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Formats</dt>
                  <dd className="mt-1 text-sm text-slate-700">{book.formats.join(", ")}</dd>
                </div>
              ) : null}
            </dl>

            {book.audioSrc ? (
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Audio preview</h2>
                <audio controls className="mt-3 w-full" src={book.audioSrc}>
                  Your browser does not support audio.
                </audio>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              {book.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-teal)]"
                >
                  {action.label}
                </a>
              ))}
            </div>

            {book.retailers?.length ? (
              <div className="mt-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Available at</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {book.retailers.map((r) => (
                    <a
                      key={r.name}
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
                    >
                      {r.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
