import { FaWater, FaUmbrellaBeach, FaUsers, FaHeart } from 'react-icons/fa';

const features = [
  {
    icon: <FaWater className="text-3xl text-[#facc15]" />,
    title: 'Lake View Dining',
    desc: 'Enjoy stunning lake views while dining.',
  },
  {
    icon: <FaUmbrellaBeach className="text-3xl text-[#facc15]" />,
    title: 'Rooftop Seating',
    desc: 'Open-air rooftop seating with panoramic views.',
  },
  {
    icon: <FaUsers className="text-3xl text-[#facc15]" />,
    title: 'Family Restaurant',
    desc: 'Comfortable dining experience for families and groups.',
  },
  {
    icon: <FaHeart className="text-3xl text-[#facc15]" />,
    title: 'Romantic Dinner Setup',
    desc: 'Perfect destination for couples and special evenings.',
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="features">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-[#facc15] mb-2">{f.title}</h3>
            <p className="text-zinc-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
