const servicios = [
  {
    num: "01",
    titulo: "Eventos corporativos",
    desc: "Convenciones, kick offs, celebraciones internas y eventos institucionales.",
  },
  {
    num: "02",
    titulo: "Lanzamientos de producto",
    desc: "Experiencias diseñadas para generar impacto y posicionamiento de marca.",
  },
  {
    num: "03",
    titulo: "Activaciones BTL",
    desc: "Experiencias de contacto directo que conectan marca y audiencia.",
  },
  {
    num: "04",
    titulo: "Experiencias internas",
    desc: "Eventos que fortalecen cultura organizacional y engagement.",
  },
  {
    num: "05",
    titulo: "Stands y experiencias de marca",
    desc: "Diseño y producción de espacios para ferias, exposiciones y activaciones.",
  },
  {
    num: "06",
    titulo: "Producciones a medida",
    desc: "Experiencias únicas diseñadas desde cero para objetivos específicos.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Servicios
          </p>
          <h2 className="text-[#231F20] text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-xl">
            Experiencias corporativas y de marca
          </h2>
          <p className="text-[#231F20]/60 text-base mt-4 max-w-xl">
            Diseñamos y producimos experiencias para empresas que necesitan alto estándar de ejecución.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#231F20]/10">
          {servicios.map((s) => (
            <div key={s.num} className="bg-white p-8 hover:bg-[#F5F5F5] transition-colors group">
              <span className="text-[#EC008C] text-xs font-bold tracking-widest">{s.num}</span>
              <h3 className="text-[#231F20] font-black text-lg mt-4 mb-3 group-hover:text-[#EC008C] transition-colors">
                {s.titulo}
              </h3>
              <p className="text-[#231F20]/60 text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
