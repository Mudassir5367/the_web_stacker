import './globals.css';
import { ThemeProvider } from '@/hooks/useTheme';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Senior Full Stack Engineer | MEAN, MERN, Next.js, Python & AI Automation',
    template: '%s | DevStudio',
  },
  description: 'Senior Full Stack & AI Automation Engineer helping startups build scalable SaaS products. Expert in MEAN, MERN, Next.js, Python, and AI workflows.',
  keywords: [
    'Full Stack Developer',
    'MEAN Stack Developer',
    'MERN Stack Developer',
    'Next.js Developer',
    'Python Backend Developer',
    'AI Automation Engineer',
    'SaaS Developer USA',
    'Node.js Developer',
    'React Developer',
    'Angular Developer',
    'Freelance Developer',
    'Software Consultant',
  ],
  authors: [{ name: 'Senior Full Stack Engineer' }],
  creator: 'Senior Full Stack Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'DevStudio',
    title: 'Senior Full Stack Engineer | Build Scalable SaaS Products',
    description: 'Senior Full Stack & AI Automation Engineer helping startups build scalable SaaS products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevStudio - Senior Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Full Stack Engineer | Build Scalable SaaS Products',
    description: 'Senior Full Stack & AI Automation Engineer helping startups build scalable SaaS products.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'DevStudio',
        url: 'https://yourdomain.com',
        description: 'Senior Full Stack & AI Automation Engineer helping startups build scalable SaaS products.',
      },
      {
        '@type': 'Person',
        name: 'Senior Full Stack Engineer',
        url: 'https://yourdomain.com',
        jobTitle: 'Senior Full Stack & AI Automation Engineer',
        knowsAbout: [
          'MEAN Stack', 'MERN Stack', 'Next.js', 'React', 'Angular',
          'Node.js', 'Python', 'FastAPI', 'MongoDB', 'AI Automation',
          'n8n', 'OpenAI', 'SaaS Development', 'API Development',
        ],
        sameAs: [
          'https://github.com/yourusername',
          'https://linkedin.com/in/yourusername',
          'https://twitter.com/yourusername',
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Software Development',
        provider: {
          '@type': 'Person',
          name: 'Senior Full Stack Engineer',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Development Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MEAN Stack Development' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MERN Stack Development' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js SaaS Development' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Python Backend Development' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation' }},
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ paddingTop: 'var(--navbar-height)' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
