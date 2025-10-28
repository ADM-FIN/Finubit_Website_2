import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  onComplete?: () => void
}

const TypewriterEffectComponent: React.FC<TypewriterEffectProps> = ({
  text,
  className = '',
  speed = 50,
  delay = 0,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeoutId: number

    const startTyping = () => {
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          onComplete?.()

          // Hide cursor after completion
          setTimeout(() => {
            setShowCursor(false)
          }, 1000)
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay)
    } else {
      startTyping()
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text, speed, delay, onComplete])

  return (
    <div className={className}>
      <span>
        {displayText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ marginLeft: '2px' }}
          >
            |
          </motion.span>
        )}
      </span>
    </div>
  )
}

// Memoized export for performance
export const TypewriterEffect = React.memo(TypewriterEffectComponent)