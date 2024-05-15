import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BULU - Aplikasi Pecinta Bulu Tangkis',
  description: 'Tingkatkan kemampuan bermain bulu tangkismu, bagikan momen terbaik bermain dengan teman-teman, kirim video permainanmu untuk direview oleh pelatih berpengalaman.',
  openGraph: {
    title: 'BULU - Aplikasi Pecinta Bulu Tangkis',
    description: 'Tingkatkan kemampuan bermain bulu tangkismu, bagikan momen terbaik bermain dengan teman-teman, kirim video permainanmu untuk direview oleh pelatih berpengalaman.',
    url: 'https://bulu-tangkis.id/',
    siteName: 'BULU',
    images: [
      {
        url: 'https://bulu-tangkis.id/og-image.png',
        width: 800,
        height: 600,
        alt: 'BULU',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@yourhandle',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="description" content={metadata.description} />
        <meta property="og:locale" content={metadata.openGraph?.locale ?? ""} />
        <meta property="og:url" content={metadata.openGraph?.url ?? ""} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName ?? ""} />
        <meta property="og:title" content={metadata.openGraph?.title ?? ""} />
        <meta property="og:description" content={metadata.openGraph?.description ?? ""} />
        <meta name="twitter:card" content={metadata.twitter?.card ?? ""} />
        <meta name="twitter:site" content={metadata.twitter?.site ?? ""} />
        <meta name="twitter:creator" content={metadata.twitter?.creator ?? ""} />
      </head>
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
