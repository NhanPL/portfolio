import type { MouseEventHandler, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'icon'

type ButtonBaseProps = {
  'aria-label'?: string
  children?: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  id?: string
  rel?: string
  target?: string
  title?: string
  variant?: ButtonVariant
}

type NativeButtonProps = ButtonBaseProps & {
  disabled?: boolean
  href?: never
  name?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  value?: string
}

type LinkButtonProps = ButtonBaseProps & {
  download?: boolean | string
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
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
      <motion.a
        className={buttonClassName}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...linkProps}
      >
        {content}
      </motion.a>
    )
  }

  const buttonProps = props as NativeButtonProps

  return (
    <motion.button
      className={buttonClassName}
      type={buttonProps.type ?? 'button'}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...buttonProps}
    >
      {content}
    </motion.button>
  )
}
