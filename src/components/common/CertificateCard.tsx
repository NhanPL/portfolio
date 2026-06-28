import { BadgeCheck } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'

export type CertificateCardProps = {
  description: string
  image: string
  imageAlt: string
  issuedAt: string
  issuer: string
  title: string
  verifyLabel: string
  verifyUrl: string
}

export function CertificateCard({
  description,
  image,
  imageAlt,
  issuedAt,
  issuer,
  title,
  verifyLabel,
  verifyUrl,
}: CertificateCardProps) {
  return (
    <Card className="grid gap-4 sm:grid-cols-[5rem_1fr]" gradientBorder>
      <img
        alt={imageAlt}
        className="size-16 rounded-control border border-border object-cover sm:size-20"
        decoding="async"
        loading="lazy"
        src={image}
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          {issuer} · {issuedAt}
        </p>
        <h3 className="mt-2 text-base font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-foreground-muted">{description}</p>
        <Button
          className="mt-4"
          href={verifyUrl}
          icon={<BadgeCheck className="size-4" aria-hidden="true" />}
          variant="outline"
        >
          {verifyLabel}
        </Button>
      </div>
    </Card>
  )
}
