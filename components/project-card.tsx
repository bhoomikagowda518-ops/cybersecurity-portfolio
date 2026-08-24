import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  ExternalLink,
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
    <div className="relative h-[250px] overflow-hidden bg-[#071017]">
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
            DEVELOPING
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 py-5">
          {[
            ['EVENTS', '12.8K'],
            ['ALERTS', '07'],
            ['RULES', '24'],
          ].map(([label, value], index) => (
            <div
              key={label}
              className="rounded-md border border-white/7 bg-white/[0.025] p-3"
            >
              <p className="font-mono-brand text-[8px] tracking-wider text-white/30">
                {label}
              </p>

              <p
                className={`mt-1 font-mono-brand text-lg ${
                  index === 1
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
    <div className="relative h-[250px] overflow-hidden bg-[#071017]">

      {/* Project screenshot */}
      <img
        src="/encryption-tool.png"
        alt="Text Encryption Tool project interface"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071017] via-[#071017]/10 to-transparent" />

      {/* Subtle atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--accent-cyan)]/[0.025] mix-blend-screen" />

      {/* Label */}
      <div className="absolute left-5 top-5 rounded border border-white/10 bg-black/45 px-2.5 py-1.5 backdrop-blur-md">
        <span className="font-mono-brand text-[8px] tracking-[0.18em] text-white/65">
          CRYPTOGRAPHY TOOL
        </span>
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const isSiem = project.id === 'siem';

  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl
        border border-[var(--border)]
        bg-[var(--panel)]
        shadow-lg shadow-black/5
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-[var(--border-strong)]
        hover:shadow-2xl hover:shadow-black/20
      "
    >

      {/* =====================================================
          PROJECT VISUAL
          ===================================================== */}

      <div className="relative overflow-hidden">
        {isSiem ? <SiemVisual /> : <EncryptionVisual />}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--panel)] to-transparent" />
      </div>

      {/* =====================================================
          PROJECT CONTENT
          ===================================================== */}

      <div className="flex flex-1 flex-col p-6 sm:p-7">

        {/* Status */}

        <span
          className={`font-mono-brand text-[9px] uppercase tracking-[0.18em] ${
            project.status === 'Completed'
              ? 'text-[var(--status)]'
              : 'text-[var(--accent-cyan)]'
          }`}
        >
          {project.status}
        </span>

        {/* Title */}

        <h3 className="mt-3 text-[1.6rem] font-semibold tracking-[-0.035em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-cyan)]">
          {project.name}
        </h3>

        {/* Short description */}

        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-muted)]">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="
                rounded-md
                border border-[var(--border-strong)]
                bg-[var(--bg-soft)]
                px-2.5 py-1.5
                font-mono-brand text-[9px]
                text-[var(--text-muted)]
                transition-colors duration-300
                group-hover:text-[var(--text)]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}

        <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--border)] pt-5">

          {/* GitHub */}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/github
              inline-flex items-center gap-3
              rounded-lg
              border border-[var(--border-strong)]
              bg-[var(--bg-soft)]
              px-4 py-2.5
              text-xs font-medium
              text-[var(--text)]
              transition-all duration-300
              hover:border-[var(--accent-cyan)]/40
              hover:bg-[var(--accent-cyan)]/5
              hover:text-[var(--accent-cyan)]
            "
          >
            <GithubIcon />

            <span>View on GitHub</span>

            <ArrowUpRight
              size={14}
              className="
                transition-transform duration-300
                group-hover/github:translate-x-0.5
                group-hover/github:-translate-y-0.5
              "
            />
          </a>

          {/* Live Demo — Encryption Tool only */}

          {!isSiem && (
            <a
              href="https://text-encryption-tool-rypytn7rwz5wga9vrnwpuh.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                rounded-lg
                border border-[var(--accent-cyan)]/30
                bg-[var(--accent-cyan)]/5
                px-4 py-2.5
                text-xs font-medium
                text-[var(--accent-cyan)]
                transition-all duration-300
                hover:border-[var(--accent-cyan)]/50
                hover:bg-[var(--accent-cyan)]/10
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
              "
            >
              <ExternalLink size={15} strokeWidth={1.7} />

              <span>Live Demo</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}

        </div>
      </div>
    </article>
  );
}