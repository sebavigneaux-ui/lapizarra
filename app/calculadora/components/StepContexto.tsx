"use client";
import type { TipoEvento, RangoAsistentes } from "../../types/calculator";
import { TIPOS_EVENTO, LABELS_ASISTENTES } from "../../config/pricing";

const RANGOS: RangoAsistentes[] = ["menos50", "50-100", "100-200", "200-400", "400plus"];

interface Props {
  tipoEvento: TipoEvento | null;
  asistentes: RangoAsistentes | null;
  onTipo: (t: TipoEvento) => void;
  onAsistentes: (r: RangoAsistentes) => void;
  onNext: () => void;
  canNext: boolean;
}

export default function StepContexto({
  tipoEvento,
  asistentes,
  onTipo,
  onAsistentes,
  onNext,
  canNext,
}: Props) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">
      {/* Tipo de evento */}
      <div className="mb-12">
        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">01 —</p>
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-8 leading-tight">
          ¿Qué tipo de evento<br className="hidden md:block" /> estás planeando?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {TIPOS_EVENTO.map((tipo) => {
            const active = tipoEvento === tipo.id;
            return (
              <button
                key={tipo.id}
                onClick={() => onTipo(tipo.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 group ${
                  active
                    ? "border-[#EC008C] bg-[#EC008C]/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className={`block font-black text-3xl mb-3 leading-none transition-colors duration-200 ${
                    active ? "text-[#EC008C]" : "text-white/20 group-hover:text-white/40"
                  }`}
                >
                  {tipo.icon}
                </span>
                <span
                  className={`block font-black text-base mb-1 transition-colors duration-200 ${
                    active ? "text-white" : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {tipo.label}
                </span>
                <span className="block text-sm text-white/35 leading-snug">
                  {tipo.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Asistentes */}
      <div className="mb-12">
        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">02 —</p>
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-8 leading-tight">
          ¿Cuántas personas esperan?
        </h2>
        <div className="flex flex-wrap gap-3">
          {RANGOS.map((r) => {
            const active = asistentes === r;
            return (
              <button
                key={r}
                onClick={() => onAsistentes(r)}
                className={`px-6 py-3 rounded-full font-black text-sm border transition-all duration-200 ${
                  active
                    ? "border-[#EC008C] bg-[#EC008C] text-white"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {LABELS_ASISTENTES[r]}
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!canNext}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-base transition-all duration-300 ${
            canNext
              ? "bg-[#EC008C] text-white hover:bg-[#EC008C]/90 hover:gap-4"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          Siguiente
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
