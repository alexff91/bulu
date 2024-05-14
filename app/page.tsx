"use client"; // This must be the first line in the file

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131945] py-12 px-4 font-inter">
      <div
        className={`transform transition-transform duration-500 ${
          isHovered ? "rotate-180 scale-110" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          loading="lazy"
          srcSet="/logo.svg 100w, /logo.svg 200w, /logo.svg 400w, /logo.svg 800w, /logo.svg 1200w, /logo.svg 1600w, /logo.svg 2000w"
          className="aspect-square w-[100px] max-md:w-[50px] mb-4"
        />
      </div>
      <div className="text-4xl leading-9 text-center text-white mb-4">
        BULU
      </div>
      <div className="text-2xl font-bold leading-9 text-center text-white mb-4 max-w-md">
        Aplikasi pertama bagi para pecinta bulu tangkis
      </div>
      <div className="text-lg leading-6 text-center text-white mb-4 max-w-md">
        Tingkatkan kemampuan bermain bulu tangkismu, bagikan momen terbaik
        bermain dengan teman-teman, kirim video permainanmu untuk direview oleh
        pelatih berpengalaman
      </div>
      <a
        href="https://forms.gle/qU3wcdj6iS47xktXA"
        target="_blank"
        rel="noopener noreferrer"
        className="px-16 py-3 mt-4 text-base font-bold tracking-wider leading-5 text-center text-white bg-teal-500 rounded-3xl max-w-xs transition-transform duration-300 transform hover:scale-105 hover:bg-teal-400"
      >
        MULAI
      </a>
      <div className="flex gap-5 justify-center mt-8">
        <a
          href="https://forms.gle/qU3wcdj6iS47xktXA"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <img
            loading="lazy"
            srcSet="/apple.svg 100w, /apple.svg 200w, /apple.svg 400w, /apple.svg 800w, /apple.svg 1200w, /apple.svg 1600w, /apple.svg 2000w"
            className="w-[50px] aspect-square"
          />
        </a>
        <a
          href="https://forms.gle/qU3wcdj6iS47xktXA"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <img
            loading="lazy"
            srcSet="/android.svg 100w, /android.svg 200w, /android.svg 400w, /android.svg 800w, /android.svg 1200w, /android.svg 1600w, /android.svg 2000w"
            className="w-[50px] aspect-square"
          />
        </a>
      </div>
    </div>
  );
}
