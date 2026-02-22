import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
