'use client';

import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ label, title, description, align = 'center' }) {
  return (
    <motion.div
      className={`${styles.heading} ${styles[align]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
}
