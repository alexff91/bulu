import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const TITLE = 'BULU — badminton and padel in Bali';
const DESCRIPTION =
  'Where to play badminton and padel in Bali: courts in Denpasar, Sanur, Canggu, Seminyak and Kerobokan, what to bring, and how the scoring works.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://bulu-tangkis.id/',
    siteName: 'BULU',
    // The logo doubles as the share image. The previous entry pointed at an
    // og-image.png that was never added, so every shared link showed a blank card.
    images: [
      {
        url: 'https://bulu-tangkis.id/logo.svg',
        alt: 'BULU',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
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
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C1RDTTH5M2" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C1RDTTH5M2');
            `,
          }}
        />
      </body>
    </html>
  );
}
