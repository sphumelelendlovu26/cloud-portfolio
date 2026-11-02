
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-48 top-72 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-xs font-medium tracking-wide text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            JUNIOR IT TECHNICIAN · CLOUD ENTHUSIAST
          </div>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building my path into the <span className="text-sky-400">cloud.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            I’m Sphumelele Ndlovu — an IT technician developing practical skills in
            Azure, networking and Infrastructure as Code. I learn by building,
            testing and documenting real projects.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
              Explore my projects <span aria-hidden="true">↗</span>
            </a>
            <a href="#about" className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-sky-400/50 hover:bg-white/5">
              More about me
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            <span>Based in South Africa</span>
            <span>Azure · Networking · Terraform</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl border border-sky-400/10" />
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-sky-950/40">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div>
              <span className="font-mono text-xs text-slate-500">cloud-journey.md</span>
            </div>
            <div className="space-y-5 py-6 font-mono text-sm">
              <p className="text-slate-500"># Current focus</p>
              <div><p className="text-sky-300">learning:</p><p className="mt-2 pl-4 text-slate-300">- Azure networking</p><p className="pl-4 text-slate-300">- Terraform</p><p className="pl-4 text-slate-300">- React & deployment</p></div>
              <div><p className="text-sky-300">certifications:</p><p className="mt-2 pl-4 text-emerald-300">- CompTIA A+ ✓</p><p className="pl-4 text-emerald-300">- CompTIA Network+ ✓</p><p className="pl-4 text-amber-300">- AZ-700 (preparing)</p></div>
              <div className="rounded-lg border border-sky-400/15 bg-sky-400/5 p-4">
                <p className="text-xs text-slate-500">MISSION</p>
                <p className="mt-2 text-base text-white">Learn it. Build it. Deploy it.</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-4 rounded-xl border border-white/10 bg-slate-800 px-4 py-3 shadow-xl">
            <p className="text-xs text-slate-400">CURRENT ROLE</p>
            <p className="mt-1 text-sm font-semibold text-white">Junior IT Technician</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;