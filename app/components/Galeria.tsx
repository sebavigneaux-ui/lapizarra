"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { proyectos } from "../data/proyectos";

export default function Galeria() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-white font-black leading-none tracking-tighter">
            <span className="block text-3xl md:text-4xl text-white/50 mb-1">Detrás de cada evento,</span>
            <span className="block text-5xl md:text-7xl">una producción</span>
            <span className="block text-5xl md:text-7xl text-[#EC008C]">impecable.</span>
          </h2>
        </div>

        <style>{`
          .preview-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 280px 280px;
            gap: 4px;
          }
          .preview-grid .p1 { grid-column: 1; grid-row: 1 / 3; }
          .preview-grid .p2 { grid-column: 2; grid-row: 1; }
          .preview-grid .p3 { grid-column: 2; grid-row: 2; }
          @media (max-width: 640px) {
            .preview-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 200px 200px;
            }
            .preview-grid .p1 { grid-column: 1 / 3; grid-row: 1; }
            .preview-grid .p2 { grid-column: 1; grid-row: 2; }
            .preview-grid .p3 { grid-column: 2; grid-row: 2; }
          }
        `}</style>

        {proyectos.filter(p => ["polpaico-convencion-clientes", "cool-carriers-convencion", "stellantis-jeep-commander"].includes(p.slug)).map((proyecto, idx) => (
          <div key={proyecto.slug} className={idx > 0 ? "mt-16" : ""}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                {proyecto.cliente} · {proyecto.titulo}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="preview-grid">
              {/* Foto 1 — lightbox */}
              <div
                className="p1 relative overflow-hidden cursor-pointer group"
                onClick={() => setSelected(proyecto.fotos[0])}
              >
                <Image
                  src={proyecto.fotos[0]}
                  alt={`${proyecto.titulo} 1`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Foto 2 — lightbox */}
              <div
                className="p2 relative overflow-hidden cursor-pointer group"
                onClick={() => setSelected(proyecto.fotos[1])}
              >
                <Image
                  src={proyecto.fotos[1]}
                  alt={`${proyecto.titulo} 2`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Foto 3 — CTA al proyecto */}
              <Link href={`/proyectos/${proyecto.slug}`} className="p3 relative overflow-hidden group block">
                <Image
                  src={proyecto.fotos[2]}
                  alt={`${proyecto.titulo} 3`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {/* Overlay base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />
                {/* Línea magenta inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EC008C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <p className="text-[#EC008C] text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {proyecto.cliente}
                  </p>
                  <p className="text-white font-black text-sm leading-tight mb-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {proyecto.titulo}
                  </p>
                  <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest">
                    <span className="transition-all duration-300 group-hover:mr-1">Ver proyecto</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
        {/* CTA ver todos */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/60 font-black text-sm hover:text-white hover:border-white/50 transition-all duration-200"
          >
            Ver todos los proyectos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-black hover:text-[#EC008C] transition-colors"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
          <div className="relative max-w-5xl w-full max-h-[85vh] aspect-video">
            <Image
              src={selected}
              alt="Foto LaPizarra"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
