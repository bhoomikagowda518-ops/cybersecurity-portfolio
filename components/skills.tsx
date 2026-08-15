'use client';

import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import { SKILLS } from '@/lib/data';
import {
  Code2,
  ShieldHalf,
  Terminal,
  FlaskConical,
  ArrowUpRight,
} from 'lucide-react';

const CATEGORY_CONFIG: Record<
  string,
  {
    icon: typeof Code2;
    number: string;
    label: string;
    iconColor: string;
    iconBg: string;
    iconBorder: string;
    description: string;
  }
> = {
  Programming: {
    icon: Code2,
    number: '01',
    label: 'BUILD',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-400/[0.07]',
    iconBorder: 'border-sky-400/20',
    description:
      'Languages and tools I use to build projects and turn ideas into working systems.',
  },

  Security: {
    icon: ShieldHalf,
    number: '02',
    label: 'DEFEND',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/[0.07]',
    iconBorder: 'border-emerald-400/20',
    description:
      'Security concepts focused on detection, analysis, protection, and defense.',
  },

  Systems: {
    icon: Terminal,
    number: '03',
    label: 'OPERATE',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-400/[0.07]',
    iconBorder: 'border-violet-400/20',
    description:
      'Systems, platforms, and development environments used throughout my work.',
  },

  Practical: {
    icon: FlaskConical,
    number: '04',
    label: 'APPLY',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/[0.07]',
    iconBorder: 'border-amber-400/20',
    description:
      'Hands-on security skills developed through projects, labs, CTFs, and experimentation.',
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[var(--accent-cyan)]/[0.035] blur-[120px]" />

        <div className="absolute bottom-[8%] right-[5%] h-80 w-80 rounded-full bg-[var(--accent)]/[0.025] blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(var(--text)_1px,transparent_1px),linear-gradient(90deg,var(--text)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Section label */}
        <Reveal>
  <div className="flex items-center gap-3">
    <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
      04 — Skills
    </span>

    <span className="h-px w-10 bg-[var(--border-strong)]" />
  </div>

  <div className="mt-6">
    <SectionHeading
      eyebrow=""
      title="What I work with"
      description="A growing technical toolkit built through cybersecurity projects, labs, and continuous hands-on learning."
    />
  </div>
</Reveal>

        {/* Skill cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {SKILLS.map((group, i) => {
            const config =
              CATEGORY_CONFIG[group.category] ??
              CATEGORY_CONFIG.Programming;

            const Icon = config.icon;

            return (
              <Reveal key={group.category} delay={i * 90}>
                <article
                  className="
                    group relative h-full overflow-hidden rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--panel)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[var(--border-strong)]
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                  "
                >

                  {/* Animated top accent */}
                  <div className="absolute left-0 right-0 top-0 h-px overflow-hidden">
                    <div
                      className={`h-full w-0 transition-all duration-700 group-hover:w-full ${
                        config.iconColor === 'text-sky-400'
                          ? 'bg-sky-400'
                          : config.iconColor === 'text-emerald-400'
                            ? 'bg-emerald-400'
                            : config.iconColor === 'text-violet-400'
                              ? 'bg-violet-400'
                              : 'bg-amber-400'
                      }`}
                    />
                  </div>

                  <div className="p-7 sm:p-8">

                    {/* Header */}
                    <div className="flex items-start justify-between">

                      <div className="flex items-center gap-4">

                        {/* Category icon */}
                        <div
                          className={`
                            flex h-12 w-12 items-center justify-center
                            rounded-xl border
                            ${config.iconBorder}
                            ${config.iconBg}
                            ${config.iconColor}
                            transition-all duration-500
                            group-hover:scale-105
                          `}
                        >
                          <Icon
                            size={20}
                            strokeWidth={1.6}
                          />
                        </div>

                        {/* Category title */}
                        <div>
                          <p
                            className={`
                              font-mono-brand text-[10px]
                              uppercase tracking-[0.25em]
                              ${config.iconColor}
                            `}
                          >
                            {config.label}
                          </p>

                          <h3 className="mt-1.5 text-[1.55rem] font-medium tracking-[-0.025em] text-[var(--text)]">
                            {group.category}
                          </h3>
                        </div>
                      </div>

                      {/* Number */}
                      <span className="font-mono-brand text-xs tracking-[0.15em] text-[var(--text-muted)]">
                        {config.number}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-md text-[14px] leading-7 text-[var(--text-muted)]">
                      {config.description}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px bg-[var(--border)]" />

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            group/tag inline-flex items-center gap-2
                            rounded-lg
                            border border-[var(--border-strong)]
                            bg-[var(--bg-soft)]
                            px-3 py-2
                            text-[12px]
                            text-[var(--text)]
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:border-[var(--accent-cyan)]/40
                            hover:bg-[var(--accent-cyan)]/[0.045]
                          "
                        >
                          {/* Colored symbol */}
                          <span
                            className={`
                              text-[12px]
                              ${config.iconColor}
                              transition-transform duration-300
                              group-hover/tag:scale-125
                            `}
                          >
                            +
                          </span>

                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Bottom row */}
                    <div className="mt-8 flex items-center justify-between">

                      <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        {String(group.skills.length).padStart(2, '0')}{' '}
                        {group.skills.length === 1 ? 'skill' : 'skills'}
                      </span>

                      <div
                        className={`
                          flex h-8 w-8 items-center justify-center
                          rounded-full
                          border border-[var(--border)]
                          ${config.iconColor}
                          transition-all duration-300
                          group-hover:border-current
                        `}
                      >
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.6}
                          className="
                            transition-transform duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </div>

                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Current focus */}
        <Reveal delay={400}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)]">

            <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

              <div className="flex items-center gap-3">

                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-50" />

                  <span className="relative h-2 w-2 rounded-full bg-[var(--status)]" />
                </span>

                <span className="font-mono-brand text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Currently expanding this toolkit
                </span>

              </div>

              <span className="font-mono-brand text-[10px] uppercase tracking-[0.18em] text-[var(--text-faint)]">
                Learn · Build · Test · Repeat
              </span>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}