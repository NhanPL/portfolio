import { commonData } from '@/data/common'
import type { SectionId } from '@/data'

export function getSectionDisplayIndex(sectionId: SectionId) {
  const sectionIndex = commonData.sections.findIndex((section) => section.id === sectionId)

  return String(sectionIndex + 1).padStart(2, '0')
}
