const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";
const WA_COTIZAR = "https://wa.me/56958419326?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20con%20LaPizarra";

export default function Hero() {
  return (
    <section className="bg-[#231F20] min-h-screen flex items-center relative overflow-hidden">
      {/* Blobs animados tipo aurora */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Línea decorativa magenta */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />

      <div className="max-w-6xl mx-auto px-6 pt-52 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Etiqueta */}
          <p className="text-[#EC008C] text-sm font-bold uppercase tracking-widest mb-8">
            Productora boutique · Santiago, Chile
          </p>

          {/* Titular */}
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Eventos corporativos que representan bien a tu marca y se ejecutan con precisión.
          </h1>

          {/* Subtítulo */}
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables para empresas exigentes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EC008C] text-white font-bold px-8 py-4 text-base hover:bg-[#c8007a] transition-colors text-center"
            >
              Agendar una reunión
            </a>
            <a
              href={WA_COTIZAR}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-bold px-8 py-4 text-base hover:border-white/70 hover:bg-white/5 transition-colors text-center"
            >
              Solicitar cotización
            </a>
          </div>

          {/* Microcopy */}
          <p className="text-white/40 text-sm">
            Trabajamos con equipos de marketing, comunicaciones y RRHH que necesitan
            experiencias bien pensadas y ejecutadas sin margen de error.
          </p>
        </div>
      </div>
    </section>
  );
}
