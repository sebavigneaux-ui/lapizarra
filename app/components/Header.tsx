"use client";
import { useState, useEffect } from "react";

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#231F20] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo texto mientras no hay archivo SVG */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-white font-black text-xl tracking-tight leading-none">
            La<span className="text-[#EC008C]">Pizarra</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-white/80 hover:text-white text-sm transition-colors">Servicios</a>
          <a href="#diferenciadores" className="text-white/80 hover:text-white text-sm transition-colors">Nosotros</a>
          <a href="#metodologia" className="text-white/80 hover:text-white text-sm transition-colors">Metodología</a>
          <a href="#faq" className="text-white/80 hover:text-white text-sm transition-colors">FAQ</a>
        </nav>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EC008C] text-white text-sm font-bold px-5 py-2.5 hover:bg-[#c8007a] transition-colors"
        >
          Agendar reunión
        </a>
      </div>
    </header>
  );
}
