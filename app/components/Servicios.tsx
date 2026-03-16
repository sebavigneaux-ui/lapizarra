import Blobs from "./Blobs";

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
            height: 520px;
            border: 1px solid rgba(255,255,255,0.08);
          }
          .srv-col {
            flex: 1;
            min-width: 56px;
            transition: flex 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            position: relative;
            border-right: 1px solid rgba(255,255,255,0.08);
            cursor: default;
          }
          .srv-col:last-child { border-right: none; }
          .srv-col:hover { flex: 5; }

          .srv-rotado {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            transition: opacity 0.15s ease;
          }
          .srv-col:hover .srv-rotado { opacity: 0; pointer-events: none; }

          .srv-titulo-vertical {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            white-space: nowrap;
            font-weight: 900;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
            color: rgba(255,255,255,0.5);
            margin-top: 1rem;
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
          .srv-col:hover { background: rgba(255,255,255,0.03); }
        `}</style>

        {/* Acordeón horizontal — desktop */}
        <div className="srv-acordeon hidden md:flex">
          {servicios.map((s) => (
            <div key={s.num} className="srv-col">
              {/* Estado colapsado */}
              <div className="srv-rotado">
                <span className="text-[#EC008C] font-black text-sm">{s.num}</span>
                <span className="srv-titulo-vertical">{s.titulo}</span>
              </div>

              {/* Estado expandido */}
              <div className="srv-expandido">
                <span className="text-[#EC008C] font-black text-5xl leading-none mb-6">{s.num}</span>
                <h3 className="text-white font-black text-xl mb-3 leading-tight">{s.titulo}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Versión mobile — lista vertical */}
        <div className="md:hidden flex flex-col divide-y divide-white/10 border border-white/10">
          {servicios.map((s) => (
            <div key={s.num} className="px-6 py-8">
              <span className="text-[#EC008C] font-black text-4xl leading-none block mb-4">{s.num}</span>
              <h3 className="text-white font-black text-lg mb-2">{s.titulo}</h3>
              <p className="text-white/50 text-lg leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
