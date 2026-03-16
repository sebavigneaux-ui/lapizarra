"use client";
import Link from "next/link";

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";

const clientes = [
  "Samsung", "Nike", "Walmart", "The North Face", "Marriott",
  "Stellantis", "KIA", "PUIG", "Linde", "Metso Outotec",
  "SQM", "Parque Arauco", "Ripley", "Alsea", "Kaufmann",
  "Polpaico", "CChC", "Universidad de los Andes",
  "Orsan Seguros", "Cool Carriers", "Novo Nordisk",
];

export default function Hero() {
  return (
    <section className="bg-[#231F20] flex flex-col relative overflow-hidden min-h-screen">
      {/* Video de fondo */}
      <video
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

            <h1 className="font-black leading-none tracking-tighter mb-10">
              <span className="block text-5xl md:text-7xl text-white">Eventos bien ejecutados</span>
              <span className="block text-5xl md:text-7xl text-white">que representan</span>
              <span className="block text-5xl md:text-7xl text-[#EC008C]">a tu marca.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
              Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables.
            </p>
          </div>

          {/* Columna derecha — CTA calculadora */}
          <div className="relative">
            {/* Borde magenta superior decorativo */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#EC008C] via-[#EC008C]/40 to-transparent" />

            <div className="border border-white/15 bg-white/[0.04] backdrop-blur-sm p-8 md:p-10">
              <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-6">
                Calculadora de eventos
              </p>

              <h2 className="text-white font-black leading-none tracking-tighter mb-4">
                <span className="block text-3xl md:text-4xl">¿Cuánto cuesta</span>
                <span className="block text-3xl md:text-4xl">producir tu evento?</span>
              </h2>

              <p className="text-white/50 text-base leading-relaxed mb-10">
                Simula tu evento en 2 minutos: elige el tipo, los servicios y la región. Obtienes una estimación real, desglosada por bloque.
              </p>

              {/* Stats de prueba social */}
              <div className="flex gap-8 mb-10 border-t border-white/10 pt-8">
                <div>
                  <p className="text-white font-black text-3xl leading-none tracking-tighter">21+</p>
                  <p className="text-white/40 text-xs mt-1">marcas atendidas</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-white font-black text-3xl leading-none tracking-tighter">5</p>
                  <p className="text-white/40 text-xs mt-1">regiones del país</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-white font-black text-3xl leading-none tracking-tighter">2 min</p>
                  <p className="text-white/40 text-xs mt-1">para simular</p>
                </div>
              </div>

              {/* Botón principal */}
              <Link
                href="/calculadora"
                className="group flex items-center justify-between w-full bg-[#EC008C] hover:bg-[#d4007d] text-white font-black px-6 py-5 transition-all duration-300 mb-4"
              >
                <span className="text-lg">Calcula tu evento en LaPizarra</span>
                <span className="w-10 h-10 bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              {/* CTA secundario */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-bold py-3.5 text-sm transition-all duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Prefiero hablar directo
              </a>
            </div>
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
