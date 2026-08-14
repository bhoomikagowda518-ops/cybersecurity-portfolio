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
    soft: 'rgba(248,113,113,0.10)',
    depth: 'EXPLORING',
    focus: 'CTFs · Labs · Adversary Techniques',
  },
  {
    icon: Radar,
    color: '#22d3ee',
    soft: 'rgba(34,211,238,0.10)',
    depth: 'BUILDING',
    focus: 'SIEM · MITRE ATT&CK · Detection',
  },
  {
    icon: KeyRound,
    color: '#a78bfa',
    soft: 'rgba(167,139,250,0.10)',
    depth: 'APPLYING',
    focus: 'Encryption · Hashing · Key Management',
  },
  {
    icon: Network,
    color: '#60a5fa',
    soft: 'rgba(96,165,250,0.10)',
    depth: 'BUILDING',
    focus: 'Protocols · Traffic · Network Defense',
  },
  {
    icon: Lock,
    color: '#34d399',
    soft: 'rgba(52,211,153,0.10)',
    depth: 'EXPLORING',
    focus: 'Linux · Permissions · Hardening',
  },
  {
    icon: FileSearch,
    color: '#fbbf24',
    soft: 'rgba(251,191,36,0.10)',
    depth: 'EXPLORING',
    focus: 'Web Vulnerabilities · Testing · Labs',
  },
];

const DESKTOP_POSITIONS = [
  'left-[4%] top-[7%]',
  'right-[4%] top-[7%]',
  'left-[3%] top-[43%]',
  'right-[3%] top-[43%]',
  'left-[22%] bottom-[7%]',
  'right-[22%] bottom-[7%]',
];

const MOBILE_LABELS = [
  'ATTACK',
  'DETECT',
  'PROTECT',
  'CONNECT',
  'HARDEN',
  'TEST',
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
          BACKGROUND
          ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)]/[0.025] blur-[150px]" />

        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(var(--text)_1px,transparent_1px),linear-gradient(90deg,var(--text)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* =====================================================
            HEADING
            ===================================================== */}
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="Where security meets practice"
            description="The areas I'm exploring through projects, labs, experimentation, and hands-on security work."
          />
        </Reveal>

        {/* =====================================================
            DESKTOP NETWORK
            ===================================================== */}
        <Reveal delay={100}>
          <div className="relative mt-16 hidden h-[740px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--panel)] md:block">

            {/* Background grid */}
            <div
              className="
                pointer-events-none absolute inset-0 opacity-[0.022]
                [background-image:linear-gradient(var(--text)_1px,transparent_1px),linear-gradient(90deg,var(--text)_1px,transparent_1px)]
                [background-size:48px_48px]
              "
            />

            {/* Ambient center glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-[310px] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-all duration-700"
              style={{
                backgroundColor: activeConfig?.color ?? '#22d3ee',
                opacity: activeIndex !== null ? 0.055 : 0.025,
              }}
            />

            {/* =================================================
                CONNECTIONS
                ================================================= */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 740"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="expertise-pulse-glow">
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {[
                [500, 310, 150, 145],
                [500, 310, 850, 145],
                [500, 310, 145, 485],
                [500, 310, 855, 485],
                [500, 310, 370, 685],
                [500, 310, 630, 685],
              ].map(([x1, y1, x2, y2], i) => {
                const active = activeIndex === i;
                const color = CONFIG[i].color;

                return (
                  <g key={i}>
                    {/* Base connection */}
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={active ? color : '#353943'}
                      strokeWidth={active ? 1.7 : 1}
                      strokeOpacity={active ? 0.8 : 0.58}
                      className="transition-all duration-500"
                    />

                    {/* Animated travelling pulse */}
                    <circle
                      r={active ? 3.2 : 2}
                      fill={active ? color : '#22d3ee'}
                      opacity={active ? 0.95 : 0.28}
                      filter="url(#expertise-pulse-glow)"
                    >
                      <animateMotion
                        dur={active ? '1.35s' : '3.8s'}
                        repeatCount="indefinite"
                        path={`M ${x1} ${y1} L ${x2} ${y2}`}
                      />
                    </circle>

                    {/* Small reverse pulse */}
                    {active && (
                      <circle
                        r="2"
                        fill={color}
                        opacity="0.45"
                        filter="url(#expertise-pulse-glow)"
                      >
                        <animateMotion
                          dur="2s"
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
                cy="310"
                r="118"
                fill="none"
                stroke={activeConfig?.color ?? '#22d3ee'}
                strokeOpacity={activeIndex !== null ? 0.16 : 0.08}
                strokeDasharray="3 9"
                className="animate-spin-slow"
                style={{
                  transformOrigin: '500px 310px',
                }}
              />

              {/* Outer orbit */}
              <circle
                cx="500"
                cy="310"
                r="165"
                fill="none"
                stroke="#22d3ee"
                strokeOpacity="0.035"
                strokeDasharray="2 13"
              />
            </svg>

            {/* =================================================
                CENTER NODE
                ================================================= */}
            <div className="absolute left-1/2 top-[310px] -translate-x-1/2 -translate-y-1/2">

              {/* Breathing glow */}
              <div
                className="absolute inset-[-65px] animate-pulse rounded-full blur-[55px] transition-all duration-700"
                style={{
                  backgroundColor:
                    activeConfig?.color ?? '#22d3ee',
                  opacity:
                    activeIndex !== null ? 0.14 : 0.065,
                }}
              />

              {/* Outer rotating ring */}
              <div
                className="absolute inset-[-18px] animate-spin-slow rounded-full border border-dashed"
                style={{
                  borderColor: activeConfig
                    ? `${activeConfig.color}28`
                    : 'rgba(34,211,238,0.12)',
                }}
              />

              {/* Main center */}
              <div
                className="relative flex h-52 w-52 items-center justify-center rounded-full border bg-[var(--bg)] transition-all duration-700"
                style={{
                  borderColor: activeConfig
                    ? `${activeConfig.color}45`
                    : 'rgba(34,211,238,0.22)',
                  boxShadow: activeConfig
                    ? `0 0 90px ${activeConfig.color}12`
                    : '0 0 80px rgba(34,211,238,0.08)',
                }}
              >

                {/* Inner ring */}
                <div
                  className="absolute inset-5 rounded-full border transition-all duration-500"
                  style={{
                    borderColor: activeConfig
                      ? `${activeConfig.color}30`
                      : 'rgba(42,45,54,1)',
                  }}
                />

                <div className="relative text-center">

                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500"
                    style={{
                      color:
                        activeConfig?.color ?? '#22d3ee',
                      backgroundColor:
                        activeConfig?.soft ??
                        'rgba(34,211,238,0.06)',
                      borderColor: activeConfig
                        ? `${activeConfig.color}40`
                        : 'rgba(34,211,238,0.20)',
                    }}
                  >
                    <ActiveIcon
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p
                    className="mt-4 font-mono-brand text-[9px] uppercase tracking-[0.25em] transition-colors duration-500"
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

                  <p className="mt-2 font-mono-brand text-[8px] uppercase tracking-[0.12em] text-[var(--text-faint)]">
                    {activeIndex !== null
                      ? activeConfig?.focus
                      : '06 areas of focus'}
                  </p>

                </div>
              </div>
            </div>

            {/* =================================================
                DESKTOP EXPERTISE NODES
                ================================================= */}
            <div className="absolute inset-0">

              {EXPERTISE_AREAS.map((area, i) => {
                const config = CONFIG[i] ?? CONFIG[0];
                const Icon = config.icon;
                const isActive = activeIndex === i;

                return (
                  <div
                    key={area.title}
                    className={`group absolute ${DESKTOP_POSITIONS[i]} w-[235px]`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div
                      className="
                        relative overflow-hidden rounded-2xl
                        border border-[var(--border)]
                        bg-[var(--bg)]/90
                        p-4 backdrop-blur-sm
                        transition-all duration-500
                        hover:-translate-y-1
                      "
                      style={{
                        borderColor: isActive
                          ? `${config.color}50`
                          : undefined,

                        boxShadow: isActive
                          ? `0 18px 55px rgba(0,0,0,0.28), 0 0 35px ${config.color}0d`
                          : undefined,
                      }}
                    >

                      {/* Hover glow */}
                      <div
                        className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full blur-3xl transition-opacity duration-500"
                        style={{
                          backgroundColor: config.color,
                          opacity: isActive ? 0.20 : 0,
                        }}
                      />

                      {/* Top color line */}
                      <div
                        className="absolute left-0 right-0 top-0 h-px origin-left transition-transform duration-500"
                        style={{
                          backgroundColor: config.color,
                          transform: isActive
                            ? 'scaleX(1)'
                            : 'scaleX(0.25)',
                          opacity: isActive ? 1 : 0.45,
                        }}
                      />

                      <div className="relative flex gap-3">

                        {/* Icon */}
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
                          style={{
                            color: config.color,
                            backgroundColor: config.soft,
                            borderColor: `${config.color}30`,
                            transform: isActive
                              ? 'translateY(-2px) scale(1.06)'
                              : 'none',
                          }}
                        >
                          <Icon
                            size={17}
                            strokeWidth={1.6}
                          />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-2">

                            <h3 className="text-sm font-medium leading-5 text-[var(--text)]">
                              {area.title}
                            </h3>

                            <span
                              className="font-mono-brand text-[9px]"
                              style={{
                                color: config.color,
                              }}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </span>

                          </div>

                          <p className="mt-2 text-[11px] leading-5 text-[var(--text-muted)]">
                            {area.description}
                          </p>

                        </div>
                      </div>

                      {/* Depth + focus */}
                      <div className="mt-4 flex items-center justify-between">

                        <span
                          className="font-mono-brand text-[8px] uppercase tracking-[0.16em]"
                          style={{
                            color: config.color,
                          }}
                        >
                          {config.depth}
                        </span>

                        <span className="font-mono-brand text-[8px] text-[var(--text-faint)]">
                          {isActive ? 'FOCUSED' : MOBILE_LABELS[i]}
                        </span>

                      </div>

                      {/* Bottom progress */}
                      <div className="mt-3 h-px overflow-hidden bg-[var(--border)]">
                        <div
                          className="h-full transition-all duration-700"
                          style={{
                            width: isActive ? '100%' : '30%',
                            backgroundColor: config.color,
                          }}
                        />
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)]/70 px-6 py-4 backdrop-blur-sm">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-40" />
                    <span className="relative h-2 w-2 rounded-full bg-[var(--status)]" />
                  </span>

                  <span className="font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Continuously developing
                  </span>

                </div>

                <span className="font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
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

            {/* Center */}
            <div className="relative flex flex-col items-center">

              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[var(--accent-cyan)]/25 bg-[var(--panel)] shadow-[0_0_65px_rgba(34,211,238,0.07)]">

                <div className="absolute inset-[-9px] animate-spin-slow rounded-full border border-dashed border-[var(--accent-cyan)]/10" />

                <div className="text-center">
                  <ShieldCheck
                    size={25}
                    strokeWidth={1.5}
                    className="mx-auto text-[var(--accent-cyan)]"
                  />

                  <p className="mt-3 text-sm font-medium text-[var(--text)]">
                    Cybersecurity
                  </p>

                  <p className="mt-1 font-mono-brand text-[8px] uppercase tracking-[0.15em] text-[var(--text-faint)]">
                    Core focus
                  </p>
                </div>
              </div>

              {/* Vertical signal */}
              <div className="relative mt-8 w-full">

                <div className="absolute bottom-10 left-1/2 top-0 w-px -translate-x-1/2 bg-[var(--border)]" />

                <div className="absolute bottom-10 left-1/2 top-0 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-[var(--accent-cyan)]/60 via-[var(--accent-cyan)]/20 to-transparent" />

                <div className="relative space-y-4">

                  {EXPERTISE_AREAS.map((area, i) => {
                    const config = CONFIG[i] ?? CONFIG[0];
                    const Icon = config.icon;
                    const isActive = activeIndex === i;

                    return (
                      <div key={area.title}>

                        <button
                          type="button"
                          onClick={() =>
                            setActiveIndex(
                              isActive ? null : i
                            )
                          }
                          className="relative flex w-full items-center gap-4 text-left"
                        >

                          {/* Node */}
                          <div
                            className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-[var(--panel)] transition-all duration-300"
                            style={{
                              color: config.color,
                              borderColor: isActive
                                ? `${config.color}60`
                                : `${config.color}25`,
                              backgroundColor: isActive
                                ? config.soft
                                : 'var(--panel)',
                              transform: isActive
                                ? 'scale(1.08)'
                                : 'none',
                            }}
                          >
                            <Icon
                              size={17}
                              strokeWidth={1.6}
                            />
                          </div>

                          {/* Content */}
                          <div
                            className="flex-1 rounded-xl border bg-[var(--panel)] p-4 transition-all duration-300"
                            style={{
                              borderColor: isActive
                                ? `${config.color}40`
                                : 'var(--border)',
                            }}
                          >

                            <div className="flex items-center justify-between gap-3">

                              <div>
                                <p
                                  className="font-mono-brand text-[8px] uppercase tracking-[0.18em]"
                                  style={{
                                    color: config.color,
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
                                  color: config.color,
                                }}
                              />

                            </div>

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
                                    color: config.color,
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