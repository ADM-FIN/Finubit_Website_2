import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './ScrollProgressBar.module.css'

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let hideTimeout: number

    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(Math.min(scrollPercent, 100))

      // Show progress bar when scrolling
      if (scrollTop > 100) {
        setIsVisible(true)

        // Clear existing timeout
        if (hideTimeout) {
          clearTimeout(hideTimeout)
        }

        // Hide after 2 seconds of no scrolling
        hideTimeout = window.setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      } else {
        setIsVisible(false)
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll)

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
    }
  }, [])

  return (
    <motion.div
      className={styles.progressContainer}
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }}
    >
      {/* Background track */}
      <div className={styles.progressTrack}>
        {/* Progress fill */}
        <motion.div
          className={styles.progressFill}
          style={{ height: `${scrollProgress}%` }}
          transition={{
            duration: 0.1,
            ease: 'easeOut'
          }}
        />
      </div>

      {/* Progress percentage text */}
      <div className={styles.progressText}>
        {Math.round(scrollProgress)}%
      </div>
    </motion.div>
  )
}