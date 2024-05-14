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
    url: "https://bulu-tangkis.id/",
    siteName: "BULU",
    title: "BULU - Aplikasi Pecinta Bulu Tangkis",
    description: "Tingkatkan kemampuan bermain bulu tangkismu, bagikan momen terbaik bermain dengan teman-teman, kirim video permainanmu untuk direview oleh pelatih berpengalaman.",
    images: [
      {
        url: "https://bulu-tangkis.id/images/logo.png",
        width: 800,
        height: 600,
        alt: "BULU Logo",
      },
    ],
  },
  twitter: {
    creator: "@yourhandle",
    site: "@site",
    card: "summary_large_image",
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
        <meta name="description" content={String(metadata.description ?? "")} />
        <meta property="og:locale" content={String(metadata.openGraph?.locale ?? "")} />
        <meta property="og:url" content={String(metadata.openGraph?.url ?? "")} />
        <meta property="og:site_name" content={String(metadata.openGraph?.siteName ?? "")} />
        <meta property="og:title" content={String(metadata.openGraph?.title ?? "")} />
        <meta property="og:description" content={String(metadata.openGraph?.description ?? "")} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
