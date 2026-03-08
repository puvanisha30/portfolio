"use client";

import { portfolioData } from "@/data";

export default function Projects() {
  const { projects, extracurricular } = portfolioData;

  return (
    <section id="projects" className="bg-[#0a0a0f] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Work</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mt-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/20 hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Icon */}
              <span className="text-4xl mb-6 block">{project.icon}</span>

              {/* Title */}
              <h3
                className="text-white font-bold text-xl mb-3 group-hover:text-indigo-200 transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Conference highlight */}
              {project.highlight && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 mb-5">
                  <span className="text-indigo-400 text-sm mt-0.5">📌</span>
                  <p className="text-indigo-300 text-xs leading-relaxed">{project.highlight}</p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Extra-curricular card */}
          {extracurricular.map((activity) => (
            <div
              key={activity.title}
              className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/20 hover:border-violet-500/40 transition-all duration-300"
            >
              <span className="text-4xl mb-6 block">{activity.icon}</span>
              <h3
                className="text-white font-bold text-xl mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {activity.title}
              </h3>
              <p className="text-violet-400 text-sm font-medium mb-4">{activity.detail}</p>
              <ul className="space-y-2">
                {activity.achievements.map((ach) => (
                  <li key={ach} className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="text-violet-500 text-xs">✦</span> {ach}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
