import { Globe2 } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

export function LanguageSwitcher() {
  const { language, languages, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center gap-2" aria-label={t.common.language}>
      <Globe2 className="size-4 text-sky-300" aria-hidden="true" />
      {languages.map((item) => (
        <button
          className="rounded border border-white/10 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-fuchsia-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 data-[active=true]:border-fuchsia-300 data-[active=true]:bg-fuchsia-400/10 data-[active=true]:text-white"
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
