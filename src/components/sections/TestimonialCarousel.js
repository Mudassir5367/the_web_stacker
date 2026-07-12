'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import styles from './TestimonialCarousel.module.css';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="section bg-tertiary">
      <div className="container">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          align="center"
        />
        
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.slide}
              >
                <div className={styles.card}>
                  <div className={styles.stars}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                  <p className={styles.content}>"{testimonials[currentIndex].content}"</p>
                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className={styles.name}>{testimonials[currentIndex].name}</h4>
                      <p className={styles.role}>{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <button onClick={prev} className={styles.btn} aria-label="Previous testimonial">
              ←
            </button>
            <div className={styles.indicators}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.btn} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
