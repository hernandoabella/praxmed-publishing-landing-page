"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const bonuses = [
  {
    title: "Anxious Attachment Workbook for Parents",
    tag: "Workbook",
    description:
      "Fill-in exercises, reflection prompts, and guided practices to help you identify anxious patterns and build secure attachment with your child.",
    image: "/books-frontpage/anxius-attachment-workbook.jpg",
    color: "#514189",
    features: [
      "Attachment style self-assessment",
      "Daily reflection journaling prompts",
      "Coregulation practice exercises",
      "Trigger-identification worksheets",
    ],
  },
  {
    title: "30-Day Healing Journal",
    tag: "Journal",
    color: "#0B8288",
    features: [
      "Daily emotional check-in format",
      "Pattern tracking worksheets",
      "Gratitude and reframing prompts",
      "Weekly reflection guide",
    ],
  },
  {
    title: "100 Healing Affirmations",
    tag: "Printable PDF",
    color: "#9B7A4D",
    features: [
      "Affirmations for self-compassion",
      "Parent-child connection phrases",
      "Morning and evening routines",
      "Printable card format",
    ],
  },
];

const allFiles = [
  { name: "Anxious Attachment Workbook", file: "anxious-attachment-workbook.pdf" },
  { name: "30-Day Healing Journal", file: "30-day-healing-journal.pdf" },
  { name: "100 Healing Affirmations", file: "100-healing-affirmations.pdf" },
];

export default function BonusResources() {
  const sectionRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-el", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.15,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleDownloadAll = async () => {
    setIsDownloading(true);
    setStatus("");

    for (const item of allFiles) {
      try {
        setStatus(`Downloading ${item.name}…`);
        const link = document.createElement("a");
        link.href = `/pdf-books/${item.file}`;
        link.download = item.file;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        await new Promise((r) => setTimeout(r, 500));
      } catch {
        setStatus(`Failed: ${item.name}`);
      }
    }

    setStatus("All files downloaded!");
    setTimeout(() => setStatus(""), 3000);
    setIsDownloading(false);
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4 fade-el">
          <div className="w-6 h-[2px] bg-[#0B8288]" />
          <span className="text-[#0B8288] text-xs font-semibold tracking-[0.2em] uppercase">
            Free Bonuses
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#0F2137] leading-tight tracking-tight mb-3 fade-el">
          Download Your Bonus Resources
        </h2>

        <p className="text-gray-500 text-base max-w-2xl mb-12 leading-relaxed fade-el">
          Three free resources included with your purchase — a workbook, a guided journal, and a printable affirmations PDF.
        </p>

        {/* Main card with image */}
        <div className="fade-el rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[260px] lg:w-[300px] shrink-0">
              <img
                src="/books-frontpage/anxius-attachment-workbook.jpg"
                alt="Anxious Attachment Workbook for Parents"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#514189]/10 text-[#514189] text-xs font-semibold mb-3 w-fit">
                Workbook
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#0F2137] mb-3">
                {bonuses[0].title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-lg">
                {bonuses[0].description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                {bonuses[0].features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="#514189">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {status && (
                <p className="text-sm text-[#0B8288] font-medium mb-3">{status}</p>
              )}
              <button
                onClick={handleDownloadAll}
                disabled={isDownloading}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B8288] text-white text-sm font-bold rounded-full hover:bg-[#0a7075] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed w-fit shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {isDownloading ? "Downloading…" : "Download Bonus PDF"}
              </button>
            </div>
          </div>
        </div>

        {/* Other two bonuses */}
        <div className="grid md:grid-cols-2 gap-6 fade-el">
          {bonuses.slice(1).map((bonus) => (
            <div
              key={bonus.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${bonus.color}10`, color: bonus.color }}
                >
                  {bonus.tag}
                </span>
                <h3 className="text-lg font-bold text-[#0F2137]">{bonus.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {bonus.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill={bonus.color}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center fade-el">
          <p className="text-gray-400 text-xs">
            Included with any book purchase. Download and keep forever.
          </p>
        </div>
      </div>
    </section>
  );
}
