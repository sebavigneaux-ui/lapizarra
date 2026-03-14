"use client";
import { useState } from "react";
import Image from "next/image";

const fotos1 = [
  "/galeria/1.jpg",
  "/galeria/2.jpg",
  "/galeria/3.jpg",
  "/galeria/4.jpg",
  "/galeria/5.jpg",
  "/galeria/6.jpg",
  "/galeria/7.jpg",
];

const fotos4 = [
  "/galeria4/1.jpg",
  "/galeria4/2.jpg",
  "/galeria4/3.jpg",
  "/galeria4/4.jpg",
  "/galeria4/5.jpg",
  "/galeria4/6.jpg",
  "/galeria4/7.jpg",
  "/galeria4/8.jpg",
  "/galeria4/9.jpg",
  "/galeria4/10.jpg",
];

const fotos3 = [
  "/galeria3/1.jpg",
  "/galeria3/2.jpg",
  "/galeria3/3.jpg",
  "/galeria3/4.jpg",
  "/galeria3/5.jpg",
  "/galeria3/6.jpg",
  "/galeria3/7.jpg",
  "/galeria3/8.jpg",
  "/galeria3/9.jpg",
  "/galeria3/10.jpg",
  "/galeria3/11.jpg",
];

const fotos2 = [
  "/galeria2/1.jpg",
  "/galeria2/2.jpg",
  "/galeria2/3.jpg",
  "/galeria2/4.png",
  "/galeria2/5.jpg",
  "/galeria2/6.jpg",
  "/galeria2/7.jpg",
  "/galeria2/8.jpg",
  "/galeria2/9.jpg",
  "/galeria2/10.jpg",
  "/galeria2/11.jpg",
  "/galeria2/12.jpg",
];

export default function Galeria() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Galería
          </p>
          <h2 className="text-white font-black leading-none tracking-tighter">
            <span className="block text-3xl md:text-4xl text-white/50 mb-1">Detrás de cada evento,</span>
            <span className="block text-5xl md:text-7xl">una producción</span>
            <span className="block text-5xl md:text-7xl text-[#EC008C]">impecable.</span>
          </h2>
        </div>

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
          .galeria2-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 220px 220px 220px;
            gap: 4px;
          }
          .g2-1  { grid-column: 1 / 3; grid-row: 1; }
          .g2-2  { grid-column: 3;     grid-row: 1; }
          .g2-3  { grid-column: 4;     grid-row: 1; }
          .g2-4  { grid-column: 1;     grid-row: 2; }
          .g2-5  { grid-column: 2;     grid-row: 2; }
          .g2-6  { grid-column: 3 / 5; grid-row: 2; }
          .g2-7  { grid-column: 1;     grid-row: 3; }
          .g2-8  { grid-column: 2;     grid-row: 3; }
          .g2-9  { grid-column: 3;     grid-row: 3; }
          .g2-10 { grid-column: 4;     grid-row: 3; }
          @media (max-width: 768px) {
            .galeria2-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: repeat(6, 180px);
            }
            .g2-1  { grid-column: 1 / 3; grid-row: 1; }
            .g2-2  { grid-column: 1;     grid-row: 2; }
            .g2-3  { grid-column: 2;     grid-row: 2; }
            .g2-4  { grid-column: 1;     grid-row: 3; }
            .g2-5  { grid-column: 2;     grid-row: 3; }
            .g2-6  { grid-column: 1 / 3; grid-row: 4; }
            .g2-7  { grid-column: 1;     grid-row: 5; }
            .g2-8  { grid-column: 2;     grid-row: 5; }
            .g2-9  { grid-column: 1;     grid-row: 6; }
            .g2-10 { grid-column: 2;     grid-row: 6; }
          }
          .galeria3-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 260px 260px 260px 260px;
            gap: 4px;
          }
          .g3-1  { grid-column: 1;     grid-row: 1; }
          .g3-2  { grid-column: 2 / 4; grid-row: 1; }
          .g3-3  { grid-column: 1;     grid-row: 2; }
          .g3-4  { grid-column: 2;     grid-row: 2; }
          .g3-5  { grid-column: 3;     grid-row: 2; }
          .g3-6  { grid-column: 1 / 3; grid-row: 3; }
          .g3-7  { grid-column: 3;     grid-row: 3; }
          .g3-8  { grid-column: 1;     grid-row: 4; }
          .g3-9  { grid-column: 2;     grid-row: 4; }
          .g3-10 { grid-column: 3;     grid-row: 4; }
          @media (max-width: 768px) {
            .galeria3-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: repeat(6, 200px);
            }
            .g3-1  { grid-column: 1 / 3; grid-row: 1; }
            .g3-2  { grid-column: 1;     grid-row: 2; }
            .g3-3  { grid-column: 2;     grid-row: 2; }
            .g3-4  { grid-column: 1;     grid-row: 3; }
            .g3-5  { grid-column: 2;     grid-row: 3; }
            .g3-6  { grid-column: 1 / 3; grid-row: 4; }
            .g3-7  { grid-column: 1;     grid-row: 5; }
            .g3-8  { grid-column: 2;     grid-row: 5; }
            .g3-9  { grid-column: 1;     grid-row: 6; }
            .g3-10 { grid-column: 2;     grid-row: 6; }
          }
          .galeria4-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 260px 260px 260px;
            gap: 4px;
          }
          .g4-1  { grid-column: 1 / 3; grid-row: 1; }
          .g4-2  { grid-column: 3;     grid-row: 1; }
          .g4-3  { grid-column: 1;     grid-row: 2; }
          .g4-4  { grid-column: 2;     grid-row: 2; }
          .g4-5  { grid-column: 3;     grid-row: 2; }
          .g4-6  { grid-column: 1;     grid-row: 3; }
          .g4-7  { grid-column: 2;     grid-row: 3; }
          .g4-8  { grid-column: 3;     grid-row: 3; }
          @media (max-width: 768px) {
            .galeria4-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: repeat(5, 200px);
            }
            .g4-1  { grid-column: 1 / 3; grid-row: 1; }
            .g4-2  { grid-column: 1;     grid-row: 2; }
            .g4-3  { grid-column: 2;     grid-row: 2; }
            .g4-4  { grid-column: 1;     grid-row: 3; }
            .g4-5  { grid-column: 2;     grid-row: 3; }
            .g4-6  { grid-column: 1;     grid-row: 4; }
            .g4-7  { grid-column: 2;     grid-row: 4; }
            .g4-8  { grid-column: 1 / 3; grid-row: 5; }
          }
        `}</style>

        {/* Galería 1 — Polpaico */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Polpaico</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="galeria-grid">
          {fotos1.map((src, i) => (
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

        {/* Galería 2 — Leap Motor */}
        <div className="flex items-center gap-4 mt-16 mb-4">
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Leap Motor</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="galeria2-grid">
          {fotos2.map((src, i) => {
            const cls = i < 10 ? `g2-${i + 1}` : "relative";
            return (
              <div
                key={i}
                className={`${cls} relative overflow-hidden cursor-pointer group`}
                onClick={() => setSelected(src)}
              >
                <Image
                  src={src}
                  alt={`Evento LaPizarra Leap Motor ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-3xl font-thin">+</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Galería 3 — Cool Carriers */}
        <div className="flex items-center gap-4 mt-16 mb-4">
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Cool Carriers</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="galeria3-grid">
          {fotos3.map((src, i) => {
            const cls = i < 10 ? `g3-${i + 1}` : "relative";
            return (
              <div
                key={i}
                className={`${cls} relative overflow-hidden cursor-pointer group`}
                onClick={() => setSelected(src)}
              >
                <Image
                  src={src}
                  alt={`Evento LaPizarra Cool Carriers ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-3xl font-thin">+</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Galería 4 — Orsan Seguros */}
        <div className="flex items-center gap-4 mt-16 mb-4">
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Orsan Seguros</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="galeria4-grid">
          {fotos4.map((src, i) => {
            const cls = i < 8 ? `g4-${i + 1}` : "relative";
            return (
              <div
                key={i}
                className={`${cls} relative overflow-hidden cursor-pointer group`}
                onClick={() => setSelected(src)}
              >
                <Image
                  src={src}
                  alt={`Evento LaPizarra Orsan Seguros ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-3xl font-thin">+</span>
                </div>
              </div>
            );
          })}
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
