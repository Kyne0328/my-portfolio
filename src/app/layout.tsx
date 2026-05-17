import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = 'https://kyneanthony.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Kyne Anthony Pizon | Software Developer Portfolio',
  description:
    'BS Computer Science student focused on backend systems, cybersecurity fundamentals, and AI-assisted developer tools.',
  keywords: [
    'Kyne Anthony Pizon',
    'Software Developer',
    'Backend Development',
    'Cybersecurity Fundamentals',
    'AI Developer Tools',
    'Computer Science',
    'University of Mindanao',
  ],
  authors: [{ name: 'Kyne Anthony Pizon' }],
  creator: 'Kyne Anthony Pizon',
  openGraph: {
    title: 'Kyne Anthony Pizon | Software Developer Portfolio',
    description:
      'BS Computer Science student focused on backend systems, cybersecurity fundamentals, and AI-assisted developer tools.',
    url: siteUrl,
    siteName: 'Kyne Anthony Pizon Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kyne Anthony Pizon Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyne Anthony Pizon | Software Developer Portfolio',
    description:
      'BS Computer Science student focused on backend systems, cybersecurity fundamentals, and AI-assisted developer tools.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kyne Anthony F. Pizon',
    url: siteUrl,
    sameAs: ['https://github.com/Kyne0328', 'https://linkedin.com/in/kyne-anthony-pizon'],
    jobTitle: 'Software Developer',
    affiliation: 'University of Mindanao - Tagum Campus',
    knowsAbout: [
      'Backend Development',
      'Cybersecurity Fundamentals',
      'AI-assisted developer tools',
      'Mobile Development',
      'Web Development',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
