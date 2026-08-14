import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  FileLock2,
  KeyRound,
  LockKeyhole,
  Radar,
  ShieldCheck,
} from 'lucide-react';
import type { Project } from '@/lib/data';

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[16px] w-[16px]"
      aria-hidden="true"
    >
      <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.34-3.85-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.15-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.36-5.23 5.64.41.36.78 1.07.78 2.16v3.2c0 .3.21.65.79.54A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function SiemVisual() {
  return (
    <div className="relative h-[270px] overflow-hidden bg-[#071017]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)]/10 blur-[80px]" />

      <div className="relative flex h-full flex-col p-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/7 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--status)]" />
            </span>

            <span className="font-mono-brand text-[9px] tracking-[0.2em] text-white/65">
              SECURITY OPERATIONS
            </span>
          </div>

          <span className="rounded border border-[var(--accent-cyan)]/15 bg-[var(--accent-cyan)]/5 px-2 py-1 font-mono-brand text-[8px] text-[var(--accent-cyan)]">
            LIVE
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 py-5">
          {[
            ['EVENTS', '12.8K'],
            ['ALERTS', '07'],
            ['RULES', '24'],
          ].map(([label, value], i) => (
            <div
              key={label}
              className="rounded-md border border-white/7 bg-white/[0.025] p-3"
            >
              <p className="font-mono-brand text-[8px] tracking-wider text-white/30">
                {label}
              </p>

              <p
                className={`mt-1 font-mono-brand text-lg ${
                  i === 1
                    ? 'text-[var(--accent-cyan)]'
                    : 'text-white/80'
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Graph */}
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-md border border-white/7 bg-white/[0.015]">
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />

          <svg
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0 76 L25 73 L50 78 L75 64 L100 69 L125 50 L150 60 L175 32 L200 51 L225 38 L250 47 L275 28 L300 43 L325 34 L350 50 L375 26 L400 39 L425 18 L450 31 L475 14 L500 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[var(--accent-cyan)]"
            />

            <path
              d="M0 76 L25 73 L50 78 L75 64 L100 69 L125 50 L150 60 L175 32 L200 51 L225 38 L250 47 L275 28 L300 43 L325 34 L350 50 L375 26 L400 39 L425 18 L450 31 L475 14 L500 22 V100 H0 Z"
              className="fill-[var(--accent-cyan)]/[0.025]"
            />
          </svg>
        </div>

        {/* Events */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded border border-white/6 bg-white/[0.02] px-3 py-2">
            <Database size={10} className="text-white/35" />
            <span className="font-mono-brand text-[8px] text-white/45">
              SYSLOG
            </span>
            <span className="ml-auto font-mono-brand text-[8px] text-[var(--status)]">
              OK
            </span>
          </div>

          <div className="flex items-center gap-2 rounded border border-[var(--accent-cyan)]/10 bg-[var(--accent-cyan)]/[0.025] px-3 py-2">
            <Radar size={10} className="text-[var(--accent-cyan)]" />
            <span className="font-mono-brand text-[8px] text-white/45">
              BRUTE FORCE
            </span>
            <span className="ml-auto font-mono-brand text-[8px] text-[var(--accent-cyan)]">
              ALERT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EncryptionVisual() {
  return (
    <div className="relative h-[270px] overflow-hidden bg-[#071017]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="absolute right-8 top-8 h-44 w-44 rounded-full bg-[var(--accent-cyan)]/8 blur-[80px]" />

      <div className="relative flex h-full flex-col p-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/7 pb-4">
          <div className="flex items-center gap-2">
            <LockKeyhole
              size={13}
              className="text-[var(--accent-cyan)]"
            />

            <span className="font-mono-brand text-[9px] tracking-[0.2em] text-white/65">
              CRYPTOGRAPHY TOOL
            </span>
          </div>

          <span className="font-mono-brand text-[8px] text-[var(--status)]">
            PROTECTED
          </span>
        </div>

        {/* Encryption flow */}
        <div className="flex flex-1 items-center justify-center gap-3">
          <div className="flex h-24 w-28 flex-col items-center justify-center rounded-lg border border-white/8 bg-white/[0.025]">
            <FileLock2
              size={22}
              strokeWidth={1.5}
              className="text-white/55"
            />

            <span className="mt-3 font-mono-brand text-[8px] tracking-wider text-white/35">
              PLAINTEXT
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <ArrowRight
              size={17}
              className="text-[var(--accent-cyan)]"
            />

            <span className="font-mono-brand text-[7px] text-white/25">
              AES-GCM
            </span>
          </div>

          <div className="flex h-24 w-28 flex-col items-center justify-center rounded-lg border border-[var(--accent-cyan)]/20 bg-[var(--accent-cyan)]/[0.035]">
            <LockKeyhole
              size={22}
              strokeWidth={1.5}
              className="text-[var(--accent-cyan)]"
            />

            <span className="mt-3 font-mono-brand text-[8px] tracking-wider text-[var(--accent-cyan)]">
              CIPHERTEXT
            </span>
          </div>
        </div>

        {/* Algorithm cards */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: KeyRound, label: 'AES-GCM' },
            { icon: ShieldCheck, label: 'FERNET' },
            { icon: LockKeyhole, label: 'SHA-256' },
            { icon: Check, label: 'BCRYPT' },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 rounded border border-white/7 bg-white/[0.02] py-2"
              >
                <Icon
                  size={11}
                  strokeWidth={1.7}
                  className="text-[var(--accent-cyan)]"
                />

                <span className="font-mono-brand text-[7px] text-white/40">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const isSiem = project.id === 'siem';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--border-strong)] hover:shadow-2xl hover:shadow-black/20">

      {/* Visual */}
      <div className="relative overflow-hidden">
        {isSiem ? <SiemVisual /> : <EncryptionVisual />}

        {/* Fade into card */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--panel)] to-transparent" />

        {/* Number */}
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 backdrop-blur-md">
          <span className="font-mono-brand text-[9px] text-white/45">
            {isSiem ? '01' : '02'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">

        {/* Status */}
        <div className="flex items-center justify-between">
          <span
            className={`font-mono-brand text-[9px] uppercase tracking-[0.18em] ${
              project.status === 'Completed'
                ? 'text-[var(--status)]'
                : 'text-[var(--accent-cyan)]'
            }`}
          >
            {project.status}
          </span>

          <span className="font-mono-brand text-[9px] text-[var(--text-faint)]">
            {isSiem ? 'SEC-001' : 'CRYPTO-001'}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-[1.65rem] font-semibold tracking-[-0.035em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-cyan)]">
          {project.name}
        </h3>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
          {project.description}
        </p>

        {/* Points */}
        <ul className="mt-6 space-y-3">
          {project.points.slice(0, 3).map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-muted)]"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
              {point}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border-strong)] bg-[var(--bg-soft)] px-2.5 py-1.5 font-mono-brand text-[9px] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--border-strong)] group-hover:text-[var(--text)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="mt-auto pt-7">
          <div className="border-t border-[var(--border)] pt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/github inline-flex items-center gap-3 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-soft)] px-4 py-2.5 text-xs font-medium text-[var(--text)] transition-all duration-300 hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--accent-cyan)]/5 hover:text-[var(--accent-cyan)]"
            >
              <GithubIcon />

              <span>View on GitHub</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}