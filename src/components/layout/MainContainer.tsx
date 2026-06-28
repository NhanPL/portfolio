import type { PropsWithChildren } from 'react'

export function MainContainer({ children }: PropsWithChildren) {
  return (
    <main className="h-screen overflow-hidden outline-none" id="main-content" tabIndex={-1}>
      {children}
    </main>
  )
}
