import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Quiénes somos
          </p>
          <h2 className="text-[#231F20] text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-xl">
            Visión de negocio y excelencia en ejecución, en una misma agencia.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/founders.png"
              alt="Sebastián y Daniel, fundadores de LaPizarra"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 text-[#231F20]/75 text-base leading-relaxed">
            <p>
              LaPizarra nace de la unión de dos mundos que rara vez conviven bien en una misma agencia: visión de negocio y excelencia en ejecución.
            </p>
            <p>
              Por un lado, <span className="text-[#231F20] font-bold">Sebastián</span> aporta una mirada estratégica y comercial, con experiencia desarrollando negocios, detectando oportunidades y entendiendo lo que las marcas realmente necesitan para generar impacto. Por otro, <span className="text-[#231F20] font-bold">Daniel</span> aporta la experiencia de años en producción, operación y aterrizaje de proyectos, asegurando que cada idea no solo se vea bien en una presentación, sino que ocurra de verdad y con alto estándar.
            </p>
            <p>
              Esa combinación es la base de LaPizarra: una agencia boutique que trabaja de forma cercana, ágil y senior, transformando ideas en experiencias con criterio, creatividad y obsesión por los detalles.
            </p>
            <p>
              No creemos en soluciones genéricas ni en producir por producir. Creemos en diseñar experiencias que conecten con las personas, respondan a objetivos reales de negocio y se ejecuten con excelencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
