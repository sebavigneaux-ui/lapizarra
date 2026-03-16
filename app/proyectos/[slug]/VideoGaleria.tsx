"use client";
import { useState } from "react";
import Image from "next/image";

function VideoCard({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="Video del proyecto"
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
      {/* Portada: logo LaPizarra centrado */}
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#231F20]/90 via-[#231F20]/20 to-transparent group-hover:from-[#231F20]/95 transition-all duration-300" />

      {/* Botón play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#EC008C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 left-5">
        <p className="text-[#EC008C] text-[10px] font-black uppercase tracking-widest mb-0.5">Video resumen</p>
        <p className="text-white text-xs font-bold opacity-60">Click para reproducir</p>
      </div>
    </div>
  );
}

export default function VideoGaleria({ videos }: { videos: string[] }) {
  return (
    <div className={`grid gap-1 ${videos.length > 1 ? "md:grid-cols-2" : ""}`}>
      {videos.map((id) => (
        <VideoCard key={id} id={id} />
      ))}
    </div>
  );
}
