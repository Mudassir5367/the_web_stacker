'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await api.submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Get in Touch"
          title="Let's Talk About Your Project"
          description="Fill out the form below or book a call directly via Calendly."
          align="center"
        />

        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range</option>
                      <option value="< $5K">&lt; $5K</option>
                      <option value="$5K - $10K">$5K - $10K</option>
                      <option value="$10K - $25K">$10K - $25K</option>
                      <option value="$25K - $50K">$25K - $50K</option>
                      <option value="$50K+">$50K+</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                {status === 'error' && (
                  <div className={styles.error}>{errorMessage}</div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className={styles.submitBtn}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          {/* Calendly & Info */}
          <div className={styles.infoContainer}>
            <div className={styles.infoCard}>
              <h3>Book a Discovery Call</h3>
              <p>Prefer to chat? Schedule a free 30-minute consultation directly on our calendar.</p>
              
              <div className={styles.calendlyPlaceholder}>
                <div className={styles.calendlyIcon}>📅</div>
                <p>Calendly Embed Placeholder</p>
                <small>Add your Calendly URL in constants.js</small>
                {/* In real usage, you'd put the Calendly iframe here */}
                <Button 
                  href="https://calendly.com" 
                  target="_blank" 
                  variant="outline" 
                  className={styles.calendlyBtn}
                >
                  Open Calendly
                </Button>
              </div>
            </div>

            <div className={styles.faq}>
              <h3>FAQ</h3>
              <div className={styles.faqItem}>
                <h4>What is your typical response time?</h4>
                <p>We aim to respond to all inquiries within 24 business hours.</p>
              </div>
              <div className={styles.faqItem}>
                <h4>Do you work with international clients?</h4>
                <p>Yes, we work primarily with clients from the US and Europe, accommodating different time zones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
