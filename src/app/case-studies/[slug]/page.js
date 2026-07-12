import { api } from '@/lib/api';
import Badge from '@/components/ui/Badge';
import CTASection from '@/components/sections/CTASection';
import styles from './CaseStudyDetail.module.css';
import fallbackCaseStudies from '@/data/caseStudies.json';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let study = null;
  try {
    const res = await api.getCaseStudyBySlug(slug);
    study = res.data;
  } catch (error) {
    study = fallbackCaseStudies.find(cs => cs.slug === slug);
  }

  if (!study) return { title: 'Not Found' };

  return {
    title: `${study.title} | Case Study`,
    description: study.excerpt,
  };
}

export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;
  let study = null;
  try {
    const res = await api.getCaseStudyBySlug(slug);
    study = res.data;
  } catch (error) {
    study = fallbackCaseStudies.find(cs => cs.slug === slug);
  }

  if (!study) {
    return <div className="container section">Case study not found.</div>;
  }

  return (
    <>
      <article className={styles.article}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className="container">
            <Badge variant="primary">{study.category}</Badge>
            <h1 className={styles.title}>{study.title}</h1>
            <p className={styles.excerpt}>{study.excerpt}</p>
          </div>
        </div>

        {/* Content */}
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.sidebar}>
            <div className={styles.card}>
              <h3>Technologies</h3>
              <div className={styles.techStack}>
                {study.techStack.map((tech) => (
                  <Badge key={tech} variant="default">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h3>Key Results</h3>
              <div className={styles.metrics}>
                {study.results.map((result, i) => (
                  <div key={i} className={styles.metric}>
                    <div className={styles.metricValue}>{result.value}</div>
                    <div className={styles.metricLabel}>{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>The Problem</h2>
              <p>{study.problem}</p>
            </section>

            <section className={styles.section}>
              <h2>The Solution</h2>
              <p>{study.solution}</p>
            </section>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
