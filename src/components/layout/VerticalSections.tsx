import type { ReactNode } from 'react'
import type { SectionId } from '@/data'

export type VerticalSection = {
  id: SectionId
  labelledBy: string
  node: ReactNode
}

type VerticalSectionsProps = {
  sections: ReadonlyArray<VerticalSection>
}

export function VerticalSections({ sections }: VerticalSectionsProps) {
  return (
    <div className="min-h-screen">
      {sections.map((section) => (
        <section
          aria-labelledby={section.labelledBy}
          className="min-h-[calc(100svh-var(--app-header-height))] scroll-mt-[calc(var(--app-header-height)+1rem)]"
          id={section.id}
          key={section.id}
        >
          {section.node}
        </section>
      ))}
    </div>
  )
}
