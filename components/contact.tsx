'use client';

import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import Reveal from '@/components/reveal';
import { LINKS, SITE } from '@/lib/data';

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0Z" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-w-0 overflow-x-hidden border-t border-[var(--border)] py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--accent-cyan)]/5 blur-[130px]" />

        <div className="absolute bottom-0 right-[-180px] h-[420px] w-[420px] rounded-full bg-[var(--accent)]/5 blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.16] hero-grid" />
      </div>

      <div className="mx-auto w-full max-w-6xl min-w-0 px-5 sm:px-6">

        {/* =====================================================
            HEADING
            ===================================================== */}

        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
              08 — Contact
            </span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />
          </div>

          <div className="mb-14 max-w-2xl">
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              Let&apos;s build something
              <span className="block text-[var(--accent-cyan)]">
                worth securing.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Have an internship opportunity, a project idea, or simply want
              to connect? Send me a message and I&apos;ll get back to you.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            CONTACT GRID
            ===================================================== */}

        <div className="grid min-w-0 items-stretch gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10">

          {/* ===================================================
              LEFT — CONTACT INFO
              =================================================== */}

          <Reveal className="h-full min-w-0">
            <div
              className="
                contact-panel
                group relative flex h-full min-h-[620px] min-w-0 w-full flex-col
                overflow-hidden rounded-2xl
                border border-[var(--border-strong)]
                bg-[var(--panel)]
                p-6
                shadow-[0_20px_70px_rgba(0,0,0,0.12)]
                transition-all duration-500
                hover:border-[color-mix(in_srgb,var(--accent-cyan)_28%,var(--border-strong))]
                hover:shadow-[0_24px_80px_rgba(0,0,0,0.18)]
                sm:p-8
              "
            >
              {/* Background glow */}

              <div
                className="
                  pointer-events-none absolute
                  -right-28 -top-28
                  h-64 w-64
                  rounded-full
                  bg-[var(--accent-cyan)]/5
                  blur-[80px]
                  transition-all duration-700
                  group-hover:scale-125
                  group-hover:bg-[var(--accent-cyan)]/8
                "
              />

              {/* Top accent */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/60 to-transparent" />

              {/* Corner detail */}

              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-[90px] border-b border-l border-[var(--border)] opacity-60" />

              <div className="relative flex h-full min-w-0 flex-col">

                {/* Header */}

                <div className="mb-8 min-w-0">
                  <div className="flex items-center justify-between gap-4">

                    <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                      Connect
                    </span>

                    <span className="font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
                      01 / 02
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-[var(--text)]">
                    Opportunities &amp;
                    <span className="block text-[var(--text-muted)]">
                      collaboration.
                    </span>
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                    I&apos;m currently open to internships, cybersecurity
                    projects, and meaningful opportunities to learn and
                    contribute.
                  </p>
                </div>

                {/* Availability status */}

                <div className="mb-7 min-w-0 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-4">

                  <div className="flex min-w-0 items-center justify-between gap-4">

                    <div className="flex min-w-0 items-center gap-3">

                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-40" />

                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--status)] shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
                      </span>

                      <span className="truncate font-mono-brand text-[11px] text-[var(--text-muted)]">
                        Available for opportunities
                      </span>

                    </div>

                    <span className="hidden shrink-0 font-mono-brand text-[9px] uppercase tracking-wider text-[var(--status)] sm:block">
                      online
                    </span>

                  </div>

                </div>

                {/* Contact links */}

                <div className="min-w-0 space-y-3">

                  {/* Email */}

                  <a
                    href={`mailto:${LINKS.email}`}
                    className="
                      contact-link group/link
                      flex w-full min-w-0 items-center gap-3
                      rounded-xl
                      border border-[var(--border)]
                      bg-[var(--bg-soft)]
                      p-3.5
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-[var(--accent-cyan)]/30
                      hover:bg-[var(--panel-hover)]
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]
                    "
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--panel)] text-[var(--text-muted)] transition-all duration-300 group-hover/link:border-[var(--accent-cyan)]/40 group-hover/link:text-[var(--accent-cyan)]">
                      <Mail size={17} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
                        Email
                      </span>

                      <span className="mt-1 block truncate text-sm font-medium text-[var(--text)]">
                        {LINKS.email}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[var(--text-faint)] transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-[var(--accent-cyan)]"
                    />
                  </a>

                  {/* LinkedIn */}

                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      contact-link group/link
                      flex w-full min-w-0 items-center gap-3
                      rounded-xl
                      border border-[var(--border)]
                      bg-[var(--bg-soft)]
                      p-3.5
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-[var(--accent-cyan)]/30
                      hover:bg-[var(--panel-hover)]
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]
                    "
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--panel)] text-[var(--text-muted)] transition-all duration-300 group-hover/link:border-[var(--accent-cyan)]/40 group-hover/link:text-[var(--accent-cyan)]">
                      <LinkedinIcon />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
                        LinkedIn
                      </span>

                      <span className="mt-1 block text-sm font-medium text-[var(--text)]">
                        Connect with me
                      </span>
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[var(--text-faint)] transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-[var(--accent-cyan)]"
                    />
                  </a>

                </div>

                {/* Location */}

                <div className="mt-5 flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-1">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--bg-soft)] text-[var(--text-muted)]">
                    <MapPin size={17} strokeWidth={1.7} />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
                      Location
                    </span>

                    <span className="mt-1 block truncate text-sm font-medium text-[var(--text)]">
                      {SITE.location}
                    </span>
                  </span>

                </div>

                {/* Flexible spacer */}

                <div className="flex-1" />

                {/* Status terminal */}

                <div className="mt-10 min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[#090a0d]">

                  <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">

                    <div className="flex min-w-0 items-center gap-2">

                      <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--status)] shadow-[0_0_8px_rgba(52,211,153,0.35)]" />

                      <span className="truncate font-mono-brand text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
                        connection.status
                      </span>

                    </div>

                    <span className="shrink-0 font-mono-brand text-[9px] text-[var(--text-faint)]">
                      v1.0
                    </span>

                  </div>

                  <div className="space-y-2 px-4 py-4 font-mono-brand text-[10px]">

                    <p className="truncate text-[var(--text-faint)]">
                      <span className="text-[var(--accent-cyan)]">$</span>{' '}
                      ping bhoomika
                    </p>

                    <p className="truncate text-[var(--text-muted)]">
                      response:{' '}
                      <span className="text-[var(--status)]">
                        online
                      </span>
                    </p>

                    <p className="truncate text-[var(--text-muted)]">
                      status:{' '}
                      <span className="text-[var(--accent-cyan)]">
                        available
                      </span>
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </Reveal>

          {/* ===================================================
              RIGHT — MESSAGE FORM
              =================================================== */}

          <Reveal
            delay={120}
            className="h-full min-w-0"
          >
            <div
              className="
                contact-panel
                relative flex h-full min-h-[620px] min-w-0 w-full
                flex-col
                overflow-hidden rounded-2xl
                border border-[var(--border-strong)]
                bg-[var(--panel)]
                p-6
                shadow-[0_20px_70px_rgba(0,0,0,0.12)]
                backdrop-blur-sm
                sm:p-9
              "
            >

              {/* Glow */}

              <div
                className="
                  pointer-events-none absolute
                  -right-24 -top-24
                  h-64 w-64
                  rounded-full
                  bg-[var(--accent-cyan)]/5
                  blur-[80px]
                "
              />

              {/* Top accent */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/70 to-transparent" />

              {/* Inner edge */}

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.025]" />

              {!submitted ? (
                <div className="relative flex h-full min-w-0 flex-col">

                  {/* Form heading */}

                  <div className="mb-8 flex min-w-0 items-start justify-between gap-4">

                    <div className="min-w-0">

                      <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                        Quick message
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[var(--text)]">
                        Send me a message
                      </h3>

                      <p className="mt-2 text-sm text-[var(--text-muted)]">
                        Tell me a little about what you&apos;d like to discuss.
                      </p>

                    </div>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-soft)] sm:flex">

                      <Send
                        size={16}
                        className="text-[var(--accent-cyan)]"
                        strokeWidth={1.7}
                      />

                    </div>

                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="flex min-w-0 flex-1 flex-col"
                  >

                    <div className="min-w-0 space-y-5">

                      {/* Name + Email */}

                      <div className="grid min-w-0 gap-5 sm:grid-cols-2">

                        <div className="min-w-0">
                          <label
                            htmlFor="contact-name"
                            className="mb-2 block font-mono-brand text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]"
                          >
                            Your name
                          </label>

                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            placeholder="Lisa Morgan"
                            className="
                              contact-input
                              box-border block w-full min-w-0
                              rounded-lg
                              border border-[var(--border-strong)]
                              bg-[var(--bg-soft)]
                              px-4 py-3.5
                              text-sm font-medium
                              text-[var(--text)]
                              outline-none
                              transition-all duration-300
                              placeholder:text-[var(--text-faint)]
                              hover:border-[#3a3f4a]
                              focus:border-[var(--accent-cyan)]
                              focus:bg-[var(--panel)]
                              focus:ring-2
                              focus:ring-[var(--accent-cyan)]/10
                            "
                          />
                        </div>

                        <div className="min-w-0">
                          <label
                            htmlFor="contact-email"
                            className="mb-2 block font-mono-brand text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]"
                          >
                            Email address
                          </label>

                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="lisa@example.com"
                            className="
                              contact-input
                              box-border block w-full min-w-0
                              rounded-lg
                              border border-[var(--border-strong)]
                              bg-[var(--bg-soft)]
                              px-4 py-3.5
                              text-sm font-medium
                              text-[var(--text)]
                              outline-none
                              transition-all duration-300
                              placeholder:text-[var(--text-faint)]
                              hover:border-[#3a3f4a]
                              focus:border-[var(--accent-cyan)]
                              focus:bg-[var(--panel)]
                              focus:ring-2
                              focus:ring-[var(--accent-cyan)]/10
                            "
                          />
                        </div>

                      </div>

                      {/* Subject */}

                      <div className="min-w-0">
                        <label
                          htmlFor="contact-subject"
                          className="mb-2 block font-mono-brand text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]"
                        >
                          Subject
                        </label>

                        <input
                          id="contact-subject"
                          name="subject"
                          type="text"
                          required
                          placeholder="Internship opportunity"
                          className="
                            contact-input
                            box-border block w-full min-w-0
                            rounded-lg
                            border border-[var(--border-strong)]
                            bg-[var(--bg-soft)]
                            px-4 py-3.5
                            text-sm font-medium
                            text-[var(--text)]
                            outline-none
                            transition-all duration-300
                            placeholder:text-[var(--text-faint)]
                            hover:border-[#3a3f4a]
                            focus:border-[var(--accent-cyan)]
                            focus:bg-[var(--panel)]
                            focus:ring-2
                            focus:ring-[var(--accent-cyan)]/10
                          "
                        />
                      </div>

                      {/* Message */}

                      <div className="min-w-0">
                        <label
                          htmlFor="contact-message"
                          className="mb-2 block font-mono-brand text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]"
                        >
                          Message
                        </label>

                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={6}
                          maxLength={1000}
                          placeholder="Hi Bhoomika, I came across your portfolio and wanted to discuss..."
                          className="
                            contact-input
                            box-border block w-full min-w-0
                            resize-none
                            rounded-lg
                            border border-[var(--border-strong)]
                            bg-[var(--bg-soft)]
                            px-4 py-3.5
                            text-sm font-medium
                            leading-relaxed
                            text-[var(--text)]
                            outline-none
                            transition-all duration-300
                            placeholder:text-[var(--text-faint)]
                            hover:border-[#3a3f4a]
                            focus:border-[var(--accent-cyan)]
                            focus:bg-[var(--panel)]
                            focus:ring-2
                            focus:ring-[var(--accent-cyan)]/10
                          "
                        />
                      </div>

                    </div>

                    {/* Bottom */}

                    <div className="mt-auto flex min-w-0 flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">

                      <p className="max-w-xs text-xs leading-relaxed text-[var(--text-faint)]">
                        Your message will be handled privately and used only
                        to respond to your enquiry.
                      </p>

                      <button
                        type="submit"
                        className="
                          group inline-flex w-full shrink-0
                          items-center justify-center gap-2
                          rounded-lg
                          bg-[var(--text)]
                          px-6 py-3.5
                          text-sm font-semibold
                          text-[var(--bg)]
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:bg-[var(--accent-cyan)]
                          hover:shadow-lg
                          hover:shadow-[var(--accent-cyan)]/15
                          active:translate-y-0
                          sm:w-auto
                        "
                      >
                        Send message

                        <Send
                          size={15}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </button>

                    </div>

                  </form>
                </div>
              ) : (

                /* =================================================
                   SUCCESS STATE
                   ================================================= */

                <div className="flex min-h-[500px] min-w-0 flex-1 flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--status)]/30 bg-[var(--status)]/10 shadow-[0_0_35px_rgba(52,211,153,0.08)]">

                    <CheckCircle2
                      size={30}
                      className="text-[var(--status)]"
                      strokeWidth={1.6}
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--text)]">
                    Message received
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-lg border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-all hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5 hover:text-[var(--accent-cyan)]"
                  >
                    Send another message
                  </button>

                </div>
              )}

            </div>
          </Reveal>

        </div>

        {/* =====================================================
            FOOTER
            ===================================================== */}

        <Reveal delay={180}>

          <div className="mt-12 flex min-w-0 flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-mono-brand text-[10px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
              {SITE.name} / Cybersecurity
            </p>

            <p className="font-mono-brand text-[10px] text-[var(--text-faint)]">
              Built with curiosity &amp; code
            </p>

          </div>

        </Reveal>

      </div>
    </section>
  );
}