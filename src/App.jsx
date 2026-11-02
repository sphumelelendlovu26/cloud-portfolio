import { lazy, Suspense } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";

const About = lazy(() => import("./components/about"));
const Skills = lazy(() => import("./components/skills"));
const Projects = lazy(() => import("./components/projects"));
const Certifications = lazy(() => import("./components/certifications"));
const Contact = lazy(() => import("./components/contact"));

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<p>Loading sections...</p>}>
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      <footer className="border-t border-white/5 px-5 py-7 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sphumelele Ndlovu. Built with React.
      </footer>
    </div>
  );
}