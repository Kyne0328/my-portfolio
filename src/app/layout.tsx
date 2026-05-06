import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Kyne | Cybersecurity Student & Software Developer',
  description:
    '3rd year Cybersecurity student at University of Mindanao - Tagum Campus. Building real-world solutions focused on secure and scalable systems.',
  keywords: [
    'Cybersecurity',
    'Software Developer',
    'Portfolio',
    'Kyne',
    'University of Mindanao',
  ],
  authors: [{ name: 'Kyne' }],
  openGraph: {
    title: 'Kyne | Cybersecurity Student & Software Developer',
    description:
      '3rd year Cybersecurity student building secure and scalable systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyne | Cybersecurity Student & Software Developer',
    description:
      '3rd year Cybersecurity student building secure and scalable systems.',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
