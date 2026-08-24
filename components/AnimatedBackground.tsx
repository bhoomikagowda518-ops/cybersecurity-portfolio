"use client";

import styles from "./AnimatedBackground.module.css";

/**
 * Minimal ambient background:
 * subtle floating particles only.
 * Decorative — no layout impact.
 */

const PARTICLE_COUNT = 12;

function generateParticles(count: number) {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const seed = i * 137.17;

    const left = (Math.sin(seed) * 0.5 + 0.5) * 100;

    // Small, subtle particles
    const size = 1.5 + ((i * 7) % 3);

    // Very slow movement
    const duration = 24 + ((i * 9) % 18);

    // Stagger the animation naturally
    const delay = -((i * 4.7) % duration);

    // Gentle horizontal drift
    const drift =
      (i % 2 === 0 ? 1 : -1) * (8 + ((i * 3) % 14));

    // Low opacity so particles don't dominate
    const opacity = 0.18 + ((i * 13) % 20) / 100;

    particles.push({
      id: i,
      left,
      size,
      duration,
      delay,
      drift,
      opacity,
    });
  }

  return particles;
}

const PARTICLES = generateParticles(PARTICLE_COUNT);

export default function AnimatedBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.particleField}>
        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className={styles.particle}
            style={
              {
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                "--drift": `${particle.drift}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}