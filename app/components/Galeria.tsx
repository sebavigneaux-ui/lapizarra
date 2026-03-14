"use client";
import { useState } from "react";
import Image from "next/image";

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
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Galería
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-xl">
            Detrás de cada evento, una producción impecable.
          </h2>
        </div>

        {/* Grid masonry-like */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {fotos.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
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
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl">+</span>
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
