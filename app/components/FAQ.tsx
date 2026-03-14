"use client";
import { useState } from "react";
import Blobs from "./Blobs";

const preguntas = [
  {
    q: "¿Trabajan proyectos pequeños o solo eventos grandes?",
    a: "Trabajamos ambos. Lo importante no es el tamaño del evento, sino el impacto que tiene para la organización o la marca.",
  },
  {
    q: "¿Con cuánto tiempo de anticipación conviene cotizar?",
    a: "Depende del tipo de proyecto, pero idealmente entre 4 y 8 semanas. En algunos casos también podemos trabajar con tiempos más ajustados.",
  },
  {
    q: "¿Pueden hacerse cargo de la creatividad y de la producción?",
    a: "Sí. Podemos desarrollar la experiencia desde el concepto creativo hasta la ejecución completa.",
  },
  {
    q: "¿Trabajan con lineamientos corporativos exigentes?",
    a: "Sí. Estamos acostumbrados a trabajar con manuales de marca, compliance y estándares corporativos.",
  },
  {
    q: "¿Pueden adaptarse a cambios de último minuto?",
    a: "Los eventos cambian constantemente. Nuestro proceso y equipo están preparados para adaptarse sin comprometer la calidad de ejecución.",
  },
  {
    q: "¿Atienden solo Santiago?",
    a: "Trabajamos principalmente en Santiago, pero también desarrollamos proyectos en regiones cuando el proyecto lo requiere.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#231F20] py-24 px-6 relative overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">FAQ</p>
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="md:col-span-2">
            {preguntas.map((item, i) => (
              <div key={i} className="border-t border-white/10 first:border-t-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-white font-bold text-base pr-8 group-hover:text-[#EC008C] transition-colors">
                    {item.q}
                  </span>
                  <span className="text-[#EC008C] font-black text-xl flex-shrink-0">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && (
                  <p className="text-white/50 text-base leading-relaxed pb-6">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
