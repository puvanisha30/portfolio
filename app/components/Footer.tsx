import { portfolioData } from "@/data";

export default function Footer() {
  const { personal, navLinks } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <span
            className="text-white font-black text-xl tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            P<span className="text-indigo-400">.</span>A
          </span>
          <p className="text-slate-600 text-xs mt-1">Puvanisha Amirtha A · {personal.address}</p>
        </div>

        {/* Nav */}
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-slate-600 text-xs">© {year} Puvanisha Amirtha A</p>
      </div>
    </footer>
  );
}
