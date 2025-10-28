import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { TypewriterEffect } from './TypewriterEffect'
import { CloudsAnimation } from './CloudsAnimation'
import styles from './Hero.module.css'

export const Hero: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const [showTrusted, setShowTrusted] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  // Show trusted section after hero text loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrusted(true)
    }, 4000) // Show after 4 seconds

    return () => clearTimeout(timer)
  }, [])


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


      {/* Clouds Animation - Behind everything */}
      <CloudsAnimation />

      {/* Centered Text Layout */}
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className={styles.heroText}>
            <TypewriterEffect
              text="Next Generation Bank Operation System"
              className={styles.centeredHeadline}
              speed={80}
              delay={1000}
            />
            <div className={styles.subtitle}>
              Revolutionizing Banks, join the movement
            </div>
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          className={styles.trustedSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showTrusted ? 1 : 0,
            y: showTrusted ? 0 : 20
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className={styles.trustedContent}>
            <span className={styles.trustedText}>Trusted by</span>
            <img
              src="/BankLeumiLogoReupload.png"
              alt="Bank Leumi"
              className={styles.bankLogo}
            />
          </div>
        </motion.div>
      </div>


      {/* Noise and Vignette Overlays */}
      <div className={styles.noiseOverlay} />
      <div className={styles.vignetteOverlay} />
    </section>
  )
}