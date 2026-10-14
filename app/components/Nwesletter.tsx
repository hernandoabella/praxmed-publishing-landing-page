"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterEmbedded() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".news-head", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2052347');
        `}
      </Script>

      <section ref={sectionRef} className="w-full bg-[#0F2137] px-6 py-20 md:py-28 relative overflow-hidden">
        <div className="news-head max-w-xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">

          {/* Header */}
          <div className="flex flex-col items-center gap-4">
            <div className="eyebrow eyebrow-bright">
              <span className="eyebrow-label">Stay in the loop</span>
            </div>

            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white leading-tight tracking-tight">
              Get free resources &<br />
              <span className="text-[var(--brand-teal-bright)]">early access</span> to new books.
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-sm text-center">
              Join thousands of healthcare professionals and parents who receive practical guides, tips, and exclusive offers — no spam, ever.
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-white/10" />

          {/* MailerLite form */}
          <div className="ml-embedded" data-form="TIyioo" />

          {/* Trust note */}
          <p className="text-white/20 text-xs text-center">
            Unsubscribe anytime. We respect your privacy.
          </p>

        </div>
      </section>
    </>
  );
}