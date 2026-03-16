"use client";
import { useEffect, useRef, useState } from "react";
import type { Resultado, NivelId } from "../../types/calculator";
import { formatCLP, formatRango } from "../../lib/formatters";

interface Props {
  resultado: Resultado;
  tipoLabel: string;
  asistentesLabel: string;
  regionLabel: string;
  onNext: () => void;
  onBack: () => void;
}

// Cuántos tercios llenar según nivel
const NIVEL_TERCIOS: Record<NivelId, 1 | 2 | 3> = {
  basico: 1,
  medio: 2,
  top: 3,
};

const NIVEL_WIDTH: Record<NivelId, string> = {
  basico: "33.33%",
  medio: "66.66%",
  top: "100%",
};

const NIVEL_LABEL_COLOR: Record<NivelId, string> = {
  basico: "text-white/40",
  medio: "text-white/60",
  top: "text-[#EC008C]",
};

function BarraTercios({ nivelId, visible, delay }: { nivelId: NivelId; visible: boolean; delay: number }) {
  return (
    <div className="mt-2">
      {/* Barra de gradiente continuo */}
      <div className="w-full h-1.5 rounded-full bg-white/8 overflow-hidden mb-1.5">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: visible ? NIVEL_WIDTH[nivelId] : "0%",
            transitionDelay: `${delay}ms`,
            background: "linear-gradient(to right, rgba(255,255,255,0.4), #EC008C)",
          }}
        />
      </div>
      {/* Etiquetas de los tres puntos */}
      <div className="flex">
        {(["Básica", "Media", "Premium"] as const).map((label, i) => (
          <div key={i} className="flex-1 flex justify-center">
            <span
              className={`text-[10px] font-black transition-colors duration-300 ${
                i < NIVEL_TERCIOS[nivelId] ? NIVEL_LABEL_COLOR[nivelId] : "text-white/15"
              }`}
              style={{ transitionDelay: `${delay + 200}ms` }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StepResultado({ resultado, tipoLabel, asistentesLabel, regionLabel, onNext, onBack }: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref} className="animate-in fade-in slide-in-from-right-4 duration-400">
      {/* Back button arriba */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Volver
      </button>

      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 4 — Estimación</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-10 leading-tight">
        Tu evento podría estar<br className="hidden md:block" /> en este rango
      </h2>

      {/* Contexto del evento */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="px-3 py-1.5 rounded-full bg-[#EC008C]/20 border border-[#EC008C]/30 text-[#EC008C] text-xs font-bold">
          {tipoLabel}
        </span>
        <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/60 text-xs font-bold">
          {asistentesLabel} asistentes
        </span>
        <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/60 text-xs font-bold">
          {regionLabel}
        </span>
      </div>

      {/* Número grande */}
      <div
        className="mb-10 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <p className="text-white/30 text-sm font-black uppercase tracking-widest mb-2">Estimación total</p>
        <p className="font-black leading-none tracking-tighter text-white">
          <span className="text-5xl md:text-7xl">{formatCLP(resultado.total[0])}</span>
          <span className="text-3xl md:text-5xl text-white/40"> – </span>
          <span className="text-5xl md:text-7xl text-[#EC008C]">{formatCLP(resultado.total[1])}</span>
        </p>
        <p className="text-white/30 text-sm mt-3">Valores referenciales en pesos chilenos, sin IVA.</p>
      </div>

      {/* Desglose — solo ítems marcados */}
      <div
        className="mb-4 border-t border-white/10 transition-all duration-700 delay-200"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {resultado.desglose
          .filter((item) => item.nivelId !== undefined)
          .map((item, i) => (
            <div
              key={i}
              className="py-4 border-b border-white/8 transition-all duration-500"
              style={{ opacity: visible ? 1 : 0, transitionDelay: `${200 + i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/70 text-sm font-bold">{item.label}</span>
                <span className="text-white font-black text-sm">{formatRango(item.monto)}</span>
              </div>
              <BarraTercios nivelId={item.nivelId!} visible={visible} delay={300 + i * 60} />
            </div>
          ))}
      </div>

      {/* Fee de producción — nota de texto, no como ítem gráfico */}
      <p
        className="text-white/25 text-xs mb-10 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "500ms" }}
      >
        Incluye honorarios de producción y gestión LaPizarra ({Math.round(17)}–{Math.round(20)}%).
      </p>

      {/* Recomendaciones */}
      {resultado.recomendaciones.length > 0 && (
        <div
          className="mb-10 p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-3">Te recomendamos</p>
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
