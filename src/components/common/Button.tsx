import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'icon'

type ButtonBaseProps = {
  children?: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  variant?: ButtonVariant
}

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type LinkButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = NativeButtonProps | LinkButtonProps

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    'border-transparent bg-primary text-foreground shadow-glow-primary hover:bg-primary-hover',
  secondary:
    'border-secondary/40 bg-secondary-soft text-foreground hover:border-secondary hover:bg-secondary-soft',
  outline: 'border-border bg-background-soft/40 text-foreground hover:border-primary-hover',
  icon: 'size-10 justify-center border-border bg-background-soft/40 p-0 text-foreground-muted hover:border-primary-hover hover:text-foreground',
}

export function Button({
  children,
  className,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const content = (
    <>
      {iconPosition === 'left' ? icon : null}
      {children}
      {iconPosition === 'right' ? icon : null}
    </>
  )

  const buttonClassName = cn(
    'interactive-lift rounded-control inline-flex min-h-10 items-center gap-2 border px-4 py-2 text-sm font-semibold focus-visible:outline-none hover:interactive-lift-hover',
    variantClassName[variant],
    className,
  )

  if ('href' in props && props.href) {
    const linkProps = props as LinkButtonProps

    return (
      <a className={buttonClassName} {...linkProps}>
        {content}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={buttonClassName} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {content}
    </button>
  )
}
