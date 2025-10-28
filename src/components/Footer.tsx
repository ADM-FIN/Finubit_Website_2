import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Footer.module.css'

export const Footer: React.FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Statement - Only on Home Page */}
        {isHomePage && (
          <div className={styles.mainSection}>
            <h1 className={styles.statement}>
              Your bank is probably old
            </h1>
            <p className={styles.contactEmail}>
              contact: info@finubit.com
            </p>
          </div>
        )}

        {/* Footer Content */}
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <span className={styles.logoText}>Finubit</span>
            </div>
            <p className={styles.companyTagline}>Next Generation Core Banking</p>
            <p className={styles.companyDescription}>
              Transforming financial services through innovative technology and deep industry expertise.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#bank-manager">Products</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <ul className={styles.linkList}>
              <li><a href="mailto:info@finubit.com">info@finubit.com</a></li>
              <li><a href="mailto:careers@finubit.com">careers@finubit.com</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2024 Finubit. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}