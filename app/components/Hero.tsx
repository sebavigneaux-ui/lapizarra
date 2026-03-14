import Blobs from "./Blobs";

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";
const WA_COTIZAR = "https://wa.me/56958419326?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20con%20LaPizarra";

const clientes = [
  "Samsung", "Nike", "Walmart", "The North Face", "Marriott",
  "Stellantis", "KIA", "PUIG", "Linde", "Metso Outotec",
  "SQM", "Parque Arauco", "Ripley", "Alsea", "Kaufmann",
  "Polpaico", "CChC", "Universidad de los Andes",
  "Clínica Universidad de los Andes", "Orsan", "Cool Carriers", "Novo Nordisk",
];

export default function Hero() {
  return (
    <section className="bg-[#231F20] flex flex-col relative overflow-hidden">
      <Blobs />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-20 w-full relative z-10">
        <div className="max-w-3xl">
          <p className="text-[#EC008C] text-sm font-bold uppercase tracking-widest mb-8">
            Productora · Agencia Creativa · Santiago, Chile
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Eventos corporativos que representan bien a tu marca y se ejecutan con precisión.
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables para empresas exigentes.
          </p>

          <div className="flex mb-12">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EC008C] hover:bg-[#c8007a] text-white font-bold px-10 py-4 text-base transition-colors text-center"
            >
              Hablemos →
            </a>
          </div>

          <p className="text-white/40 text-sm">
            Trabajamos con equipos de marketing, comunicaciones y RRHH que necesitan
            experiencias bien pensadas y ejecutadas sin margen de error.
          </p>
        </div>
      </div>

      {/* Carrusel de clientes — mismo fondo */}
      <div className="relative z-10 pb-16">
        <p className="text-white/60 text-xs uppercase tracking-widest text-center mb-8">
          Han confiado en nosotros
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
                <span className="text-white/60 text-base font-medium px-6 hover:text-white transition-colors">
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
