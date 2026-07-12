'use client';

import Link from 'next/link';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import styles from './CaseStudyCard.module.css';

export default function CaseStudyCard({ study, index = 0 }) {
  const imageMap = {
    'ai-powered-customer-support-platform': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    'multi-tenant-saas-analytics-dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'ecommerce-platform-ai-recommendations': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    'enterprise-resource-planning-system': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'real-time-collaboration-tool': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  };

  const imageUrl = imageMap[study.slug] || `https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80`;

  return (
    <Card className={styles.card} hover={false} delay={index * 0.1}>
      <Link href={`/case-studies/${study.slug}`} className={styles.link}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.categoryBadge}>{study.category}</span>
          <img 
            src={imageUrl} 
            alt={study.title} 
            className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{study.title}</h3>
          <p className={styles.excerpt}>{study.excerpt}</p>
          <div className={styles.techStack}>
            {study.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="default">{tech}</Badge>
            ))}
          </div>
          <div className={styles.metrics}>
            {study.results.slice(0, 2).map((result, i) => (
              <div key={i} className={styles.metric}>
                <span className={styles.metricValue}>{result.value}</span>
                <span className={styles.metricLabel}>{result.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
