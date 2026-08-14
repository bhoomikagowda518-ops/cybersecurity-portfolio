'use client';

import { useEffect, useState } from 'react';
import Reveal from '@/components/reveal';

const TYPING_TEXT = "Hi, I'm Bhoomika.";

export default function About() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = window.setInterval(() => {
      if (index < TYPING_TEXT.length) {
        setTypedText(TYPING_TEXT.slice(0, index + 1));
        index++;
      } else {
        window.clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 85);

    return () => window.clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => window.clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute left-[5%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)]/[0.025] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-120px] top-[20%] h-72 w-72 rounded-full bg-[var(--accent)]/[0.018] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">

        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* =================================================
                LEFT — INTRODUCTION
                ================================================= */}

            <div className="relative">

              {/* Section label */}
              <div className="flex items-center gap-3">
                <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
                  01 — Introduction
                </span>

                <span className="h-px w-10 bg-[var(--border-strong)]" />
              </div>

              {/* Typing heading */}
              <h2
                className="mt-5 min-h-[1.2em] text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl"
                aria-label={TYPING_TEXT}
              >
                {typedText}
                <span
                  className={`ml-1 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-[var(--accent-cyan)] transition-opacity duration-100 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </h2>

              {/* Subtitle appears after typing */}
              <div
                className={`transition-all duration-700 ${
                  typingComplete
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                }`}
              >
                <p className="mt-5 max-w-sm text-lg leading-relaxed text-[var(--text-muted)]">
                  Building my way into cybersecurity, one system at a time.
                </p>

                {/* Status */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-40" />
                    <span className="relative h-2 w-2 rounded-full bg-[var(--status)]" />
                  </span>

                  <span className="font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Currently learning & building
                  </span>
                </div>
              </div>

            </div>

            {/* =================================================
                RIGHT — STORY
                ================================================= */}

            <div className="relative max-w-2xl">

              {/* Vertical signal line */}
              <div className="absolute -left-5 top-1 h-full w-px bg-gradient-to-b from-[var(--accent-cyan)]/40 via-[var(--border)] to-transparent lg:-left-8" />

              <p className="text-lg leading-relaxed text-[var(--text)] sm:text-xl">
                I&apos;m a Computer Science Engineering student specializing
                in{' '}
                <span className="text-[var(--accent-cyan)]">
                  Cybersecurity
                </span>
                . I&apos;m curious about what happens beneath the surface of
                the systems we use every day — how networks communicate,
                how vulnerabilities emerge, and how they can be secured.
              </p>

              <p className="mt-6 leading-relaxed text-[var(--text-muted)]">
                Rather than learning security only from theory, I&apos;m
                focused on building and experimenting. Right now, I&apos;m
                developing an enterprise-style SIEM platform while
                strengthening my foundations in Linux, networking, web
                security, detection engineering, and offensive security.
              </p>

              <p className="mt-6 leading-relaxed text-[var(--text-muted)]">
                I&apos;m still early in the journey, but I&apos;m taking it
                seriously — learning the fundamentals, building real
                projects, breaking things in controlled environments, and
                documenting what I learn along the way.
              </p>

              {/* =================================================
                  STATS
                  ================================================= */}

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">

                {/* CGPA */}
                <div className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--panel-hover)]">
                  <p className="font-mono-brand text-2xl font-semibold text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-cyan)]">
                    9.69
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-faint)]">
                    Current CGPA
                  </p>
                </div>

                {/* Graduation */}
                <div className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--panel-hover)]">
                  <p className="font-mono-brand text-2xl font-semibold text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-cyan)]">
                    2029
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-faint)]">
                    Graduation
                  </p>
                </div>

                {/* Specialization */}
                <div className="col-span-2 group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--panel-hover)] sm:col-span-1">
                  <p className="font-mono-brand text-2xl font-semibold text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent-cyan)]">
                    CSE
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-faint)]">
                    Cybersecurity
                  </p>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}