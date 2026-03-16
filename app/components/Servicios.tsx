"use client";
import { useState } from "react";
import Blobs from "./Blobs";

const WA_BASE = "https://wa.me/56958419326?text=";

const servicios = [
  {
    num: "01",
    titulo: "Eventos corporativos",
    desc: "Organizamos convenciones, kick offs, aniversarios de empresa y celebraciones institucionales que realmente le hacen honor a lo que has construido. Sabemos que un evento corporativo bien producido no solo impacta a quienes asisten ese día — comunica cultura, genera orgullo y deja una huella que dura mucho más. Nos encargamos de todo: concepto creativo, venue, técnica, catering, producción en terreno y coordinación integral. Tú apareces el día del evento y nosotros hemos resuelto cada detalle antes de que llegues.",
    wa: WA_BASE + encodeURIComponent("Hola, me interesa cotizar un evento corporativo con LaPizarra"),
  },
  {
    num: "02",
    titulo: "Lanzamientos de producto",
    desc: "Un lanzamiento es uno de esos momentos donde la primera impresión lo es todo. Diseñamos presentaciones que generan anticipación antes del evento, cobertura el día D y recordación en los días que siguen. Trabajamos el concepto desde cero — el espacio, la narrativa, la técnica, el contenido — para que tu producto llegue al mercado con la fuerza que merece. Hemos producido lanzamientos para marcas automotrices, tecnológicas y de consumo masivo, y cada uno tiene su propio lenguaje.",
    wa: WA_BASE + encodeURIComponent("Hola, quiero hablar sobre un lanzamiento de producto con LaPizarra"),
  },
  {
    num: "03",
    titulo: "Activaciones BTL",
    desc: "Las activaciones BTL son la forma más directa de crear un vínculo entre tu marca y las personas. Ya sea en un punto de venta, un espacio público o dentro de un evento masivo, diseñamos experiencias que generan contacto real, emoción y conversación. No hacemos stands decorativos — hacemos activaciones con propósito: que el que pasa se detenga, participe y recuerde tu marca. Si tienes un objetivo de marketing experiencial, conversemos sobre cómo materializarlo.",
    wa: WA_BASE + encodeURIComponent("Hola, me interesa una activación BTL con LaPizarra"),
  },
  {
    num: "04",
    titulo: "Experiencias internas",
    desc: "Tu equipo es tu activo más valioso, y también merece una experiencia bien producida. Diseñamos eventos internos — incentivos, celebraciones de fin de año, jornadas de cultura, actividades de integración — que construyen sentido de pertenencia y motivan de verdad. No es solo un almuerzo o una reunión: es un momento que la gente recuerda y que refuerza por qué vale la pena estar en tu empresa. Lo producimos con el mismo estándar que cualquier evento de cara al cliente.",
    wa: WA_BASE + encodeURIComponent("Hola, quiero producir una experiencia interna con LaPizarra"),
  },
  {
    num: "05",
    titulo: "Stands y espacios de marca",
    desc: "En ferias y exposiciones tienes segundos para capturar la atención de alguien que camina entre decenas de competidores. Diseñamos y construimos stands que comunican quién eres antes de que abras la boca — desde estructuras modulares hasta carpintería a medida con producción completa. También producimos espacios de marca para activaciones y showrooms. Si vas a Espacio Riesco, FIL u otro evento, te ayudamos a que tu espacio sea el que la gente recuerde.",
    wa: WA_BASE + encodeURIComponent("Hola, me interesa cotizar un stand o espacio de marca con LaPizarra"),
  },
  {
    num: "06",
    titulo: "Producciones audiovisuales",
    desc: "El evento dura un día. El contenido que produces ese día puede durar años. Hacemos cobertura fotográfica y audiovisual de eventos, videos corporativos, streaming profesional y piezas de contenido para redes y comunicación interna. Trabajamos con equipos multicámara, edición con motion graphics y entrega en los formatos que necesitas. Si ya tienes el evento planificado o estás evaluando documentarlo bien, hablemos antes de que sea tarde para capturarlo como se merece.",
    wa: WA_BASE + encodeURIComponent("Hola, quiero hablar sobre producción audiovisual con LaPizarra"),
  },
];

export default function Servicios() {
  const [abierto, setAbierto] = useState<string | null>(null);

  const toggle = (num: string) => setAbierto(abierto === num ? null : num);

  return (
    <section id="servicios" className="py-24 px-6 relative">
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
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] pb-10" : "max-h-0"}`}>
                  <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                    {s.desc}
                  </p>
                  <a
                    href={s.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-black text-sm bg-[#EC008C] text-white hover:bg-[#c8007a] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L0 24l6.345-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.374l-.36-.214-3.724.878.916-3.618-.235-.372A9.789 9.789 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                    </svg>
                    Conversemos sobre tu {s.titulo.toLowerCase()}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
