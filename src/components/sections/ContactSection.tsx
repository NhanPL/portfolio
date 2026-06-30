import { Mail, MapPin, Phone } from 'lucide-react'
import { Card, ContactForm, Reveal, SectionTitle, SocialIcons } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function ContactSection() {
  const { t } = useLanguage()

  const contactItems = [
    { icon: Mail, label: t.contact.info.email, value: commonData.contact.email },
    { icon: Phone, label: t.contact.info.phone, value: commonData.contact.phone },
    { icon: MapPin, label: t.contact.info.location, value: commonData.contact.location },
  ]

  return (
    <div className="app-container h-full overflow-visible py-16 sm:py-20 lg:overflow-hidden lg:py-24">
      <Reveal mode="section">
        <SectionTitle
          description={t.contact.description}
          index={getSectionDisplayIndex('contact')}
          subtitle={t.contact.eyebrow}
          title={t.contact.title}
          titleId="contact-title"
        />
      </Reveal>

      <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Card gradientBorder>
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <div className="flex gap-4" key={item.label}>
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-control border border-primary/30 bg-primary-soft text-primary-hover">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="mt-1 text-sm text-foreground-muted">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <SocialIcons links={commonData.socialLinks} />
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm labels={t.contact.form} />
        </Reveal>
      </div>
    </div>
  )
}
