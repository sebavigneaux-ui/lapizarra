"use client";
import type { NivelId, SeleccionBloques, RangoAsistentes } from "../../types/calculator";
import type { CategoriaId } from "../../types/calculator";
import { BLOQUES_BY_CATEGORIA } from "../../config/bloques";
import { PROMEDIO_ASISTENTES } from "../../config/pricing";
import { formatCLP } from "../../lib/formatters";

interface Props {
  seleccion: SeleccionBloques;
  asistentes: RangoAsistentes;
  multiplicador: number;
  bloquesRecomendados: string[];
  categoriasVisibles: CategoriaId[];
  onToggle: (bloqueId: string, nivelId: NivelId) => void;
}

// Cuando "top" está seleccionado, el badge dice "Premium"
const NIVEL_BADGE_LABEL: Record<NivelId, string> = {
  basico: "Básica",
  medio: "Media",
  top: "Premium",
};

const NIVEL_BADGE_STYLE: Record<NivelId, string> = {
  basico: "bg-white/20 text-white",
  medio: "bg-white/35 text-white",
  top: "bg-[#EC008C] text-white",
};

const NIVEL_ACTIVE_STYLE: Record<NivelId, string> = {
  basico: "border-white/60 bg-white/10 text-white",
  medio: "border-white/80 bg-white/15 text-white",
  top: "border-[#EC008C] bg-[#EC008C]/20 text-white",
};

export default function BloqueSelector({
  seleccion,
  asistentes,
  multiplicador,
  bloquesRecomendados,
  categoriasVisibles,
  onToggle,
}: Props) {
  const personas = PROMEDIO_ASISTENTES[asistentes];

  const grupos = BLOQUES_BY_CATEGORIA.filter((g) =>
    categoriasVisibles.includes(g.categoria.id)
  );

  return (
    <div className="space-y-10">
      {grupos.map(({ categoria, bloques }) => {
        const recomendados = bloques.filter((b) => bloquesRecomendados.includes(b.id));
        const opcionales = bloques.filter((b) => !bloquesRecomendados.includes(b.id));
        const ordenados = [...recomendados, ...opcionales];
        const haySeleccionado = bloques.some((b) => seleccion[b.id]);

        if (recomendados.length === 0 && !haySeleccionado) return null;

        return (
          <div key={categoria.id}>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-white/40 text-xs font-black uppercase tracking-widest whitespace-nowrap">
                {categoria.label}
              </p>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="space-y-3">
              {ordenados.map((bloque) => {
                const nivelActual = seleccion[bloque.id];
                const esRecomendado = bloquesRecomendados.includes(bloque.id);

                return (
                  <div
                    key={bloque.id}
                    className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                      nivelActual
                        ? "border-white/25 opacity-100"
                        : esRecomendado
                        ? "border-white/18 opacity-100"
                        : "border-white/8 opacity-60"
                    }`}
                  >
                    {/* Cabecera del bloque */}
                    <div className="px-4 pt-4 pb-3 flex items-center gap-3">
                      <span
                        className={`font-black text-base flex-1 transition-colors duration-200 ${
                          nivelActual ? "text-white" : esRecomendado ? "text-white/70" : "text-white/40"
                        }`}
                      >
                        {bloque.label}
                      </span>
                      {nivelActual && (
                        <span className={`text-xs font-black px-2.5 py-1 rounded-full ${NIVEL_BADGE_STYLE[nivelActual]}`}>
                          {NIVEL_BADGE_LABEL[nivelActual]}
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
                                ? NIVEL_ACTIVE_STYLE[nivel.id]
                                : "border-white/10 bg-white/3 hover:border-white/25 hover:bg-white/6"
                            }`}
                          >
                            <span className={`block text-xs font-black mb-1 ${active ? "" : "text-white/50 group-hover:text-white/80"}`}>
                              {nivel.label}
                            </span>
                            <span className={`block text-xs leading-snug mb-2 hidden sm:block ${active ? "text-white/60" : "text-white/25"}`}>
                              {nivel.desc}
                            </span>
                            <span className={`block text-xs font-black ${active ? "text-white" : "text-white/40"}`}>
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
