import React from 'react'
import styles from './ProductPage.module.css'

export const BankBuilder: React.FC = () => {
  return (
    <div className={`${styles.productPage} ${styles.whiteBackground}`}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <span className={styles.productCategory}>Product</span>
            <h1 className={styles.productTitle}>Bank Builder</h1>
            <p className={styles.productSubtitle}>Rapid Banking Infrastructure Development</p>
            <p className={styles.productDescription}>
              Revolutionary platform that enables financial institutions to build and deploy banking solutions at unprecedented speed. Bank Builder provides modular components, pre-built templates, and automated deployment tools to create custom banking experiences in weeks, not years.
            </p>
          </div>
        </section>

        {/* Platform Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Platform</h2>
            <h3 className={styles.sectionSubtitle}>Build Banking Solutions Fast</h3>
            <p className={styles.sectionText}>
              Revolutionary platform that enables financial institutions to build and deploy banking solutions at unprecedented speed. Bank Builder provides modular components, pre-built templates, and automated deployment tools to create custom banking experiences in weeks, not years.
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Capabilities</h2>
            <h3 className={styles.sectionSubtitle}>Modular Architecture</h3>
            <p className={styles.sectionText}>
              Drag-and-drop interface builder, pre-configured banking modules, automated testing and deployment, cloud-native infrastructure, and seamless integration with existing systems. Reduce development time from months to weeks.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>Drag-and-Drop Builder</h4>
                <p>Visual interface builder with pre-configured components</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Banking Modules</h4>
                <p>Pre-built modules for common banking functions</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Automated Deployment</h4>
                <p>One-click deployment with automated testing</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Cloud-Native</h4>
                <p>Built for modern cloud infrastructure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Benefits</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>01</span>
                <div>
                  <h4>Rapid Development</h4>
                  <p>Build banking solutions in weeks instead of months or years</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Cost Effective</h4>
                  <p>Reduce development costs with pre-built components</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Scalable Solutions</h4>
                  <p>Built to scale with your growing business needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}