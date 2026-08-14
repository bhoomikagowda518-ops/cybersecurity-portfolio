import { Mail } from 'lucide-react';
import { SITE, LINKS } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-medium text-[var(--text)]">{SITE.name}</p>
          <p className="font-mono-brand text-xs text-[var(--text-faint)] mt-1">
            {SITE.role}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            GitHub
          </a>

          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${LINKS.email}`}
            aria-label="Email"
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Mail size={17} strokeWidth={1.75} />
          </a>
        </div>

        <p className="font-mono-brand text-xs text-[var(--text-faint)]">
          © {year} {SITE.name}
        </p>
      </div>
    </footer>
  );
}