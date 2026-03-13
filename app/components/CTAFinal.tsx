const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";
const WA_COTIZAR = "https://wa.me/56958419326?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20con%20LaPizarra";

export default function CTAFinal() {
  return (
    <section className="bg-[#231F20] py-28 px-6 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-8">
            Hablemos
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight mb-6">
            Transformemos tu próxima idea en una experiencia memorable.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Si estás evaluando una activación, un lanzamiento o un evento corporativo, conversemos. En una breve reunión podemos entender tu objetivo y ver cómo diseñar una experiencia que realmente funcione.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EC008C] text-white font-black px-8 py-4 text-base hover:bg-[#c8007a] transition-colors text-center"
            >
              Agendar reunión
            </a>
            <a
              href={WA_COTIZAR}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-bold px-8 py-4 text-base hover:border-white/60 hover:bg-white/5 transition-colors text-center"
            >
              Solicitar cotización
            </a>
          </div>

          <p className="text-white/30 text-sm">
            Respuesta rápida. Conversación directa con el equipo senior.
          </p>
        </div>
      </div>
    </section>
  );
}
