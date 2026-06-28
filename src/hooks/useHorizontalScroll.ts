import { useEffect, useRef } from 'react'

type UseHorizontalScrollOptions = {
  enabled: boolean
  first: () => void
  isAnimating: boolean
  last: () => void
  next: () => void
  previous: () => void
}

const wheelThreshold = 18
const swipeThreshold = 44

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return Boolean(target.closest('input, textarea, select, button, [contenteditable="true"]'))
}

export function useHorizontalScroll({
  enabled,
  first,
  isAnimating,
  last,
  next,
  previous,
}: UseHorizontalScrollOptions) {
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => {
    if (!enabled) {
      return
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()

      if (isAnimating) {
        return
      }

      const primaryDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY

      if (Math.abs(primaryDelta) < wheelThreshold) {
        return
      }

      if (primaryDelta > 0) {
        next()
      } else {
        previous()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target) || isAnimating) {
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault()
        next()
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        previous()
      }

      if (event.key === 'Home') {
        event.preventDefault()
        first()
      }

      if (event.key === 'End') {
        event.preventDefault()
        last()
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0]
      touchStartX.current = touch.clientX
      touchStartY.current = touch.clientY
    }

    const handleTouchEnd = (event: TouchEvent) => {
      if (isAnimating) {
        return
      }

      const touch = event.changedTouches[0]
      const deltaX = touch.clientX - touchStartX.current
      const deltaY = touch.clientY - touchStartY.current

      if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) < Math.abs(deltaY)) {
        return
      }

      if (deltaX < 0) {
        next()
      } else {
        previous()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [enabled, first, isAnimating, last, next, previous])
}
