"use client";

import { portfolioData } from "@/data";
import { useState } from "react";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#0d0d14] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mt-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let's Connect
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base">
            I'm actively looking for internship opportunities in data science and analytics. Feel free to reach out!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: "✉️",
              label: "Email",
              value: personal.email,
              href: `mailto:${personal.email}`,
              action: copyEmail,
              actionLabel: copied ? "Copied!" : "Copy",
            },
            {
              icon: "📞",
              label: "Phone",
              value: personal.phone,
              href: `tel:${personal.phone}`,
              action: null,
              actionLabel: null,
            },
            {
              icon: "💼",
              label: "LinkedIn",
              value: "View Profile",
              href: personal.linkedin,
              action: null,
              actionLabel: null,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-indigo-500/30 transition-all group text-center"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{item.label}</p>
              <a
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-white text-sm font-medium hover:text-indigo-300 transition-colors break-all"
              >
                {item.value}
              </a>
              {item.action && (
                <button
                  onClick={item.action}
                  className="block mx-auto mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {item.actionLabel}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Big CTA */}
        <div className="text-center p-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-500/5 to-violet-500/5">
          <p className="text-slate-400 text-base mb-6">
            Interested in working together or have a project in mind?
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-xl shadow-indigo-500/20"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
