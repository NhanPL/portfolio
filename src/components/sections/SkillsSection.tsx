import { Cloud, Code2, Database, Server, Wrench } from 'lucide-react'
import { Card, ProgressBar, Reveal, SectionTitle } from '@/components/common'
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
    <div className="app-container h-full overflow-visible py-16 sm:py-20 lg:overflow-hidden lg:py-24">
      <Reveal mode="section">
        <SectionTitle
          description={t.skills.description}
          index={getSectionDisplayIndex('skills')}
          subtitle={t.skills.eyebrow}
          title={t.skills.title}
          titleId="skills-title"
        />
      </Reveal>

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skillIconMap[index % skillIconMap.length]

          return (
            <Reveal delay={index * 0.04} key={`${skill.category}-${skill.name}`}>
              <Card className="h-full" gradientBorder>
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
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
