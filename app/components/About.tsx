"use client";

import { portfolioData } from "@/data";

export default function About() {
  const { personal, education, internship, leadership, certifications } = portfolioData;

  return (
    <section id="about" className="bg-[#0a0a0f] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mt-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Summary + Contact */}
          <div>
            <p className="text-slate-400 leading-relaxed text-base mb-8">{personal.summary}</p>

            <div className="space-y-3">
              {[
                { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
                { label: "Location", value: personal.address, href: null },
                { label: "LinkedIn", value: "View Profile", href: personal.linkedin },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-slate-600 text-sm w-20 shrink-0">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm">{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="mt-10">
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Leadership
              </h3>
              <div className="space-y-3">
                {leadership.map((l) => (
                  <div key={l.role} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <span className="text-indigo-400 mt-0.5">▸</span>
                    <div>
                      <p className="text-white text-sm font-semibold">{l.role}</p>
                      <p className="text-slate-500 text-xs">{l.org} · {l.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Education
            </h3>
            <div className="relative border-l border-slate-800 pl-6 space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#0a0a0f]" />
                  <p className="text-slate-500 text-xs mb-1">{edu.period}</p>
                  <p className="text-white font-semibold text-sm">{edu.degree}</p>
                  <p className="text-slate-400 text-sm">{edu.institution}, {edu.location}</p>
                  {edu.grade && (
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 text-xs">
                      {edu.grade}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Internship */}
            <div className="mt-10 p-5 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{internship.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm">{internship.title}</p>
                  <p className="text-indigo-400 text-xs">{internship.organization} · {internship.type}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {internship.points.map((pt, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-indigo-500 mt-1 text-xs">●</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
