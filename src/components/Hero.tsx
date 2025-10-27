import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { TypewriterEffect } from './TypewriterEffect'
import { CloudsAnimation } from './CloudsAnimation'
import styles from './Hero.module.css'

export const Hero: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  // Static background - no moving glow effect

  return (
    <section className={`${styles.hero} hero`} ref={ref}>
      {/* Static Background */}
      <div className={styles.background} />


      {/* Split Text Layout */}
      {/* Next Generation - Top Left */}
      <motion.div
        className={styles.topLeftText}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <TypewriterEffect
          text="Next Generation"
          className={styles.bigHeadline}
          speed={120}
          delay={1000}
        />
      </motion.div>

      {/* Clouds Animation - Middle Layer */}
      <CloudsAnimation />

      {/* Core Banking - Bottom Right */}
      <motion.div
        className={styles.bottomRightText}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <TypewriterEffect
          text="Core Banking"
          className={styles.bigHeadline}
          speed={120}
          delay={2500}
        />
      </motion.div>

      {/* Noise and Vignette Overlays */}
      <div className={styles.noiseOverlay} />
      <div className={styles.vignetteOverlay} />
    </section>
  )
}