import { api } from '@/lib/api';
import BlogCard from '@/components/sections/BlogCard';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import styles from './BlogPage.module.css';
import fallbackBlogs from '@/data/blogs.json';

export const metadata = {
  title: 'Blog & Articles',
  description: 'Technical articles on Next.js, Node.js, Python, Architecture, and AI Automation.',
};

async function getBlogs(category) {
  try {
    const res = await api.getBlogs(category ? { category } : {});
    return res.data;
  } catch (error) {
    let data = fallbackBlogs;
    if (category && category !== 'All') {
      data = data.filter(b => b.category === category);
    }
    return data;
  }
}

async function getCategories() {
  try {
    const res = await api.getBlogCategories();
    return res.data;
  } catch (error) {
    const categories = [...new Set(fallbackBlogs.map((b) => b.category))];
    return ['All', ...categories];
  }
}

export default async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams.category || 'All';
  const [blogs, categories] = await Promise.all([
    getBlogs(category),
    getCategories()
  ]);

  return (
    <>
      <section className={`section ${styles.header}`}>
        <div className="container">
          <SectionHeading
            label="Insights"
            title="Technical Blog"
            description="Articles, tutorials, and insights on full-stack development, software architecture, and AI automation."
            align="center"
          />
          
          <div className={styles.filters}>
            {categories.map((cat) => (
              <a
                key={cat}
                href={cat === 'All' ? '/blog' : `/blog?category=${cat}`}
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
          {blogs.length > 0 ? (
            <div className={styles.grid}>
              {blogs.map((post, index) => (
                <div key={post.slug}>
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <h3>No articles found</h3>
              <p>Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
