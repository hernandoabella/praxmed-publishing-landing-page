"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAmazon, FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function AngerManagementSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".am-fade-up", {
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

      gsap.from(".am-book-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        opacity: 0,
        scale: 0.92,
        y: 30,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.to(".am-book-img", {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".am-blob", {
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
    "Identify emotional triggers before they explode",
    "Simple techniques to stop yelling in the moment",
    "How to repair emotional connections after conflict",
    "Break generational anger patterns for good",
    "Parent with firmness without fear, guilt, or rage",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] flex items-center overflow-hidden px-5 md:px-12 bg-white"
    >
      {/* Ambient background glows */}
      <div
        className="am-blob absolute -right-32 -top-32 w-[32rem] h-[32rem] rounded-full pointer-events-none blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, #5A9DB5 0%, transparent 70%)" }}
      />
      <div
        className="am-blob absolute -left-32 -bottom-32 w-[30rem] h-[30rem] rounded-full pointer-events-none blur-[120px] opacity-25"
        style={{ background: "radial-gradient(circle, #8BB5CC 0%, transparent 70%)" }}
      />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#264C62 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-0">

        {/* Book */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full blur-[70px] opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(circle at 40% 50%, #264C62 0%, #1A4A6A 60%, #0F2137 100%)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] h-[108%] rounded-full border border-dashed"
              style={{ borderColor: "#264C6220" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full border"
              style={{ borderColor: "#0B828815" }}
            />

            {/* Floating badge: style */}
            <div className="absolute -top-3 -right-2 md:-right-5 z-20 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#264C62] font-semibold">Evidence</p>
              <p className="text-sm font-bold text-[#0F2137]">Based</p>
            </div>

            <img
              src="/books-frontpage/anger-managment-for-explosive-parents.jpg"
              alt="Anger Management for Explosive Parents"
              className="am-book-img relative z-10 w-full max-w-[340px] h-auto object-contain"
              style={{ filter: "drop-shadow(0 30px 60px rgba(38,76,98,0.22))" }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          <div className="am-fade-up flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#264C62]" />
            <span className="text-[#264C62] text-xs font-semibold tracking-[0.2em] uppercase">
              Parenting Guide
            </span>
          </div>

          <h2 className="am-fade-up text-[clamp(2.4rem,5vw,3.8rem)] font-black text-[#0F2137] leading-[1.05] tracking-tight">
            Parent with{" "}
            <span className="text-[#264C62]">confidence.</span>
          </h2>

          <p className="am-fade-up text-gray-500 text-base leading-relaxed max-w-md">
            Stop yelling and start connecting. A practical, judgment-free guide to help you regain control, understand your triggers, and respond with patience — even in the most challenging moments.
          </p>

          <div className="am-fade-up grid grid-cols-3 gap-3 max-w-md">
            <div className="rounded-2xl border border-[#264C62]/10 bg-[#f0f7fa]/60 p-3">
              <p className="text-2xl font-black text-[#264C62]">5</p>
              <p className="text-[11px] text-gray-500">Core strategies</p>
            </div>
            <div className="rounded-2xl border border-[#264C62]/10 bg-[#f0f7fa]/60 p-3">
              <p className="text-2xl font-black text-[#264C62]">0</p>
              <p className="text-[11px] text-gray-500">Yelling needed</p>
            </div>
            <div className="rounded-2xl border border-[#264C62]/10 bg-[#f0f7fa]/60 p-3">
              <p className="text-2xl font-black text-[#264C62]">100%</p>
              <p className="text-[11px] text-gray-500">Judgment-free</p>
            </div>
          </div>

          <div className="am-fade-up flex items-center gap-3">
            <div className="h-[1px] w-10 bg-[#264C62]/30" />
            <div className="h-[1px] w-6 bg-[#264C62]/20" />
            <div className="h-[1px] w-4 bg-[#264C62]/15" />
          </div>

          <ul className="am-fade-up flex flex-col gap-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[2px] w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#264C6215" }}
                >
                  <svg
                    className="w-3 h-3 text-[#264C62]"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-gray-600">{item}</span>
              </li>
            ))}
          </ul>

          <div className="am-fade-up flex items-center gap-5 pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF"
              className="btn-cta-primary"
              style={{ backgroundColor: "#0F2137" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#264C62")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0F2137")}
            >
              <FaAmazon className="w-4 h-4" />
              Get on Amazon
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3.5 h-3.5" style={{ color: "#E9A62E" }} />
                ))}
              </div>
              <span className="text-xs ml-1 text-gray-500">
                <strong className="text-[#0F2137]">4.8</strong> · Readers love it
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}