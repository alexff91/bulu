import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '@fontsource/poetsen-one'; // Import the font
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
