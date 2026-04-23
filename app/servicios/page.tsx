import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Blobs from "../components/Blobs";
import { SERVICIOS } from "../data/servicios";

export const metadata: Metadata = {
  title: "Servicios de Producción de Eventos Corporativos en Chile | LaPizarra",
  description:
    "Producción de eventos corporativos, activaciones BTL, ferias y stands, lanzamientos de producto, eventos internos y producción audiovisual en Chile. LaPizarra.",
  openGraph: {
    title: "Servicios de Producción de Eventos | LaPizarra",
    description: "Eventos corporativos, activaciones BTL, ferias, lanzamientos, cultura organizacional y producción audiovisual en Chile.",
    url: "https://somoslapizarra.cl/servicios",
    siteName: "LaPizarra",
    images: [{ url: "https://somoslapizarra.cl/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: { canonical: "https://somoslapizarra.cl/servicios" },
};

export default function ServiciosPage() {
  return (
    <div className="bg-[#231F20] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-44 md:pt-52 pb-20 px-6">
        <Blobs />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-6">
            Servicios
          </p>
          <h1 className="text-white font-black leading-none tracking-tighter mb-8">
            <span className="block text-4xl md:text-6xl lg:text-7xl">Todo lo que necesitas</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl">para producir una</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-[#EC008C]">experiencia memorable.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl">
            Desde eventos corporativos hasta producción audiovisual. Diseñamos y ejecutamos cada proyecto con el mismo criterio: impacto real y ejecución impecable.
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICIOS.map((servicio, i) => (
              <Link
                key={servicio.slug}
                href={`/servicios/${servicio.slug}`}
                className="group flex flex-col border border-white/10 rounded-2xl p-8 hover:border-[#EC008C]/40 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#EC008C]/0 via-[#EC008C]/0 to-transparent group-hover:from-[#EC008C] group-hover:via-[#EC008C]/40 transition-all duration-500" />

                <span className="text-[#EC008C] font-black text-4xl leading-none tracking-tighter mb-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="text-white font-black text-xl leading-tight tracking-tight mb-3 group-hover:text-white transition-colors duration-200">
                  {servicio.titulo}
                </h2>

                <p className="text-[#EC008C] text-sm font-bold italic mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  {servicio.tagline}
                </p>

                <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">
                  {servicio.excerpt}
                </p>

                <div className="flex items-center gap-2 text-white/40 text-xs font-black uppercase tracking-wider group-hover:text-[#EC008C] transition-colors duration-200">
                  <span>Ver servicio</span>
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#EC008C] relative z-10 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-white font-black leading-none tracking-tighter mb-3">
              <span className="block text-3xl md:text-5xl">¿No sabes por dónde</span>
              <span className="block text-3xl md:text-5xl">empezar?</span>
            </h2>
            <p className="text-white/80 text-lg">
              Simula el presupuesto de tu evento en 2 minutos y te mostramos qué incluye cada nivel de producción.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/calculadora"
              className="inline-flex items-center gap-3 border-2 border-white text-white font-black px-8 py-4 hover:bg-white hover:text-[#EC008C] transition-all duration-200"
            >
              Calcular mi evento
            </Link>
            <a
              href="https://wa.me/56958419326?text=Hola,%20quiero%20cotizar%20un%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#EC008C] font-black px-8 py-4 hover:bg-white/90 transition-colors duration-200"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablemos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
