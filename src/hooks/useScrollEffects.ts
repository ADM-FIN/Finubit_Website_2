import { useEffect } from 'react'

export const useScrollEffects = () => {
  useEffect(() => {
    let scrollTarget = window.pageYOffset
    let scrollCurrent = scrollTarget
    const ease = 0.08

    // Disable default smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto'

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      const delta = e.deltaY
      const scrollAmount = delta * 1.5

      scrollTarget += scrollAmount
      scrollTarget = Math.max(
        0,
        Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight)
      )
    }

    const handleScroll = () => {
      if (Math.abs(window.pageYOffset - scrollCurrent) > 1) {
        scrollTarget = window.pageYOffset
      }
    }

    const smoothScrollLoop = () => {
      scrollCurrent += (scrollTarget - scrollCurrent) * ease

      if (Math.abs(scrollTarget - scrollCurrent) > 0.1) {
        window.scrollTo(0, scrollCurrent)
      }

      requestAnimationFrame(smoothScrollLoop)
    }

    // Handle anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetElement = document.querySelector(target.getAttribute('href')!)
        if (targetElement) {
          scrollTarget = (targetElement as HTMLElement).offsetTop
        }
      }
    }

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleAnchorClick)

    // Start smooth scroll loop
    smoothScrollLoop()

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleAnchorClick)
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])
}