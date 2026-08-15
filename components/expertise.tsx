'use client';

import { useState } from 'react';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import { EXPERTISE_AREAS } from '@/lib/data';
import {
  Crosshair,
  FileSearch,
  KeyRound,
  Lock,
  Network,
  Radar,
  ShieldCheck,
  ArrowDown,
} from 'lucide-react';

const CONFIG = [
  {
    icon: Crosshair,
    color: '#f87171',
    soft: 'rgba(248,113,113,0.08)',
    depth: 'EXPLORING',
    focus: 'CTFs · Labs · Adversary Techniques',
    label: 'ATTACK',
  },
  {
    icon: Radar,
    color: '#22d3ee',
    soft: 'rgba(34,211,238,0.08)',
    depth: 'BUILDING',
    focus: 'SIEM · MITRE ATT&CK · Detection',
    label: 'DETECT',
  },
  {
    icon: KeyRound,
    color: '#a78bfa',
    soft: 'rgba(167,139,250,0.08)',
    depth: 'APPLYING',
    focus: 'Encryption · Hashing · Key Management',
    label: 'PROTECT',
  },
  {
    icon: Network,
    color: '#60a5fa',
    soft: 'rgba(96,165,250,0.08)',
    depth: 'BUILDING',
    focus: 'Protocols · Traffic · Network Defense',
    label: 'CONNECT',
  },
  {
    icon: Lock,
    color: '#34d399',
    soft: 'rgba(52,211,153,0.08)',
    depth: 'EXPLORING',
    focus: 'Linux · Permissions · Hardening',
    label: 'HARDEN',
  },
  {
    icon: FileSearch,
    color: '#fbbf24',
    soft: 'rgba(251,191,36,0.08)',
    depth: 'EXPLORING',
    focus: 'Web Vulnerabilities · Testing · Labs',
    label: 'TEST',
  },
];

const DESKTOP_POSITIONS = [
  'left-[4%] top-[6%]',
  'right-[4%] top-[6%]',
  'left-[2%] top-[42%]',
  'right-[2%] top-[42%]',
  'left-[20%] bottom-[5%]',
  'right-[20%] bottom-[5%]',
];

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeConfig =
    activeIndex !== null ? CONFIG[activeIndex] : null;

  const ActiveIcon = activeConfig?.icon ?? ShieldCheck;

  return (
    <section
      id="expertise"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)]/[0.018] blur-[150px]" />

        <div
          className="
            absolute inset-0 opacity-[0.014]
            [background-image:linear-gradient(var(--text)_1px,transparent_1px),linear-gradient(90deg,var(--text)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">

        {/* =====================================================
            HEADING
            ===================================================== */}
<Reveal>
  <div className="flex items-center gap-3">
    <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
      03 — Expertise
    </span>

    <span className="h-px w-10 bg-[var(--border-strong)]" />
  </div>

  <div className="mt-6">
    <SectionHeading
      eyebrow=""
      title="Where security meets practice"
      description="The areas I'm exploring through projects, labs, experimentation, and hands-on security work."
    />
  </div>
</Reveal>

        {/* =====================================================
            DESKTOP NETWORK
            ===================================================== */}

        <Reveal delay={100}>
          <div className="relative mt-16 hidden h-[650px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--panel)] md:block">

            {/* Subtle grid */}
            <div
              className="
                pointer-events-none absolute inset-0 opacity-[0.018]
                [background-image:linear-gradient(var(--text)_1px,transparent_1px),linear-gradient(90deg,var(--text)_1px,transparent_1px)]
                [background-size:52px_52px]
              "
            />

            {/* Center atmosphere */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-all duration-700"
              style={{
                backgroundColor:
                  activeConfig?.color ?? '#22d3ee',
                opacity:
                  activeIndex !== null ? 0.055 : 0.018,
              }}
            />

            {/* =================================================
                CONNECTION NETWORK
                ================================================= */}

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 650"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="expertise-pulse-glow">
                  <feGaussianBlur
                    stdDeviation="2"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {[
                [500, 285, 150, 125],
                [500, 285, 850, 125],
                [500, 285, 140, 400],
                [500, 285, 860, 400],
                [500, 285, 350, 610],
                [500, 285, 650, 610],
              ].map(([x1, y1, x2, y2], i) => {
                const active = activeIndex === i;
                const color = CONFIG[i].color;

                return (
                  <g key={i}>

                    {/* Connection */}
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={active ? color : '#353943'}
                      strokeWidth={active ? 1.5 : 0.8}
                      strokeOpacity={active ? 0.72 : 0.38}
                      className="transition-all duration-500"
                    />

                    {/* Quiet signal pulse */}
                    <circle
                      r={active ? 3 : 1.7}
                      fill={active ? color : '#22d3ee'}
                      opacity={active ? 0.85 : 0.18}
                      filter="url(#expertise-pulse-glow)"
                    >
                      <animateMotion
                        dur={active ? '1.8s' : '5s'}
                        repeatCount="indefinite"
                        path={`M ${x1} ${y1} L ${x2} ${y2}`}
                      />
                    </circle>

                    {/* Reverse signal only when active */}
                    {active && (
                      <circle
                        r="1.8"
                        fill={color}
                        opacity="0.35"
                        filter="url(#expertise-pulse-glow)"
                      >
                        <animateMotion
                          dur="2.4s"
                          repeatCount="indefinite"
                          path={`M ${x2} ${y2} L ${x1} ${y1}`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Inner orbit */}
              <circle
                cx="500"
                cy="285"
                r="105"
                fill="none"
                stroke={activeConfig?.color ?? '#22d3ee'}
                strokeOpacity={
                  activeIndex !== null ? 0.14 : 0.055
                }
                strokeDasharray="3 10"
                className="animate-spin-slow"
                style={{
                  transformOrigin: '500px 285px',
                }}
              />

              {/* Outer orbit */}
              <circle
                cx="500"
                cy="285"
                r="150"
                fill="none"
                stroke="#22d3ee"
                strokeOpacity="0.025"
                strokeDasharray="2 14"
              />
            </svg>

            {/* =================================================
                CENTER NODE
                ================================================= */}

            <div className="absolute left-1/2 top-[285px] -translate-x-1/2 -translate-y-1/2">

              {/* Minimal glow */}
              <div
                className="absolute inset-[-55px] rounded-full blur-[55px] transition-all duration-700"
                style={{
                  backgroundColor:
                    activeConfig?.color ?? '#22d3ee',
                  opacity:
                    activeIndex !== null ? 0.11 : 0.035,
                }}
              />

              {/* Rotating ring */}
              <div
                className="absolute inset-[-16px] animate-spin-slow rounded-full border border-dashed"
                style={{
                  borderColor: activeConfig
                    ? `${activeConfig.color}30`
                    : 'rgba(34,211,238,0.09)',
                }}
              />

              {/* Main node */}
              <div
                className="relative flex h-44 w-44 items-center justify-center rounded-full border bg-[var(--bg)] transition-all duration-700"
                style={{
                  borderColor: activeConfig
                    ? `${activeConfig.color}42`
                    : 'rgba(34,211,238,0.17)',

                  boxShadow: activeConfig
                    ? `0 0 70px ${activeConfig.color}0c`
                    : '0 0 60px rgba(34,211,238,0.035)',
                }}
              >

                {/* Inner ring */}
                <div
                  className="absolute inset-4 rounded-full border transition-all duration-500"
                  style={{
                    borderColor: activeConfig
                      ? `${activeConfig.color}25`
                      : 'rgba(42,45,54,0.8)',
                  }}
                />

                <div className="relative text-center">

                  {/* Icon */}
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500"
                    style={{
                      color:
                        activeConfig?.color ?? '#22d3ee',

                      backgroundColor:
                        activeConfig?.soft ??
                        'rgba(34,211,238,0.045)',

                      borderColor: activeConfig
                        ? `${activeConfig.color}32`
                        : 'rgba(34,211,238,0.14)',
                    }}
                  >
                    <ActiveIcon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p
                    className="mt-4 font-mono-brand text-[8px] uppercase tracking-[0.25em] transition-colors duration-500"
                    style={{
                      color:
                        activeConfig?.color ??
                        'var(--text-faint)',
                    }}
                  >
                    {activeIndex !== null
                      ? activeConfig?.depth
                      : 'CORE FOCUS'}
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--text)]">
                    {activeIndex !== null
                      ? EXPERTISE_AREAS[activeIndex].title
                      : 'Cybersecurity'}
                  </p>

                  <p className="mt-2 font-mono-brand text-[7px] uppercase tracking-[0.12em] text-[var(--text-faint)]">
                    {activeIndex !== null
                      ? activeConfig?.focus
                      : 'Security · Systems · Practice'}
                  </p>

                </div>
              </div>
            </div>

            {/* =================================================
                EXPERTISE NODES
                ================================================= */}

            <div className="absolute inset-0">

              {EXPERTISE_AREAS.map((area, i) => {
                const config = CONFIG[i] ?? CONFIG[0];
                const Icon = config.icon;
                const isActive = activeIndex === i;

                return (
                  <div
                    key={area.title}
                    className={`group absolute ${DESKTOP_POSITIONS[i]} w-[225px]`}
                    onMouseEnter={() =>
                      setActiveIndex(i)
                    }
                    onMouseLeave={() =>
                      setActiveIndex(null)
                    }
                  >

                    <div
                      className="
                        relative overflow-hidden rounded-2xl
                        border border-[var(--border)]
                        bg-[var(--bg)]/95
                        p-4 backdrop-blur-sm
                        transition-all duration-500
                        hover:-translate-y-1
                      "
                      style={{
                        borderColor: isActive
                          ? `${config.color}48`
                          : undefined,

                        boxShadow: isActive
                          ? `0 16px 45px rgba(0,0,0,0.24), 0 0 28px ${config.color}08`
                          : undefined,
                      }}
                    >

                      {/* Subtle hover atmosphere */}
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl transition-opacity duration-500"
                        style={{
                          backgroundColor:
                            config.color,
                          opacity: isActive ? 0.15 : 0,
                        }}
                      />

                      {/* Accent line */}
                      <div
                        className="absolute left-0 right-0 top-0 h-px origin-left transition-transform duration-500"
                        style={{
                          backgroundColor:
                            config.color,

                          transform: isActive
                            ? 'scaleX(1)'
                            : 'scaleX(0.22)',

                          opacity: isActive ? 0.9 : 0.35,
                        }}
                      />

                      <div className="relative flex gap-3">

                        {/* Icon */}
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300"
                          style={{
                            color: config.color,
                            backgroundColor:
                              config.soft,
                            borderColor:
                              `${config.color}25`,

                            transform: isActive
                              ? 'translateY(-1px) scale(1.04)'
                              : 'none',
                          }}
                        >
                          <Icon
                            size={16}
                            strokeWidth={1.6}
                          />
                        </div>

                        <div className="min-w-0 flex-1">

                          <h3 className="text-sm font-medium leading-5 text-[var(--text)]">
                            {area.title}
                          </h3>

                          <p className="mt-2 text-[11px] leading-5 text-[var(--text-muted)]">
                            {area.description}
                          </p>

                        </div>
                      </div>

                      {/* Bottom metadata */}
                      <div className="mt-4 flex items-center justify-between">

                        <span
                          className="font-mono-brand text-[8px] uppercase tracking-[0.16em]"
                          style={{
                            color: config.color,
                          }}
                        >
                          {config.depth}
                        </span>

                        <span className="font-mono-brand text-[8px] uppercase tracking-[0.12em] text-[var(--text-faint)]">
                          {isActive
                            ? 'FOCUSED'
                            : config.label}
                        </span>

                      </div>

                      {/* Progress */}
                      <div className="mt-3 h-px overflow-hidden bg-[var(--border)]">
                        <div
                          className="h-full transition-all duration-700"
                          style={{
                            width: isActive
                              ? '100%'
                              : '24%',

                            backgroundColor:
                              config.color,

                            opacity: isActive
                              ? 0.85
                              : 0.35,
                          }}
                        />
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* =================================================
                FOOTER
                ================================================= */}

            <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)]/75 px-6 py-3.5 backdrop-blur-sm">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-30" />

                    <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--status)]" />
                  </span>

                  <span className="font-mono-brand text-[8px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Continuously developing
                  </span>

                </div>

                <span className="font-mono-brand text-[8px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
                  Explore · Experiment · Understand
                </span>

              </div>

            </div>
          </div>
        </Reveal>

        {/* =====================================================
            MOBILE SIGNAL PATH
            ===================================================== */}

        <Reveal delay={100}>
          <div className="relative mt-12 md:hidden">

            {/* Mobile center node */}
            <div className="relative flex flex-col items-center">

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[var(--accent-cyan)]/20 bg-[var(--panel)] shadow-[0_0_55px_rgba(34,211,238,0.045)]">

                <div className="absolute inset-[-8px] animate-spin-slow rounded-full border border-dashed border-[var(--accent-cyan)]/10" />

                <div className="text-center">

                  <ShieldCheck
                    size={23}
                    strokeWidth={1.5}
                    className="mx-auto text-[var(--accent-cyan)]"
                  />

                  <p className="mt-2.5 text-xs font-medium text-[var(--text)]">
                    Cybersecurity
                  </p>

                  <p className="mt-1 font-mono-brand text-[7px] uppercase tracking-[0.15em] text-[var(--text-faint)]">
                    Core focus
                  </p>

                </div>
              </div>

              {/* Vertical signal */}
              <div className="relative mt-8 w-full">

                <div className="absolute bottom-10 left-[22px] top-0 w-px bg-[var(--border)]" />

                <div className="absolute bottom-10 left-[22px] top-0 w-px bg-gradient-to-b from-[var(--accent-cyan)]/50 via-[var(--accent-cyan)]/15 to-transparent" />

                <div className="relative space-y-3">

                  {EXPERTISE_AREAS.map((area, i) => {
                    const config =
                      CONFIG[i] ?? CONFIG[0];

                    const Icon = config.icon;

                    const isActive =
                      activeIndex === i;

                    return (
                      <div key={area.title}>

                        <button
                          type="button"
                          onClick={() =>
                            setActiveIndex(
                              isActive
                                ? null
                                : i
                            )
                          }
                          className="relative flex w-full items-start gap-4 text-left"
                        >

                          {/* Node */}
                          <div
                            className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-[var(--panel)] transition-all duration-300"
                            style={{
                              color:
                                config.color,

                              borderColor:
                                isActive
                                  ? `${config.color}55`
                                  : `${config.color}22`,

                              backgroundColor:
                                isActive
                                  ? config.soft
                                  : 'var(--panel)',

                              transform:
                                isActive
                                  ? 'scale(1.05)'
                                  : 'none',
                            }}
                          >
                            <Icon
                              size={17}
                              strokeWidth={1.6}
                            />
                          </div>

                          {/* Card */}
                          <div
                            className="flex-1 rounded-xl border bg-[var(--panel)] p-4 transition-all duration-300"
                            style={{
                              borderColor:
                                isActive
                                  ? `${config.color}38`
                                  : 'var(--border)',
                            }}
                          >

                            <div className="flex items-center justify-between gap-3">

                              <div>

                                <p
                                  className="font-mono-brand text-[8px] uppercase tracking-[0.18em]"
                                  style={{
                                    color:
                                      config.color,
                                  }}
                                >
                                  {config.depth}
                                </p>

                                <h3 className="mt-1 text-sm font-medium text-[var(--text)]">
                                  {area.title}
                                </h3>

                              </div>

                              <ArrowDown
                                size={14}
                                className={`shrink-0 transition-transform duration-300 ${
                                  isActive
                                    ? 'rotate-180'
                                    : ''
                                }`}
                                style={{
                                  color:
                                    config.color,
                                }}
                              />

                            </div>

                            {/* Expandable content */}
                            <div
                              className={`grid transition-all duration-300 ${
                                isActive
                                  ? 'mt-3 grid-rows-[1fr] opacity-100'
                                  : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >

                              <div className="overflow-hidden">

                                <p className="text-[11px] leading-5 text-[var(--text-muted)]">
                                  {area.description}
                                </p>

                                <p
                                  className="mt-2 font-mono-brand text-[8px]"
                                  style={{
                                    color:
                                      config.color,
                                  }}
                                >
                                  {config.focus}
                                </p>

                              </div>

                            </div>

                          </div>
                        </button>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}