import { motion, useReducedMotion } from 'framer-motion'

export function FloatingBackground() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: ['0px 0px, 0px 0px', '42px 30px, 0px 72px'],
              }
        }
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)',
          backgroundSize: '72px 72px, 72px 72px',
        }}
        transition={{
          duration: 18,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <motion.div
        animate={prefersReducedMotion ? undefined : { x: ['-35%', '35%'] }}
        className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        transition={{
          duration: 9,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: ['0%', '18%'] }}
        className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(56,189,248,0.08))]"
        transition={{
          duration: 7,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  )
}
