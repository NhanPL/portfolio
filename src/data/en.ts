import type { Translation } from '@/data/types'

export const en: Translation = {
  seo: {
    title: 'Full-stack Developer Portfolio',
    description:
      'A modern multilingual portfolio website built with React, TypeScript, and TailwindCSS.',
  },
  common: {
    language: 'Choose language',
    openProfile: 'Open profile',
    skipToContent: 'Skip to main content',
  },
  navigation: {
    ariaLabel: 'Primary navigation',
    menuToggle: 'Open or close menu',
    items: {
      hero: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
    },
  },
  layout: {
    footerTagline: 'Building modern, scalable, and thoughtful web experiences.',
    quickLinksTitle: 'Quick links',
    socialTitle: 'Connect',
    copyright: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  hero: {
    greeting: 'Hello, I am',
    name: 'Full-stack Developer',
    role: 'React, TypeScript, and modern web systems',
    description:
      'A data-driven portfolio foundation ready to expand into Hero, About, Skills, Experience, Projects, Certificates, and Contact sections.',
    downloadCv: 'Download CV',
    contact: 'Contact',
    avatarAlt: 'Portfolio avatar',
  },
  about: {
    eyebrow: 'About',
    title: 'Focused on product quality, performance, and user experience',
    description:
      'I build interfaces and web systems with clear structure, maintainable code, and room to scale with business needs.',
    stats: [
      { value: '5+', label: 'Years of experience' },
      { value: '20+', label: 'Projects delivered' },
      { value: '3', label: 'Supported languages' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'A modern Full-stack toolkit',
    description:
      'Combining frontend, backend, data architecture, and delivery practices to ship stable products.',
    categories: [
      {
        title: 'Frontend',
        items: [
          {
            name: 'React',
            level: 92,
            summary: 'Component architecture, hooks, and state management.',
          },
          {
            name: 'TypeScript',
            level: 90,
            summary: 'Strict typing, reusable contracts, and solid DX.',
          },
          {
            name: 'TailwindCSS',
            level: 88,
            summary: 'Design systems, responsive UI, and utility workflows.',
          },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', level: 84, summary: 'REST APIs, service layers, and authentication.' },
          { name: 'Database', level: 80, summary: 'Schema design, queries, and data modeling.' },
          { name: 'Cloud', level: 76, summary: 'Deployment, monitoring, and basic CI/CD.' },
        ],
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'A track record of building real products',
    description: 'Experience across web products from early ideas to production releases.',
    items: [
      {
        role: 'Full-stack Developer',
        company: 'Product Team',
        period: '2022 - Present',
        summary: 'Developed web applications, improved performance, and refined user experience.',
        highlights: ['Designed frontend architecture', 'Built APIs', 'Improved release workflows'],
      },
      {
        role: 'Frontend Developer',
        company: 'Digital Studio',
        period: '2020 - 2022',
        summary: 'Built responsive UI, component libraries, and interactive animation.',
        highlights: [
          'Standardized design systems',
          'Improved accessibility',
          'Optimized page speed',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Featured work',
    description: 'Selected projects that show how I organize UI, data, and product experience.',
    githubLabel: 'Source code',
    demoLabel: 'Live demo',
    items: [
      {
        slug: 'portfolio',
        title: 'Multilingual Portfolio',
        description:
          'A data-driven portfolio website with multilingual support and scalable structure.',
        tags: ['React', 'TypeScript', 'TailwindCSS'],
      },
      {
        slug: 'dashboard',
        title: 'Operations Dashboard',
        description:
          'An admin interface focused on data, status, and repeated operational workflows.',
        tags: ['React', 'Charts', 'API'],
      },
      {
        slug: 'commerce',
        title: 'Commerce Platform',
        description: 'A responsive buying flow with product management, cart, and checkout.',
        tags: ['Full-stack', 'Auth', 'Database'],
      },
    ],
  },
  certificates: {
    eyebrow: 'Certificates',
    title: 'Verified capabilities',
    description: 'Certificates and coursework supporting frontend, cloud, and delivery expertise.',
    verifyLabel: 'Verify',
    items: [
      {
        slug: 'aws-foundations',
        title: 'Cloud Foundations',
        issuer: 'AWS',
        issuedAt: '2024',
        description: 'Foundational knowledge of cloud, deployment, and infrastructure operations.',
      },
      {
        slug: 'react-advanced',
        title: 'Advanced React Patterns',
        issuer: 'Frontend Masters',
        issuedAt: '2023',
        description: 'Advanced patterns for components, state, and performance.',
      },
      {
        slug: 'scrum-master',
        title: 'Scrum Master Fundamentals',
        issuer: 'Scrum Alliance',
        issuedAt: '2022',
        description: 'Agile process, team collaboration, and continuous improvement.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let us build something better',
    description: 'Have a project, collaboration opportunity, or question? I am happy to talk.',
    info: {
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
    },
  },
}
