import React, { useEffect, useState, useCallback, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import styles from './ModernMouseEffects.module.css'

// Throttle utility function for performance
const throttle = <T extends (...args: any[]) => any>(func: T, delay: number): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let lastExecTime = 0
  return ((...args: Parameters<T>) => {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }) as T
}

export const ModernMouseEffects: React.FC = () => {
  const location = useLocation()
  const [isMoving, setIsMoving] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(false)

  // Cache DOM elements and their bounds
  const heroElementRef = useRef<Element | null>(null)
  const heroBoundsRef = useRef<DOMRect | null>(null)
  const lastBoundsUpdate = useRef<number>(0)
  const moveTimeoutRef = useRef<number | undefined>(undefined)

  // Only show effects on home page for performance
  const isHomePage = location.pathname === '/'

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Smooth cursor position with spring physics
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const eclipseX = useMotionValue(0)
  const eclipseY = useMotionValue(0)

  // Optimized physics settings - reduced calculations for better performance
  const cursorSpringConfig = prefersReducedMotion
    ? { damping: 100, stiffness: 1000, mass: 0.1 } // Instant movement for reduced motion
    : { damping: 35, stiffness: 300, mass: 0.2 } // Smoother but less CPU intensive

  const cursorXSpring = useSpring(cursorX, cursorSpringConfig)
  const cursorYSpring = useSpring(cursorY, cursorSpringConfig)

  // Simplified eclipse effect with conditional physics
  const eclipseSpringConfig = prefersReducedMotion
    ? { damping: 100, stiffness: 1000, mass: 0.1 } // Instant for reduced motion
    : { damping: 60, stiffness: 80, mass: 1.5 } // More performant settings

  const eclipseXSpring = useSpring(eclipseX, eclipseSpringConfig)
  const eclipseYSpring = useSpring(eclipseY, eclipseSpringConfig)

  // Throttled hero bounds update
  const updateHeroBounds = useCallback(() => {
    const now = Date.now()
    if (now - lastBoundsUpdate.current < 100) return // Throttle to 10fps

    if (!heroElementRef.current) {
      heroElementRef.current = document.querySelector('.hero')
    }

    if (heroElementRef.current) {
      heroBoundsRef.current = heroElementRef.current.getBoundingClientRect()
      lastBoundsUpdate.current = now
    }
  }, [])

  // Base mouse movement handler (without throttling)
  const baseMoveHandler = useCallback((e: MouseEvent) => {
    // Always update cursor position
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)

    // Only do expensive calculations on home page
    if (!isHomePage) return

    // Update hero bounds occasionally
    updateHeroBounds()

    // Check hero section with cached bounds
    if (heroBoundsRef.current) {
      const bounds = heroBoundsRef.current
      const isInHero = (
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom
      )

      if (isInHero !== isInHeroSection) {
        setIsInHeroSection(isInHero)
      }

      if (isInHero) {
        eclipseX.set(e.clientX - 400)
        eclipseY.set(e.clientY - 400)
      }
    }

    // Throttled moving state update
    if (!isMoving) {
      setIsMoving(true)
    }

    clearTimeout(moveTimeoutRef.current)
    moveTimeoutRef.current = setTimeout(() => {
      setIsMoving(false)
    }, 200)
  }, [cursorX, cursorY, eclipseX, eclipseY, isMoving, isInHeroSection, isHomePage, updateHeroBounds])

  // Throttled version for performance (16ms = ~60fps)
  const moveCursor = useCallback(
    throttle(baseMoveHandler, 16),
    [baseMoveHandler]
  )

  useEffect(() => {
    // Reset cache when page changes
    heroElementRef.current = null
    heroBoundsRef.current = null
    setIsInHeroSection(false)
  }, [location.pathname])

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Cache interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .interactive'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      clearTimeout(moveTimeoutRef.current)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [moveCursor])

  return (
    <>
      {/* Small Dot Cursor */}
      <motion.div
        className={styles.smallCursor}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Eclipse Effect - Only on Home Page and in Hero Section (disabled for reduced motion) */}
      {isHomePage && !prefersReducedMotion && (
        <motion.div
          className={styles.eclipseFollower}
          style={{
            left: eclipseXSpring,
            top: eclipseYSpring,
          }}
          animate={{
            opacity: isInHeroSection && isMoving ? 0.4 : isInHeroSection ? 0.2 : 0,
            scale: isInHeroSection && isMoving ? 1 : 0.9,
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 30,
          }}
        />
      )}
    </>
  )
}

