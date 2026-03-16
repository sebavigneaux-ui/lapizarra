"use client";
import { useEffect, useRef, useState } from "react";
import type { Resultado } from "../../types/calculator";
import { formatCLP, formatRango } from "../../lib/formatters";

interface Props {
  resultado: Resultado;
  onNext: () => void;
  onBack: () => void;
}

export default function StepResultado({ resultado, onNext, onBack }: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const maxTotal = resultado.total[1];

  return (
    <div ref={ref} className="animate-in fade-in slide-in-from-right-4 duration-400">
      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 3 —</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-10 leading-tight">
        Tu evento podría estar<br className="hidden md:block" /> en este rango
      </h2>

      {/* Número grande */}
      <div
        className="mb-10 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <p className="text-white/30 text-sm font-black uppercase tracking-widest mb-2">Estimación total</p>
        <p className="font-black leading-none tracking-tighter text-white">
          <span className="text-5xl md:text-7xl">{formatCLP(resultado.total[0])}</span>
          <span className="text-3xl md:text-5xl text-white/40"> – </span>
          <span className="text-5xl md:text-7xl text-[#EC008C]">{formatCLP(resultado.total[1])}</span>
        </p>
        <p className="text-white/30 text-sm mt-3">
          Valores referenciales en pesos chilenos, sin IVA.
        </p>
      </div>

      {/* Desglose */}
      <div
        className="mb-10 border-t border-white/10 transition-all duration-700 delay-200"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {resultado.desglose.map((item, i) => {
          const pct = maxTotal > 0 ? (item.monto[1] / maxTotal) * 100 : 0;
          return (
            <div
              key={i}
              className="py-4 border-b border-white/10 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${200 + i * 60}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/70 text-sm font-bold">{item.label}</span>
                <span className="text-white font-black text-sm">{formatRango(item.monto)}</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#EC008C]/60 rounded-full transition-all duration-700"
                  style={{
                    width: visible ? `${pct}%` : "0%",
                    transitionDelay: `${300 + i * 60}ms`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recomendaciones */}
      {resultado.recomendaciones.length > 0 && (
        <div
          className="mb-10 p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-3">
            Te recomendamos
          </p>
          <ul className="space-y-2">
            {resultado.recomendaciones.map((r, i) => (
              <li key={i} className="flex gap-2 text-sm text-white/50">
                <span className="text-[#EC008C] mt-0.5 flex-shrink-0">→</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Disclaimer */}
      <div
        className="mb-10 text-white/25 text-xs leading-relaxed transition-all duration-700 delay-600"
        style={{ opacity: visible ? 1 : 0 }}
      >
        Esta estimación es referencial y puede variar según disponibilidad de proveedores, fechas,
        requerimientos específicos y complejidad de producción. El equipo de LaPizarra preparará
        una propuesta a medida una vez que conversemos sobre tu proyecto.
      </div>

      {/* Navegación */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Volver
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-3 px-8 py-4 rounded-full font-black text-base bg-[#EC008C] text-white hover:bg-[#EC008C]/90 hover:gap-4 transition-all duration-300"
        >
          Quiero que me contacten
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
