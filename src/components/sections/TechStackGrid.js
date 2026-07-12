'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import styles from './TechStackGrid.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function TechStackGrid() {
  return (
    <section className="section bg-tertiary">
      <div className="container">
        <SectionHeading
          label="Technologies"
          title="My Tech Stack"
          description="I specialize in modern, scalable technologies to build robust full-stack applications and automated workflows."
        />
        
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {techStack.map((tech) => (
            <motion.div key={tech.name} className={styles.item} variants={itemVariants}>
              <div className={styles.card}>
                <span className={styles.name}>{tech.name}</span>
                <span className={styles.category}>{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
