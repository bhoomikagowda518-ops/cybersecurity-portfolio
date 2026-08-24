'use client';

import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';

const PROGRESSION = [
  {
    number: '01',
    title: 'Understand',
    description: 'Learn how the system works.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Turn knowledge into something real.',
  },
  {
    number: '03',
    title: 'Break',
    description: 'Test it. Question it. Find the weakness.',
  },
  {
    number: '04',
    title: 'Fix',
    description: 'Understand why it failed and make it stronger.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[30%] h-[380px] w-[380px] rounded-full bg-[var(--accent-cyan)]/[0.025] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[5%] right-[-180px] h-[360px] w-[360px] rounded-full bg-[var(--accent)]/[0.018] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-6 sm:py-28 lg:py-32">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
              01 — About
            </span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6">
            <SectionHeading
              eyebrow=""
              title="Understanding what happens beneath the surface"
              description="Exploring cybersecurity through systems, experimentation, and hands-on work."
            />
          </div>
        </Reveal>

        {/* =====================================================
            MAIN CONTENT
            ===================================================== */}

        <div className="mt-14 grid gap-14 sm:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* ===================================================
              STORY
              =================================================== */}

          <Reveal delay={120}>
            <div className="relative max-w-xl">

              {/* Signal line */}

              <div className="absolute -left-4 top-1 h-[calc(100%-4px)] w-px bg-gradient-to-b from-[var(--accent-cyan)]/40 via-[var(--border)] to-transparent sm:-left-6" />

              <div className="space-y-6 pl-1 sm:pl-0">

                <p className="text-base leading-[1.8] text-[var(--text)] sm:text-lg">
                  I&apos;m interested in how systems work beneath the
                  surface, how networks communicate, where vulnerabilities
                  come from, and what it takes to make technology more
                  secure.
                </p>

                <p className="text-sm leading-[1.85] text-[var(--text-muted)] sm:text-base">
                  I learn by getting my hands on things. I study the
                  fundamentals, build something with them, test what I built,
                  break it, understand why it failed, and improve it.
                </p>

              </div>
            </div>
          </Reveal>

          {/* ===================================================
              HOW I LEARN
              =================================================== */}

          <Reveal delay={160}>
            <div className="relative lg:pt-1">

              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono-brand text-[10px] uppercase tracking-[0.18em] text-[var(--text-faint)]">
                  How I learn
                </span>

                <span className="font-mono-brand text-[9px] text-[var(--text-faint)]">
                  / process
                </span>
              </div>

              <div className="relative">

                {/* Connecting line */}

                <div className="absolute bottom-4 left-[14px] top-4 w-px bg-gradient-to-b from-[var(--accent-cyan)]/40 via-[var(--border-strong)] to-transparent" />

                <div className="space-y-6">

                  {PROGRESSION.map((step) => (
                    <div
                      key={step.number}
                      className="group relative flex gap-4 sm:gap-5"
                    >

                      {/* Number */}

                      <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] transition-all duration-300 group-hover:border-[var(--accent-cyan)]">
                        <span className="font-mono-brand text-[8px] text-[var(--text-faint)] transition-colors group-hover:text-[var(--accent-cyan)]">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}

                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-lg font-medium tracking-[-0.02em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-cyan)] sm:text-xl">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}