import React from 'react'
import styles from './ProductPage.module.css'

export const BankManager: React.FC = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <span className={styles.productCategory}>Product</span>
            <h1 className={styles.productTitle}>Bank Manager</h1>
            <p className={styles.productSubtitle}>Complete Banking Operations Platform</p>
            <p className={styles.productDescription}>
              Comprehensive management system that enables banks to oversee all operations from a single, unified interface. Bank Manager provides real-time monitoring, transaction oversight, and complete administrative control over banking processes with advanced security and compliance features.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <h3 className={styles.sectionSubtitle}>Centralized Control & Monitoring</h3>
            <p className={styles.sectionText}>
              Comprehensive management system that enables banks to oversee all operations from a single, unified interface. Bank Manager provides real-time monitoring, transaction oversight, and complete administrative control over banking processes with advanced security and compliance features.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Features</h2>
            <h3 className={styles.sectionSubtitle}>Powerful Management Tools</h3>
            <p className={styles.sectionText}>
              Real-time dashboard with comprehensive analytics, automated compliance reporting, risk monitoring, user access control, and transaction oversight. Seamlessly integrates with all banking systems to provide a unified view of operations.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>Real-time Dashboard</h4>
                <p>Comprehensive analytics and monitoring in real-time</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Compliance Reporting</h4>
                <p>Automated regulatory compliance and reporting tools</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Risk Monitoring</h4>
                <p>Advanced risk assessment and monitoring systems</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Access Control</h4>
                <p>Sophisticated user access and permission management</p>
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
                  <h4>Unified Operations</h4>
                  <p>Manage all banking operations from a single platform</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Enhanced Security</h4>
                  <p>Advanced security features and compliance monitoring</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Real-time Insights</h4>
                  <p>Immediate visibility into all banking processes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}