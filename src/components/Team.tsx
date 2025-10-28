import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Team.module.css'

interface TeamMember {
  name: string
  position: string
  bio: string
  imageUrl: string
  linkedinUrl?: string
  twitterUrl?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Lior Nobel",
    position: "COO",
    bio: "Former cyber leader @ 8200",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedinUrl: "#",
    twitterUrl: "#"
  },
  {
    name: "Jaime Schcolnik",
    position: "CEO",
    bio: "Former CIO @ Bank Leumi",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedinUrl: "#",
    twitterUrl: "#"
  },
  {
    name: "Shay Dan",
    position: "VP R&D",
    bio: "Former CTO @ Leumi Bank",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedinUrl: "#",
    twitterUrl: "#"
  }
]

export const Team: React.FC = () => {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  return (
    <motion.section
      ref={ref}
      className={styles.teamSection}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.teamHeader}
          variants={cardVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.teamSubtitle}>meet our</span>
          <h2 className={styles.teamTitle}>Team</h2>
          <p className={styles.teamDescription}>
            Meet the people building Finubit - experienced leaders from banking and technology who are transforming the future of financial services.
          </p>
          <span className={styles.bgWatermark}>team</span>
        </motion.div>

        <motion.div className={styles.teamCards} variants={containerVariants}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={styles.teamCard}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={styles.teamCardImage}>
                <img src={member.imageUrl} alt={member.name} />
              </div>
              <div className={styles.teamCardContent}>
                <h3>{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}