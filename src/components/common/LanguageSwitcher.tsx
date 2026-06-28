import { Globe2 } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

export function LanguageSwitcher() {
  const { language, languages, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center gap-2" aria-label={t.common.language}>
      <Globe2 className="size-4 text-secondary" aria-hidden="true" />
      {languages.map((item) => (
        <button
          className="rounded-app border border-border px-3 py-1 text-xs font-medium text-foreground-muted transition hover:border-primary-hover hover:text-foreground focus-visible:outline-none data-[active=true]:border-primary-hover data-[active=true]:bg-primary-soft data-[active=true]:text-foreground"
          data-active={item.code === language}
          key={item.code}
          onClick={() => setLanguage(item.code)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
