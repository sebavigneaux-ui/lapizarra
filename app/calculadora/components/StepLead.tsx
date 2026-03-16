"use client";
import type { TipoEvento, RangoAsistentes, RegionId } from "../../types/calculator";
import { TIPOS_EVENTO, LABELS_ASISTENTES, REGIONES } from "../../config/pricing";

interface Props {
  nombre: string;
  empresa: string;
  correo: string;
  mensaje: string;
  tipoEvento: TipoEvento;
  asistentes: RangoAsistentes;
  region: RegionId;
  onChange: (field: "nombre" | "empresa" | "correo" | "mensaje", value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function StepLead({
  nombre, empresa, correo, mensaje,
  tipoEvento, asistentes, region,
  onChange, onBack, onNext,
}: Props) {
  const tipoLabel = TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.label ?? tipoEvento;
  const asistentesLabel = LABELS_ASISTENTES[asistentes];
  const regionLabel = REGIONES.find((r) => r.id === region)?.label ?? region;

  const canSubmit = nombre.trim() && empresa.trim() && correo.trim();

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Volver
      </button>

      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 4 — Contacto</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-3 leading-tight">
        Cuéntanos más sobre ti
      </h2>
      <p className="text-white/40 text-sm mb-10">
        Ingresa tus datos para desbloquear la simulación completa.
      </p>

      {/* Resumen */}
      <div className="mb-8 p-5 rounded-xl bg-white/5 border border-white/10">
        <p className="text-white/30 text-xs font-black uppercase tracking-widest mb-3">Resumen</p>
        <div className="flex flex-wrap gap-3">
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
      </div>

      {/* Formulario */}
      <div className="space-y-4 mb-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => onChange("nombre", e.target.value)}
              placeholder="Tu nombre"
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Empresa</label>
            <input
              type="text"
              value={empresa}
              onChange={(e) => onChange("empresa", e.target.value)}
              placeholder="Nombre de tu empresa"
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200"
            />
          </div>
        </div>
        <div>
          <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => onChange("correo", e.target.value)}
            placeholder="tu@empresa.cl"
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2">
            Algo más que debamos saber <span className="text-white/25 normal-case font-medium">(opcional)</span>
          </label>
          <textarea
            value={mensaje}
            onChange={(e) => onChange("mensaje", e.target.value)}
            placeholder="Fecha tentativa, venue en mente, requerimientos especiales..."
            rows={3}
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200 resize-none"
          />
        </div>
      </div>

      {/* Navegación */}
      <div className="flex justify-between items-center">
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
          disabled={!canSubmit}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-base transition-all duration-300 ${
            canSubmit
              ? "bg-[#EC008C] text-white hover:bg-[#EC008C]/90 hover:gap-4"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          Ver mi simulación
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
