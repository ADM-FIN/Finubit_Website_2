import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { useAdaptiveHeader } from '../hooks/useAdaptiveHeader'
import styles from './Header.module.css'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const [scrollY, setScrollY] = useState(0)
  const { colors } = useAdaptiveHeader()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(`.${styles.productsSection}`) && !target.closest(`.${styles.navItem}`)) {
        setIsProductsDropdownOpen(false)
      }
    }

    if (isProductsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isProductsDropdownOpen])

  const headerVariants = {
    visible: {
      y: 0
    },
    hidden: {
      y: '-100%'
    }
  }

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      animate={scrollDirection === 'down' && scrollY > 100 ? 'hidden' : 'visible'}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        background: colors.backgroundColor,
        backdropFilter: scrollY > 50 ? 'blur(50px)' : 'blur(40px)',
        borderColor: colors.borderColor,
        boxShadow: colors.boxShadow,
        color: colors.textColor,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease, background 0.3s ease, border-color 0.3s ease'
      }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.left}>
          <Link to="/">
            <div className={styles.logo}>
              <img
                src={colors.logoSrc}
                alt="Finubit"
                className={styles.logoImage}
                style={{
                  filter: colors.logoFilter
                }}
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation & Mobile Menu Button */}
        <div className={styles.center}>
          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <div className={styles.navItem}>
              <div
                className={styles.productsButton}
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                style={{ color: colors.textColor }}
              >
                Products
                <span className={`${styles.dropdownArrow} ${isProductsDropdownOpen ? styles.rotated : ''}`}>
                  ▼
                </span>
              </div>
              {isProductsDropdownOpen && (
                <motion.div
                  className={styles.desktopProductsDropdown}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Link
                    to="/bank-builder"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    style={{ color: colors.textColor }}
                  >
                    Bank Builder
                  </Link>
                  <Link
                    to="/bank-manager"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    style={{ color: colors.textColor }}
                  >
                    Bank Manager
                  </Link>
                  <Link
                    to="/communication-layer"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    style={{ color: colors.textColor }}
                  >
                    Communication Layer
                  </Link>
                  <Link
                    to="/business-process"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    style={{ color: colors.textColor }}
                  >
                    Business Process
                  </Link>
                  <Link
                    to="/core"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    style={{ color: colors.textColor }}
                  >
                    Core
                  </Link>
                </motion.div>
              )}
            </div>
            <Link to="/team" className={styles.navLink} style={{ color: colors.textColor }}>
              Team
            </Link>
            <Link to="/careers" className={styles.navLink} style={{ color: colors.textColor }}>
              Careers
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: colors.textColor }}
          >
            <span className={styles.menuText}>
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
            <div className={styles.menuIcon}>
              <span style={{ backgroundColor: colors.textColor }}></span>
              <span style={{ backgroundColor: colors.textColor }}></span>
              <span style={{ backgroundColor: colors.textColor }}></span>
            </div>
          </motion.button>
        </div>

        {/* CTA Button */}
        <div className={styles.right}>
          <Link to="/careers">
            <motion.div
              className={styles.ctaButton}
              whileHover={{
                scale: 1.04,
                boxShadow: '0 8px 30px rgba(200,255,216,0.3)'
              }}
              whileTap={{ scale: 0.96 }}
            >
              Join Us
            </motion.div>
          </Link>
        </div>
      </div>


      {/* Mobile Navigation Menu */}
      <motion.nav
        className={styles.mobileNav}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: colors.backgroundColor,
          borderColor: colors.borderColor
        }}
      >
        <ul className={styles.navList}>
          <li className={styles.productsSection}>
            <div 
              className={styles.productsSectionTitle}
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
            >
              Products
              <span className={`${styles.dropdownArrow} ${isProductsDropdownOpen ? styles.rotated : ''}`}>
                ▶
              </span>
            </div>
            {isProductsDropdownOpen && (
              <motion.div
                className={styles.productsDropdown}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1
                }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
              <Link
                to="/bank-builder"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsProductsDropdownOpen(false)
                }}
                style={{ color: colors.textColor }}
              >
                Bank Builder
              </Link>
              <Link
                to="/bank-manager"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsProductsDropdownOpen(false)
                }}
                style={{ color: colors.textColor }}
              >
                Bank Manager
              </Link>
              <Link
                to="/communication-layer"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsProductsDropdownOpen(false)
                }}
                style={{ color: colors.textColor }}
              >
                Communication Layer
              </Link>
              <Link
                to="/business-process"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsProductsDropdownOpen(false)
                }}
                style={{ color: colors.textColor }}
              >
                Business Process
              </Link>
              <Link
                to="/core"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsProductsDropdownOpen(false)
                }}
                style={{ color: colors.textColor }}
              >
                Core
              </Link>
              </motion.div>
            )}
          </li>
          <li>
            <Link
              to="/team"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: colors.textColor }}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: colors.textColor }}
            >
              Career
            </Link>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  )
}

Header.displayName = 'Header'