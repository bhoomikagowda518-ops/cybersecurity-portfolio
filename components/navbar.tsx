'use client';

import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Mail,
  Sun,
  Moon,
} from 'lucide-react';
import { SOCIALS } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* -------------------------------------------------------
     LOAD SAVED THEME
     ------------------------------------------------------- */

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.add('light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  /* -------------------------------------------------------
     THEME TOGGLE
     ------------------------------------------------------- */

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);

    if (nextDarkMode) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const iconFor = (label: string) => {
    return label === 'Email' ? Mail : null;
  };

  /*
   * Main navigation order
   *
   * About
   * Projects
   * Expertise
   * Skills
   * Education
   * Certifications
   * Journey
   * Contact
   */

  const navigationLinks = [
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Expertise',
      href: '#expertise',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Education',
      href: '#education',
    },
    {
      label: 'Certifications',
      href: '#certifications',
    },
    {
      label: 'Journey',
      href: '#learning',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* =================================================
            LOGO
            ================================================= */}

        <a
          href="#home"
          className="
            font-mono-brand text-sm font-semibold
            tracking-widest
            text-[var(--text)]
            transition-colors
            hover:text-[var(--accent-cyan)]
          "
          aria-label="Bhoomika B C — home"
        >
          BBC<span className="text-[var(--accent-cyan)]">.</span>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <ul className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  text-sm
                  text-[var(--text-muted)]
                  transition-colors
                  hover:text-[var(--text)]
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* =================================================
            DESKTOP RIGHT SIDE
            ================================================= */}

        <div className="hidden items-center gap-4 md:flex">

          {/* Socials */}

          {SOCIALS.map((s) => {
            const Icon = iconFor(s.label);

            return (
              <a
                key={s.label}
                href={s.href}
                target={
                  s.label === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  s.label === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                aria-label={s.label}
                className="
                  text-[var(--text-muted)]
                  transition-colors
                  hover:text-[var(--accent-cyan)]
                "
              >
                {Icon ? (
                  <Icon
                    size={17}
                    strokeWidth={1.75}
                  />
                ) : (
                  <span className="font-mono-brand text-xs">
                    {s.label}
                  </span>
                )}
              </a>
            );
          })}

          {/* Divider */}

          <span className="h-5 w-px bg-[var(--border)]" />

          {/* Theme Toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              border border-[var(--border)]
              bg-[var(--panel)]
              text-[var(--text-muted)]
              transition-all duration-300
              hover:border-[var(--border-strong)]
              hover:text-[var(--accent-cyan)]
              hover:-translate-y-0.5
            "
          >
            {darkMode ? (
              <Sun
                size={15}
                strokeWidth={1.7}
              />
            ) : (
              <Moon
                size={15}
                strokeWidth={1.7}
              />
            )}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
            ================================================= */}

        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile theme toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              border border-[var(--border)]
              bg-[var(--panel)]
              text-[var(--text-muted)]
              transition-all duration-300
              hover:text-[var(--accent-cyan)]
            "
          >
            {darkMode ? (
              <Sun
                size={17}
                strokeWidth={1.7}
              />
            ) : (
              <Moon
                size={17}
                strokeWidth={1.7}
              />
            )}
          </button>

          {/* Menu */}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={
              open
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={open}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-[var(--text)]
            "
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </nav>

      {/* ===================================================
          MOBILE MENU
          =================================================== */}

      {open && (
        <div
          className="
            border-t
            border-[var(--border)]
            bg-[var(--bg)]/98
            backdrop-blur-md
            md:hidden
          "
        >
          <ul className="flex flex-col gap-1 px-6 py-4">

            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    block
                    border-b border-[var(--border)]
                    py-3
                    text-base
                    text-[var(--text-muted)]
                    transition-colors
                    hover:text-[var(--text)]
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}

          </ul>

          {/* Mobile socials */}

          <div className="flex items-center gap-5 px-6 pb-6">

            {SOCIALS.map((s) => {
              const Icon = iconFor(s.label);

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={
                    s.label === 'Email'
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    s.label === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  aria-label={s.label}
                  className="
                    text-[var(--text-muted)]
                    transition-colors
                    hover:text-[var(--accent-cyan)]
                  "
                >
                  {Icon ? (
                    <Icon
                      size={19}
                      strokeWidth={1.75}
                    />
                  ) : (
                    <span className="font-mono-brand text-xs">
                      {s.label}
                    </span>
                  )}
                </a>
              );
            })}

          </div>
        </div>
      )}
    </header>
  );
}