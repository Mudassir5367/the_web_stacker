'use client';

import Link from 'next/link';
import Card from '../ui/Card';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, index = 0, showDetails = false }) {
  return (
    <Card className={styles.card} delay={index * 0.1}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{service.icon}</span>
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      
      <div className={styles.techStack}>
        {service.techStack.slice(0, showDetails ? undefined : 3).map((tech) => (
          <span key={tech} className={styles.techBadge}>{tech}</span>
        ))}
        {!showDetails && service.techStack.length > 3 && (
          <span className={styles.techBadge}>+{service.techStack.length - 3}</span>
        )}
      </div>

      {showDetails && service.features && (
        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>Key Features</h4>
          <ul className={styles.featuresList}>
            {service.features.map((feature, i) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!showDetails && (
        <Link href={`/services#${service.id}`} className={styles.link}>
          Learn more <span className={styles.arrow}>→</span>
        </Link>
      )}
    </Card>
  );
}
