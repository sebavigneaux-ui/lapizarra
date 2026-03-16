import Link from "next/link";

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";

export default function CTAIntermedio() {
  return (
    <section className="bg-[#EC008C] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-white font-black leading-none tracking-tighter mb-4">
            <span className="block text-4xl md:text-6xl">Si tu próximo evento</span>
            <span className="block text-4xl md:text-6xl">es importante,</span>
            <span className="block text-2xl md:text-3xl text-white/70 mt-2">vale la pena hacerlo bien.</span>
          </h2>
          <p className="text-white/80 text-lg">
            Conversemos sobre tu proyecto y veamos cómo diseñar una experiencia que represente bien a tu marca.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            href="/calculadora"
            className="border-2 border-white text-white font-black px-7 py-4 text-base hover:bg-white/10 transition-colors whitespace-nowrap text-center"
          >
            Calcular mi evento
          </Link>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#EC008C] font-black px-8 py-4 text-base hover:bg-white/90 transition-colors whitespace-nowrap text-center"
          >
            Hablemos →
          </a>
        </div>
      </div>
    </section>
  );
}
