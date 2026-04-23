import Blobs from "./Blobs";
import Image from "next/image";
import Link from "next/link";

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
            <span className="block text-4xl md:text-6xl">Transformemos tu</span>
            <span className="block text-4xl md:text-6xl">próxima idea en una</span>
            <span className="block text-5xl md:text-7xl text-[#EC008C]">experiencia memorable.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Si estás evaluando una activación, un lanzamiento o un evento corporativo, conversemos. En una breve reunión podemos entender tu objetivo y ver cómo diseñar una experiencia que realmente funcione.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#EC008C] text-white font-black px-10 py-4 text-base hover:bg-[#c8007a] transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablemos
            </a>
            <Link
              href="/calculadora"
              className="border border-white/30 text-white/70 font-black px-10 py-4 text-base hover:border-white hover:text-white transition-all duration-200 text-center"
            >
              Calcula tu evento →
            </Link>
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
