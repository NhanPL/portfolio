import { Reveal, SectionTitle, Timeline } from '@/components/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <div className="app-container h-full overflow-hidden py-24">
      <Reveal mode="section">
        <SectionTitle
          description={t.experience.description}
          index={getSectionDisplayIndex('experience')}
          subtitle={t.experience.eyebrow}
          title={t.experience.title}
          titleId="experience-title"
        />
      </Reveal>
      <Reveal className="mt-10" delay={0.1}>
        <Timeline items={t.experience.items} />
      </Reveal>
    </div>
  )
}
