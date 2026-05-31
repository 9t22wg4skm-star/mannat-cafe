import { FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-20">
      <div className="bg-zinc-900 rounded-3xl shadow-lg p-10 flex flex-col items-center border border-zinc-800">
        <h2 className="text-3xl font-bold text-[#facc15] mb-4 text-center">Contact Us</h2>
        <p className="text-xl font-semibold mb-2 text-white text-center">Mannat Cafe & Lakeview Restaurant</p>
        <p className="text-zinc-300 mb-2 text-center">Udaipur, Rajasthan, India</p>
        <p className="text-zinc-300 mb-6 text-center">WhatsApp: <a href="https://wa.me/919650149889" className="text-[#25D366] hover:underline">096501 49889</a></p>
        <div className="flex gap-4 mb-6">
          <a
            href="tel:+919650149889"
            className="flex items-center gap-2 bg-[#facc15] text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            <FaPhone /> Call Now
          </a>
          <a
            href="https://wa.me/919650149889"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#1ebe57] transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
        <div className="text-zinc-400 text-center">
          <div>Opening Hours: <span className="text-white">10:00 AM – 11:00 PM</span></div>
        </div>
      </div>
    </section>
  );
}
