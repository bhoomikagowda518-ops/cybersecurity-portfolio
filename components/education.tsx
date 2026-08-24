'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const EDUCATION = [
  {
    icon: GraduationCap,
    logo: '/ssit-logo.png',
    type: 'UNDERGRADUATE',
    institution: 'Sri Siddhartha Institute of Technology',
    program: 'B.E. Computer Science & Engineering (Cybersecurity)',
    details: '2025 — 2029 · Tumkur, Karnataka',
    result: '1st Year CGPA: 9.69 / 10.00',
  },
  {
    icon: BookOpen,
    logo: '/sspucw-logo.png',
    type: 'PRE-UNIVERSITY',
    institution: 'Sree Siddaganga PU College for Women',
    program: '2nd PUC',
    details: 'Tumkur, Karnataka',
    result: '94.33%',
  },
  {
    icon: School,
    logo: '/kvs-logo.png',
    type: 'SECONDARY EDUCATION',
    institution: 'Kendriya Vidyalaya, Tumkur',
    program: 'Class X · CBSE',
    details: 'Tumkur, Karnataka',
    result: 'CGPA: 9.00 / 10.00',
  },
];

function EducationCard({
  education,
  index,
}: {
  education: (typeof EDUCATION)[number];
  index: number;
}) {
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
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const Icon = education.icon;

  return (
    <article
      ref={ref}
      className={`education-card ${
        visible ? 'education-card-visible' : ''
      }`}
      style={
        {
          '--education-delay': `${index * 140}ms`,
        } as React.CSSProperties
      }
    >
      {/* Hover glow */}
      <div className="education-card-glow" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">

        {/* Institution Logo */}
        <div className="education-logo">
          <Image
            src={education.logo}
            alt={`${education.institution} logo`}
            fill
            sizes="88px"
            className="object-contain p-2"
            priority={index === 0}
          />
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1">

          {/* Category */}
          <div className="flex items-center gap-2">

            <Icon
              size={14}
              strokeWidth={1.6}
              className="text-[var(--accent-cyan)]"
            />

            <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
              {education.type}
            </span>

          </div>

          {/* Institution */}
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text)] sm:text-2xl">
            {education.institution}
          </h3>

          {/* Degree / qualification */}
          <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">
            {education.program}
          </p>

          {/* Location + year */}
          <p className="mt-2 font-mono-brand text-xs text-[var(--text-faint)]">
            {education.details}
          </p>

          {/* Result */}
          <div className="mt-5">
            <span className="education-result">
              {education.result}
            </span>
          </div>

        </div>

        {/* Current */}
        {index === 0 && (
          <div className="shrink-0 sm:pt-1">
            <span className="education-current">
              <span className="education-current-dot" />
              Current
            </span>
          </div>
        )}

      </div>
    </article>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >

      {/* Background glow */}
      <div className="education-background-glow" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Heading */}
        <div className="education-heading mb-14">

          <div className="flex items-center gap-3">

            <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
              05 — Education
            </span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            Academic background
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--text-muted)]">
            The academic foundation behind my journey into computer science
            and cybersecurity.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Animated timeline */}
          <div className="education-timeline">
            <div className="education-timeline-progress" />
          </div>

          {/* Cards */}
          <div className="space-y-5">

            {EDUCATION.map((education, index) => (
              <EducationCard
                key={education.institution}
                education={education}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}