const testimonios = [
  {
    texto: "LaPizarra entendió desde el primer momento lo que necesitábamos. No solo ejecutaron el evento con precisión, sino que aportaron ideas que elevaron la experiencia muy por encima de lo que teníamos en mente. Un partner que realmente se involucra.",
    nombre: "Fernando Espínola",
    cargo: "Jefe de Marketing Corporativo",
    empresa: "Orsan",
  },
  {
    texto: "Trabajar con LaPizarra fue una experiencia muy distinta a lo que estábamos acostumbrados. Respuesta rápida, propuestas concretas y una ejecución impecable. El evento representó exactamente lo que queríamos comunicar como marca.",
    nombre: "Claudia Benavente",
    cargo: "Jefe Formación Comercial",
    empresa: "Grupo Stellantis Chile",
  },
  {
    texto: "Para nosotros era fundamental que el evento reflejara los valores y estándares de Novo Nordisk. LaPizarra lo logró con creces. Cada detalle estuvo pensado y el resultado fue una experiencia memorable para todos los asistentes.",
    nombre: "Javiera Jara",
    cargo: "Public Affairs & Communications Manager Chile",
    empresa: "Novo Nordisk",
  },
  {
    texto: "LaPizarra tiene algo que pocas productoras ofrecen: atención real y directa en cada etapa del proyecto. Nos dieron tranquilidad absoluta durante todo el proceso y el evento superó nuestras expectativas.",
    nombre: "Catalina Schorr",
    cargo: "Commercial Director",
    empresa: "Cool Carriers",
  },
];

export default function Testimonios() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Testimonios
          </p>
          <h2 className="text-[#231F20] font-black leading-none tracking-tighter">
            <span className="block text-3xl md:text-4xl text-[#231F20]/40 mb-1">Lo que dicen</span>
            <span className="block text-5xl md:text-7xl">quienes han trabajado</span>
            <span className="block text-5xl md:text-7xl">con <span className="text-[#EC008C]">nosotros.</span></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonios.map((t, i) => (
            <div key={i} className="border border-[#231F20]/10 p-8 flex flex-col justify-between gap-8 hover:border-[#EC008C]/40 transition-colors">
              <p className="text-[#231F20]/80 text-lg leading-relaxed">
                "{t.texto}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#EC008C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-sm">
                    {t.nombre.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#231F20] font-bold text-sm">{t.nombre}</p>
                  <p className="text-[#231F20]/50 text-xs">{t.cargo} · {t.empresa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#231F20]/30 text-xs text-center mt-10">
          * Textos provisorios — pendiente validación de los clientes.
        </p>
      </div>
    </section>
  );
}
