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

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EC008C] hover:bg-[#c8007a] text-white font-black px-10 py-4 text-base transition-colors"
            >
              Hablemos →
            </a>
          </div>

          {/* Columna derecha — espacio intencional en desktop */}
          <div className="hidden md:block" />
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
