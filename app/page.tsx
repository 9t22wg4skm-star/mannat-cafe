import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
