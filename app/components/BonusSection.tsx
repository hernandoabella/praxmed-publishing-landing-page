"use client";

import { useState, useEffect, useRef } from "react";
import { Download, CheckCircle, Volume2, Smartphone, Car, PlayCircle, Brain } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AudioDownload = ({ transparent = false }: { transparent?: boolean }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const audioFeatures = [
    "Real clinical dialogues",
    "Essential medical phrases",
    "Native pronunciation",
    "Symptom-based questions",
    "Emergency commands",
    "Treatment explanations",
    "System-based review questions",
  ];

  const handleDownloadAll = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    const totalFiles = 40;

    for (let i = 1; i <= totalFiles; i++) {
      const fileName = `AUDIO-TRACK-${i}.opus`;
      try {
        setCurrentFile(`Downloading ${fileName}…`);
        const link = document.createElement("a");
        link.href = `/audio/${fileName}`;
        link.download = fileName;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadProgress(Math.round((i / totalFiles) * 100));
        await new Promise((r) => setTimeout(r, 300));
      } catch {
        setCurrentFile(`Failed: ${fileName}`);
      }
    }

    setIsDownloading(false);
    setDownloadProgress(100);
    setCurrentFile("All files downloaded!");
    setTimeout(() => { setDownloadProgress(0); setCurrentFile(""); }, 2000);
  };

  return (
    <section ref={containerRef} className={`w-full ${transparent ? "bg-transparent" : "bg-[#0F2137]"} py-16 md:py-24 px-6`}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="fade-up flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-[#0B8288]" />
          <span className="text-[#0B8288] text-xs font-semibold tracking-[0.2em] uppercase">
            Audio Library
          </span>
        </div>

        <h2 className="fade-up text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight tracking-tight mb-3">
          Listen. Practice. <span className="text-[#0B8288]">Retain.</span>
        </h2>

        <p className="fade-up text-white/50 text-base max-w-xl mb-14 leading-relaxed">
          40 high-quality audio tracks included with the book — native pronunciation, clinical dialogues, and real-world phrases.
        </p>

        {/* Main card */}
        <div className="fade-up grid lg:grid-cols-12 gap-0 border border-white/10 rounded-sm overflow-hidden">

          {/* Left: features */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-8">

            <div className="grid sm:grid-cols-2 gap-3">
              {audioFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#0B8288] flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="w-12 h-[1px] bg-white/10" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-4 h-4 text-[#0B8288]" />
                <span className="text-sm font-semibold text-white">Why use the audio?</span>
              </div>
              <ul className="space-y-2 text-sm text-white/40">
                <li>— Improve accent and pronunciation</li>
                <li>— Practice during commutes or rounds</li>
                <li>— Reinforce vocabulary from the book</li>
                <li>— Train your ear for real patient interactions</li>
              </ul>
            </div>

            {/* Device support */}
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              {[
                { icon: Smartphone, label: "Mobile" },
                { icon: Car, label: "CarPlay" },
                { icon: PlayCircle, label: "Offline" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/30">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: download */}
          <div className="lg:col-span-5 bg-white/5 border-l border-white/10 flex flex-col justify-center gap-8">

            {/* Doctor image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src="/doctor_with_headphones.png"
                alt="Doctor using audio library"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient fade into the panel below */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F2137]/80" />
            </div>

            <div className="px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-8">

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-[#0B8288] flex items-center justify-center rounded-sm">
                <Volume2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Complete Audio Library</p>
                <p className="text-xs text-white/30">40 Tracks · HQ Opus</p>
              </div>
            </div>

            {/* Progress */}
            {isDownloading && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-white/40 truncate max-w-[70%]">{currentFile}</span>
                  <span className="text-xs font-semibold text-white">{downloadProgress}%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0B8288] transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {!isDownloading && downloadProgress === 100 && (
              <p className="text-sm text-[#0B8288] font-medium">All files downloaded!</p>
            )}

            <button
              onClick={handleDownloadAll}
              disabled={isDownloading}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0F2137] text-sm font-bold tracking-wide hover:bg-[#0B8288] hover:text-white transition-colors duration-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(11,130,136,0.25)]"
            >
              {isDownloading ? "Downloading…" : "Download All Tracks"}
              {!isDownloading && <Download className="w-4 h-4" />}
            </button>

            <p className="text-xs text-white/25 leading-relaxed">
              Included with <span className="text-white/50 font-medium">Medical Spanish for Healthcare Professionals</span>
            </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AudioDownload;