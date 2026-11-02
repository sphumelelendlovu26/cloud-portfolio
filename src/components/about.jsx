import SectionHeading from "./section-heading";

function About() {
  return (
    <section id="about" className="border-y border-white/5 bg-slate-900/45">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="01 / ABOUT" title="A little about me" description="I’m building on my IT support foundation while developing deeper cloud and networking knowledge through study and practical projects." />
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">
            <h3 className="text-xl font-semibold text-white">From IT support to cloud engineering</h3>
            <p className="mt-4 leading-8 text-slate-400">
              I currently work in IT support, helping users and working with
              Active Directory and Microsoft 365. Outside work, I’m expanding my
              knowledge of Azure networking and learning how to define cloud
              infrastructure with Terraform.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              This portfolio documents that journey: the labs I build, the
              problems I solve and the skills I develop along the way.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm text-slate-500">CURRENT ROLE</p>
              <p className="mt-2 text-lg font-semibold text-white">Junior IT Technician</p>
              <p className="mt-1 text-sm text-slate-400">IT support · Active Directory · Microsoft 365</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm text-slate-500">CAREER DIRECTION</p>
              <p className="mt-2 text-lg font-semibold text-white">Cloud & DevOps</p>
              <p className="mt-1 text-sm text-slate-400">Azure · Automation · Infrastructure as Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;