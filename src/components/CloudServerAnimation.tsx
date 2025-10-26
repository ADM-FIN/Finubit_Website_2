import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import styles from './CloudServerAnimation.module.css'

interface CloudServerAnimationProps {
  className?: string
}

export const CloudServerAnimation: React.FC<CloudServerAnimationProps> = ({ className }) => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the animation JSON file
    fetch('/cloud_server_animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Failed to load animation:', error))
  }, [])

  if (!animationData) {
    return null // or loading spinner
  }

  return (
    <div className={`${styles.cloudAnimation} ${className || ''}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: '750px', /* 3x bigger: from 250px to 750px */
          height: '600px' /* 3x bigger: from 200px to 600px */
        }}
      />
    </div>
  )
}