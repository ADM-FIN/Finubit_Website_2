import React from 'react'
import styles from './ProductPage.module.css'

export const BusinessProcess: React.FC = () => {
  return (
    <div className={`${styles.productPage} ${styles.whiteBackground}`}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.productTitle}>Business Processes</h1>
            <p className={styles.productSubtitle}>Intelligent Process Automation</p>
            <p className={styles.productDescription}>
              Comprehensive business process management solution that automates complex banking workflows. Streamlines operations from loan processing to compliance reporting with intelligent routing, approval chains, and real-time monitoring for maximum efficiency and accuracy.
            </p>
          </div>
        </section>

        {/* Automation Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Automation</h2>
            <h3 className={styles.sectionSubtitle}>Streamlined Workflows</h3>
            <p className={styles.sectionText}>
              Comprehensive business process management solution that automates complex banking workflows. Streamlines operations from loan processing to compliance reporting with intelligent routing, approval chains, and real-time monitoring for maximum efficiency and accuracy.
            </p>
          </div>
        </section>

        {/* Workflows Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Workflows</h2>
            <h3 className={styles.sectionSubtitle}>Intelligent Routing</h3>
            <p className={styles.sectionText}>
              Visual workflow designer, automated approval chains, exception handling, real-time monitoring, and comprehensive audit trails. Reduces processing time by up to 80% while ensuring compliance and accuracy.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>Visual Designer</h4>
                <p>Drag-and-drop workflow designer with intuitive interface</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Approval Chains</h4>
                <p>Automated approval routing based on business rules</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Exception Handling</h4>
                <p>Intelligent error handling and recovery mechanisms</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Audit Trails</h4>
                <p>Comprehensive logging and audit trail generation</p>
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
                  <h4>80% Faster Processing</h4>
                  <p>Dramatically reduce processing time with automation</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Compliance Ready</h4>
                  <p>Built-in compliance monitoring and reporting</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Real-time Monitoring</h4>
                  <p>Live process monitoring and performance analytics</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}