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

        {proyectos.map((proyecto, idx) => (
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
              <div className="p3 relative overflow-hidden group">
                <Image
                  src={proyecto.fotos[2]}
                  alt={`${proyecto.titulo} 3`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-300 flex items-end p-4">
                  <Link
                    href={`/proyectos/${proyecto.slug}`}
                    className="text-white border border-white/70 hover:border-white px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver proyecto →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
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
