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
  submitContact: (formData) =>
    fetchAPI('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

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
