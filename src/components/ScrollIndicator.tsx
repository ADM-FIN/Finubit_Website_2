import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './ScrollIndicator.module.css'

export const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the arrow when user starts scrolling past the hero section
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight

      // Show arrow only when in hero section (first 80% of viewport height)
      setIsVisible(scrollY < heroHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bounceVariants = {
    animate: {
      y: [0, -8, 0]
    }
  }

  return (
    <motion.div
      className={`${styles.scrollIndicator} ${!isVisible ? styles.hidden : ''}`}
      variants={bounceVariants}
      animate={isVisible ? "animate" : ""}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        opacity: { duration: 0.5 }
      }}
    >
      <div className={styles.scrollArrow}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    </motion.div>
  )
}