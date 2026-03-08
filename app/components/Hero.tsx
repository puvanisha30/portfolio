"use client";

import { portfolioData } from "@/data";
import { useEffect, useState } from "react";

export default function Hero() {
  const { personal } = portfolioData;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Ambient grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium tracking-widest uppercase">
          Open to Internships
        </span>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 tracking-tight leading-none"
            style={{ fontFamily: "'Syne', sans-serif" }}>
          {personal.name.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-slate-400 mb-8 font-light tracking-wide"
           style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {personal.tagline}
        </p>

        {/* Short description */}
        <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-base">
          M.Sc. Applied Data Science @ SRMIST · B.Sc. Physics · Python · Power BI · Tableau · AWS
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold text-sm hover:border-indigo-500/60 hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
