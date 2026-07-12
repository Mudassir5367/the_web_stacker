import Link from 'next/link';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import styles from './BlogCard.module.css';

export default function BlogCard({ post, index = 0 }) {
  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Card className={styles.card} hover={true} delay={index * 0.1}>
      <Link href={`/blog/${post.slug}`} className={styles.link}>
        <div className={styles.meta}>
          <Badge variant="primary">{post.category}</Badge>
          <span className={styles.date}>{date}</span>
        </div>
        
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        
        <div className={styles.footer}>
          <span className={styles.readTime}>{post.readTime} min read</span>
          <span className={styles.readMore}>Read article →</span>
        </div>
      </Link>
    </Card>
  );
}
