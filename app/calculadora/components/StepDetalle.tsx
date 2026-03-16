"use client";
import type { NivelId, SeleccionBloques, RangoAsistentes } from "../../types/calculator";
import { CATEGORIAS_PASO3, BLOQUES_BY_CATEGORIA } from "../../config/bloques";
import BloqueSelector from "./BloqueSelector";

interface Props {
  seleccion: SeleccionBloques;
  asistentes: RangoAsistentes;
  multiplicador: number;
  bloquesRecomendados: string[];
  labelCortoEvento: string;
  onToggle: (bloqueId: string, nivelId: NivelId) => void;
  onNext: () => void;
  onBack: () => void;
  canNext: boolean;
}

const nivelLabels: Record<string, string> = { basico: "Básica", medio: "Media", top: "Premium" };

function ResumenSeleccion({ seleccion }: { seleccion: SeleccionBloques }) {
  const todos = BLOQUES_BY_CATEGORIA.flatMap((c) => c.bloques);
  const items = Object.entries(seleccion)
    .map(([id, nivel]) => {
      const b = todos.find((b) => b.id === id);
      return b ? `${b.label} (${nivelLabels[nivel!]})` : null;
    })
    .filter(Boolean);

  if (items.length === 0) return null;
  return (
    <div className="mb-8 p-4 rounded-xl bg-[#EC008C]/10 border border-[#EC008C]/30">
      <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-2">
        {items.length} servicio{items.length > 1 ? "s" : ""} en total
      </p>
      <p className="text-white/60 text-sm leading-relaxed">{items.join(" · ")}</p>
    </div>
  );
}

export default function StepDetalle({
  seleccion,
  asistentes,
  multiplicador,
  bloquesRecomendados,
  labelCortoEvento,
  onToggle,
  onNext,
  onBack,
  canNext,
}: Props) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">
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

      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 3 — Detalles</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-2 leading-tight">
        Contenido y logística
      </h2>
      <p className="text-white/40 text-sm mb-10">
        Agrega fotografía, video, branding y todo lo que mueve a las personas.
      </p>

      <BloqueSelector
        seleccion={seleccion}
        asistentes={asistentes}
        multiplicador={multiplicador}
        bloquesRecomendados={bloquesRecomendados}
        categoriasVisibles={CATEGORIAS_PASO3}
        onToggle={onToggle}
      />

      <div className="mt-10">
        <ResumenSeleccion seleccion={seleccion} />
      </div>

      {/* Navegación inferior */}
      <div className="flex justify-between mt-4">
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
