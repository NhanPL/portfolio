import { Card } from '@/components/common/Card'

export type TimelineItem = {
  company: string
  highlights: ReadonlyArray<string>
  period: string
  role: string
  summary: string
}

export type TimelineProps = {
  items: ReadonlyArray<TimelineItem>
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative grid">
      <div className="absolute bottom-6 left-[9rem] top-6 hidden w-px -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-accent sm:block" />
      {items.map((item) => (
        <div
          className="grid gap-4 pb-5 last:pb-0 sm:grid-cols-[8rem_2rem_minmax(0,1fr)] sm:gap-0"
          key={`${item.role}-${item.period}`}
        >
          <div className="hidden pr-5 pt-5 text-right text-sm text-foreground-muted sm:block">
            {item.period}
          </div>
          <div className="relative hidden justify-center sm:flex">
            <div className="relative z-10 mt-6 size-3 rounded-pill border-2 border-background bg-primary shadow-glow-primary" />
          </div>
          <Card className="sm:ml-5" gradientBorder>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-medium text-secondary sm:hidden">{item.period}</p>
                <h3 className="mt-1 text-base font-bold text-foreground">{item.role}</h3>
                <p className="text-sm font-semibold text-primary-hover">{item.company}</p>
                <p className="mt-3 text-sm leading-6 text-foreground-muted">{item.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                {item.highlights.map((highlight) => (
                  <span
                    className="rounded-control border border-border bg-background-soft/80 px-3 py-1 text-xs text-foreground-muted"
                    key={highlight}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
