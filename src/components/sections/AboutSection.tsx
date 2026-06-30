import { Card, Reveal, SectionTitle } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <div className="app-container grid h-full items-center gap-8 overflow-visible py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:overflow-hidden lg:py-24">
      <Reveal mode="section">
        <SectionTitle
          description={t.about.description}
          index={getSectionDisplayIndex('about')}
          subtitle={t.about.eyebrow}
          title={t.about.title}
          titleId="about-title"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.about.stats.map((stat) => (
            <Card className="p-4" key={stat.label}>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-xs text-foreground-muted">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Reveal>

      <Reveal className="hidden lg:block" delay={0.12}>
        <Card className="relative overflow-hidden p-0" gradientBorder>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-transparent to-secondary-soft" />
          <img
            alt={t.hero.avatarAlt}
            className="relative aspect-[16/10] w-full object-cover"
            decoding="async"
            loading="lazy"
            src={commonData.avatar}
          />
        </Card>
      </Reveal>
    </div>
  )
}
