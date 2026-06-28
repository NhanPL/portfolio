import type { FormEventHandler } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'

export type ContactFormLabels = {
  email: string
  message: string
  name: string
  submit: string
}

export type ContactFormProps = {
  labels: ContactFormLabels
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export function ContactForm({ labels, onSubmit }: ContactFormProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (!onSubmit) {
      event.preventDefault()
      return
    }

    onSubmit(event)
  }

  return (
    <Card as="form" className="grid gap-4" gradientBorder onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor="contact-name">
          {labels.name}
          <input
            className="rounded-control border border-border bg-background-soft px-4 py-3 text-sm text-foreground outline-none transition-theme-fast placeholder:text-muted focus:border-primary-hover"
            id="contact-name"
            name="name"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor="contact-email">
          {labels.email}
          <input
            className="rounded-control border border-border bg-background-soft px-4 py-3 text-sm text-foreground outline-none transition-theme-fast placeholder:text-muted focus:border-primary-hover"
            id="contact-email"
            name="email"
            type="email"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor="contact-message">
        {labels.message}
        <textarea
          className="min-h-32 rounded-control border border-border bg-background-soft px-4 py-3 text-sm text-foreground outline-none transition-theme-fast placeholder:text-muted focus:border-primary-hover"
          id="contact-message"
          name="message"
        />
      </label>
      <Button
        className="justify-center bg-gradient-to-r from-accent via-primary to-secondary"
        icon={<Send className="size-4" aria-hidden="true" />}
        iconPosition="right"
        type="submit"
      >
        {labels.submit}
      </Button>
    </Card>
  )
}
