import Blobs from "./Blobs";

const servicios = [
  {
    num: "01",
    titulo: "Eventos corporativos",
    desc: "Convenciones, kick offs, aniversarios y celebraciones institucionales diseñados para impactar a tu equipo y representar bien a tu empresa.",
  },
  {
    num: "02",
    titulo: "Lanzamientos de producto",
    desc: "Presentaciones que generan anticipación, cobertura y recordación. Desde el concepto hasta la ejecución, todo pensado para que tu producto llegue con fuerza.",
  },
  {
    num: "03",
    titulo: "Activaciones BTL",
    desc: "Experiencias en punto de venta, espacios públicos o eventos masivos que crean contacto real entre tu marca y las personas.",
  },
  {
    num: "04",
    titulo: "Experiencias internas",
    desc: "Eventos que construyen cultura, motivan equipos y refuerzan el sentido de pertenencia. Porque tu gente también merece una experiencia bien producida.",
  },
  {
    num: "05",
    titulo: "Stands y espacios de marca",
    desc: "Diseño y producción de espacios para ferias, exposiciones y activaciones. Cada metro cuadrado trabajado para comunicar quién eres.",
  },
  {
    num: "06",
    titulo: "Producciones audiovisuales",
    desc: "Cobertura de eventos, video corporativo y contenido audiovisual para documentar lo que construiste y amplificarlo más allá del día del evento.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-[#231F20] py-24 px-6 relative overflow-hidden">
      <Blobs />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-white font-black leading-none tracking-tighter">
            <span className="block text-6xl md:text-8xl text-[#EC008C]">Experiencias</span>
            <span className="block text-4xl md:text-5xl">corporativas y <span className="text-white/30">de marca</span></span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Diseñamos y producimos experiencias para empresas que necesitan alto estándar de ejecución.
          </p>
        </div>

        <style>{`
          .srv-acordeon {
            display: flex;
            height: 540px;
            border: 1px solid rgba(255,255,255,0.08);
          }
          .srv-col {
            flex: 1;
            min-width: 90px;
            transition: flex 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            position: relative;
            border-right: 1px solid rgba(255,255,255,0.08);
            cursor: default;
          }
          .srv-col:last-child { border-right: none; }
          .srv-col:hover { flex: 6; background: rgba(255,255,255,0.03); }

          .srv-rotado {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0 2rem;
            transition: opacity 0.15s ease;
            gap: 1.5rem;
          }
          .srv-col:hover .srv-rotado { opacity: 0; pointer-events: none; }

          .srv-num-col {
            font-size: 2.5rem;
            font-weight: 900;
            line-height: 1;
            color: #EC008C;
          }
          .srv-titulo-vertical {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            white-space: nowrap;
            font-weight: 900;
            font-size: 1rem;
            letter-spacing: 0.03em;
            color: rgba(255,255,255,0.6);
          }

          .srv-expandido {
            position: absolute;
            inset: 0;
            padding: 2.5rem;
            opacity: 0;
            transition: opacity 0.3s ease 0.15s;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .srv-col:hover .srv-expandido { opacity: 1; }
        `}</style>

        {/* Acordeón horizontal — desktop */}
        <div className="srv-acordeon hidden md:flex">
          {servicios.map((s) => (
            <div key={s.num} className="srv-col">
              <div className="srv-rotado">
                <span className="srv-num-col">{s.num}</span>
                <span className="srv-titulo-vertical">{s.titulo}</span>
              </div>
              <div className="srv-expandido">
                <span className="text-[#EC008C] font-black text-6xl leading-none mb-6">{s.num}</span>
                <h3 className="text-white font-black text-xl mb-3 leading-tight">{s.titulo}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — grid 2 columnas */}
        <div className="md:hidden grid grid-cols-2 gap-px bg-white/10">
          {servicios.map((s) => (
            <div key={s.num} className="bg-[#231F20] p-6">
              <span className="text-[#EC008C] font-black text-4xl leading-none block mb-4">{s.num}</span>
              <h3 className="text-white font-black text-base mb-2 leading-tight">{s.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
