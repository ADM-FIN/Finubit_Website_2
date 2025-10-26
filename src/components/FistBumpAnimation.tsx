import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import styles from './FistBumpAnimation.module.css'

interface FistBumpAnimationProps {
  className?: string
}

export const FistBumpAnimation: React.FC<FistBumpAnimationProps> = ({ className }) => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the fist bump animation JSON file
    fetch('/fist_bump_animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Failed to load fist bump animation:', error))
  }, [])

  if (!animationData) {
    return null // or loading spinner
  }

  return (
    <div className={`${styles.fistBumpAnimation} ${className || ''}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: '600px',
          height: '500px',
          imageRendering: 'auto',
          transform: 'translateZ(0)',
        }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: false,
          hideOnTransparent: true
        }}
      />
    </div>
  )
}