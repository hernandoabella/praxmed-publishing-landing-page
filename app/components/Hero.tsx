"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaAmazon, FaStar } from "react-icons/fa";
import { Headphones, BookOpen, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Professionals trained" },
  { icon: Headphones, value: "40", label: "Native audio tracks" },
  { icon: FaStar, value: "4.9/5", label: "Average rating" },
  { icon: BookOpen, value: "1,000+", label: "Glossary terms" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".book-img", {
        opacity: 0,
        scale: 0.92,
        y: 30,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.from(".hero-stat", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.7,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-transparent"
    >
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center pt-14 pb-10 md:pt-24 md:pb-14">

        {/* Texto */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <h1 className="fade-up text-[clamp(2.4rem,4.5vw,3.6rem)] font-black text-white leading-[1.04] tracking-tight">
            Speak to every patient,
            <br />
            <span className="text-[#1A9D9D]">
              confidently.
            </span>
          </h1>

          <p className="fade-up text-lg text-white/60 leading-relaxed max-w-lg">
            Real clinical dialogues, essential vocabulary, and native
            pronunciation — built for busy healthcare professionals who want to
            connect with Spanish-speaking patients today.
          </p>

          <div className="fade-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="https://www.amazon.com/dp/B0G92L65ZB"
              className="btn-cta-primary bg-[#0B8288] hover:bg-[#1A9D9D]"
            >
              <FaAmazon className="w-4 h-4" />
              Get the Book on Amazon
            </Link>
            <Link
              href="#library"
              className="btn-cta-secondary border-white/20 bg-white/5 text-white hover:border-[#0B8288] hover:bg-white/10 hover:text-white"
            >
              Explore all books
            </Link>
          </div>

          <div className="fade-up flex items-center gap-2.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-[#1A9D9D]" />
              ))}
            </div>
            <span className="text-sm text-white/60">
              <strong className="text-white">4.9</strong> · 500+ professionals
              trained
            </span>
          </div>
        </div>

        {/* Libro */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 py-6">
          <img
            src="/books-frontpage/medical-spanish-for-healthcare-professionals.jpg"
            alt="Medical Spanish Book"
            className="book-img relative z-10 w-[70%] md:w-[62%] lg:w-[78%] max-w-[320px] h-auto object-contain"
            style={{ filter: "drop-shadow(0 30px 60px rgba(15,33,55,0.22))" }}
          />
        </div>
      </div>

      {/* Franja de estadísticas */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="hero-stat flex flex-col items-center gap-1.5 bg-[#0F2137] px-4 py-6 text-center"
            >
              <Icon className="w-5 h-5 text-[#1A9D9D]" />
              <span className="text-2xl font-black text-white">{value}</span>
              <span className="text-xs text-white/50 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
