"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAmazon, FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function AnxiousAttachmentSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.13,
        ease: "power3.out",
      });

      gsap.from(".book-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        opacity: 0,
        x: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(".book-img", {
        y: -12,
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

  const points = [
    { text: "Understand your own attachment patterns as a parent", color: "#11756C" },
    { text: "Calm your nervous system during high-stress moments", color: "#E7650D" },
    { text: "Respond with intention instead of reacting with fear", color: "#514189" },
    { text: "Build daily rituals that create emotional safety at home", color: "#E96511" },
    { text: "Break anxious cycles before they pass to your child", color: "#11756C" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] flex items-center overflow-hidden px-5 md:px-12"
      style={{ backgroundColor: "#FBF7F0" }}
    >
      {/* Ambient background glows */}
      <div
        className="blob absolute -right-40 -top-40 w-[34rem] h-[34rem] rounded-full pointer-events-none blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, #C3B3F2 0%, transparent 70%)" }}
      />
      <div
        className="blob absolute -left-40 -bottom-40 w-[32rem] h-[32rem] rounded-full pointer-events-none blur-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, #9BDDCF 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(81,65,137,0.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-16 lg:py-0">

        {/* ── Book — first on mobile, right on desktop ── */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full blur-[70px] opacity-50 pointer-events-none"
              style={{ background: "radial-gradient(circle at 40% 50%, #E7650D 0%, #514189 45%, #11756C 100%)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] h-[108%] rounded-full border border-dashed"
              style={{ borderColor: "#51418922" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full border"
              style={{ borderColor: "#E7650D22" }}
            />

            {/* Floating badge: workbook */}
            <div className="absolute -top-3 -right-2 md:-right-5 z-20 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B7A6B] font-semibold">Interactive</p>
              <p className="text-sm font-bold text-[#3A2F5C]">Workbook</p>
            </div>
            {/* Floating badge: rating */}
            <div className="absolute -bottom-3 left-[-8px] md:-left-5 z-20 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3" style={{ color: "#E9A62E" }} />
                ))}
              </div>
              <p className="text-sm font-bold text-[#3A2F5C]">4.9</p>
            </div>

            <img
              src="/books-frontpage/anxius-attachment-workbook.jpg"
              alt="Anxious Attachment Workbook For Parents by M. Eliza Rowen"
              className="book-img relative z-10 w-full max-w-[360px] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 30px 50px rgba(81,65,137,0.28)) drop-shadow(0 8px 20px rgba(231,101,13,0.16))",
              }}
            />
          </div>
        </div>

        {/* ── Text ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          <div className="fade-up flex items-center gap-3">
            <div className="w-6 h-[2px]" style={{ backgroundColor: "#E7650D" }} />
            <span className="text-xs font-semibold tracking-[0.24em] uppercase" style={{ color: "#C25A10" }}>
              Secure Parenting Blueprint
            </span>
          </div>

          <div className="fade-up">
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5.5vw,4rem)" }}
            >
              <span className="text-[var(--brand-navy)]">Anxious </span>
              <span className="text-[var(--brand-teal)]">about</span>
              <br />
              <span className="text-[var(--brand-navy)]">your parenting?</span>
            </h2>
          </div>

          <p
            className="fade-up text-base leading-relaxed max-w-md"
            style={{ color: "#5A4E42" }}
          >
            Stop worrying you&apos;re &quot;messing up.&quot; This workbook helps you understand what&apos;s happening{" "}
            <strong style={{ color: "#191432" }}>inside you</strong> — so you can raise a child who feels{" "}
            <strong style={{ color: "#11756C" }}>safe, secure, and confident.</strong>
          </p>

          <div className="fade-up grid grid-cols-3 gap-3 max-w-md">
            <div className="rounded-2xl border border-[#514189]/15 bg-white/70 p-3 backdrop-blur-sm shadow-sm">
              <p className="text-2xl font-black text-[#514189]">10+</p>
              <p className="text-[11px] text-[#6B6153]">Guided exercises</p>
            </div>
            <div className="rounded-2xl border border-[#514189]/15 bg-white/70 p-3 backdrop-blur-sm shadow-sm">
              <p className="text-2xl font-black text-[#514189]">Daily</p>
              <p className="text-[11px] text-[#6B6153]">Reflection prompts</p>
            </div>
            <div className="rounded-2xl border border-[#514189]/15 bg-white/70 p-3 backdrop-blur-sm shadow-sm">
              <p className="text-2xl font-black text-[#514189]">1</p>
              <p className="text-[11px] text-[#6B6153]">Calmer family</p>
            </div>
          </div>

          <div className="fade-up flex items-center gap-3">
            <div className="h-[1px] w-10" style={{ backgroundColor: "#E7650D", opacity: 0.4 }} />
            <div className="h-[1px] w-6" style={{ backgroundColor: "#514189", opacity: 0.4 }} />
            <div className="h-[1px] w-4" style={{ backgroundColor: "#11756C", opacity: 0.4 }} />
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
                <span className="text-sm leading-relaxed" style={{ color: "#4A4040" }}>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="fade-up flex items-center gap-5 pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/dp/B0GR68K3WM"
              className="btn-cta-primary rounded-full"
              style={{ backgroundColor: "#E7650D" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#11756C")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#E7650D")}
            >
              <FaAmazon className="w-4 h-4" />
              Get on Amazon
            </Link>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3.5 h-3.5" style={{ color: "#E9A62E" }} />
              ))}
              <span className="text-xs ml-1" style={{ color: "#8A7A6A" }}>
                <strong style={{ color: "#191432" }}>4.9</strong> · Readers love it
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
