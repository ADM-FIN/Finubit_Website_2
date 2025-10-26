import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Careers.module.css'

interface JobListing {
  title: string
  location: string
  description: string
}

const jobListings: JobListing[] = [
  {
    title: "Senior Backend Engineer",
    location: "Tel Aviv, Israel",
    description: "Build core banking systems using event-driven architecture. Experience with microservices and financial systems preferred."
  },
  {
    title: "Frontend React Developer",
    location: "Tel Aviv, Israel",
    description: "Create beautiful, responsive interfaces for banking platforms. Strong React and TypeScript skills required."
  },
  {
    title: "DevOps Engineer",
    location: "Tel Aviv, Israel",
    description: "Manage cloud infrastructure and deployment pipelines. Experience with AWS, Kubernetes, and CI/CD required."
  }
]

export const Careers: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.section
      ref={ref}
      className={styles.careersSection}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.careersHeader}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={styles.careersTitle}>Careers</h1>
          <p className={styles.careersSubtitle}>
            We're hiring. Join us in building the core of tomorrow's finance.
          </p>
        </motion.div>

        <div className={styles.careersContent}>
          <motion.div className={styles.jobListings} variants={containerVariants}>
            {jobListings.map((job) => (
              <motion.div
                key={job.title}
                className={styles.jobItem}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobLocation}>{job.location}</p>
                <p className={styles.jobDescription}>{job.description}</p>
                <a href="#" className={styles.applyBtn}>Apply Now</a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.contactInfo}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3>Contact us:</h3>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Finubit LinkedIn Page
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:careers@finubit.com">careers@finubit.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}