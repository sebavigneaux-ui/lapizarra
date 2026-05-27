"use client";
import { useState } from "react";
import Image from "next/image";
import { casosExito } from "../../data/casosExito";

const WA_CASO =
  "https://wa.me/56958419326?text=" +
  encodeURIComponent(
    "Hola, estoy preparando una feria o stand corporativo y me gustaría conversar con LaPizarra"
  );

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L0 24l6.345-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.374l-.36-.214-3.724.878.916-3.618-.235-.372A9.789 9.789 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
  </svg>
);

export default function CasosExito() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="casos-exito" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">
          Casos de éxito en ferias y stands
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tighter mb-4">
          Producción real.<br />Resultados concretos.
        </h2>
        <p className="text-white/40 text-base mb-16 max-w-xl">
          Proyectos desarrollados junto a nuestro proveedor estratégico Esferical, especialista en
          construcción e implementación de stands para marcas exigentes en Chile.
        </p>

        {/* ── Cases ── */}
        <div className="space-y-24">
          {casosExito.map((caso, idx) => (
            <article key={caso.id}>

              {/* Case header */}
              <div className="flex flex-wrap items-start gap-4 mb-8">
                <span className="text-white/10 font-black text-6xl leading-none select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white font-black text-2xl md:text-3xl leading-tight mb-2">
                    {caso.cliente}
                  </h3>
                  <p className="text-white/40 text-sm font-medium mb-3">{caso.titulo}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-black tracking-wider px-3 py-1 rounded-full bg-[#EC008C]/20 text-[#EC008C]">
                      {caso.sector}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/50">
                      {caso.feria}
                    </span>
                    {caso.year && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/50">
                        {caso.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="space-y-2 mb-8">
                {/* Hero image */}
                <button
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group block"
                  onClick={() => setLightboxSrc(caso.heroImage)}
                  aria-label={`Ver imagen del stand ${caso.cliente}`}
                >
                  <Image
                    src={caso.heroImage}
                    alt={`Stand ${caso.cliente} — ${caso.feria}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 1152px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-black tracking-widest uppercase bg-black/60 backdrop-blur-sm px-5 py-2.5 rounded-full">
                      Ver ampliado
                    </span>
                  </div>
                </button>

                {/* Secondary grid: 3 cols row */}
                <div className="grid grid-cols-3 gap-2">
                  {caso.images.slice(0, 3).map((src, i) => (
                    <button
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group block"
                      onClick={() => setLightboxSrc(src)}
                      aria-label={`Ver imagen ${i + 2} del stand ${caso.cliente}`}
                    >
                      <Image
                        src={src}
                        alt={`${caso.cliente} — detalle ${i + 2}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 33vw, 384px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </button>
                  ))}
                </div>

                {/* Secondary grid: 2 cols row */}
                {caso.images.length > 3 && (
                  <div className="grid grid-cols-2 gap-2">
                    {caso.images.slice(3, 5).map((src, i) => (
                      <button
                        key={i}
                        className="relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer group block"
                        onClick={() => setLightboxSrc(src)}
                        aria-label={`Ver imagen ${i + 5} del stand ${caso.cliente}`}
                      >
                        <Image
                          src={src}
                          alt={`${caso.cliente} — detalle ${i + 5}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 576px"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                {[
                  { label: "Objetivo", text: caso.objetivo },
                  { label: "Metodología", text: caso.metodologia },
                  { label: "Resultados", text: caso.resultados },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-200"
                  >
                    <div className="w-1.5 h-1.5 bg-[#EC008C] rounded-full mb-4" />
                    <p className="text-white font-black text-sm uppercase tracking-wider mb-3">
                      {item.label}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Partner mention */}
              <div className="flex items-start gap-4 border border-white/8 rounded-2xl p-5 bg-white/[0.02]">
                <div className="flex-shrink-0 w-0.5 self-stretch bg-[#EC008C] rounded-full" />
                <p className="text-white/35 text-sm leading-relaxed italic">
                  {caso.partnerMention}
                </p>
              </div>

            </article>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-20 border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EC008C]/6 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[#EC008C] font-black text-xs tracking-widest uppercase mb-4">
              Siguiente paso
            </p>
            <h3 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter mb-4">
              ¿Estás preparando tu próxima<br />feria o stand corporativo?
            </h3>
            <p className="text-white/40 text-base mb-8 max-w-md mx-auto">
              Cuéntanos tu proyecto. Te respondemos con una propuesta concreta en menos de 48 horas.
            </p>
            <a
              href={WA_CASO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-sm bg-[#EC008C] text-white hover:bg-[#c8007a] transition-colors duration-200"
            >
              {WA_ICON}
              Conversemos tu proyecto
            </a>
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-5 right-6 text-white/50 hover:text-white transition-colors duration-200 text-4xl font-thin leading-none"
            onClick={() => setLightboxSrc(null)}
            aria-label="Cerrar imagen"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt="Vista ampliada del stand"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
