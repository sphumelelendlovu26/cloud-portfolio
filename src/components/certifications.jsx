import SectionHeading from "./section-heading";

function Certifications() {
  const items = [
    { name: "CompTIA A+", state: "COMPLETED", color: "text-emerald-300" },
    { name: "CompTIA Network+", state: "COMPLETED", color: "text-emerald-300" },
    { name: "Microsoft AZ-700", state: "IN PROGRESS", color: "text-amber-300" },
  ];
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <SectionHeading eyebrow="04 / LEARNING" title="Certifications" description="A record of completed certifications and the next milestones in my learning journey." />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.name} className="rounded-xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-sky-400/10 text-xl text-sky-300">✦</div>
            <h3 className="font-semibold text-white">{item.name}</h3>
            <p className={`mt-3 text-xs font-bold tracking-widest ${item.color}`}>{item.state}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Certifications;