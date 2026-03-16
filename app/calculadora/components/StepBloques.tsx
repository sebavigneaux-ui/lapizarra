"use client";
import type { NivelId, SeleccionBloques, RangoAsistentes } from "../../types/calculator";
import { BLOQUES_BY_CATEGORIA } from "../../config/bloques";
import { PROMEDIO_ASISTENTES } from "../../config/pricing";
import { formatCLP } from "../../lib/formatters";

interface Props {
  seleccion: SeleccionBloques;
  asistentes: RangoAsistentes;
  multiplicador: number;
  bloquesRecomendados: string[];
  onToggle: (bloqueId: string, nivelId: NivelId) => void;
  onNext: () => void;
  onBack: () => void;
  canNext: boolean;
}

const NIVEL_LABELS: Record<NivelId, string> = {
  basico: "Básico",
  medio: "Premium",
  top: "Top",
};

const NIVEL_ACTIVE: Record<NivelId, string> = {
  basico: "border-white bg-white/15 text-white",
  medio: "border-[#EC008C] bg-[#EC008C]/20 text-white",
  top: "border-yellow-400 bg-yellow-400/12 text-white",
};

const NIVEL_BADGE: Record<NivelId, string> = {
  basico: "bg-white/20 text-white",
  medio: "bg-[#EC008C] text-white",
  top: "bg-yellow-400 text-[#231F20]",
};

export default function StepBloques({
  seleccion,
  asistentes,
  multiplicador,
  bloquesRecomendados,
  onToggle,
  onNext,
  onBack,
  canNext,
}: Props) {
  const personas = PROMEDIO_ASISTENTES[asistentes];
  const totalSeleccionados = Object.keys(seleccion).length;

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">
      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 2 —</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-2 leading-tight">
        ¿Qué necesitas para tu evento?
      </h2>
      <p className="text-white/40 text-sm mb-10">
        Elige el nivel de cada servicio. Los precios consideran ~{personas} asistentes.
      </p>

      <div className="space-y-10 mb-12">
        {BLOQUES_BY_CATEGORIA.map(({ categoria, bloques }) => {
          // Recomendados primero, luego el resto
          const recomendados = bloques.filter((b) => bloquesRecomendados.includes(b.id));
          const opcionales = bloques.filter((b) => !bloquesRecomendados.includes(b.id));
          const ordenados = [...recomendados, ...opcionales];

          // Si no hay ninguno relevante ni seleccionado en esta categoría, ocultarla
          const haySeleccionado = bloques.some((b) => seleccion[b.id]);
          if (recomendados.length === 0 && !haySeleccionado) return null;

          return (
            <div key={categoria.id}>
              {/* Cabecera categoría */}
              <div className="flex items-center gap-3 mb-4">
                <p className="text-white/40 text-xs font-black uppercase tracking-widest whitespace-nowrap">
                  {categoria.label}
                </p>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Bloques */}
              <div className="space-y-3">
                {ordenados.map((bloque) => {
                  const nivelActual = seleccion[bloque.id];
                  const esRecomendado = bloquesRecomendados.includes(bloque.id);

                  return (
                    <div
                      key={bloque.id}
                      className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                        esRecomendado ? "border-white/20" : "border-white/8 opacity-70"
                      } ${nivelActual ? "!border-white/30 !opacity-100" : ""}`}
                    >
                      {/* Nombre del bloque */}
                      <div className="px-4 pt-4 pb-3 flex items-center gap-3">
                        <span
                          className={`font-black text-base flex-1 transition-colors duration-200 ${
                            nivelActual ? "text-white" : esRecomendado ? "text-white/70" : "text-white/40"
                          }`}
                        >
                          {bloque.label}
                        </span>
                        {esRecomendado && !nivelActual && (
                          <span className="text-[#EC008C] text-xs font-black uppercase tracking-widest bg-[#EC008C]/10 border border-[#EC008C]/30 px-2.5 py-1 rounded-full">
                            Recomendado
                          </span>
                        )}
                        {nivelActual && (
                          <span className={`text-xs font-black px-2.5 py-1 rounded-full ${NIVEL_BADGE[nivelActual]}`}>
                            {NIVEL_LABELS[nivelActual]}
                          </span>
                        )}
                      </div>

                      {/* Niveles */}
                      <div className="grid grid-cols-3 gap-2 px-3 pb-3">
                        {bloque.niveles.map((nivel) => {
                          const active = nivelActual === nivel.id;
                          const costoMin = Math.round(
                            (nivel.costoFijo[0] + nivel.costoPorPersona[0] * personas) * multiplicador
                          );
                          const costoMax = Math.round(
                            (nivel.costoFijo[1] + nivel.costoPorPersona[1] * personas) * multiplicador
                          );

                          return (
                            <button
                              key={nivel.id}
                              onClick={() => onToggle(bloque.id, nivel.id)}
                              className={`text-left p-3 rounded-lg border transition-all duration-200 group ${
                                active
                                  ? NIVEL_ACTIVE[nivel.id]
                                  : "border-white/10 bg-white/3 hover:border-white/25 hover:bg-white/6"
                              }`}
                            >
                              <span
                                className={`block text-xs font-black mb-1 ${
                                  active ? "" : "text-white/50 group-hover:text-white/80"
                                }`}
                              >
                                {nivel.label}
                              </span>
                              <span
                                className={`block text-xs leading-snug mb-2 hidden sm:block ${
                                  active ? "text-white/60" : "text-white/25"
                                }`}
                              >
                                {nivel.desc}
                              </span>
                              <span
                                className={`block text-xs font-black ${
                                  active ? "text-white" : "text-white/40"
                                }`}
                              >
                                {formatCLP(costoMin)}
                                <span className="font-normal text-white/30"> – </span>
                                {formatCLP(costoMax)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Mostrar opcionales si hay recomendados y están ocultos */}
                {opcionales.length > 0 && recomendados.length > 0 && (
                  <p className="text-white/25 text-xs pl-1">
                    ↑ Los servicios anteriores son opcionales para este tipo de evento.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumen selección */}
      {totalSeleccionados > 0 && (
        <div className="mb-8 p-4 rounded-xl bg-[#EC008C]/10 border border-[#EC008C]/30">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-2">
            {totalSeleccionados} servicio{totalSeleccionados > 1 ? "s" : ""} incluido{totalSeleccionados > 1 ? "s" : ""}
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            {Object.entries(seleccion)
              .map(([id, nivel]) => {
                const b = BLOQUES_BY_CATEGORIA.flatMap((c) => c.bloques).find((b) => b.id === id);
                return b ? `${b.label} (${NIVEL_LABELS[nivel!]})` : null;
              })
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
