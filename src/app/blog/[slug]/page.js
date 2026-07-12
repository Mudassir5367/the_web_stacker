import { api } from '@/lib/api';
import Badge from '@/components/ui/Badge';
import CTASection from '@/components/sections/CTASection';
import styles from './BlogPost.module.css';
import fallbackBlogs from '@/data/blogs.json';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    const res = await api.getBlogBySlug(slug);
    post = res.data;
  } catch (error) {
    post = fallbackBlogs.find(b => b.slug === slug);
  }

  if (!post) return { title: 'Not Found' };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    const res = await api.getBlogBySlug(slug);
    post = res.data;
  } catch (error) {
    post = fallbackBlogs.find(b => b.slug === slug);
  }

  if (!post) {
    return <div className="container section">Post not found.</div>;
  }

  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <>
      <article className={styles.article}>
        {/* Header */}
        <header className={styles.header}>
          <div className={`container ${styles.headerContainer}`}>
            <Badge variant="primary">{post.category}</Badge>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span className={styles.author}>{post.author}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.date}>{date}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.readTime}>{post.readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.markdown}>
              {/* In a real app, you would parse Markdown to HTML here. For now, simple pre-wrap rendering. */}
              {post.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={i}>{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={i}>{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={i}>
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{paragraph}</p>;
              })}
            </div>
            
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
