'use client';

import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import { LEARNING_ITEMS } from '@/lib/data';
import {
  Activity,
  ArrowUpRight,
  CircleDot,
  Crosshair,
  Network,
  Terminal,
  Shield,
  Globe,
} from 'lucide-react';

const ICONS = [
  Terminal,
  Network,
  Shield,
  Activity,
  Crosshair,
  Globe,
];

export default function Learning() {
  const activeCount = LEARNING_ITEMS.filter(
    (item) => item.status === 'ACTIVE'
  ).length;

  return (
    <section
      id="learning"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-soft)]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-[15%] h-72 w-72 rounded-full bg-[var(--accent-cyan)]/[0.025] blur-[120px]" />

        <div className="absolute bottom-[5%] left-[5%] h-64 w-64 rounded-full bg-[var(--accent)]/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Learning Journey"
            title="Areas I'm actively developing"
            description="The security domains I'm currently exploring through projects, labs, experimentation, and hands-on practice."
          />
        </Reveal>

        {/* Main panel */}
        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-[var(--border)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

              <div className="flex items-center gap-3">

                {/* Animated activity icon */}
                <div className="group flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--bg-soft)]">
                  <Activity
                    size={16}
                    strokeWidth={1.7}
                    className="text-[var(--accent-cyan)] transition-transform duration-500 group-hover:rotate-90"
                  />
                </div>

                <div>
                  <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[var(--text-faint)]">
                    Development tracker
                  </p>

                  <p className="mt-0.5 text-sm text-[var(--text)]">
                    Current cybersecurity focus
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <span className="font-mono-brand text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
                  {activeCount} active
                </span>

                <span className="h-3 w-px bg-[var(--border-strong)]" />

                <span className="font-mono-brand text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
                  {LEARNING_ITEMS.length} areas
                </span>

              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-[var(--border)]">

              {LEARNING_ITEMS.map((item, i) => {
                const Icon = ICONS[i % ICONS.length];
                const isActive = item.status === 'ACTIVE';
                const isProgress = item.status === 'IN PROGRESS';

                return (
                  <Reveal
                    key={item.title}
                    delay={150 + i * 70}
                  >
                    <div
                      className="
                        group relative flex items-center justify-between
                        overflow-hidden
                        px-6 py-5
                        transition-all duration-500
                        hover:bg-[var(--bg-soft)]/70
                        sm:px-7
                      "
                    >

                      {/* Hover sweep */}
                      <div
                        className="
                          pointer-events-none
                          absolute inset-y-0 left-0 w-0
                          bg-gradient-to-r
                          from-[var(--accent-cyan)]/[0.035]
                          to-transparent
                          transition-all duration-700
                          group-hover:w-full
                        "
                      />

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 top-0 w-px bg-[var(--status)] opacity-80 transition-all duration-500 group-hover:w-[2px]" />
                      )}

                      {/* Left */}
                      <div className="relative flex min-w-0 items-center gap-4 sm:gap-5">

                        {/* Number */}
                        <span className="w-6 shrink-0 font-mono-brand text-xs tracking-wider text-[var(--text-faint)] transition-colors duration-300 group-hover:text-[var(--text-muted)]">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* Icon */}
                        <div
                          className={`
                            flex h-10 w-10 shrink-0 items-center justify-center
                            rounded-xl border
                            transition-all duration-500
                            ${
                              isActive
                                ? 'border-[var(--status)]/25 bg-[var(--status)]/[0.06] text-[var(--status)]'
                                : isProgress
                                  ? 'border-[var(--accent-cyan)]/25 bg-[var(--accent-cyan)]/[0.05] text-[var(--accent-cyan)]'
                                  : 'border-[var(--border-strong)] bg-[var(--bg-soft)] text-[var(--text-faint)]'
                            }
                            group-hover:-translate-y-0.5
                            group-hover:scale-105
                          `}
                        >
                          <Icon
                            size={17}
                            strokeWidth={1.6}
                            className="transition-transform duration-500 group-hover:rotate-[-6deg]"
                          />
                        </div>

                        {/* Title */}
                        <div className="min-w-0">

                          <p
                            className={`
                              truncate text-sm font-medium
                              transition-all duration-300
                              sm:text-[15px]
                              ${
                                isActive
                                  ? 'text-[var(--text)]'
                                  : 'text-[var(--text-muted)] group-hover:text-[var(--text)]'
                              }
                            `}
                          >
                            {item.title}
                          </p>

                          <div className="mt-1.5 flex items-center gap-2">

                            <span
                              className={`
                                h-1 w-1 rounded-full
                                ${
                                  isActive
                                    ? 'bg-[var(--status)]'
                                    : isProgress
                                      ? 'bg-[var(--accent-cyan)]'
                                      : 'bg-[var(--text-faint)]'
                                }
                              `}
                            />

                            <span className="font-mono-brand text-[9px] uppercase tracking-wider text-[var(--text-faint)]">
                              {isActive
                                ? 'Currently developing'
                                : isProgress
                                  ? 'In progress'
                                  : 'Exploring'}
                            </span>

                          </div>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="relative ml-4 flex shrink-0 items-center gap-3">

                        {/* Status */}
                        <span
                          className={`
                            hidden rounded-full border px-2.5 py-1
                            font-mono-brand text-[9px] tracking-[0.15em]
                            transition-all duration-300
                            sm:inline-flex
                            ${
                              isActive
                                ? 'border-[var(--status)]/30 bg-[var(--status)]/[0.04] text-[var(--status)] group-hover:border-[var(--status)]/50 group-hover:bg-[var(--status)]/[0.08]'
                                : isProgress
                                  ? 'border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/[0.04] text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/50'
                                  : 'border-[var(--border-strong)] text-[var(--text-faint)]'
                            }
                          `}
                        >
                          {item.status}
                        </span>

                        {/* Arrow */}
                        <div
                          className="
                            flex h-8 w-8 items-center justify-center
                            rounded-full border border-[var(--border)]
                            transition-all duration-300
                            group-hover:border-[var(--border-strong)]
                            group-hover:bg-[var(--bg-soft)]
                          "
                        >
                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.6}
                            className="
                              text-[var(--text-faint)]
                              transition-all duration-300
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-[var(--accent-cyan)]
                            "
                          />
                        </div>

                      </div>
                    </div>
                  </Reveal>
                );
              })}

            </div>

            {/* Footer */}
            <div className="border-t border-[var(--border)] bg-[var(--bg-soft)]/40 px-6 py-4 sm:px-7">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2">

                  <CircleDot
                    size={12}
                    className="text-[var(--status)]"
                  />

                  <span className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-[var(--text-faint)]">
                    Learning is continuous
                  </span>

                </div>

                <span className="font-mono-brand text-[9px] uppercase tracking-[0.18em] text-[var(--text-faint)]">
                  Study · Build · Test · Repeat
                </span>

              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}