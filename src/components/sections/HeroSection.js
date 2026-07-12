'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badge}>Available for new projects</span>
          </motion.div>
          
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building <span className="gradient-text">Scalable SaaS</span> Products
          </motion.h1>
          
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Senior Full Stack & AI Automation Engineer helping startups design, build, and scale world-class software solutions.
          </motion.p>
          
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="/contact" size="lg" variant="primary">
              Book a Call
            </Button>
            <Button href="/case-studies" size="lg" variant="secondary">
              View Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot} style={{ background: '#ff5f56' }} />
              <span className={styles.dot} style={{ background: '#ffbd2e' }} />
              <span className={styles.dot} style={{ background: '#27c93f' }} />
            </div>
            <div className={styles.terminalBody}>
              <p><span className={styles.prompt}>~/dev</span> $ npm start</p>
              <p className={styles.output}>&gt; developer-portfolio@1.0.0 start</p>
              <p className={styles.output}>&gt; node server.js</p>
              <br />
              <p className={styles.success}>🚀 Server running in production mode</p>
              <p className={styles.success}>📡 Port: 5000</p>
              <p className={styles.success}>✅ Database connected successfully</p>
              <br />
              <p><span className={styles.prompt}>~/dev</span> $ <span className={styles.cursor}>_</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
