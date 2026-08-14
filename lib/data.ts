import {
  Mail,
  ShieldCheck,
  Radar,
  KeyRound,
  Network,
  Lock,
  FileSearch,
  type LucideIcon,
} from 'lucide-react';

export const SITE = {
  name: 'Bhoomika B C',
  role: 'Cybersecurity Engineering Student',
  location: 'Tumkur, Karnataka, India',
  degree: 'B.E. Computer Science & Engineering',
  specialization: 'Cybersecurity',
  college: 'Sri Siddhartha Institute of Technology',
  gradYear: '2029',
};

export const LINKS = {
  github: 'https://github.com/bhoomikagowda518-ops',
  linkedin: 'https://www.linkedin.com/in/bhoomikabc2008',
  email: 'bhoomikagowda518@gmail.com',
};

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#learning' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIALS: {
  label: string;
  href: string;
  icon: LucideIcon | null;
}[] = [
  {
    label: 'GitHub',
    href: LINKS.github,
    icon: null,
  },
  {
    label: 'LinkedIn',
    href: LINKS.linkedin,
    icon: null,
  },
  {
    label: 'Email',
    href: `mailto:${LINKS.email}`,
    icon: Mail,
  },
];

/* =========================================================
   PROJECTS
   ========================================================= */

export type Project = {
  id: string;
  status: 'In Development' | 'Completed';
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  points: string[];
  github: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'siem',
    status: 'In Development',
    name: 'Enterprise SIEM Platform',
    tagline: 'Security monitoring & detection engineering',
    description:
      'A security monitoring platform for collecting, normalizing, and analyzing system and application logs. The project focuses on detection rules, alerts, investigation, and MITRE ATT&CK mapping.',
    stack: [
      'Python',
      'SIEM',
      'Log Analysis',
      'Detection Engineering',
      'MITRE ATT&CK',
      'Security Monitoring',
    ],
    points: [
      'Collecting and normalizing logs from multiple sources',
      'Writing detection rules mapped to MITRE ATT&CK',
      'Generating alerts for suspicious activity',
      'Building an investigation workflow for security events',
    ],
    github: `${LINKS.github}/Enterprise-SIEM`,
    featured: true,
  },
  {
    id: 'text-encryption',
    status: 'Completed',
    name: 'Text Encryption Tool',
    tagline: 'Applied cryptography, hashing & file protection',
    description:
      'A Python and Streamlit application for encryption, hashing, encoding, and file protection. The project helped me understand practical cryptography and secure key handling.',
    stack: [
      'Python',
      'Streamlit',
      'AES-GCM',
      'Fernet',
      'SHA-256',
      'bcrypt',
    ],
    points: [
      'AES-GCM and Fernet encryption and decryption',
      'SHA-256 and bcrypt hashing with verification',
      'File hashing and file encryption',
      'Secure key management through a Streamlit interface',
    ],
    github: `${LINKS.github}/Text-Encryption-Tool`,
    featured: false,
  },
];

/* =========================================================
   EXPERTISE
   ========================================================= */

export type ExpertiseArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    title: 'Offensive Security',
    description:
      'Learning attacker techniques through CTFs, labs, and practical exercises.',
    icon: ShieldCheck,
  },
  {
    title: 'Detection Engineering',
    description:
      'Building detection rules and mapping security events to MITRE ATT&CK.',
    icon: Radar,
  },
  {
    title: 'Applied Cryptography',
    description:
      'Working with encryption, hashing, and secure key management.',
    icon: KeyRound,
  },
  {
    title: 'Network Security',
    description:
      'Learning network protocols, traffic analysis, and network defense.',
    icon: Network,
  },
  {
    title: 'Linux Security',
    description:
      'Working with Linux permissions, system security, and hardening.',
    icon: Lock,
  },
  {
    title: 'Web Application Security',
    description:
      'Learning common web vulnerabilities and practical testing techniques.',
    icon: FileSearch,
  },
];

/* =========================================================
   SKILLS
   ========================================================= */

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'C', 'C++', 'JavaScript'],
  },
  {
    category: 'Security',
    skills: [
      'Cybersecurity Fundamentals',
      'Cryptography',
      'SIEM',
      'Detection Engineering',
      'Web Security',
      'Network Security',
    ],
  },
  {
    category: 'Systems',
    skills: [
      'Linux',
      'Kali Linux',
      'Git',
      'GitHub',
      'VS Code',
      'Streamlit',
    ],
  },
  {
    category: 'Practical',
    skills: [
      'CTFs',
      'Security Labs',
      'Log Analysis',
      'Security Automation',
      'Vulnerability Assessment',
    ],
  },
];

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

export type Certification = {
  title: string;
  issuer: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Introduction to HTML, CSS, & JavaScript',
    issuer: 'Coursera',
  },
  {
    title: 'Introduction to AI',
    issuer: 'Coursera',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
  },
];

/* =========================================================
   LEARNING
   ========================================================= */

export type LearningItem = {
  title: string;
  status: 'ACTIVE' | 'IN PROGRESS' | 'EXPLORING';
};

export const LEARNING_ITEMS: LearningItem[] = [
  {
    title: 'Python for Cybersecurity',
    status: 'ACTIVE',
  },
  {
    title: 'Networking',
    status: 'ACTIVE',
  },
  {
    title: 'Linux & Kali Linux',
    status: 'ACTIVE',
  },
  {
    title: 'SIEM & Detection Engineering',
    status: 'ACTIVE',
  },
  {
    title: 'CTF Fundamentals',
    status: 'IN PROGRESS',
  },
  {
    title: 'Web Application Security',
    status: 'EXPLORING',
  },
];

/* =========================================================
   CONSOLE FEED
   ========================================================= */

export const CONSOLE_FEED = [
  'AUTH   200   login.attempt      user=analyst  mfa=pass',
  'NET    WARN  port-scan.detect   src=192.168.1.42',
  'FILE   200   hash.verify        sha256=match',
  'SIEM   INFO  rule.triggered     brute-force-threshold',
  'SYS    200   service.heartbeat  status=ok',
  'AUTH   200   session.refresh    user=analyst',
  'NET    INFO  traffic.baseline   deviation=low',
  'FILE   200   encrypt.complete   aes-256-gcm',
  'SIEM   INFO  correlation.match  mitre=T1110',
  'SYS    200   log.normalize      source=syslog',
];