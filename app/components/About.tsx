import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 w-full">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg"
            alt="About Mannat Cafe"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#facc15]">A Dining Experience Above The Lake</h2>
        <p className="text-lg text-zinc-200 mb-4">
          Discover a world of luxury and elegance at Mannat Cafe & Lakeview Restaurant. Nestled on the serene lakeside of Udaipur, our restaurant offers a unique blend of breathtaking views, exquisite cuisine, and a sophisticated ambience. Whether you’re celebrating a special occasion or enjoying a casual meal, our rooftop and lakeside seating provide the perfect backdrop for unforgettable moments.
        </p>
        <p className="text-zinc-400">
          Experience attentive service, a curated menu, and a setting designed for romance, family gatherings, and memorable evenings. Welcome to Udaipur’s premier lakeside dining destination.
        </p>
      </div>
    </section>
  );
}
