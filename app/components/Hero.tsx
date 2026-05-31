'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/hero.jpg"
        alt="Mannat Cafe Hero"
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg animate-fade-in-up">
          Mannat Cafe & Lakeview Restaurant
        </h1>
        <p className="max-w-xl text-lg md:text-2xl mb-8 text-zinc-200 animate-fade-in-up delay-100">
          Enjoy breathtaking lake views, rooftop dining, delicious cuisine and unforgettable moments in the heart of Udaipur.
        </p>
        <div className="flex gap-4 animate-fade-in-up delay-200">
          <a
            href="tel:+919650149889"
            className="bg-[#facc15] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
          >
            Reserve Table
          </a>
          <a
            href="#gallery"
            className="border border-[#facc15] text-[#facc15] font-semibold px-6 py-3 rounded-full hover:bg-[#facc15] hover:text-black transition"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
