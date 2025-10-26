import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import styles from './CloudsAnimation.module.css'

interface CloudsAnimationProps {
  className?: string
}

export const CloudsAnimation: React.FC<CloudsAnimationProps> = ({ className }) => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the clouds animation JSON file
    fetch('/clouds_animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Failed to load clouds animation:', error))
  }, [])

  if (!animationData) {
    return null // or loading spinner
  }

  return (
    <div className={`${styles.cloudsAnimation} ${className || ''}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: '100vw', // Full screen width
          height: '60vh', // Cover good portion of screen height
          imageRendering: 'auto',
          transform: 'translateZ(0)',
        }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice', // Changed to 'slice' to fill container
          progressiveLoad: false,
          hideOnTransparent: true
        }}
      />
    </div>
  )
}