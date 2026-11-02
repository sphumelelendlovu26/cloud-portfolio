function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-slate-900/45">
      <div className="mx-auto max-w-6xl px-5 py-24 text-center lg:px-8">
        <p className="mb-3 text-xs font-bold tracking-[0.24em] text-sky-400">05 / CONTACT</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Let's connect.</h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
          I’m interested in connecting with IT professionals, learning from the
          cloud community and exploring opportunities to grow.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:sphumelelendlovu26@gmail.com" className="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 hover:bg-sky-300">Email me</a>
          <a href="https://www.linkedin.com/in/sphumelele-ndlovu-a91511349" target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white hover:border-sky-400/50">LinkedIn ↗</a>
          <a href="https://github.com/sphumelelendlovu26" target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white hover:border-sky-400/50">GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;