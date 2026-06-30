import { ProjectCard, Reveal, SectionTitle } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <div className="app-container h-full overflow-visible py-16 sm:py-20 lg:overflow-hidden lg:py-24">
      <Reveal mode="section">
        <SectionTitle
          description={t.projects.description}
          index={getSectionDisplayIndex('projects')}
          subtitle={t.projects.eyebrow}
          title={t.projects.title}
          titleId="projects-title"
        />
      </Reveal>
      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, index) => {
          const assets = commonData.projectAssets[project.slug]

          return (
            <Reveal delay={index * 0.05} key={project.slug}>
              <ProjectCard
                demoLabel={t.projects.demoLabel}
                demoUrl={assets.demo}
                description={project.description}
                githubLabel={t.projects.githubLabel}
                githubUrl={assets.github}
                image={assets.image}
                imageAlt={project.title}
                tags={project.tags}
                title={project.title}
              />
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
