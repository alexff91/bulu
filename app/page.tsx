"use client"; // This must be the first line in the file

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import "@fontsource/poetsen-one"; // Import the font

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131945] py-12 px-4">
      <div
        className={`transform transition-transform duration-500 ${
          isHovered ? "rotate-180 scale-110" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          loading="lazy"
          src="/logo.svg"
          alt="BULU Logo"
          width={100}
          height={100}
          className="aspect-square max-md:w-[50px] mb-4"
        />
      </div>
      <div className="text-4xl leading-9 text-center text-white mb-4 poetsen-one">
        BULU
      </div>
      <div className="text-2xl font-bold leading-9 text-center text-white mb-4 max-w-md">
        Aplikasi pertama bagi para pecinta bulu tangkis
      </div>
      <div className="text-lg leading-6 text-center text-white mb-4 max-w-md">
        Tingkatkan kemampuan bermain bulu tangkismu, bagikan momen terbaik
        bermain dengan teman-teman, kirim video permainanmu untuk direview
        oleh pelatih berpengalaman
      </div>
      <Link
        href="https://forms.gle/qU3wcdj6iS47xktXA"
        target="_blank"
        rel="noopener noreferrer"
        className="px-16 py-3 mt-4 text-base font-bold tracking-wider leading-5 text-center text-white bg-teal-500 rounded-3xl max-w-xs transition-transform duration-300 transform hover:scale-105 hover:bg-teal-400"
      >
        MULAI
      </Link>
      <div className="flex gap-5 justify-center mt-8">
        <Link
          href="https://forms.gle/qU3wcdj6iS47xktXA"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <Image
            loading="lazy"
            src="/apple.svg"
            alt="App Store"
            width={50}
            height={50}
            className="aspect-square"
          />
        </Link>
        <Link
          href="https://forms.gle/qU3wcdj6iS47xktXA"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <Image
            loading="lazy"
            src="/android.svg"
            alt="Google Play"
            width={50}
            height={50}
            className="aspect-square"
          />
        </Link>
      </div>
    </div>
  );
}
