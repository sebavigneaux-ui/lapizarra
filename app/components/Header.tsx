"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";

const navItems = [
  { label: "Proyectos", href: "/#galeria" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Servicios", href: "/servicios" },
  { label: "Metodología", href: "/#metodologia" },
  { label: "Ferias & Stands", href: "/#ferias-stands" },
  { label: "Clientes", href: "/#clientes" },
  { label: "FAQ", href: "/#faq" },
  { label: "Quiénes somos", href: "/#quienes-somos" },
  { label: "Aprende", href: "/centro-de-aprendizaje" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoScale, setLogoScale] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const atBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 10;
      setScrolled(y > 40);
      const scale = atBottom ? 1 : Math.min(1 + (y / 300) * 0.4, 1.4);
      setLogoScale(scale);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Cenefa superior */}
      <div className="bg-[#EC008C] px-6 py-2 hidden md:block">
        <div className="max-w-6xl mx-auto flex items-center justify-end gap-8">
          <a
            href="https://www.instagram.com/somoslapizarra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs hover:text-white/80 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @somoslapizarra
          </a>
          <a
            href="https://www.youtube.com/@somosLaPizarra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs hover:text-white/80 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
          <a
            href="mailto:sebastian@somoslapizarra.cl"
            className="text-white text-xs hover:text-white/80 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            sebastian@somoslapizarra.cl
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs hover:text-white/80 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            +56 9 5841 9326
          </a>
        </div>
      </div>

      {/* Navbar principal */}
      <div className={`transition-all duration-300 ${scrolled ? "bg-[#231F20] shadow-lg" : "bg-[#231F20]/95"}`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center origin-left flex-shrink-0">
            <Image
              src="/logo-blanco.png"
              alt="LaPizarra"
              width={210}
              height={84}
              className="h-16 w-auto object-contain transition-transform duration-200 ease-out origin-left"
              style={{ transform: `scale(${logoScale})` }}
              priority
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="items-center gap-1.5 bg-[#EC008C] text-white text-sm font-bold px-5 py-2.5 hover:bg-[#c8007a] transition-colors hidden sm:inline-flex"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablemos
            </a>

            {/* Hamburguesa mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menú"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Menú mobile desplegable */}
        {menuOpen && (
          <div className="lg:hidden bg-[#231F20] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-white/70 hover:text-white text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-1.5 bg-[#EC008C] text-white text-sm font-bold px-5 py-3 hover:bg-[#c8007a] transition-colors mt-2"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablemos
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
