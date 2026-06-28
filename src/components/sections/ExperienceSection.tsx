import { SectionTitle, Timeline } from '@/components/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section
      className="app-container min-h-section scroll-mt-24 py-16"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionTitle
        description={t.experience.description}
        index={getSectionDisplayIndex('experience')}
        subtitle={t.experience.eyebrow}
        title={t.experience.title}
        titleId="experience-title"
      />
      <div className="mt-10">
        <Timeline items={t.experience.items} />
      </div>
    </section>
  )
}
