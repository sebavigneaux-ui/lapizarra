import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Blobs from "../components/Blobs";
import ArticulosGrid from "./ArticulosGrid";
import { ARTICULOS } from "../data/articulos";

export const metadata: Metadata = {
  title: "Centro de Aprendizaje — Recursos sobre eventos corporativos | LaPizarra",
  description:
    "Guías, metodologías y recursos estratégicos sobre eventos corporativos, activaciones BTL, ferias y stands, y experiencia de marca. Por el equipo de LaPizarra.",
  openGraph: {
    title: "Centro de Aprendizaje — Recursos sobre eventos corporativos | LaPizarra",
    description:
      "Guías, metodologías y recursos estratégicos sobre eventos corporativos, activaciones BTL, ferias y stands, y experiencia de marca.",
    url: "https://somoslapizarra.cl/centro-de-aprendizaje",
    siteName: "LaPizarra",
    images: [{ url: "https://somoslapizarra.cl/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro de Aprendizaje | LaPizarra",
    description: "Guías y recursos sobre eventos corporativos, activaciones BTL, ferias y experiencia de marca.",
    images: ["https://somoslapizarra.cl/og-image.jpg"],
  },
  alternates: {
    canonical: "https://somoslapizarra.cl/centro-de-aprendizaje",
  },
};

export default function CentroAprendizajePage() {
  return (
    <div className="bg-[#231F20] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6">
        <Blobs />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-6">
              Centro de Aprendizaje
            </p>
            <h1 className="text-white font-black leading-none tracking-tighter mb-8">
              <span className="block text-4xl md:text-6xl lg:text-7xl">Recursos para</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl">quienes producen</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl text-[#EC008C]">experiencias.</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl">
              Guías estratégicas, metodologías probadas y criterio real sobre eventos corporativos, activaciones, ferias y experiencia de marca. Sin humo.
            </p>
          </div>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ArticulosGrid articulos={ARTICULOS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-4">
              ¿Listo para pasar a la acción?
            </p>
            <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tight mb-3">
              Simula el presupuesto de tu próximo evento.
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              En menos de 2 minutos tienes una estimación referencial basada en formato, asistentes y región.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/calculadora"
              className="inline-flex items-center gap-3 bg-[#EC008C] text-white font-black px-8 py-4 hover:bg-[#d4007d] transition-colors duration-200"
            >
              Calcular mi evento
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 border border-white/20 text-white/60 font-black px-8 py-4 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
