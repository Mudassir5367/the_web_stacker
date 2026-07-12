'use client';

import { motion } from 'framer-motion';
import styles from './Card.module.css';

export default function Card({ children, className = '', hover = true, glow = false, delay = 0, ...props }) {
  return (
    <motion.div
      className={`${styles.card} ${hover ? styles.hover : ''} ${glow ? styles.glow : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
