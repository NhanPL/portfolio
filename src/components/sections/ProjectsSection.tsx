import { ProjectCard, SectionTitle } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section
      className="app-container min-h-section scroll-mt-24 py-16"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionTitle
        description={t.projects.description}
        index={getSectionDisplayIndex('projects')}
        subtitle={t.projects.eyebrow}
        title={t.projects.title}
        titleId="projects-title"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project) => {
          const assets = commonData.projectAssets[project.slug]

          return (
            <ProjectCard
              demoLabel={t.projects.demoLabel}
              demoUrl={assets.demo}
              description={project.description}
              githubLabel={t.projects.githubLabel}
              githubUrl={assets.github}
              image={assets.image}
              imageAlt={project.title}
              key={project.slug}
              tags={project.tags}
              title={project.title}
            />
          )
        })}
      </div>
    </section>
  )
}
