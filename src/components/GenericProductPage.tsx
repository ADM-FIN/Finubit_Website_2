import React from 'react'
import styles from './ProductPage.module.css'

interface ProductSection {
  id: string
  title: string
  subtitle: string
  description: string
  imageUrl?: string
  imageAlt?: string
  features?: string[]
}

interface GenericProductPageProps {
  // Hero section
  category: string
  title: string
  subtitle: string
  description: string

  // Dynamic sections
  sections: ProductSection[]

  // Styling options
  backgroundColor?: 'black' | 'white'
  className?: string
}

export const GenericProductPage: React.FC<GenericProductPageProps> = ({
  category,
  title,
  subtitle,
  description,
  sections,
  backgroundColor = 'black',
  className = ''
}) => {
  const pageClasses = `${styles.productPage} ${backgroundColor === 'white' ? styles.whiteBackground : ''} ${className}`

  return (
    <div className={pageClasses}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <span className={styles.productCategory}>{category}</span>
            <h1 className={styles.productTitle}>{title}</h1>
            <p className={styles.productSubtitle}>{subtitle}</p>
            <p className={styles.productDescription}>{description}</p>
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section) => (
          <section key={section.id} className={styles.section}>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <h3 className={styles.sectionSubtitle}>{section.subtitle}</h3>
              <p className={styles.sectionText}>{section.description}</p>

              {/* Image Section */}
              {section.imageUrl && (
                <div className={styles.imageContainer}>
                  <img
                    src={section.imageUrl}
                    alt={section.imageAlt || section.title}
                    className={styles.sectionImage}
                  />
                </div>
              )}

              {/* Features List */}
              {section.features && section.features.length > 0 && (
                <div className={styles.featureGrid}>
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.featureCard}>
                      <h4>{feature}</h4>
                      <p>Feature description will be added later</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Benefits Section Template */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Benefits</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>01</span>
                <div>
                  <h4>Benefit Title 1</h4>
                  <p>Benefit description will be added later</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Benefit Title 2</h4>
                  <p>Benefit description will be added later</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Benefit Title 3</h4>
                  <p>Benefit description will be added later</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Example usage data structure for easy customization:
export const SAMPLE_PRODUCT_DATA = {
  category: "Product",
  title: "Product Name",
  subtitle: "Product Tagline",
  description: "Product overview description that explains the main value proposition.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      subtitle: "What This Product Does",
      description: "Detailed description of the product's main functionality and purpose.",
      imageUrl: "/path/to/image.jpg", // Optional
      imageAlt: "Product overview image"
    },
    {
      id: "features",
      title: "Features",
      subtitle: "Key Capabilities",
      description: "Description of the main features and capabilities.",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] // Optional
    },
    {
      id: "technical",
      title: "Technical Specs",
      subtitle: "Under the Hood",
      description: "Technical details and specifications."
    }
  ]
}