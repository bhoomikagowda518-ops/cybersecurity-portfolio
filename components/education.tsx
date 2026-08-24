'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-[10%] top-[25%] h-72 w-72 rounded-full bg-[var(--accent-cyan)]/[0.02] blur-[130px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-6 py-24 transition-all duration-700 sm:py-32 ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-6 opacity-0'
        }`}
      >
        {/* Heading */}
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
              05 — Education
            </span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-5xl">
            Academic background
          </h2>
        </div>

        {/* Education */}
        <div className="mt-12 max-w-5xl">
          <div className="grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] lg:grid-cols-[1.05fr_0.95fr]">

            {/* College Image */}
            <div className="group relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
              <Image
                src="/ssit-campus.jpg"
                alt="Sri Siddhartha Institute of Technology, Tumkur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <h3 className="max-w-lg text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  Sri Siddhartha Institute of Technology
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  Tumkur, Karnataka
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">

              <p className="font-mono-brand text-[9px] uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                My Details
              </p>

              <div className="mt-8 space-y-6">

                {/* Degree */}
                <div>
                  <p className="text-xs text-[var(--text-faint)]">
                    Degree
                  </p>

                  <p className="mt-1.5 text-sm font-medium leading-6 text-[var(--text)]">
                    B.E. Computer Science & Engineering
                  </p>
                </div>

                {/* Specialization */}
                <div>
                  <p className="text-xs text-[var(--text-faint)]">
                    Specialization
                  </p>

                  <p className="mt-1.5 text-sm font-medium text-[var(--text)]">
                    Cybersecurity
                  </p>
                </div>

                {/* CGPA */}
                <div>
                  <p className="text-xs text-[var(--text-faint)]">
                    1st Year CGPA
                  </p>

                  <p className="mt-1.5 text-2xl font-semibold tracking-tight text-[var(--accent-cyan)]">
                    9.69
                    <span className="ml-1 text-sm font-normal text-[var(--text-faint)]">
                      / 10.00
                    </span>
                  </p>
                </div>

                {/* Duration */}
                <div className="border-t border-[var(--border)] pt-6">
                  <p className="text-xs text-[var(--text-faint)]">
                    Duration
                  </p>

                  <p className="mt-1.5 font-mono-brand text-sm text-[var(--text)]">
                    2025 — 2029
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}