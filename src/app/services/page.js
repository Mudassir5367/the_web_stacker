import { services, processSteps } from '@/lib/constants';
import ServiceCard from '@/components/sections/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import styles from './ServicesPage.module.css';

export const metadata = {
  title: 'Services & Expertise',
  description: 'Full-stack development services including MEAN/MERN stack, Next.js, Python backend, and AI Automation workflows.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className={`section ${styles.header}`}>
        <div className="container">
          <SectionHeading
            label="Expertise"
            title="Services & Solutions"
            description="Comprehensive software development services designed to help startups and enterprises scale effectively."
            align="center"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-tertiary">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={styles.serviceItem}>
                <ServiceCard service={service} index={index} showDetails={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Methodology"
            title="How I Work"
            description="A proven, transparent process for delivering high-quality software on time and within budget."
            align="center"
          />
          
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={step.number} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
