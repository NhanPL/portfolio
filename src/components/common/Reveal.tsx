import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { revealVariants, sectionVariants } from '@/utils/motion'
import { cn } from '@/utils/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  mode?: 'item' | 'section'
}

export function Reveal({ children, className, delay = 0, mode = 'item' }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      variants={mode === 'section' ? sectionVariants : revealVariants}
      viewport={{ once: true, amount: 0.22 }}
      whileInView="visible"
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
