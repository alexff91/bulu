import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BULU - Aplikasi Pecinta Bulu Tangkis",
  description: "Tingkatkan kemampuan bermain bulu tangkismu, bagikan momen terbaik bermain dengan teman-teman, kirim video permainanmu untuk direview oleh pelatih berpengalaman.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yourwebsite.com/",
    site_name: "BULU",
    title: "BULU - Aplikasi Pecinta Bulu Tangkis",
    description: "Tingkatkan kemampuan bermain bulu tangkismu, bagikan momen terbaik bermain dengan teman-teman, kirim video permainanmu untuk direview oleh pelatih berpengalaman.",
    images: [
      {
        url: "https://yourwebsite.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "BULU Logo",
      },
    ],
  },
  twitter: {
    handle: "@yourhandle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph?.type} />
        <meta property="og:locale" content={metadata.openGraph?.locale} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:site_name" content={metadata.openGraph?.site_name} />
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        {metadata.openGraph?.images?.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        <meta name="twitter:card" content={metadata.twitter?.cardType} />
        <meta name="twitter:site" content={metadata.twitter?.site} />
        <meta name="twitter:creator" content={metadata.twitter?.handle} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
