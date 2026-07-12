'use client';

import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <SectionHeading
            label="Ready to start?"
            title="Let's Build Something Amazing Together"
            description="Whether you need a full-stack SaaS application, a powerful backend API, or intelligent AI automation, I'm here to help."
            align="center"
          />
          <div className={styles.actions}>
            <Button href="/contact" size="lg" variant="primary">
              Book a Free Consultation
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
