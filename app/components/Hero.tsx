"use client";
import { useEffect, useRef } from "react";
import HeroContactForm from "./HeroContactForm";

const clientes = [
  "Samsung", "Nike", "Walmart", "The North Face", "Marriott",
  "Stellantis", "KIA", "PUIG", "Linde", "Metso Outotec",
  "SQM", "Parque Arauco", "Ripley", "Alsea", "Kaufmann",
  "Polpaico", "CChC", "Universidad de los Andes",
  "Orsan Seguros", "Cool Carriers", "Novo Nordisk",
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.8) {
        video.currentTime = 0;
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="bg-[#231F20] flex flex-col relative overflow-hidden min-h-screen">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#231F20]/50" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — texto */}
          <div>
            <p className="text-[#EC008C] text-sm font-bold uppercase tracking-widest mb-10">
              Productora · Agencia Creativa · Santiago, Chile
            </p>

            <h1 className="font-black leading-none tracking-tighter mb-4">
              <span className="block text-5xl md:text-7xl text-white">Productora de Eventos</span>
              <span className="block text-5xl md:text-7xl text-white">Corporativos en</span>
              <span className="block text-5xl md:text-7xl text-white">Santiago, Chile</span>
            </h1>
            <p className="text-3xl md:text-4xl font-black leading-none tracking-tighter text-[#EC008C] mb-10">
              Convenciones · Lanzamientos de Productos · Activaciones BTL · Stands
            </p>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
              Diseñamos y producimos eventos corporativos en Chile para empresas que exigen alto estándar de ejecución y resultados reales.
            </p>
          </div>

          {/* Columna derecha — Formulario de contacto */}
          <div>
            <HeroContactForm />
          </div>

        </div>
      </div>

      {/* Carrusel de clientes */}
      <div className="relative z-10 pb-16">
        <p className="text-white/60 text-sm uppercase tracking-widest text-center mb-8">
          Clientes
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #231F20, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #231F20, transparent)" }} />

          <style>{`
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 35s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="marquee-track">
            {[...clientes, ...clientes].map((nombre, i) => (
              <span key={i} className="flex items-center whitespace-nowrap">
                <span className="text-white/60 text-lg font-medium px-6 hover:text-white transition-colors">
                  {nombre}
                </span>
                <span className="text-[#EC008C] text-xs select-none">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
