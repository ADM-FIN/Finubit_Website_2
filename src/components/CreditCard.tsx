import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './CreditCard.module.css'

interface CreditCardProps {
  className?: string
}

export const CreditCard: React.FC<CreditCardProps> = ({ className }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`${styles.cardContainer} ${className || ''}`}>
      <motion.div
        className={styles.card}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onClick={handleCardFlip}
        whileHover={{ scale: 1.05, rotateX: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Front Side */}
        <div className={styles.cardFront}>
          <div className={styles.cardHeader}>
            <div className={styles.bankName}>FINUBIT</div>
            <div className={styles.cardType}>PLATINUM</div>
          </div>

          <div className={styles.chip}>
            <div className={styles.chipInner}>
              <div className={styles.chipLine}></div>
              <div className={styles.chipLine}></div>
              <div className={styles.chipLine}></div>
            </div>
          </div>

          <div className={styles.cardNumber}>
            <span>5847</span>
            <span>9632</span>
            <span>1478</span>
            <span>9863</span>
          </div>

          <div className={styles.cardInfo}>
            <div className={styles.cardHolder}>
              <div className={styles.label}>CARD HOLDER</div>
              <div className={styles.value}>FINUBIT CLIENT</div>
            </div>
            <div className={styles.expiry}>
              <div className={styles.label}>EXPIRES</div>
              <div className={styles.value}>12/28</div>
            </div>
          </div>

          <div className={styles.cardLogo}>
            <div className={styles.logoCircle}></div>
            <div className={styles.logoCircle}></div>
          </div>
        </div>

        {/* Back Side */}
        <div className={styles.cardBack}>
          <div className={styles.magneticStripe}></div>

          <div className={styles.cvvSection}>
            <div className={styles.signatureStrip}>
              <div className={styles.cvvLabel}>CVV</div>
              <div className={styles.cvvNumber}>847</div>
            </div>
          </div>

          <div className={styles.backText}>
            <p>This card is property of Finubit Bank</p>
            <p>24/7 Customer Service: 1-800-FINUBIT</p>
            <p>Report lost or stolen cards immediately</p>
          </div>

          <div className={styles.securityFeatures}>
            <div className={styles.hologram}></div>
            <div className={styles.secureText}>SECURE</div>
          </div>
        </div>
      </motion.div>

      <div className={styles.cardShadow}></div>
    </div>
  )
}