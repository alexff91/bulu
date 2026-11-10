import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const TITLE = 'BULU — badminton and padel in Bali';
const DESCRIPTION =
  'Where to play badminton and padel in Bali: courts in Denpasar, Sanur, Canggu, Seminyak and Kerobokan, what to bring, and how the scoring works.';

const SITE = 'https://bulu.alftech.space';

// What a search engine can state about the page: a guide, free to read.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  url: SITE + '/',
  description: DESCRIPTION,
  inLanguage: 'en',
  isAccessibleForFree: true,
  about: [
    { '@type': 'Thing', name: 'Badminton courts in Bali' },
    { '@type': 'Thing', name: 'Padel courts in Bali' },
  ],
  image: SITE + '/og.png',
};

export const metadata = {
  metadataBase: new URL(SITE),
  alternates: { canonical: '/' },
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE + '/',
    siteName: 'BULU',
    // The share image lives in public/og.png (1200x630). The entry before this
    // one pointed at bulu-tangkis.id, a domain that no longer answers.
    images: [
      {
        url: SITE + '/og.png',
        width: 1200,
        height: 630,
        alt: 'BULU — badminton and padel in Bali',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // lang is English because the page is now written in it. The head tags that
  // used to be hand-written here are dropped: the metadata export above already
  // emits them, and keeping both meant editing every title twice.
  return (
    <html lang="en">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        {children}
        {/* Google Analytics used to load here. It was the only tracker on any
            of the thirty tools, while the index page promises "no analytics
            beyond one hit". Visits are counted from the server log like
            everywhere else. */}
      </body>
    </html>
  );
}
