"use client";
import { useState } from "react";
import type { TipoEvento, RangoAsistentes, RegionId, DiasId } from "../../types/calculator";
import { TIPOS_EVENTO, LABELS_ASISTENTES, REGIONES, DIAS_OPCIONES } from "../../config/pricing";

const RANGOS: RangoAsistentes[] = ["menos50", "50-100", "100-200", "200-400", "400plus"];

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

interface Props {
  tipoEvento: TipoEvento | null;
  asistentes: RangoAsistentes | null;
  region: RegionId | null;
  diasEvento: DiasId | null;
  fechaEvento: string | null;
  onTipo: (t: TipoEvento) => void;
  onAsistentes: (r: RangoAsistentes) => void;
  onRegion: (r: RegionId) => void;
  onDias: (d: DiasId) => void;
  onFecha: (f: string | null) => void;
  onNext: () => void;
  canNext: boolean;
}

export default function StepContexto({
  tipoEvento, asistentes, region, diasEvento, fechaEvento,
  onTipo, onAsistentes, onRegion, onDias, onFecha,
  onNext, canNext,
}: Props) {
  const hoy = new Date();
  const [anioVista, setAnioVista] = useState(hoy.getFullYear());
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">

      {/* 01 — Tipo de evento */}
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
                <span className={`block font-black text-3xl mb-3 leading-none transition-colors duration-200 ${active ? "text-[#EC008C]" : "text-white/20 group-hover:text-white/40"}`}>
                  {tipo.icon}
                </span>
                <span className={`block font-black text-base mb-1 transition-colors duration-200 ${active ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                  {tipo.label}
                </span>
                <span className="block text-sm text-white/35 leading-snug">{tipo.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 02 — Asistentes */}
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

      {/* 03 — Región */}
      <div className="mb-12">
        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">03 —</p>
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-8 leading-tight">
          ¿Dónde es el evento?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {REGIONES.map((reg) => {
            const active = region === reg.id;
            const esBase = reg.multiplicador === 1.0;
            const pct = Math.round((reg.multiplicador - 1) * 100);
            return (
              <button
                key={reg.id}
                onClick={() => onRegion(reg.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 group ${
                  active
                    ? "border-[#EC008C] bg-[#EC008C]/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className={`font-black text-base transition-colors duration-200 ${active ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                    {reg.label}
                  </span>
                  <span className={`text-xs font-black ml-2 flex-shrink-0 ${active ? "text-[#EC008C]" : "text-white/25"}`}>
                    {esBase ? "Base" : `+${pct}%`}
                  </span>
                </div>
                <span className="block text-xs text-white/35 leading-snug">{reg.nota}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 04 — Duración */}
      <div className="mb-12">
        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">04 —</p>
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-8 leading-tight">
          ¿Cuántos días dura el evento?
        </h2>
        <div className="flex flex-wrap gap-3">
          {DIAS_OPCIONES.map((d) => {
            const active = diasEvento === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onDias(d.id)}
                className={`px-6 py-3 rounded-full font-black text-sm border transition-all duration-200 ${
                  active
                    ? "border-[#EC008C] bg-[#EC008C] text-white"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 05 — Fecha del evento */}
      <div className="mb-12">
        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">05 —</p>
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-2 leading-tight">
          ¿Cuándo es el evento?
        </h2>
        <p className="text-white/40 text-sm mb-8">Opcional — nos ayuda a planificar contigo.</p>

        {/* Navegación de año */}
        <div className="flex items-center gap-4 mb-5">
          <button
            onClick={() => setAnioVista((a) => a - 1)}
            className="w-8 h-8 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/50 flex items-center justify-center transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-white font-black text-lg w-16 text-center">{anioVista}</span>
          <button
            onClick={() => setAnioVista((a) => a + 1)}
            className="w-8 h-8 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/50 flex items-center justify-center transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {fechaEvento && (
            <button
              onClick={() => onFecha(null)}
              className="ml-2 text-white/30 hover:text-white/60 text-xs font-bold transition-colors duration-200"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Grid de meses */}
        <div className="grid grid-cols-4 gap-2">
          {MESES.map((mes, i) => {
            const key = `${anioVista}-${String(i + 1).padStart(2, "0")}`;
            const esPasado = anioVista < hoy.getFullYear() || (anioVista === hoy.getFullYear() && i < hoy.getMonth());
            const active = fechaEvento === key;
            return (
              <button
                key={key}
                onClick={() => onFecha(active ? null : key)}
                className={`py-3 rounded-xl text-sm font-black border transition-all duration-200 ${
                  active
                    ? "border-[#EC008C] bg-[#EC008C] text-white"
                    : esPasado
                    ? "border-white/8 text-white/20 hover:border-white/20 hover:text-white/40"
                    : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {mes}
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
