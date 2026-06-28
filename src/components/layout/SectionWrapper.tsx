import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { SectionId } from '@/data'

type SectionWrapperProps = {
  children: ReactNode
  id: SectionId
  isActive: boolean
  labelledBy: string
}

export function SectionWrapper({ children, id, isActive, labelledBy }: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      animate={
        prefersReducedMotion
          ? undefined
          : {
              filter: isActive ? 'blur(0px)' : 'blur(4px)',
              opacity: isActive ? 1 : 0.36,
              scale: isActive ? 1 : 0.96,
            }
      }
      aria-labelledby={labelledBy}
      className="h-screen w-screen shrink-0 overflow-hidden"
      id={id}
      transition={{
        duration: 0.55,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.section>
  )
}
