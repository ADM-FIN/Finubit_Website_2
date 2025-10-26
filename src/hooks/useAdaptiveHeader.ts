import { useState, useEffect, useCallback } from 'react'

interface AdaptiveHeaderColors {
  textColor: string
  backgroundColor: string
  borderColor: string
  boxShadow: string
  logoSrc: string
  logoFilter: string
}

export const useAdaptiveHeader = () => {
  const [colors, setColors] = useState<AdaptiveHeaderColors>({
    textColor: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.015)',
    borderColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
    logoSrc: '/logo_transparent_white.png',
    logoFilter: 'brightness(0) invert(1)' // Make transparent logo white
  })

  const [isDarkBackground, setIsDarkBackground] = useState(true)

  const detectBackgroundColor = useCallback(() => {
    const headerHeight = 116 // header top (16px) + height (100px)
    const detectionPoint = headerHeight + 50 // Point to sample background color

    // Get the section elements that could be behind the header
    const sections = document.querySelectorAll('section')
    let currentSection: Element | null = null

    // Find which section is currently behind the header
    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= detectionPoint && rect.bottom >= detectionPoint) {
        currentSection = section
      }
    })

    if (currentSection) {
      const computedStyle = window.getComputedStyle(currentSection)
      const backgroundColor = computedStyle.backgroundColor

      // Check if background is light or dark
      const isLight = isLightColor(backgroundColor)
      const newIsDarkBackground = !isLight

      // Only update if the background type has changed (performance optimization)
      if (newIsDarkBackground !== isDarkBackground) {
        setIsDarkBackground(newIsDarkBackground)
        setColors(isLight ? getLightBackgroundColors() : getDarkBackgroundColors())
      }
    }
  }, [isDarkBackground])

  useEffect(() => {
    // Initial detection
    detectBackgroundColor()

    // Throttled scroll handler
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectBackgroundColor()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', detectBackgroundColor)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', detectBackgroundColor)
    }
  }, [detectBackgroundColor])

  return { colors, isDarkBackground }
}

// Helper function to determine if a color is light
const isLightColor = (color: string): boolean => {
  // Handle different color formats
  if (color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
    return false // Default to dark for transparent
  }

  // Extract RGB values
  const rgb = color.match(/\d+/g)
  if (!rgb || rgb.length < 3) return false

  const r = parseInt(rgb[0])
  const g = parseInt(rgb[1])
  const b = parseInt(rgb[2])

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5
}

// Dark background colors (current default) - white logo
const getDarkBackgroundColors = (): AdaptiveHeaderColors => ({
  textColor: '#ffffff',
  backgroundColor: 'rgba(255, 255, 255, 0.015)',
  borderColor: 'rgba(255, 255, 255, 0.05)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
  logoSrc: '/logo_transparent_white.png',
  logoFilter: 'brightness(0) invert(1)' // Make transparent logo white
})

// Light background colors - black logo
const getLightBackgroundColors = (): AdaptiveHeaderColors => ({
  textColor: '#000000',
  backgroundColor: 'rgba(0, 0, 0, 0.025)',
  borderColor: 'rgba(0, 0, 0, 0.08)',
  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(0, 0, 0, 0.06)',
  logoSrc: '/logo_transparent_white.png',
  logoFilter: 'brightness(0) invert(0)' // Make transparent logo black
})