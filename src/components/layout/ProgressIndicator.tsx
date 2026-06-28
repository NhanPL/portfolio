import { motion } from 'framer-motion'
import { commonData } from '@/data/common'
import type { SectionId } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'

type ProgressIndicatorProps = {
  activeIndex: number
  onNavigate: (sectionId: SectionId) => void
  progress: number
}

export function ProgressIndicator({ activeIndex, onNavigate, progress }: ProgressIndicatorProps) {
  const { t } = useLanguage()
  const activeSection = commonData.sections[activeIndex] ?? commonData.sections[0]

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[min(42rem,calc(100vw-2rem))] -translate-x-1/2 rounded-panel border border-border bg-background/70 px-4 py-3 shadow-card backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between gap-4 text-xs font-semibold text-foreground-muted">
        <span className="text-primary-hover">{t.navigation.items[activeSection.id]}</span>
        <span className="font-mono">{Math.round(progress)}%</span>
      </div>
      <div className="relative h-1 overflow-hidden rounded-pill bg-background-soft">
        <motion.div
          animate={{ width: `${progress}%` }}
          className="h-full rounded-pill bg-gradient-to-r from-primary via-accent to-secondary"
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        {commonData.sections.map((section, index) => (
          <button
            aria-label={t.navigation.items[section.id]}
            className={cn(
              'transition-theme-fast size-2.5 rounded-pill border focus-visible:outline-none',
              index === activeIndex
                ? 'border-primary bg-primary shadow-glow-primary'
                : 'border-border bg-background-soft hover:border-primary-hover',
            )}
            key={section.id}
            onClick={() => onNavigate(section.id)}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}
