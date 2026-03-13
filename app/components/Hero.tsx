import Blobs from "./Blobs";
import Marquee from "./Marquee";

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";

export default function Hero() {
  return (
    <section className="bg-[#231F20] flex flex-col relative overflow-hidden">
      <Blobs />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />

      <div className="max-w-6xl mx-auto px-6 pt-52 pb-20 w-full relative z-10">
        <div className="max-w-3xl">
          <p className="text-[#EC008C] text-sm font-bold uppercase tracking-widest mb-8">
            Productora boutique · Santiago, Chile
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

      <div className="relative z-10 pb-8">
        <p className="text-white/30 text-xs uppercase tracking-widest text-center mb-4">
          Han confiado en nosotros
        </p>
        <Marquee />
      </div>
    </section>
  );
}
