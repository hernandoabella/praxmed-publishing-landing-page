"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RetailerLogos() {
  const containerRef = useRef(null);

  const retailers = [
    { name: "Amazon", logo: "/logos/amazon-kindle.png", url: "#" },
    { name: "Apple Books", logo: "/logos/apple-books.png", url: "#" },
    { name: "Barnes & Noble", logo: "/logos/barnes-and-noble.png", url: "#" },
    { name: "Google Play", logo: "/logos/google-play.png", url: "#" },
    { name: "Kobo", logo: "/logos/kobo.png", url: "#" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".retailer-logo", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white py-20 border-y border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Título con más separación */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-[1.5px] w-16 bg-gray-100" />
          <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
            Available At
          </p>
          <div className="h-[1.5px] w-16 bg-gray-100" />
        </div>
        
        {/* Logos Gigantes */}
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24 lg:gap-32">
          {retailers.map((shop) => (
            <a 
              key={shop.name}
              href={shop.url}
              target="_blank"
              rel="noopener noreferrer"
              className="retailer-logo group relative block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={shop.logo} 
                alt={`${shop.name} logo`} 
                // Aumentamos h-12 en móvil y h-16 en desktop para presencia masiva
                className="h-10 md:h-14 lg:h-16 w-auto object-contain transition-all duration-500 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-125"
                onError={(e) => { 
                  e.currentTarget.src = `https://via.placeholder.com/200x80/f9fafb/666666?text=${shop.name}`;
                  e.currentTarget.onerror = null; 
                }}
              />
              
              {/* Brillo inferior al hacer hover */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#142B47] group-hover:w-full transition-all duration-500 opacity-20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}