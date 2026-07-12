import Image from 'next/image';
import { siteConfig } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import CTASection from '@/components/sections/CTASection';
import TechStackGrid from '@/components/sections/TechStackGrid';
import styles from './AboutPage.module.css';

export const metadata = {
  title: 'About Me',
  description: 'Learn more about my background, experience, and approach to building scalable software products.',
};

export default function AboutPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Hi, I'm a <span className="gradient-text">Senior Full Stack Engineer</span>
              </h1>
              <p className={styles.bio}>
                With over 5 years of experience in the tech industry, I specialize in building scalable SaaS products, complex enterprise applications, and intelligent AI automation workflows.
              </p>
              <p className={styles.bio}>
                My approach combines deep technical expertise with a strong focus on user experience and business outcomes. I don't just write code; I solve business problems and build products that users love.
              </p>
              <div className={styles.values}>
                <div className={styles.valueItem}>
                  <h4>Clean Code</h4>
                  <p>Maintainable, well-documented, and tested code.</p>
                </div>
                <div className={styles.valueItem}>
                  <h4>Scalability</h4>
                  <p>Architecture that grows with your business.</p>
                </div>
                <div className={styles.valueItem}>
                  <h4>Communication</h4>
                  <p>Transparent, proactive updates throughout the project.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                {/* Using a placeholder gradient since we don't have a photo */}
                <div className={styles.photoPlaceholder}>
                  <span>Senior Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-tertiary">
        <div className="container">
          <SectionHeading
            label="Background"
            title="Professional Experience"
            align="center"
          />
          <ExperienceTimeline />
        </div>
      </section>

      <TechStackGrid />

      <CTASection />
    </>
  );
}
