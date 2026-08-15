import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import ProjectCard from '@/components/project-card';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[var(--accent-cyan)]/[0.018] blur-[120px]" />

        <div className="absolute right-[-80px] bottom-[8%] h-80 w-80 rounded-full bg-[var(--accent)]/[0.015] blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--border-strong)_1px,transparent_1px),linear-gradient(90deg,var(--border-strong)_1px,transparent_1px)] [background-size:72px_72px]" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <Reveal>
          <div className="flex items-center gap-3">

            <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
              02 — Projects
            </span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6">

            <SectionHeading
              eyebrow=""
              title="Things I build to learn security"
              description="A selection of hands-on projects where I turn cybersecurity concepts into working systems, tools, and experiments."
            />

          </div>
        </Reveal>

        {/* =====================================================
            PROJECT GRID
            ===================================================== */}

        <div className="mt-12 grid items-stretch gap-6 md:mt-14 lg:grid-cols-2 lg:gap-7">

          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.id}
              delay={140 + index * 100}
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