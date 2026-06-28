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
    <div className="relative grid gap-5">
      <div className="absolute bottom-4 left-4 top-4 hidden w-px bg-gradient-to-b from-primary via-secondary to-accent sm:block" />
      {items.map((item) => (
        <div
          className="relative grid gap-4 sm:grid-cols-[7rem_1fr]"
          key={`${item.role}-${item.period}`}
        >
          <div className="hidden pt-5 text-sm text-foreground-muted sm:block">{item.period}</div>
          <div className="absolute left-[0.8125rem] top-6 hidden size-2.5 rounded-pill bg-primary shadow-glow-primary sm:block" />
          <Card className="sm:ml-8" gradientBorder>
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
