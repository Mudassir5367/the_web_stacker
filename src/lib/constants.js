export const siteConfig = {
  name: 'Senior Full Stack Engineer',
  title: 'Senior Full Stack & AI Automation Engineer',
  description: 'Senior Full Stack Engineer specializing in MEAN, MERN, Next.js, Python, and AI Automation. Helping startups build scalable SaaS products.',
  url: 'https://yourdomain.com',
  email: 'hello@yourdomain.com',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  calendlyUrl: 'https://calendly.com/yourusername/30min',
};

export const services = [
  {
    id: 'mean-stack',
    icon: '🅰️',
    title: 'MEAN Stack Development',
    description: 'Build enterprise-grade applications with MongoDB, Express, Angular, and Node.js. Perfect for complex business platforms and admin dashboards.',
    features: ['Angular SPA/SSR Apps', 'REST & GraphQL APIs', 'Real-time Features', 'Enterprise Dashboards'],
    techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
  },
  {
    id: 'mern-stack',
    icon: '⚛️',
    title: 'MERN Stack Development',
    description: 'Create fast, modern web applications with MongoDB, Express, React, and Node.js. Ideal for startups and SaaS products that need to ship quickly.',
    features: ['React SPAs', 'Server-Side Rendering', 'Component Libraries', 'Progressive Web Apps'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
  },
  {
    id: 'nextjs-saas',
    icon: '▲',
    title: 'Next.js SaaS Development',
    description: 'Develop SEO-optimized, high-performance SaaS platforms with Next.js. Leverage SSR, ISR, and edge functions for maximum speed and visibility.',
    features: ['SEO Optimization', 'Multi-tenant Architecture', 'Stripe Integration', 'Performance Optimization'],
    techStack: ['Next.js', 'React', 'Vercel', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 'python-backend',
    icon: '🐍',
    title: 'Python Backend Development',
    description: 'Build robust, high-performance backend systems with Python using FastAPI or Flask. Ideal for AI/ML integrations and data-heavy applications.',
    features: ['FastAPI / Flask APIs', 'Data Processing Pipelines', 'ML Model Deployment', 'Microservices'],
    techStack: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'ai-automation',
    icon: '🤖',
    title: 'AI Automation',
    description: 'Automate business processes with AI-powered workflows using n8n, OpenAI APIs, and custom integrations. Save hundreds of hours per month.',
    features: ['n8n Workflows', 'OpenAI Integration', 'Custom AI Agents', 'Process Automation'],
    techStack: ['n8n', 'OpenAI', 'Python', 'Node.js', 'LangChain'],
  },
  {
    id: 'api-development',
    icon: '🔌',
    title: 'API Development',
    description: 'Design and build scalable, well-documented REST and GraphQL APIs. From third-party integrations to internal microservice architectures.',
    features: ['REST & GraphQL', 'API Documentation', 'Third-party Integrations', 'Webhooks & Events'],
    techStack: ['Node.js', 'Express', 'GraphQL', 'Swagger', 'Postman'],
  },
  {
    id: 'system-architecture',
    icon: '🏗️',
    title: 'System Architecture Design',
    description: 'Plan and architect scalable, maintainable software systems. From monolith to microservices, I help you make the right technology decisions.',
    features: ['Architecture Design', 'Tech Stack Selection', 'Code Review & Audit', 'Performance Optimization'],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
];

export const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'n8n', category: 'AI' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'GraphQL', category: 'API' },
];

export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow Inc.',
    content: 'Exceptional work on our SaaS platform. Delivered ahead of schedule with outstanding code quality. The architecture is clean, scalable, and easy to maintain.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataVista',
    content: 'The AI automation workflows saved our team 40+ hours per week. Truly understands both the technical and business aspects of product development.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, GrowthStack',
    content: 'Built our entire MVP in 6 weeks. The attention to detail in UI/UX and the robust backend architecture exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'VP Engineering, CloudNine',
    content: 'Deep expertise in full-stack development and system architecture. Helped us migrate from a monolith to microservices with zero downtime.',
    rating: 5,
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand your business goals, technical requirements, and project scope through detailed consultation.',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Design a scalable, maintainable architecture with the right technology stack for your specific needs.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build your application using agile methodology with regular demos and transparent communication.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Deploy, optimize, and hand over with thorough documentation, testing, and ongoing support options.',
  },
];

export const experience = [
  {
    year: '2024 - Present',
    title: 'Senior Full Stack Consultant',
    company: 'Independent',
    description: 'Helping startups and SaaS companies build scalable products using modern tech stacks. Specializing in AI automation and full-stack development.',
  },
  {
    year: '2022 - 2024',
    title: 'Lead Full Stack Developer',
    company: 'Enterprise SaaS Company',
    description: 'Led a team of 8 developers building a multi-tenant analytics platform serving 10,000+ users. Architected microservices infrastructure on AWS.',
  },
  {
    year: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    description: 'Built and maintained multiple web applications using MERN and MEAN stacks. Implemented CI/CD pipelines and automated testing frameworks.',
  },
  {
    year: '2019 - 2020',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Developed responsive web applications for enterprise clients using React and Angular. Focused on performance optimization and accessibility.',
  },
];
