import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'

export function HeroSection() {
  const { cvUrl, t } = useLanguage()

  return (
    <div className="app-container grid h-full items-center gap-10 overflow-visible py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:overflow-hidden lg:py-24">
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
          className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          id="hero-title"
        >
          {t.hero.name}
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-secondary sm:text-2xl">{t.hero.role}</p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-muted sm:text-lg">
          {t.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            href={cvUrl}
            icon={<ArrowRight className="size-4" aria-hidden="true" />}
            iconPosition="right"
          >
            {t.hero.downloadCv}
          </Button>
          <Button href={`mailto:${commonData.contact.email}`} variant="secondary">
            {t.hero.contact}
          </Button>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm lg:max-w-md"
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
    </div>
  )
}
