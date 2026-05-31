import Image from 'next/image';

const images = [
  { src: '/images/romantic.jpg', alt: 'Romantic Setup' },
  { src: '/images/nightview.jpg', alt: 'Night View' },
  { src: '/images/interior.jpg', alt: 'Interior' },
  { src: '/images/hero.jpg', alt: 'Lake View' },
  { src: '/images/about.jpg', alt: 'About' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-[#facc15] mb-10 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
