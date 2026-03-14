"use client";
import { useState } from "react";
import Image from "next/image";
import Blobs from "./Blobs";

const fotos = [
  "/galeria/1.jpg",
  "/galeria/2.jpg",
  "/galeria/3.jpg",
  "/galeria/4.jpg",
  "/galeria/5.jpg",
  "/galeria/6.jpg",
  "/galeria/7.jpg",
];

export default function Galeria() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="bg-[#231F20] py-24 px-6 relative overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Galería
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-xl">
            Detrás de cada evento, una producción impecable.
          </h2>
        </div>

        {/* Grid con áreas explícitas para evitar gaps */}
        <style>{`
          .galeria-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-rows: 280px 280px 280px;
            gap: 4px;
          }
          .foto-1 { grid-column: 1; grid-row: 1 / 3; }
          .foto-2 { grid-column: 2; grid-row: 1; }
          .foto-3 { grid-column: 3; grid-row: 1; }
          .foto-4 { grid-column: 2; grid-row: 2; }
          .foto-5 { grid-column: 3; grid-row: 2; }
          .foto-6 { grid-column: 1; grid-row: 3; }
          .foto-7 { grid-column: 2 / 4; grid-row: 3; }
          @media (max-width: 768px) {
            .galeria-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: repeat(4, 200px);
            }
            .foto-1 { grid-column: 1 / 3; grid-row: 1; }
            .foto-2 { grid-column: 1; grid-row: 2; }
            .foto-3 { grid-column: 2; grid-row: 2; }
            .foto-4 { grid-column: 1; grid-row: 3; }
            .foto-5 { grid-column: 2; grid-row: 3; }
            .foto-6 { grid-column: 1; grid-row: 4; }
            .foto-7 { grid-column: 2; grid-row: 4; }
          }
        `}</style>

        <div className="galeria-grid">
          {fotos.map((src, i) => (
            <div
              key={i}
              className={`foto-${i + 1} relative overflow-hidden cursor-pointer group`}
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`Evento LaPizarra ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-3xl font-thin">+</span>
              </div>
            </div>
          ))}
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
