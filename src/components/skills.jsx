import SectionHeading from "./section-heading";
function Skills() {

const skills = [
  { name: "Azure", detail: "Cloud platform · Learning & hands-on labs" },
  { name: "Terraform", detail: "Infrastructure as Code · Practising" },
  { name: "Networking", detail: "TCP/IP · DNS · Routing · Network security" },
  { name: "Microsoft 365", detail: "Microsoft 365 · Entra ID fundamentals" },
  { name: "Linux", detail: "Command line · Basic administration" },
  { name: "React", detail: "Frontend development · Building projects" },
];


  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <SectionHeading eyebrow="02 / TOOLKIT" title="Skills I'm developing" description="A growing toolkit built through day-to-day IT support, certification study and hands-on practice." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={skill.name} className="group rounded-xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 font-mono text-sm font-bold text-sky-300">0{index + 1}</div>
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{skill.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills