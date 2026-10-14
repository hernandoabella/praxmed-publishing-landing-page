"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  FaStar,
  FaQuoteLeft,
  FaHospital,
  FaUserMd,
  FaStethoscope,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Pedro Gomez",
    role: "Family Medicine Physician",
    quote:
      "Communicate every patient confidently. The clinical cases are incredibly practical.",
    avatar: "/doc1.jpg"
  },
  {
    name: "Dr. Luis Hernández",
    role: "Emergency Medicine",
    quote:
      "The glossary and audio tracks make a huge difference. I use it almost every day during my shifts.",
    avatar: "/doc2.jpg"
  },
  {
    name: "Sarah Mitchell",
    role: "Medical Student",
    quote:
      "Clear explanations, real examples, and excellent pronunciation guides. Highly recommended.",
    avatar: "/doc4.jpg"
  }
];

const Testimonials = ({ transparent = false }: { transparent?: boolean } = {}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testi-head", {
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

      gsap.from(".testi-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".testi-trust", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 92%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
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

  return (
    <section
      ref={sectionRef}
      className={`${transparent ? "bg-transparent" : "bg-[#0F2137]"} py-20 md:py-28 relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="testi-head text-center mb-16">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-5">
            <div className="flex items-center text-amber-300 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">4.9/5 Average Rating</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            What Healthcare Professionals Are Saying
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            Real feedback from doctors, nurses, and medical students who have improved their patient communication
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testi-card bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white/[0.08] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 transition-[background-color,box-shadow,transform] duration-300 group flex flex-col"
            >
              <div className="mb-5">
                <div className="w-10 h-10 bg-[var(--brand-teal)]/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="w-5 h-5 text-[var(--brand-teal-bright)]" />
                </div>
              </div>

              <div className="relative mb-6 flex-1">
                <p className="text-white/75 leading-relaxed text-[15px] pl-4 border-l-2 border-[var(--brand-teal)]/30">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="h-px bg-white/10 mb-5"></div>

              <div className="flex items-center gap-3.5">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-[var(--brand-teal)]/30 rounded-full opacity-60 blur-sm"></div>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full relative z-10 border-2 border-white/20 shadow-md"
                  />
                </div>

                <div>
                  <p className="font-bold text-white text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/50">
                    {item.role}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3" />
                      ))}
                    </div>
                    <span className="text-[10px] text-white/40">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-trust mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3.5 rounded-xl border border-white/10">
            <span className="text-white/50 text-sm font-medium">Trusted by professionals at</span>
            <div className="flex items-center gap-5 text-white/30">
              <FaHospital className="w-5 h-5" />
              <FaUserMd className="w-5 h-5" />
              <FaStethoscope className="w-5 h-5" />
              <span className="text-xs font-semibold text-white/25 tracking-wider">+ more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
