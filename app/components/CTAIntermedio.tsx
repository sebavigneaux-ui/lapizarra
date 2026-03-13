const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";

export default function CTAIntermedio() {
  return (
    <section className="bg-[#EC008C] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-white text-2xl md:text-3xl font-black leading-tight tracking-tight mb-3">
            Si tu próximo evento es importante, vale la pena hacerlo bien.
          </h2>
          <p className="text-white/80 text-base">
            Conversemos sobre tu proyecto y veamos cómo diseñar una experiencia que represente bien a tu marca.
          </p>
        </div>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#EC008C] font-black px-8 py-4 text-base hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
        >
          Hablemos →
        </a>
      </div>
    </section>
  );
}
