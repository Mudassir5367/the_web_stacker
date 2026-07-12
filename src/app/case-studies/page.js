import { api } from '@/lib/api';
import CaseStudyCard from '@/components/sections/CaseStudyCard';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import styles from './CaseStudiesPage.module.css';
import fallbackCaseStudies from '@/data/caseStudies.json';

export const metadata = {
  title: 'Case Studies & Portfolio',
  description: 'Explore my recent projects, from SaaS platforms and AI integrations to enterprise dashboards.',
};

async function getCaseStudies(category) {
  try {
    const res = await api.getCaseStudies(category ? { category } : {});
    return res.data;
  } catch (error) {
    let data = fallbackCaseStudies;
    if (category && category !== 'All') {
      data = data.filter(cs => cs.category === category);
    }
    return data;
  }
}

async function getCategories() {
  try {
    const res = await api.getCaseStudyCategories();
    return res.data;
  } catch (error) {
    const categories = [...new Set(fallbackCaseStudies.map((cs) => cs.category))];
    return ['All', ...categories];
  }
}

export default async function CaseStudiesPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams.category || 'All';
  const [caseStudies, categories] = await Promise.all([
    getCaseStudies(category),
    getCategories()
  ]);

  return (
    <>
      <section className={`section ${styles.header}`}>
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title="Case Studies"
            description="Deep dives into the problems I've solved, the tech stacks used, and the business impact delivered."
            align="center"
          />
          
          <div className={styles.filters}>
            {categories.map((cat) => (
              <a
                key={cat}
                href={cat === 'All' ? '/case-studies' : `/case-studies?category=${cat}`}
                className={`${styles.filterBtn} ${category === cat ? styles.active : ''}`}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-tertiary" style={{ paddingTop: 0 }}>
        <div className="container">
          {caseStudies.length > 0 ? (
            <div className={styles.grid}>
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.slug} study={study} index={index} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <h3>No case studies found</h3>
              <p>Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
