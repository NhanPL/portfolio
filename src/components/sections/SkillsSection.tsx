import { Cloud, Code2, Database, Server, Wrench } from 'lucide-react'
import { Card, ProgressBar, SectionTitle } from '@/components/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

const skillIconMap = [Code2, Server, Database, Wrench, Cloud]

export function SkillsSection() {
  const { t } = useLanguage()
  const skills = t.skills.categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.title,
    })),
  )

  return (
    <section
      className="app-container min-h-section scroll-mt-24 py-16"
      id="skills"
      aria-labelledby="skills-title"
    >
      <SectionTitle
        description={t.skills.description}
        index={getSectionDisplayIndex('skills')}
        subtitle={t.skills.eyebrow}
        title={t.skills.title}
        titleId="skills-title"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skillIconMap[index % skillIconMap.length]

          return (
            <Card gradientBorder key={`${skill.category}-${skill.name}`}>
              <div className="mb-5 flex items-center gap-4">
                <span className="inline-flex size-11 items-center justify-center rounded-control border border-primary/30 bg-primary-soft text-primary-hover">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{skill.category}</h3>
                  <p className="text-sm text-foreground-muted">{skill.name}</p>
                </div>
              </div>
              <ProgressBar label={skill.name} summary={skill.summary} value={skill.level} />
            </Card>
          )
        })}
      </div>
    </section>
  )
}
