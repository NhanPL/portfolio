export type LanguageCode = 'vi' | 'en' | 'ja'

export type SectionId =
  'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'certificates' | 'contact'

export type ProjectSlug = 'portfolio' | 'dashboard' | 'commerce'

export type CertificateSlug = 'aws-foundations' | 'react-advanced' | 'scrum-master'

export type LanguageOption = {
  code: LanguageCode
  label: string
  name: string
}

export type NavigationSection = {
  id: SectionId
  href: `#${SectionId}`
}

export type SocialLink = {
  label: string
  platform: 'github' | 'linkedin' | 'facebook' | 'email'
  href: string
}

export type CommonData = {
  brand: string
  avatar: string
  sections: ReadonlyArray<NavigationSection>
  contact: {
    email: string
    phone: string
    location: string
  }
  social: {
    github: string
    linkedin: string
    facebook: string
    email: string
  }
  socialLinks: ReadonlyArray<SocialLink>
  cv: Record<LanguageCode, string>
  projectAssets: Record<
    ProjectSlug,
    {
      image: string
      github: string
      demo: string
    }
  >
  certificateAssets: Record<
    CertificateSlug,
    {
      image: string
      verifyUrl: string
    }
  >
}

export type Translation = {
  seo: {
    title: string
    description: string
  }
  common: {
    language: string
    openProfile: string
    skipToContent: string
  }
  navigation: {
    ariaLabel: string
    menuToggle: string
    items: Record<SectionId, string>
  }
  layout: {
    footerTagline: string
    quickLinksTitle: string
    socialTitle: string
    copyright: string
    backToTop: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    description: string
    downloadCv: string
    contact: string
    avatarAlt: string
  }
  about: {
    eyebrow: string
    title: string
    description: string
    stats: ReadonlyArray<{
      value: string
      label: string
    }>
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    categories: ReadonlyArray<{
      title: string
      items: ReadonlyArray<{
        name: string
        level: number
        summary: string
      }>
    }>
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    items: ReadonlyArray<{
      role: string
      company: string
      period: string
      summary: string
      highlights: ReadonlyArray<string>
    }>
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    githubLabel: string
    demoLabel: string
    items: ReadonlyArray<{
      slug: ProjectSlug
      title: string
      description: string
      tags: ReadonlyArray<string>
    }>
  }
  certificates: {
    eyebrow: string
    title: string
    description: string
    verifyLabel: string
    items: ReadonlyArray<{
      slug: CertificateSlug
      title: string
      issuer: string
      issuedAt: string
      description: string
    }>
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    info: {
      email: string
      phone: string
      location: string
    }
    form: {
      name: string
      email: string
      message: string
      submit: string
    }
  }
}
