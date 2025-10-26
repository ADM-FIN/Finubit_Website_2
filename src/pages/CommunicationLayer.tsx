import React from 'react'
import styles from './ProductPage.module.css'

export const CommunicationLayer: React.FC = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <span className={styles.productCategory}>Product</span>
            <h1 className={styles.productTitle}>Abstract Communication Layer</h1>
            <p className={styles.productSubtitle}>Seamless Integration & Connectivity</p>
            <p className={styles.productDescription}>
              Advanced middleware solution that abstracts complex communication protocols and provides unified APIs for seamless integration. Enables banks to connect with external systems, partners, and services through standardized interfaces while maintaining security and compliance.
            </p>
          </div>
        </section>

        {/* Integration Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Integration</h2>
            <h3 className={styles.sectionSubtitle}>Universal Connectivity</h3>
            <p className={styles.sectionText}>
              Advanced middleware solution that abstracts complex communication protocols and provides unified APIs for seamless integration. Enables banks to connect with external systems, partners, and services through standardized interfaces while maintaining security and compliance.
            </p>
          </div>
        </section>

        {/* Protocols Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Protocols</h2>
            <h3 className={styles.sectionSubtitle}>Multi-Protocol Support</h3>
            <p className={styles.sectionText}>
              Supports REST, SOAP, GraphQL, gRPC, and WebSocket protocols. Automatic protocol translation, message routing, load balancing, and comprehensive monitoring. Ensures reliable communication across all banking systems.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>REST & GraphQL</h4>
                <p>Modern API protocols for web-based integrations</p>
              </div>
              <div className={styles.featureCard}>
                <h4>SOAP & gRPC</h4>
                <p>Enterprise-grade protocols for secure communications</p>
              </div>
              <div className={styles.featureCard}>
                <h4>WebSocket</h4>
                <p>Real-time bidirectional communication support</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Protocol Translation</h4>
                <p>Automatic translation between different protocols</p>
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
                  <h4>Universal Integration</h4>
                  <p>Connect with any system using standardized interfaces</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Protocol Agnostic</h4>
                  <p>Support for all major communication protocols</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Secure & Compliant</h4>
                  <p>Built-in security and compliance monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}