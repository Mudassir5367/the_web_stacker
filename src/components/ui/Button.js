'use client';

import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', size = 'md', onClick, type = 'button', disabled = false, className = '', ...props }) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
