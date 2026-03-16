"use client";
import type { BloqueId } from "../../types/calculator";
import { BLOQUES } from "../../config/bloques";

const CATEGORIAS = [
  { id: "espacio", label: "Espacio y decoración" },
  { id: "gastronomia", label: "Gastronomía" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "contenido", label: "Contenido" },
  { id: "logistica", label: "Logística" },
];

interface Props {
  seleccionados: BloqueId[];
  onToggle: (id: BloqueId) => void;
  onNext: () => void;
  onBack: () => void;
  canNext: boolean;
}

export default function StepBloques({ seleccionados, onToggle, onNext, onBack, canNext }: Props) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">
      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 2 —</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-2 leading-tight">
        ¿Qué necesitas para tu evento?
      </h2>
      <p className="text-white/40 text-sm mb-10">
        Selecciona uno o más bloques. Puedes agregar lo que quieras.
      </p>

      <div className="space-y-8 mb-12">
        {CATEGORIAS.map((cat) => {
          const bloques = BLOQUES.filter((b) => b.categoria === cat.id);
          return (
            <div key={cat.id}>
              <p className="text-white/30 text-xs font-black uppercase tracking-widest mb-3">
                {cat.label}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {bloques.map((bloque) => {
                  const active = seleccionados.includes(bloque.id);
                  return (
                    <button
                      key={bloque.id}
                      onClick={() => onToggle(bloque.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 group relative ${
                        active
                          ? "border-[#EC008C] bg-[#EC008C]/10"
                          : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]"
                      }`}
                    >
                      {active && (
                        <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#EC008C] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                      <span
                        className={`block font-black text-sm mb-1 transition-colors duration-200 ${
                          active ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {bloque.label}
                      </span>
                      <span className="block text-xs text-white/35 leading-snug">
                        {bloque.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumen selección */}
      {seleccionados.length > 0 && (
        <div className="mb-8 p-4 rounded-xl bg-[#EC008C]/10 border border-[#EC008C]/30">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-2">
            {seleccionados.length} bloque{seleccionados.length > 1 ? "s" : ""} seleccionado{seleccionados.length > 1 ? "s" : ""}
          </p>
          <p className="text-white/60 text-sm">
            {seleccionados
              .map((id) => BLOQUES.find((b) => b.id === id)?.label)
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
      )}

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
          disabled={!canNext}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-base transition-all duration-300 ${
            canNext
              ? "bg-[#EC008C] text-white hover:bg-[#EC008C]/90 hover:gap-4"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          Ver estimación
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
