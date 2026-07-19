const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
}

export const api = {
  // Contact
  submitContact: async (formData) => {
    // Pure Frontend Email Sending using Web3Forms
    const payload = {
      ...formData,
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // We will replace this
      subject: `New Contact Form Submission from ${formData.name}`,
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });
    
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to send message');
    return data;
  },

  // Blog
  getBlogs: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchAPI(`/blog${query ? `?${query}` : ''}`);
  },
  getBlogBySlug: (slug) => fetchAPI(`/blog/${slug}`),
  getBlogCategories: () => fetchAPI('/blog/categories'),

  // Case Studies
  getCaseStudies: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchAPI(`/case-studies${query ? `?${query}` : ''}`);
  },
  getCaseStudyBySlug: (slug) => fetchAPI(`/case-studies/${slug}`),
  getFeaturedCaseStudies: () => fetchAPI('/case-studies/featured'),
  getCaseStudyCategories: () => fetchAPI('/case-studies/categories'),
};
