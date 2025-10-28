import React from 'react'
import styles from './ProductPage.module.css'

export const Core: React.FC = () => {
  return (
    <div className={`${styles.productPage} ${styles.whiteBackground}`}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.productTitle}>Core</h1>
            <p className={styles.productSubtitle}>Next-Generation Banking Engine</p>
            <p className={styles.productDescription}>
              The foundational banking system that powers everything. Built on modern architecture with real-time processing, event-driven design, and cloud-native infrastructure. Core handles all critical banking operations including transactions, accounts, and ledger management with unparalleled reliability and performance.
            </p>
          </div>
        </section>

        {/* Foundation Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Foundation</h2>
            <h3 className={styles.sectionSubtitle}>Modern Banking Architecture</h3>
            <p className={styles.sectionText}>
              The foundational banking system that powers everything. Built on modern architecture with real-time processing, event-driven design, and cloud-native infrastructure. Core handles all critical banking operations including transactions, accounts, and ledger management with unparalleled reliability and performance.
            </p>
          </div>
        </section>

        {/* Performance Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Performance</h2>
            <h3 className={styles.sectionSubtitle}>Enterprise-Grade Reliability</h3>
            <p className={styles.sectionText}>
              Event-driven microservices architecture, real-time transaction processing, automated scaling, comprehensive monitoring, and 99.99% uptime guarantee. Processes millions of transactions per second with millisecond latency.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>Event-Driven</h4>
                <p>Microservices architecture with event sourcing</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Real-Time Processing</h4>
                <p>Millisecond latency transaction processing</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Auto-Scaling</h4>
                <p>Automatic scaling based on demand</p>
              </div>
              <div className={styles.featureCard}>
                <h4>99.99% Uptime</h4>
                <p>Enterprise-grade reliability and monitoring</p>
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
                  <h4>Millions of TPS</h4>
                  <p>Process millions of transactions per second</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Cloud-Native</h4>
                  <p>Built for modern cloud infrastructure</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Event Sourcing</h4>
                  <p>Complete audit trail with event sourcing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}