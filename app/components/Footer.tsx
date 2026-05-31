import { FaWhatsapp, FaPhone, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold text-white">
          Mannat Cafe & Lakeview Restaurant
        </div>
        <div className="flex gap-6 items-center">
          <a href="tel:+919650149889" className="text-zinc-300 hover:text-[#facc15] flex items-center gap-1">
            <FaPhone /> <span>096501 49889</span>
          </a>
          <a href="https://wa.me/919650149889" className="text-zinc-300 hover:text-[#25D366] flex items-center gap-1">
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
          {/* Social icons placeholders */}
          <a href="#" className="text-zinc-300 hover:text-[#facc15]"><FaInstagram /></a>
          <a href="#" className="text-zinc-300 hover:text-[#facc15]"><FaFacebookF /></a>
        </div>
      </div>
      <div className="text-center text-zinc-500 text-sm mt-4">
        © Mannat Cafe & Lakeview Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
}
