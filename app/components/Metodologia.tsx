"use client";
import { useState, useEffect, useRef } from "react";

const pasos = [
  {
    num: "01",
    titulo: "Entendemos el objetivo",
    desc: "Partimos por comprender el contexto, la audiencia y el resultado esperado.",
  },
  {
    num: "02",
    titulo: "Diseñamos la experiencia",
    desc: "Construimos una propuesta creativa alineada con la marca y sus objetivos.",
  },
  {
    num: "03",
    titulo: "Aterrizamos producción y presupuesto",
    desc: "Definimos cada elemento necesario para ejecutar el proyecto con precisión.",
  },
  {
    num: "04",
    titulo: "Ejecutamos con obsesión por el detalle",
    desc: "Producción, coordinación, montaje y control de cada componente.",
  },
  {
    num: "05",
    titulo: "Acompañamos hasta el cierre",
    desc: "Nos aseguramos de que cada momento del evento funcione como fue pensado.",
  },
  {
    num: "06",
    titulo: "Post evento",
    desc: "Entregamos reporte de resultados, galería de fotos y feedback para mejorar la siguiente edición.",
  },
];

const LINE_DURATION = 2400; // ms
const STEP_DELAYS = [180, 540, 900, 1260, 1620, 1980]; // ms — cuándo aparece cada paso

export default function Metodologia() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodologia" className="pt-8 pb-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-white font-black leading-none tracking-tighter">
            <span className="block text-3xl md:text-4xl text-white/40 mb-1">Un proceso claro para producir</span>
            <span className="block text-5xl md:text-7xl">experiencias</span>
            <span className="block text-5xl md:text-7xl text-[#EC008C]">impecables.</span>
          </h2>
        </div>

        {/* ── DESKTOP: línea de tiempo horizontal ── */}
        <div className="hidden md:block relative">

          {/* Números arriba */}
          <div className="grid grid-cols-6 mb-4">
            {pasos.map((paso, i) => (
              <div key={paso.num} className="flex justify-center">
                <span
                  className="text-5xl font-black text-white leading-none transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(-12px)",
                    transitionDelay: `${STEP_DELAYS[i]}ms`,
                  }}
                >
                  {paso.num}
                </span>
              </div>
            ))}
          </div>

          {/* Línea + dots */}
          <div className="relative h-6 mb-8">
            {/* Línea base tenue */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />

            {/* Línea animada magenta */}
            <div
              className="absolute top-1/2 left-0 h-px bg-[#EC008C] -translate-y-1/2 origin-left"
              style={{
                right: 0,
                transform: `scaleX(${visible ? 1 : 0}) translateY(-50%)`,
                transformOrigin: "left center",
                transition: `transform ${LINE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            />

            {/* Dots sobre la línea */}
            {pasos.map((paso, i) => (
              <div
                key={paso.num}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#EC008C] transition-all duration-300"
                style={{
                  left: `${(i / (pasos.length - 1)) * 100}%`,
                  opacity: visible ? 1 : 0,
                  transform: `translate(-50%, -50%) scale(${visible ? 1 : 0})`,
                  transitionDelay: `${STEP_DELAYS[i]}ms`,
                }}
              />
            ))}
          </div>

          {/* Títulos y descripciones abajo */}
          <div className="grid grid-cols-6 gap-6">
            {pasos.map((paso, i) => (
              <div
                key={paso.num}
                className="transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${STEP_DELAYS[i] + 100}ms`,
                }}
              >
                <h3 className="text-white font-black text-base mb-2 leading-tight">{paso.titulo}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE: línea de tiempo vertical ── */}
        <div className="md:hidden relative pl-8">
          {/* Línea vertical */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
          <div
            className="absolute left-3 top-0 w-px bg-[#EC008C] origin-top"
            style={{
              bottom: 0,
              transform: `scaleY(${visible ? 1 : 0})`,
              transition: `transform ${LINE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          />

          {pasos.map((paso, i) => (
            <div
              key={paso.num}
              className="relative mb-10 last:mb-0 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-12px)",
                transitionDelay: `${STEP_DELAYS[i]}ms`,
              }}
            >
              {/* Dot */}
              <div
                className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-[#EC008C] -translate-x-1/2 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${STEP_DELAYS[i]}ms`,
                }}
              />
              <span className="text-[#EC008C] font-black text-3xl leading-none block mb-2">{paso.num}</span>
              <h3 className="text-white font-black text-lg mb-2 leading-tight">{paso.titulo}</h3>
              <p className="text-white/50 text-lg leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
