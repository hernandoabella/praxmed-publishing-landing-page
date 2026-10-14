"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { ChevronDown, FileText, BookOpen, Volume2, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Does the book include real clinical cases?",
    answer: "Yes! The book includes 3 detailed real clinical cases that strengthen practical learning. These cases cover: 1) Diabetic foot assessment and management, 2) Prenatal visit with complications, and 3) Post-operative follow-up with complication screening. Each case walks you through complete patient interactions from symptoms to treatment plans."
  },
  {
    question: "Does it include a glossary?",
    answer: "Yes—a complete glossary of over 1,000 essential medical Spanish terms and phrases organized by medical system. The glossary includes symptoms, anatomy, diagnoses, procedures, and treatment terms, all with phonetic pronunciation guides for easy learning."
  },
  {
    question: "Are the audio tracks included?",
    answer: "Yes—you receive free lifetime access to downloadable MP3 audio files featuring native Spanish-speaking healthcare professionals. The audio library includes pronunciation of all medical terms, complete dialogues from clinical scenarios, and both slow and normal-speed recordings for practice."
  },
  {
    question: "Is this book suitable for beginners in Spanish?",
    answer: "Absolutely. The book is designed for healthcare professionals at any Spanish level. It starts with foundational vocabulary and builds up to complex clinical dialogues. Every phrase includes phonetic pronunciation, and the audio tracks help you develop correct pronunciation from day one."
  },
  {
    question: "Can I use this book for exam preparation?",
    answer: "Yes. The structured system-based approach makes it ideal for exam prep. Each chapter covers a specific medical system with key vocabulary, common patient complaints, and physician responses. The review questions at the end of each section help reinforce your learning."
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
    <section ref={sectionRef} className="py-24 bg-[#f8faff] relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-[#0B35C3]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="faq-head text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0B35C3]/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-[#0B35C3] text-xs font-semibold tracking-wider uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Common <span className="text-[#0B35C3]">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
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
                    ? "bg-white border-[#0B35C3] shadow-[0_12px_40px_rgba(11,53,195,0.08)]"
                    : "bg-white/60 border-gray-100 hover:border-[#0B35C3]/30 hover:bg-white"}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 md:p-6 flex justify-between items-center text-left gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-500 
                      ${isOpen ? "bg-[#0B35C3] text-white" : "bg-white text-[#0B35C3] shadow-sm border border-gray-100"}`}>
                      {getIcon(index)}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-[#0B35C3] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`shrink-0 transition-all duration-500 rounded-full p-1.5 
                    ${isOpen ? "bg-[#0B35C3]/10 rotate-180" : "bg-gray-50 group-hover:bg-[#0B35C3]/5"}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[#0B35C3]" : "text-gray-400"}`} />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                  ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-5 pb-6 md:px-20 md:pb-8">
                    <div className="h-px bg-gray-100 mb-5" />
                    <p className="text-gray-500 text-base leading-relaxed">
                      {faq.answer}
                    </p>
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
