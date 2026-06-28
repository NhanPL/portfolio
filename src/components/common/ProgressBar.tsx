import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export type ProgressBarProps = {
  className?: string
  label: string
  summary?: string
  value: number
}

export function ProgressBar({ className, label, summary, value }: ProgressBarProps) {
  const normalizedValue = Math.min(Math.max(value, 0), 100)

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-foreground">{label}</p>
          {summary ? <p className="mt-1 text-xs leading-5 text-muted">{summary}</p> : null}
        </div>
        <span className="font-mono text-xs font-semibold text-secondary">{normalizedValue}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-pill bg-background-soft">
        <motion.div
          className="h-full rounded-pill bg-gradient-to-r from-primary via-accent to-secondary"
          initial={{ width: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          whileInView={{ width: `${normalizedValue}%` }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
