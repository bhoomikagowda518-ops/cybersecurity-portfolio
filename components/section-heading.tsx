export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <span className="font-mono-brand text-xs tracking-[0.2em] text-[var(--accent-cyan)] uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[var(--text-muted)] leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}