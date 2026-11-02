import SectionHeading from "./section-heading";
function Projects() {
    const projects = [
  {
    number: "01",
    title: "Azure Hub-and-Spoke Network",
    type: "CLOUD NETWORKING",
    description:
      "A hands-on Azure networking lab exploring hub-and-spoke architecture, subnet design, network security groups, routing and connectivity.",
    tags: ["Azure", "Terraform", "Networking"],
    status: "IN PROGRESS",
    link: "https://github.com/sphumelelendlovu26/Azure-hub-spoke-terraform",
  },
  {
    number: "02",
    title: "Terraform Network Infrastructure",
    type: "INFRASTRUCTURE AS CODE",
    description:
      "Reusable Terraform configuration for provisioning Azure networking resources, with variables, locals, loops and dynamic network security rules.",
    tags: ["Terraform", "HCL", "Azure"],
    status: "IN PROGRESS",
    link: "https://github.com/",
  },
  {
    number: "03",
    title: "Cloud Portfolio Website",
    type: "CLOUD DEPLOYMENT",
    description:
      "A personal portfolio built with React and deployed to Azure App Service, with infrastructure provisioned through Terraform.",
    tags: ["React", "Azure App Service", "Terraform"],
    status: "BUILDING",
    link: "https://github.com/",
  },
];
  return (
    <section id="projects" className="border-y border-white/5 bg-slate-900/45">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects & practical labs" description="Practical work matters. These projects show how I apply concepts beyond certification study." />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="flex flex-col rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-sky-400/40">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-3xl font-bold text-slate-700">{project.number}</span>
                <span className="rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-[10px] font-bold tracking-wider text-amber-200">{project.status}</span>
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-sky-400">{project.type}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-300">{tag}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">
                GitHub repository <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
       </div>
    </section>
  );
}
export default Projects;