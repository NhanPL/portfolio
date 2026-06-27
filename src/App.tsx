import { ArrowRight, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'

function App() {
  const { language, languages, setLanguage, t } = useLanguage()

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
            <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
              <header className="flex items-center justify-between">
                <a
                  className="text-sm font-semibold tracking-wide text-white outline-none transition focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                  href={commonData.social.github}
                  aria-label={t.common.openProfile}
                >
                  {commonData.brand}
                </a>
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
              </header>

              <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-3xl"
                  initial={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300">
                    {t.hero.greeting}
                  </p>
                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                    {t.hero.name}
                  </h1>
                  <p className="mt-5 max-w-2xl text-xl text-sky-200 sm:text-2xl">{t.hero.role}</p>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    {t.hero.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      className="inline-flex items-center gap-2 rounded bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:bg-fuchsia-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-200"
                      href={commonData.cv[language]}
                    >
                      {t.hero.downloadCv}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                    <a
                      className="inline-flex items-center rounded border border-sky-300/40 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
                      href={`mailto:${commonData.contact.email}`}
                    >
                      {t.hero.contact}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative mx-auto aspect-square w-full max-w-md"
                  initial={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/25 via-sky-400/20 to-pink-400/25 blur-3xl" />
                  <img
                    alt={t.hero.avatarAlt}
                    className="relative h-full w-full rounded-full border border-white/10 object-cover shadow-2xl shadow-sky-500/10"
                    decoding="async"
                    loading="lazy"
                    src={commonData.avatar}
                  />
                </motion.div>
              </div>
            </section>
          </main>
        }
      />
    </Routes>
  )
}

export default App
