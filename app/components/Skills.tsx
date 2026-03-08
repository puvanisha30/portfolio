"use client";

import { portfolioData } from "@/data";

export default function Skills() {
  const { skills, certifications } = portfolioData;

  return (
    <section id="skills" className="bg-[#0d0d14] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Capabilities</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mt-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Skills & Tools
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2 space-y-6">
            {skills.technical.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="text-white font-bold text-sm tracking-wide">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/50 hover:border-indigo-500/40 hover:text-indigo-300 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills + Certifications */}
          <div className="space-y-6">
            {/* Soft Skills */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-white font-bold text-sm tracking-wide mb-4">🤝 Soft Skills</h3>
              <div className="space-y-2">
                {skills.soft.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-slate-300 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-white font-bold text-sm tracking-wide mb-4">🏅 Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3">
                    <span className="text-lg shrink-0">{cert.icon}</span>
                    <div>
                      <p className="text-slate-300 text-xs font-medium leading-snug">{cert.name}</p>
                      <p className="text-slate-600 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
