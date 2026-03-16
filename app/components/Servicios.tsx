"use client";
import { useState } from "react";
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
  const [abierto, setAbierto] = useState<string | null>(null);

  const toggle = (num: string) => setAbierto(abierto === num ? null : num);

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

        <div className="border-t border-white/10">
          {servicios.map((s) => {
            const isOpen = abierto === s.num;
            return (
              <div
                key={s.num}
                className="border-b border-white/10 cursor-pointer group"
                onClick={() => toggle(s.num)}
              >
                {/* Fila principal */}
                <div className="flex items-center gap-6 py-6 md:py-8">
                  <span className="text-[#EC008C] font-black text-2xl md:text-3xl w-12 flex-shrink-0">
                    {s.num}
                  </span>
                  <h3 className={`font-black text-xl md:text-3xl flex-1 transition-colors duration-200 ${isOpen ? "text-[#EC008C]" : "text-white group-hover:text-[#EC008C]"}`}>
                    {s.titulo}
                  </h3>
                  <span className={`text-white/40 text-2xl font-thin flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-[#EC008C]" : "group-hover:text-white"}`}>
                    +
                  </span>
                </div>

                {/* Descripción desplegable */}
                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-40 pb-8" : "max-h-0"}`}>
                  <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
