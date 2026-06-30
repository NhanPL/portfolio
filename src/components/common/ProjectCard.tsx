import { ExternalLink, GitBranch } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'

export type ProjectCardProps = {
  demoLabel: string
  demoUrl: string
  description: string
  githubLabel: string
  githubUrl: string
  image: string
  imageAlt: string
  tags: ReadonlyArray<string>
  title: string
}

export function ProjectCard({
  demoLabel,
  demoUrl,
  description,
  githubLabel,
  githubUrl,
  image,
  imageAlt,
  tags,
  title,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0" gradientBorder>
      <img
        alt={imageAlt}
        className="aspect-[16/10] w-full object-cover"
        decoding="async"
        loading="lazy"
        src={image}
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-foreground-muted">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              className="rounded-control border border-border bg-background-soft/70 px-3 py-1 text-xs text-foreground-muted"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2 pt-5">
          <Button
            aria-label={githubLabel}
            href={githubUrl}
            icon={<GitBranch className="size-4" aria-hidden="true" />}
            variant="icon"
          />
          <Button
            aria-label={demoLabel}
            href={demoUrl}
            icon={<ExternalLink className="size-4" aria-hidden="true" />}
            variant="icon"
          />
        </div>
      </div>
    </Card>
  )
}
