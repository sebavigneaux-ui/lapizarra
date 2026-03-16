"use client";
import { useState } from "react";
import Image from "next/image";

const videos = [
  { id: "zO3KVRmb7vQ", cliente: "Samsung",                  titulo: "Video Resumen" },
  { id: "lNUHjeq-81s", cliente: "Cool Carriers",            titulo: "Video Resumen" },
  { id: "mr8FCGm3RxY", cliente: "Sofofa",                   titulo: "Video Resumen" },
  { id: "jpXMz12JjXU", cliente: "Stellantis · Leap Motor",  titulo: "Video Resumen" },
  { id: "4uyNXJ2N6ow", cliente: "Parque Arauco",            titulo: "Video Resumen" },
  { id: "wyRI9zvGXSE", cliente: "Sofofa",                   titulo: "Video Resumen" },
];

function VideoCard({ id, cliente, titulo }: typeof videos[0]) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full bg-[#231F20]">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={`${titulo} · ${cliente}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className="aspect-video w-full relative cursor-pointer group overflow-hidden bg-[#231F20]"
      onClick={() => setPlaying(true)}
    >
      {/* Logo LaPizarra como fondo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/logo-blanco.png"
          alt=""
          width={340}
          height={136}
          className="object-contain select-none"
          style={{ opacity: 0.12 }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#231F20]/90 via-[#231F20]/20 to-transparent" />

      {/* Texto */}
      <div className="absolute bottom-0 left-0 p-5">
        <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-1">
          {titulo}
        </p>
        <p className="text-white font-black text-lg leading-tight tracking-tight">
          {cliente}
        </p>
      </div>

      {/* Botón play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#EC008C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="bg-[#F5F5F5] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#231F20] font-black leading-none tracking-tighter">
            <span className="block text-5xl md:text-7xl">Experiencias que hablan</span>
            <span className="block text-5xl md:text-7xl"><span className="text-[#EC008C]">por sí solas.</span></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
