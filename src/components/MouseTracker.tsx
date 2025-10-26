import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './MouseTracker.module.css'

export const MouseTracker: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 400 }
  const mouseX = useSpring(x, springConfig)
  const mouseY = useSpring(y, springConfig)

  useEffect(() => {
    let timeoutId: number

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 100)
      y.set(e.clientY - 100)

      if (imageRef.current) {
        imageRef.current.style.opacity = '0.6'
        imageRef.current.style.transform = 'scale(1)'
        imageRef.current.style.filter = 'blur(0px)'
      }

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.opacity = '0'
          imageRef.current.style.transform = 'scale(0.5)'
          imageRef.current.style.filter = 'blur(5px)'
        }
      }, 150)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [x, y])

  return (
    <motion.div
      ref={imageRef}
      className={styles.imageFollower}
      style={{
        left: mouseX,
        top: mouseY,
      }}
    />
  )
}