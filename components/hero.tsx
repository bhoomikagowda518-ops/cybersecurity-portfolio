'use client';

import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SITE, LINKS } from '@/lib/data';

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[19px] w-[19px]"
      aria-hidden="true"
    >
      <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.34-3.85-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.15-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.36-5.23 5.64.41.36.78 1.07.78 2.16v3.2c0 .3.21.65.79.54A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[19px] w-[19px]"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46C23.21 24 24 23.22 24 22.26V1.74C24 .78 23.21 0 22.23 0Z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4 border-l border-[var(--border)] pl-5">
      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--text)]"
      >
        <GithubIcon />
      </a>

      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--text)]"
      >
        <LinkedinIcon />
      </a>

      <a
        href={`mailto:${LINKS.email}`}
        aria-label="Email"
        className="text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--text)]"
      >
        <Mail size={19} strokeWidth={1.75} />
      </a>
    </div>
  );
}

function HeroPhoto({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`relative flex justify-center ${
        mobile ? '' : 'lg:justify-end'
      }`}
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-photo-glow rounded-full bg-[var(--accent-cyan)]/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Rotating ring */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-[var(--accent-cyan)]/20 ${
          mobile
            ? 'h-[300px] w-[300px] sm:h-[390px] sm:w-[390px]'
            : 'h-[330px] w-[330px] sm:h-[410px] sm:w-[410px]'
        }`}
      />

      {/* Photo */}
      <div className="relative animate-photo-float">
        <div className="absolute -inset-3 rounded-full border border-[var(--border-strong)] opacity-70" />

        <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-[var(--border-strong)] bg-[var(--panel)] shadow-2xl shadow-black/20 sm:h-80 sm:w-80">
          <Image
            src="/profile.jpg"
            alt="Bhoomika B C"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 288px, 320px"
          />

          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <>
      {/* Status */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--panel)]/80 px-3.5 py-1.5 backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--status)]" />
        </span>

        <span className="font-mono-brand text-xs tracking-wide text-[var(--text-muted)]">
          Open to internships & collaboration
        </span>
      </div>

      {/* Name */}
      <h1 className="text-[clamp(3rem,12vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[var(--text)] sm:text-[clamp(3.5rem,10vw,5.5rem)] lg:whitespace-nowrap lg:text-[clamp(2.1rem,7vw,6.4rem)] lg:leading-[0.95]">
        {SITE.name}
      </h1>

      {/* Role */}
      <div className="mt-7 flex items-center gap-3">
        <span className="h-px w-10 bg-[var(--accent-cyan)]" />

        <span className="font-mono-brand text-xs uppercase tracking-[0.18em] text-[var(--accent-cyan)]">
          Cybersecurity Student
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
        I&apos;m a Computer Science Engineering student focused on
        cybersecurity, security monitoring, and practical security engineering.
      </p>

      {/* Education */}
      <p className="mt-4 max-w-2xl font-mono-brand text-xs leading-relaxed text-[var(--text-faint)] sm:text-sm">
        B.E. Computer Science & Engineering (Cybersecurity)
        <span className="mx-2 text-[var(--border-strong)]">·</span>
        Sri Siddhartha Institute of Technology
        <span className="mx-2 text-[var(--border-strong)]">·</span>
        2029
      </p>

      {/* Buttons + Socials */}
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-cyan)]"
        >
          View projects

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center rounded-md border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
        >
          Get in touch
        </a>

        <div className="ml-2">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0 opacity-40" />

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent-cyan)]/5 blur-[120px]" />

        <div className="absolute right-[-120px] top-[20%] h-[350px] w-[350px] rounded-full bg-[var(--accent)]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">

        {/* MOBILE
            PHOTO → NAME → CONTENT
        */}
        <div className="flex flex-col lg:hidden">

          {/* PHOTO FIRST */}
          <div
            className="order-1 mb-9 flex justify-center animate-fade-up sm:mb-12"
            style={{ animationDelay: '120ms' }}
          >
            <HeroPhoto mobile />
          </div>

          {/* CONTENT SECOND */}
          <div className="order-2 animate-fade-up">
            <HeroContent />
          </div>

        </div>

        {/* DESKTOP
            CONTENT LEFT → PHOTO RIGHT
        */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* CONTENT LEFT */}
          <div className="animate-fade-up">
            <HeroContent />
          </div>

          {/* PHOTO RIGHT */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: '180ms' }}
          >
            <HeroPhoto />
          </div>

        </div>

      </div>
    </section>
  );
}