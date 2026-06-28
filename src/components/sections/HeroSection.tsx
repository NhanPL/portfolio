import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'

export function HeroSection() {
  const { cvUrl, t } = useLanguage()

  return (
    <section
      className="app-container grid min-h-section scroll-mt-24 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]"
      id="hero"
      aria-labelledby="hero-title"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary-hover">
          {t.hero.greeting}
        </p>
        <h1
          className="font-display text-4xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl"
          id="hero-title"
        >
          {t.hero.name}
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-secondary sm:text-2xl">{t.hero.role}</p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-muted sm:text-lg">
          {t.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="interactive-lift rounded-control inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-foreground shadow-glow-primary hover:bg-primary-hover hover:interactive-lift-hover focus-visible:outline-none"
            href={cvUrl}
          >
            {t.hero.downloadCv}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            className="interactive-lift rounded-control inline-flex items-center border border-secondary/40 px-5 py-3 text-sm font-semibold text-foreground hover:border-secondary hover:bg-secondary-soft hover:interactive-lift-hover focus-visible:outline-none"
            href={`mailto:${commonData.contact.email}`}
          >
            {t.hero.contact}
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="relative mx-auto aspect-square w-full max-w-md"
        initial={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-soft via-secondary-soft to-accent-soft blur-3xl" />
        <img
          alt={t.hero.avatarAlt}
          className="relative h-full w-full rounded-full border border-border object-cover shadow-glow-secondary"
          decoding="async"
          loading="lazy"
          src={commonData.avatar}
        />
      </motion.div>
    </section>
  )
}
