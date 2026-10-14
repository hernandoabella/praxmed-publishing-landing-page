"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAmazon, FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function RaisingEISection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".book-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        opacity: 0,
        x: -30,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.to(".book-img", {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob", {
        scale: 1.08,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cover palette: teal #1A7A8A, orange #E8773A, navy #1A3A5C
  const points = [
    { text: "Understand how children process emotions at each developmental stage", color: "#1A7A8A" },
    { text: "Build resilience and self-awareness in everyday situations", color: "#E8773A" },
    { text: "Strengthen communication without yelling or power struggles", color: "#1A3A5C" },
    { text: "Use positive discipline that teaches rather than punishes", color: "#1A7A8A" },
    { text: "Support empathy and emotional regulation that lasts a lifetime", color: "#E8773A" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] flex items-center overflow-hidden px-5 md:px-12"
      style={{ backgroundColor: "#FBF7F0" }}
    >
      {/* Ambient background glows */}
      <div
        className="blob absolute -left-40 -top-40 w-[34rem] h-[34rem] rounded-full pointer-events-none blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, #63C7D6 0%, transparent 70%)" }}
      />
      <div
        className="blob absolute -right-40 -bottom-40 w-[32rem] h-[32rem] rounded-full pointer-events-none blur-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, #F3B183 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(26,122,138,0.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-16 lg:py-0">

        {/* Book — first on mobile, left on desktop */}
        <div className="flex justify-center lg:justify-start order-1">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full blur-[70px] opacity-50 pointer-events-none"
              style={{ background: "radial-gradient(circle at 40% 50%, #E8773A 0%, #1A7A8A 60%, #1A3A5C 100%)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] h-[108%] rounded-full border border-dashed"
              style={{ borderColor: "#1A7A8A22" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full border"
              style={{ borderColor: "#E8773A22" }}
            />

            {/* Floating badge: verdict */}
            <div className="absolute -top-3 -left-2 md:-left-5 z-20 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B7A8A] font-semibold">Parent&apos;s</p>
              <p className="text-sm font-bold text-[#173A5C]">Guide</p>
            </div>
            {/* Floating badge: rating */}
            <div className="absolute -bottom-3 right-[-8px] md:-right-5 z-20 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3" style={{ color: "#E9A62E" }} />
                ))}
              </div>
              <p className="text-sm font-bold text-[#173A5C]">4.4</p>
            </div>

            <img
              src="/books-frontpage/raising-emotionally-intelligent-children.jpg"
              alt="Raising Emotionally Intelligent Children by M. Eliza Rowen"
              className="book-img relative z-10 w-full max-w-[360px] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 30px 50px rgba(26,58,92,0.28)) drop-shadow(0 8px 20px rgba(232,119,58,0.16))",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 order-2">

          <div className="fade-up flex items-center gap-3">
            <div className="w-6 h-[2px]" style={{ backgroundColor: "#E8773A" }} />
            <span className="text-xs font-semibold tracking-[0.24em] uppercase" style={{ color: "#C2581F" }}>
              Mindful Parenting Blueprint
            </span>
          </div>

          <div
            className="fade-up font-black leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}
          >
            <span className="text-[var(--brand-navy)]">Raise </span>
            <span className="text-[var(--brand-teal)]">emotionally</span>
            <br />
            <span className="text-[var(--brand-navy)]">intelligent kids.</span>
          </div>

          <p
            className="fade-up text-base leading-relaxed max-w-md"
            style={{ color: "#3A4F5C" }}
          >
            Not about being a perfect parent — it&apos;s about understanding your child&apos;s emotions and responding with{" "}
            <strong style={{ color: "#173A5C" }}>confidence, calm, and consistency.</strong>{" "}
            Practical strategies that fit real family life.
          </p>

          <div className="fade-up grid grid-cols-3 gap-3 max-w-md">
            <div className="rounded-2xl border border-[#1A7A8A]/15 bg-white/70 p-3 backdrop-blur-sm shadow-sm">
              <p className="text-2xl font-black text-[#1A7A8A]">30+</p>
              <p className="text-[11px] text-[#5A7080]">Real-world strategies</p>
            </div>
            <div className="rounded-2xl border border-[#1A7A8A]/15 bg-white/70 p-3 backdrop-blur-sm shadow-sm">
              <p className="text-2xl font-black text-[#1A7A8A]">By stage</p>
              <p className="text-[11px] text-[#5A7080]">Development guidance</p>
            </div>
            <div className="rounded-2xl border border-[#1A7A8A]/15 bg-white/70 p-3 backdrop-blur-sm shadow-sm">
              <p className="text-2xl font-black text-[#1A7A8A]">No</p>
              <p className="text-[11px] text-[#5A7080]">Yelling needed</p>
            </div>
          </div>

          <div className="fade-up flex items-center gap-2">
            <div className="h-[1px] w-10" style={{ backgroundColor: "#E8773A", opacity: 0.4 }} />
            <div className="h-[1px] w-6" style={{ backgroundColor: "#1A7A8A", opacity: 0.5 }} />
            <div className="h-[1px] w-4" style={{ backgroundColor: "#1A3A5C", opacity: 0.5 }} />
          </div>

          <ul className="fade-up flex flex-col gap-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[2px] w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.color + "1A" }}
                >
                  <svg
                    className="w-3 h-3"
                    style={{ color: item.color }}
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "#3A4F5C" }}>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="fade-up flex items-center gap-5 pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/Raising-Emotionally-Intelligent-Children-Strategies-ebook/dp/B0GKWC93RZ"
              className="btn-cta-primary rounded-full"
              style={{ backgroundColor: "#173A5C" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1A7A8A")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#173A5C")}
            >
              <FaAmazon className="w-4 h-4" />
              Get the Book
            </Link>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3.5 h-3.5" style={{ color: "#E9A62E" }} />
              ))}
              <span className="text-xs ml-1" style={{ color: "#5A7080" }}>
                <strong style={{ color: "#173A5C" }}>4.4</strong> · Verified readers
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
