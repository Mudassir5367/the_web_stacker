import { services, stats } from '@/lib/constants';
import { api } from '@/lib/api';
import HeroSection from '@/components/sections/HeroSection';
import TechStackGrid from '@/components/sections/TechStackGrid';
import ServiceCard from '@/components/sections/ServiceCard';
import CaseStudyCard from '@/components/sections/CaseStudyCard';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import CTASection from '@/components/sections/CTASection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// For SSR during build, we'll try to fetch from API, but fallback to direct import if needed
import fallbackCaseStudies from '@/data/caseStudies.json';

async function getFeaturedCaseStudies() {
  try {
    const res = await api.getFeaturedCaseStudies();
    return res.data;
  } catch (error) {
    // Fallback for build time if backend is not running
    return fallbackCaseStudies.filter(cs => cs.featured);
  }
}

export default async function Home() {
  const featuredCaseStudies = await getFeaturedCaseStudies();

  return (
    <>
      <HeroSection />
      
      {/* Stats Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-8)',
            background: 'var(--bg-card)',
            padding: 'var(--space-8)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'center'
          }}>
            {stats.map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                  {stat.value}{stat.suffix}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStackGrid />

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-12)' }}>
            <SectionHeading
              label="What I Do"
              title="Services"
              description="End-to-end software development services from architecture to deployment."
              align="left"
            />
            <div style={{ marginBottom: 'var(--space-4)', display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
              <Button href="/services" variant="ghost">View All Services →</Button>
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
            <Button href="/services" variant="secondary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section bg-tertiary">
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title="Featured Work"
            description="A selection of recent projects built for startups and enterprise clients."
            align="center"
          />
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-8)'
          }}>
            {featuredCaseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
          
          <div style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
            <Button href="/case-studies" variant="outline" size="lg">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      
      <CTASection />
    </>
  );
}
