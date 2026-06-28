import { BriefcaseBusiness, Code2, Mail, Users } from 'lucide-react'
import type { SocialLink } from '@/data/types'
import { Button } from '@/components/common/Button'

const socialIconMap = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  facebook: Users,
  email: Mail,
} satisfies Record<SocialLink['platform'], typeof Mail>

export type SocialIconsProps = {
  links: ReadonlyArray<SocialLink>
}

export function SocialIcons({ links }: SocialIconsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((item) => {
        const Icon = socialIconMap[item.platform]
        const isExternalLink = item.href.startsWith('http')

        return (
          <Button
            aria-label={item.label}
            href={item.href}
            icon={<Icon className="size-4" aria-hidden="true" />}
            key={item.platform}
            rel={isExternalLink ? 'noreferrer' : undefined}
            target={isExternalLink ? '_blank' : undefined}
            variant="icon"
          />
        )
      })}
    </div>
  )
}
