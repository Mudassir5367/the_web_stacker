'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/constants';
import styles from './ExperienceTimeline.module.css';

export default function ExperienceTimeline() {
  return (
    <div className={styles.timeline}>
      {experience.map((item, index) => (
        <motion.div
          key={index}
          className={styles.item}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.marker}>
            <div className={styles.dot} />
            {index < experience.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.content}>
            <span className={styles.year}>{item.year}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <h4 className={styles.company}>{item.company}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
