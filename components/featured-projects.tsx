'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Text Encryption Tool',
    category: 'Applied Cryptography',
    description:
      'A Python and Streamlit security project implementing encryption, hashing, encoding, and secure file protection while exploring practical cryptography concepts.',
    technologies: [
      'Python',
      'Streamlit',
      'AES-GCM',
      'Fernet',
      'Bcrypt',
      'SHA-256',
    ],
    github:
      'https://github.com/bhoomikagowda518-ops/Text-Encryption-Tool',
  },
  {
    title: 'Enterprise SIEM',
    category: 'Security Engineering',
    description:
      'A security monitoring platform focused on collecting, parsing, storing, analyzing, and detecting threats from system and security logs.',
    technologies: [
      'Python',
      'SIEM',
      'Log Analysis',
      'Detection Engineering',
      'MITRE ATT&CK',
      'Security Monitoring',
    ],
    github:
      'https://github.com/bhoomikagowda518-ops/Enterprise-SIEM',
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Practical cybersecurity projects built while developing
            my skills in cryptography, security engineering, and
            security monitoring.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              {/* Category */}
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 leading-relaxed text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub */}
              <div className="mt-8 border-t border-gray-200 pt-5 dark:border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  View on GitHub
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}