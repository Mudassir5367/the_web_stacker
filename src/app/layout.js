import './globals.css';
import { ThemeProvider } from '@/hooks/useTheme';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  metadataBase: new URL('https://thewebstacker.com'),
  title: {
    default: 'thewebstacker | Modern Web & AI Automation Studio',
    template: '%s | thewebstacker',
  },
  description: 'We Build. You Grow. High-performance Next.js SaaS, Full Stack Applications, and AI Automation solutions by thewebstacker.',
  keywords: [
    'Full Stack Agency',
    'Web Development Studio',
    'Next.js Experts',
    'AI Automation Agency',
    'SaaS Development',
    'thewebstacker',
    'Node.js Experts',
    'React Development',
    'Software Consultancy',
  ],
  authors: [{ name: 'thewebstacker' }],
  creator: 'thewebstacker',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thewebstacker.com',
    siteName: 'thewebstacker',
    title: 'thewebstacker | We Build. You Grow.',
    description: 'We Build. You Grow. High-performance Next.js SaaS, Full Stack Applications, and AI Automation solutions.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'thewebstacker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thewebstacker | We Build. You Grow.',
    description: 'We Build. You Grow. High-performance Next.js SaaS, Full Stack Applications, and AI Automation solutions.',
    images: ['/logo.png'],
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
        name: 'thewebstacker',
        url: 'https://thewebstacker.com',
        description: 'We Build. You Grow. High-performance Next.js SaaS, Full Stack Applications, and AI Automation solutions.',
      },
      {
        '@type': 'Organization',
        name: 'thewebstacker',
        url: 'https://thewebstacker.com',
        description: 'Modern Web & AI Automation Studio',
        knowsAbout: [
          'MEAN Stack', 'MERN Stack', 'Next.js', 'React', 'Angular',
          'Node.js', 'Python', 'FastAPI', 'MongoDB', 'AI Automation',
          'n8n', 'OpenAI', 'SaaS Development', 'API Development',
        ],
        sameAs: [
          'https://github.com/thewebstacker',
          'https://linkedin.com/company/thewebstacker',
          'https://twitter.com/thewebstacker',
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Software Development',
        provider: {
          '@type': 'Organization',
          name: 'thewebstacker',
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
