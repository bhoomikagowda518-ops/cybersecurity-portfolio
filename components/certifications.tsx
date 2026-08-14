'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const CERTIFICATIONS = [
  {
    logo: '/ibm.png',
    issuer: 'IBM',
    title: 'Introduction to HTML, CSS, & JavaScript',
    platform: 'Coursera',
    year: '2025',
    credential:
      'https://www.coursera.org/account/accomplishments/records/HDF2Y27VZOFN',
  },
  {
    logo: '/google.png',
    issuer: 'Google',
    title: 'Introduction to AI',
    platform: 'Coursera',
    year: '2025',
    credential:
      'https://www.coursera.org/account/accomplishments/records/H76C137TGNMQ',
  },
  {
    logo: '/cisco.png',
    issuer: 'Cisco',
    title: 'Introduction to Cybersecurity',
    platform: 'Cisco Networking Academy',
    year: '2025',
    credential:
      'https://www.credly.com/badges/cdb2e957-2e2b-48d1-81c6-1b4d64530bb5/linked_in_profile',
  },
];

function CertificationCard({
  certification,
  index,
}: {
  certification: (typeof CERTIFICATIONS)[number];
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
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`certification-card ${
        visible ? 'certification-card-visible' : ''
      }`}
      style={
        {
          '--certification-delay': `${index * 120}ms`,
        } as React.CSSProperties
      }
    >
      {/* Top accent */}
      <div className="certification-card-line" />

      {/* Subtle glow */}
      <div className="certification-card-glow" />

      <div className="relative z-10 flex h-full flex-col">

        {/* Logo + year */}
        <div className="flex items-start justify-between">
          <div className="certification-logo">
            <Image
              src={certification.logo}
              alt={`${certification.issuer} logo`}
              fill
              sizes="64px"
              className="object-contain p-2"
            />
          </div>

          <span className="font-mono-brand text-[10px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
            {certification.year}
          </span>
        </div>

        {/* Issuer */}
        <p className="mt-7 font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
          {certification.issuer}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--text)]">
          {certification.title}
        </h3>

        {/* Platform */}
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
          {certification.platform}
        </p>

        {/* Bottom */}
        <div className="mt-auto pt-8">
          <a
            href={certification.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg-soft)] px-4 py-2.5 text-xs font-medium text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5 hover:text-[var(--accent-cyan)]"
          >
            View credential

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      {/* Background glow */}
      <div className="certification-background-glow" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Heading */}
        <div className="certification-heading mb-14">
          <span className="font-mono-brand text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            Certifications
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            Building foundation
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--text-muted)]">
            Industry-recognized courses and certifications that built my
            foundation in cybersecurity, artificial intelligence, and web
            technologies.
          </p>
        </div>

        {/* Certification cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((certification, index) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
              index={index}
            />
          ))}
        </div>

        {/* Small footer note */}
        <div className="mt-10 flex items-center gap-2 text-[var(--text-faint)]">
          <ExternalLink size={13} />

          <span className="font-mono-brand text-[10px] uppercase tracking-[0.14em]">
            Credentials verified through their respective platforms
          </span>
        </div>
      </div>
    </section>
  );
}