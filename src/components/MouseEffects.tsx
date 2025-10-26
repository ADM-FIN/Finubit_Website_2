import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './MouseEffects.module.css'

export const MouseEffects: React.FC = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className={styles.cursor}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />

      {/* Mouse Trail */}
      <MouseTrail />
    </>
  )
}

const MouseTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null)
  const trail = useRef<Array<{ x: number; y: number; timestamp: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add new trail point
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      })

      // Limit trail length
      if (trail.current.length > 20) {
        trail.current.shift()
      }

      // Create visual trail element
      const trailElement = document.createElement('div')
      trailElement.className = styles.trailPoint
      trailElement.style.left = `${e.clientX - 15}px`
      trailElement.style.top = `${e.clientY - 15}px`

      if (trailRef.current) {
        trailRef.current.appendChild(trailElement)
      }

      // Animate and remove
      requestAnimationFrame(() => {
        trailElement.style.opacity = '0'
        trailElement.style.transform = 'scale(2)'
      })

      setTimeout(() => {
        if (trailElement.parentNode) {
          trailElement.parentNode.removeChild(trailElement)
        }
      }, 800)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div ref={trailRef} className={styles.trailContainer} />
}