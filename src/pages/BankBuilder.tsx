import React from 'react'
import styles from './ProductPage.module.css'

export const BankBuilder: React.FC = () => {
  return (
    <div className={`${styles.productPage} ${styles.whiteBackground}`}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.productHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.productTitle}>Bank Builder</h1>
            <p className={styles.productSubtitle}>Build Banking Processes Without Code</p>
            <p className={styles.productDescription}>
              Transform how your bank creates and manages business processes. Bank Builder lets your teams design, test, and deploy banking workflows using simple visual tools and AI assistance—no programming required. Turn weeks of development into hours of configuration.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <h3 className={styles.sectionSubtitle}>Three Simple Steps to Banking Automation</h3>
            <p className={styles.sectionText}>
              Bank Builder makes complex banking process creation as simple as describing what you need. Our AI understands your requirements and creates complete workflows that your team can customize, test, and deploy with confidence.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>1. Describe Your Process</h4>
                <p>Simply tell our AI what business process you need in plain English. No technical knowledge required.</p>
              </div>
              <div className={styles.featureCard}>
                <h4>2. Visual Workflow Creation</h4>
                <p>Watch as your process is automatically built using pre-made components. Customize with drag-and-drop.</p>
              </div>
              <div className={styles.featureCard}>
                <h4>3. Test & Deploy Safely</h4>
                <p>Validate your workflow with our "Sleep Well" testing tool before going live. No surprises, no downtime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <h3 className={styles.sectionSubtitle}>Everything You Need to Build Better Banking</h3>
            <p className={styles.sectionText}>
              Bank Builder comes with a comprehensive toolkit of pre-built components and intelligent features designed specifically for banking operations. From simple approvals to complex multi-step processes, we've got you covered.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>AI-Powered Creation</h4>
                <p>Describe your needs in plain language and watch AI create complete workflows automatically</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Ready-Made Activities</h4>
                <p>Library of banking-specific building blocks: APIs, databases, core systems, and more</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Visual Flow Builder</h4>
                <p>Drag-and-drop interface that anyone can use—no technical background needed</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Safe Testing Tools</h4>
                <p>Validate changes before they go live with our comprehensive testing environment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Bank Builder Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Why Choose Bank Builder</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>01</span>
                <div>
                  <h4>Speed That Changes Everything</h4>
                  <p>What used to take months of development now takes hours of configuration. Get new processes live fast.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>02</span>
                <div>
                  <h4>Empower Your Teams</h4>
                  <p>Product managers and business analysts can build processes independently—no waiting for IT.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>03</span>
                <div>
                  <h4>Built for Banking</h4>
                  <p>Every component understands banking—compliance, security, and regulatory requirements are built-in.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}