import { Card, SectionTitle } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      className="app-container grid min-h-section scroll-mt-24 items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]"
      id="about"
      aria-labelledby="about-title"
    >
      <div>
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
      </div>

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
    </section>
  )
}
