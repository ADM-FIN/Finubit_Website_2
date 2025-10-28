import React from 'react'
import styles from './ProductPage.module.css'

export const BankManager: React.FC = () => {
  return (
    <div className={`${styles.productPage} ${styles.whiteBackground}`}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.productTitle}>Bank Manager</h1>
            <p className={styles.productSubtitle}>Smart Deposit Product Management</p>
            <p className={styles.productDescription}>
              Revolutionize how your bank creates and manages deposit products. Bank Manager streamlines the entire lifecycle—from product design and pricing to compliance and approval—all in one intelligent platform that ensures regulatory compliance and operational efficiency.
            </p>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>From Manual to Automated</h2>
            <h3 className={styles.sectionSubtitle}>End the Era of Email Approvals and Manual Templates</h3>
            <p className={styles.sectionText}>
              Stop managing deposit products through scattered Word documents, email chains, and manual processes. Bank Manager brings everything into one unified system with automated workflows, real-time simulations, and built-in compliance tracking. What used to take weeks now takes minutes.
            </p>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Key Capabilities</h2>
            <h3 className={styles.sectionSubtitle}>Everything You Need for Modern Deposit Management</h3>
            <p className={styles.sectionText}>
              Bank Manager handles the complete deposit product lifecycle with intelligent automation, built-in compliance, and real-time market simulations. Designed specifically for banking teams who need speed, accuracy, and regulatory confidence.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>Smart Product Creation</h4>
                <p>Build deposit products with guided templates that automatically handle regulatory requirements</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Real-Time Pricing</h4>
                <p>Simulate and optimize rates with live market data and transfer pricing integration</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Automated Approvals</h4>
                <p>Four-eyes approval workflow with audit trails and SOX compliance built-in</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Instant Compliance</h4>
                <p>Generate SOX reports and regulatory documentation automatically—no manual work</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Why Choose Bank Manager</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>01</span>
                <div>
                  <h4>From Weeks to Minutes</h4>
                  <p>Transform slow, manual deposit creation into fast, automated workflows with built-in compliance.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Zero Manual Errors</h4>
                  <p>Eliminate spreadsheet mistakes and email confusion with automated validation and approval tracking.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Regulatory Confidence</h4>
                  <p>SOX reports and compliance documentation generated automatically—no manual work required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}