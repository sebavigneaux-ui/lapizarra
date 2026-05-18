import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#231F20] font-black leading-none tracking-tighter">
            <span className="block text-5xl md:text-7xl">Visión de negocio</span>
            <span className="block text-3xl md:text-4xl text-[#231F20]/40 my-2">y excelencia en ejecución,</span>
            <span className="block text-4xl md:text-6xl">en una misma <span className="text-[#EC008C]">agencia.</span></span>
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
          <div className="flex flex-col gap-6 text-[#231F20]/75 text-lg leading-relaxed">
            <p>
              <span className="text-[#231F20] font-bold">Sebastián Vigneaux</span> tiene 18 años de experiencia en gestión corporativa y dirección comercial. <span className="text-[#231F20] font-bold">Daniel Soto</span> lleva 15 años produciendo eventos de alto estándar para empresas de primera línea. Juntos fundaron LaPizarra en 2023 para reunir en una sola agencia la visión estratégica del negocio y la excelencia en ejecución.
            </p>
            <p>
              Con más de 200 eventos de experiencia acumulada, trabajamos de forma cercana, ágil y senior. Sin soluciones genéricas: cada experiencia responde a objetivos reales y se ejecuta con obsesión por los detalles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
