import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import ProjectCard from '@/components/project-card';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-soft)]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[var(--accent-cyan)]/3 blur-[100px]" />
        <div className="absolute right-[5%] bottom-[10%] h-72 w-72 rounded-full bg-[var(--accent)]/3 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I build to learn security"
            description="A selection of hands-on projects where I turn cybersecurity concepts into working systems, tools, and experiments."
          />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.id}
              delay={80 + index * 100}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}