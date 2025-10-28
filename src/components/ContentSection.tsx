import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ContentSection.module.css'

interface ContentSectionProps {
  id: string
  title: string
  subtitle?: string
  description: string
  fontFamily?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundPosition?: string
  textColor?: string
  rightAnimation?: React.ReactNode
  leftAnimation?: React.ReactNode
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  fontFamily = 'Inter',
  backgroundColor,
  backgroundImage,
  backgroundPosition = 'center',
  textColor,
  rightAnimation,
  leftAnimation
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={styles.contentSection}
      style={{
        backgroundColor: backgroundColor || undefined,
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background overlay for text readability */}
      {backgroundImage && (
        <div className={styles.backgroundOverlay} />
      )}

      {rightAnimation ? (
        /* Split Layout: Text Left, Animation Right */
        <div className={styles.splitContainer}>
          <div className={styles.textCenter} style={{ color: textColor || undefined }}>
            <h2 className={styles.title} style={{ fontFamily, color: textColor || undefined }}>{title}</h2>
            {subtitle && (
              <h3 className={styles.subtitle} style={{ fontFamily, color: textColor || undefined }}>{subtitle}</h3>
            )}
            <p className={styles.description} style={{ fontFamily, color: textColor || undefined }}>{description}</p>
          </div>
          <div className={styles.animationRight}>
            {rightAnimation}
          </div>
        </div>
      ) : leftAnimation ? (
        /* Split Layout: Animation Left, Text Right */
        <div className={styles.splitContainer}>
          <div className={styles.animationLeft}>
            {leftAnimation}
          </div>
          <div className={styles.textCenter} style={{ color: textColor || undefined }}>
            <h2 className={styles.title} style={{ fontFamily, color: textColor || undefined }}>{title}</h2>
            {subtitle && (
              <h3 className={styles.subtitle} style={{ fontFamily, color: textColor || undefined }}>{subtitle}</h3>
            )}
            <p className={styles.description} style={{ fontFamily, color: textColor || undefined }}>{description}</p>
          </div>
        </div>
      ) : (
        /* Centered Layout */
        <div className={styles.container} style={{ color: textColor || undefined }}>
          <h2 className={styles.title} style={{ fontFamily, color: textColor || undefined }}>{title}</h2>
          {subtitle && (
            <h3 className={styles.subtitle} style={{ fontFamily, color: textColor || undefined }}>{subtitle}</h3>
          )}
          <p className={styles.description} style={{ fontFamily, color: textColor || undefined }}>{description}</p>
        </div>
      )}
    </motion.section>
  )
}