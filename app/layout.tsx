import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.name} — Cybersecurity Engineering Student`,
  description:
    'Portfolio of Bhoomika B C, a Computer Science Engineering student specializing in Cybersecurity — building an Enterprise SIEM platform, a Python encryption toolkit, and practical security skills.',
  metadataBase: new URL('https://bhoomikabc.dev'),
  openGraph: {
    title: `${SITE.name} — Cybersecurity Engineering Student`,
    description:
      'Computer Science Engineering student specializing in Cybersecurity. Building security monitoring tools, applied cryptography projects, and a practical detection engineering skillset.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--accent)]/25 selection:text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}