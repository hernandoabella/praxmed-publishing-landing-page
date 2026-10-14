"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { ChevronDown, FileText, BookOpen, Volume2, HelpCircle, Check } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
  points?: string[];
  note?: string;
};

const faqs: Faq[] = [
  {
    question: "Does the book include real clinical cases?",
    answer:
      "Yes! The book includes 3 detailed real clinical cases that strengthen practical learning.",
    points: [
      "Diabetic foot assessment and management",
      "Prenatal visit with complications",
      "Post-operative follow-up with complication screening",
    ],
    note: "Each case walks you through complete patient interactions, from symptoms to treatment plans.",
  },
  {
    question: "Does it include a glossary?",
    answer:
      "Yes—a complete glossary of over 1,000 essential medical Spanish terms and phrases, organized by medical system.",
    points: [
      "Symptoms, anatomy, diagnoses, procedures, and treatment terms",
      "Phonetic pronunciation guides for easy learning",
    ],
  },
  {
    question: "Are the audio tracks included?",
    answer:
      "Yes—you receive free lifetime access to downloadable MP3 audio files featuring native Spanish-speaking healthcare professionals.",
    points: [
      "Pronunciation of all medical terms",
      "Complete dialogues from clinical scenarios",
      "Both slow and normal-speed recordings for practice",
    ],
  },
  {
    question: "Is this book suitable for beginners in Spanish?",
    answer:
      "Absolutely. The book is designed for healthcare professionals at any Spanish level. It starts with foundational vocabulary and builds up to complex clinical dialogues.",
    points: [
      "Every phrase includes phonetic pronunciation",
      "Audio tracks help you develop correct pronunciation from day one",
    ],
  },
  {
    question: "Can I use this book for exam preparation?",
    answer:
      "Yes. The structured, system-based approach makes it ideal for exam prep and long-term retention.",
    points: [
      "Each chapter covers a specific medical system with key vocabulary, common patient complaints, and physician responses",
      "Review questions at the end of each section reinforce your learning",
    ],
    note: "Ideal for students and professionals preparing for clinical or certification exams.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-head", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, sectionRef);

    // Recalcular posiciones cuando cargan las imágenes (evita animaciones
    // que nunca se disparan y dejan la sección invisible).
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    const t = setTimeout(refresh, 500);
    window.addEventListener("load", refresh);

    return () => {
      ctx.revert();
      clearTimeout(t);
      window.removeEventListener("load", refresh);
    };
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getIcon = (index: number) => {
    const question = faqs[index].question.toLowerCase();
    const cls = "w-6 h-6 transition-transform duration-500 group-hover:rotate-12";
    if (question.includes('case')) return <FileText className={cls} />;
    if (question.includes('glossary')) return <BookOpen className={cls} />;
    if (question.includes('audio')) return <Volume2 className={cls} />;
    return <HelpCircle className={cls} />;
  };

  return (
    <section ref={sectionRef} className="relative bg-[var(--surface-soft)] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="faq-head mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow mx-auto mb-4">
            <span className="eyebrow-label">FAQ</span>
          </div>
          <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-[var(--brand-navy)]">
            Common <span className="text-[var(--brand-teal)]">Questions</span>
          </h2>
          <p className="text-[var(--text-muted)]">
            Everything you need to know about the Medical Spanish for Healthcare Professionals book.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item group transition-[background-color,border-color,box-shadow,color] duration-500 rounded-2xl border
                  ${isOpen
                    ? "bg-white border-[var(--brand-teal)] shadow-[0_12px_40px_rgba(15,127,130,0.12)]"
                    : "bg-white/60 border-gray-100 hover:border-[var(--brand-teal)]/30 hover:bg-white"}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 md:p-6 flex justify-between items-center text-left gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-500 
                      ${isOpen ? "bg-[var(--brand-teal)] text-white" : "bg-white text-[var(--brand-teal)] shadow-sm border border-gray-100"}`}>
                      {getIcon(index)}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-[var(--brand-teal)] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`shrink-0 transition-all duration-500 rounded-full p-1.5 
                    ${isOpen ? "bg-[var(--brand-teal)]/10 rotate-180" : "bg-gray-50 group-hover:bg-[var(--brand-teal)]/5"}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[var(--brand-teal)]" : "text-gray-400"}`} />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                  ${isOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-5 pb-6 md:pl-20 md:pr-8 md:pb-8">
                    <div className="h-px bg-gray-100 mb-5" />
                    <p className="text-[15px] leading-7 text-gray-600">
                      {faq.answer}
                    </p>

                    {faq.points && faq.points.length > 0 ? (
                      <ul className="mt-4 space-y-2.5">
                        {faq.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--brand-teal)]/10">
                              <Check className="h-3 w-3 text-[var(--brand-teal)]" strokeWidth={3} />
                            </span>
                            <span className="text-[15px] leading-7 text-gray-600">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {faq.note ? (
                      <p className="mt-4 text-[15px] leading-7 text-gray-500">
                        {faq.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
