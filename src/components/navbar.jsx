import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          SPHUMELELE<span className="text-sky-400">.</span>
        </a>
        <button
          className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
        <div className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-slate-950 px-5 py-6 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-400 transition hover:text-sky-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-sky-400/50 px-4 py-2 text-center text-sm font-semibold text-sky-300 transition hover:bg-sky-400/10"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;