"use client";
import { useState } from "react";
import Blobs from "./Blobs";

const preguntas = [
  {
    q: "¿Trabajan proyectos pequeños o solo eventos grandes?",
    a: "Trabajamos ambos, y esa distinción nos importa menos de lo que se podría pensar. Hemos producido eventos para 30 personas y para varios cientos. Lo que nos define es el nivel de exigencia: cada proyecto tiene un equipo dedicado, un proceso de planificación real y un estándar de ejecución que no baja independientemente del tamaño. Si hay un objetivo claro y un cliente que quiere hacerlo bien, ahí estamos.",
  },
  {
    q: "¿Con cuánto tiempo de anticipación conviene cotizar?",
    a: "Entre 4 y 8 semanas es el rango ideal para la mayoría de los proyectos: hay tiempo para definir bien el concepto, cotizar proveedores con calma y no improvisar en los detalles. Para eventos más complejos —convenciones grandes, stands feriales o lanzamientos con producción audiovisual— 2 a 3 meses es mejor. Dicho eso, hemos trabajado con tiempos más ajustados cuando el proyecto lo exige. No es lo ideal, pero sabemos movernos.",
  },
  {
    q: "¿Pueden hacerse cargo de la creatividad y de la producción?",
    a: "Sí, y eso es algo que nos define. No somos solo un proveedor de logística que recibe un brief cerrado: podemos entrar desde la pregunta inicial —qué quiere lograr el evento, qué tiene que sentir el asistente— y desde ahí desarrollar el concepto, el diseño, la ambientación, la agenda y la ejecución completa. Para clientes que ya tienen el concepto claro, también trabajamos en modo producción pura. Depende de lo que necesite cada proyecto.",
  },
  {
    q: "¿Trabajan con lineamientos corporativos exigentes?",
    a: "Sí, y es algo a lo que estamos bien acostumbrados. Hemos trabajado con empresas multinacionales que tienen manuales de marca globales, procesos de aprobación rigurosos y estándares de compliance estrictos. Sabemos movernos dentro de esos marcos sin que eso frene la ejecución. Si tienes un equipo de marketing corporativo con criterios bien definidos, lo más probable es que ya hayamos trabajado en contextos similares.",
  },
  {
    q: "¿Pueden adaptarse a cambios de último minuto?",
    a: "Los cambios en los eventos son la norma, no la excepción. Cambia el número de asistentes, cambia el espacio, cambia el presupuesto, cambia el brief a mitad del proceso. Nuestra forma de trabajar está construida asumiendo eso: proceso modular, proveedores de confianza y un equipo que no se quiebra bajo presión. No prometemos que los cambios no cuestan nada, pero sí que los manejamos sin que el evento lo acuse.",
  },
  {
    q: "¿Atienden solo Santiago?",
    a: "La mayor parte de nuestros proyectos ocurre en Santiago y la Región Metropolitana, que es donde tenemos la red de proveedores más consolidada. También hemos trabajado en regiones —Valparaíso, Biobío, La Araucanía y Los Lagos, entre otras— cuando el proyecto lo requiere. En esos casos la logística es más exigente, pero el estándar de ejecución es el mismo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#231F20] py-24 px-6 relative overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-white font-black leading-none tracking-tighter mb-16">
          <span className="block text-6xl md:text-8xl">Preguntas</span>
          <span className="block text-3xl md:text-4xl text-white/40">frecuentes</span>
        </h2>

        <div className="max-w-3xl">
            {preguntas.map((item, i) => (
              <div key={i} className="border-t border-white/10 first:border-t-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-white font-bold text-lg pr-8 group-hover:text-[#EC008C] transition-colors">
                    {item.q}
                  </span>
                  <span className="text-[#EC008C] font-black text-xl flex-shrink-0">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && (
                  <p className="text-white/50 text-lg leading-relaxed pb-6">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
