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
    titulo: "Producciones Audiovisuales",
    desc: "Video corporativo, cobertura de eventos y contenido audiovisual para documentar y amplificar tu marca.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">

          <h2 className="text-[#231F20] font-black leading-none tracking-tighter">
            <span className="block text-6xl md:text-8xl text-[#EC008C]">Experiencias</span>
            <span className="block text-4xl md:text-5xl text-[#231F20]">corporativas y <span className="text-[#231F20]/40">de marca</span></span>
          </h2>
          <p className="text-[#231F20]/60 text-lg mt-4 max-w-xl">
            Diseñamos y producimos experiencias para empresas que necesitan alto estándar de ejecución.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#231F20]/10">
          {servicios.map((s) => (
            <div key={s.num} className="bg-white p-8 hover:bg-[#F5F5F5] transition-colors group">
              <span className="text-[#EC008C] text-5xl font-black leading-none">{s.num}</span>
              <h3 className="text-[#231F20] font-black text-lg mt-4 mb-3 group-hover:text-[#EC008C] transition-colors">
                {s.titulo}
              </h3>
              <p className="text-[#231F20]/60 text-lg leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
