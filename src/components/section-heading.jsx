function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold tracking-[0.24em] text-sky-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </div>
  );
}
export default SectionHeading;