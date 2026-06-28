import { cn } from '@/utils/cn'

export type SectionTitleProps = {
  className?: string
  description?: string
  index?: string
  subtitle: string
  title: string
}

export function SectionTitle({
  className,
  description,
  index,
  subtitle,
  title,
}: SectionTitleProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <div className="mb-3 flex items-center gap-3">
        {index ? (
          <span className="inline-flex size-9 items-center justify-center rounded-pill border border-primary/40 bg-primary-soft text-xs font-bold text-primary-hover shadow-glow-primary">
            {index}
          </span>
        ) : null}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-hover">
          {subtitle}
        </p>
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
