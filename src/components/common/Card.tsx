import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type CardProps<T extends ElementType = 'article'> = {
  as?: T
  children: ReactNode
  className?: string
  gradientBorder?: boolean
  hoverable?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function Card<T extends ElementType = 'article'>({
  as,
  children,
  className,
  gradientBorder = false,
  hoverable = true,
  ...props
}: CardProps<T>) {
  const Component = as ?? 'article'

  return (
    <Component
      className={cn(
        'rounded-card border bg-surface/55 p-4 shadow-card backdrop-blur-xl sm:p-5',
        gradientBorder
          ? 'border-transparent bg-[linear-gradient(var(--color-surface),var(--color-surface))_padding-box,linear-gradient(135deg,var(--color-primary),var(--color-secondary),var(--color-accent))_border-box]'
          : 'border-border',
        hoverable &&
          'interactive-lift hover:interactive-lift-hover hover:border-primary-hover hover:shadow-card-hover',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
