import Blobs from "./Blobs";
import Image from "next/image";

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";

export default function CTAFinal() {
  return (
    <section className="bg-[#231F20] relative overflow-hidden">
      <Blobs />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="max-w-2xl">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-8">
            Hablemos
          </p>
          <h2 className="text-white font-black leading-none tracking-tighter mb-8">
            <span className="block text-2xl md:text-6xl">Transformemos tu</span>
            <span className="block text-2xl md:text-6xl">próxima idea en una</span>
            <span className="block text-3xl md:text-7xl text-[#EC008C]">experiencia memorable.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Si estás evaluando una activación, un lanzamiento o un evento corporativo, conversemos. En una breve reunión podemos entender tu objetivo y ver cómo diseñar una experiencia que realmente funcione.
          </p>

          <div className="flex mb-8">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EC008C] text-white font-black px-10 py-4 text-base hover:bg-[#c8007a] transition-colors text-center"
            >
              Hablemos →
            </a>
          </div>

          <p className="text-white/30 text-sm">
            Respuesta rápida. Conversación directa con el equipo senior.
          </p>
        </div>
      </div>

      {/* Footer fusionado */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Image
              src="/logo-blanco.png"
              alt="LaPizarra"
              width={160}
              height={64}
              className="h-12 w-auto object-contain"
            />
            <p className="text-white/30 text-xs mt-2">
              Productora · Agencia Creativa · Santiago, Chile
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <a
              href="mailto:sebastian@somoslapizarra.cl"
              className="text-white/50 hover:text-white transition-colors"
            >
              sebastian@somoslapizarra.cl
            </a>
            <a
              href="https://wa.me/56958419326"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              +56 9 5841 9326
            </a>
          </div>

          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} LaPizarra. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
