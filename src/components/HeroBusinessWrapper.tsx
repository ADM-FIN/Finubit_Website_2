import React from 'react'
import { Hero } from './Hero'
import { ContentSection } from './ContentSection'
import { CloudServerAnimation } from './CloudServerAnimation'
import styles from './HeroBusinessWrapper.module.css'

export const HeroBusinessWrapper: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* Extended Hero Background */}
      <div className={styles.extendedBackground} />

      {/* Hero Section */}
      <Hero />

      {/* Business Transformation Section */}
      <ContentSection
        id="business-transformation"
        title="Business Transformation"
        subtitle="Rebuilding Banking from the Core"
        description="Finubit works with Bank Leumi to create deep business transformation. We begin at the core, reimagining the legacy systems that power the industry, and lead banks through a complete reinvention of their most essential processes. From infrastructure to operations, we build for the future."
        fontFamily="Inter"
        backgroundColor="transparent" // Remove background to show hero image
        rightAnimation={<CloudServerAnimation />}
      />
    </div>
  )
}