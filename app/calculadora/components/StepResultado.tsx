"use client";
import { useEffect, useRef, useState } from "react";
import type { Resultado, NivelId, Recomendacion } from "../../types/calculator";
import { formatCLP, formatRango } from "../../lib/formatters";

interface Props {
  resultado: Resultado;
  tipoLabel: string;
  asistentesLabel: string;
  regionLabel: string;
  fechaEvento: string | null;
  onAgregar: (bloqueId: string, nivelId: NivelId) => void;
  onCambiarNivel: (bloqueId: string, nivelId: NivelId) => void;
  onQuitar: (bloqueId: string, nivelId: NivelId) => void;
  onNext: () => void;
  onBack: () => void;
}

const NIVEL_TERCIOS: Record<NivelId, 1 | 2 | 3> = { basico: 1, medio: 2, top: 3 };

const NIVEL_WIDTH: Record<NivelId, string> = {
  basico: "33.33%",
  medio: "66.66%",
  top: "100%",
};

const NIVEL_DISPLAY_LABEL: Record<NivelId, string> = {
  basico: "Básica",
  medio: "Media",
  top: "Premium",
};

const MESES_LARGO = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

function formatFecha(f: string): string {
  const [anio, mes] = f.split("-");
  return `${MESES_LARGO[parseInt(mes) - 1]} ${anio}`;
}

function useAnimatedTotal(total: [number, number]) {
  const [display, setDisplay] = useState<[number, number]>(total);
  const prev = useRef<[number, number]>(total);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const [fromMin, fromMax] = prev.current;
    const [toMin, toMax] = total;
    if (fromMin === toMin && fromMax === toMax) return;

    if (raf.current) cancelAnimationFrame(raf.current);

    const duration = 500;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay([
        Math.round(fromMin + (toMin - fromMin) * e),
        Math.round(fromMax + (toMax - fromMax) * e),
      ]);
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        prev.current = total;
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [total[0], total[1]]);

  return display;
}

interface BarraProps {
  nivelId: NivelId;
  bloqueId?: string;
  visible: boolean;
  delay: number;
  onSetNivel?: (nivelId: NivelId) => void;
}

function pctToNivel(pct: number): NivelId {
  if (pct < 0.5) return "basico";
  if (pct < 0.833) return "medio";
  return "top";
}

function BarraInteractiva({ nivelId, bloqueId, visible, delay, onSetNivel }: BarraProps) {
  const [hover, setHover] = useState<NivelId | null>(null);
  const [dragNivel, setDragNivel] = useState<NivelId | null>(null);
  const [dragging, setDragging] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  const activeNivel = dragNivel ?? hover ?? nivelId;
  const niveles: NivelId[] = ["basico", "medio", "top"];
  const interactive = !!(bloqueId && onSetNivel);
  const fastTransition = !!(hover || dragging);

  const startDrag = (clientX: number) => {
    if (!interactive) return;
    setDragging(true);

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!barRef.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const rect = barRef.current.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
      setDragNivel(pctToNivel(pct));
    };

    const onUp = (e: MouseEvent | TouchEvent) => {
      if (!barRef.current) return;
      const x = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
      const rect = barRef.current.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
      const next = pctToNivel(pct);
      if (next !== nivelId) onSetNivel!(next);
      setDragging(false);
      setDragNivel(null);
      document.removeEventListener("mousemove", onMove as EventListener);
      document.removeEventListener("mouseup", onUp as EventListener);
      document.removeEventListener("touchmove", onMove as EventListener);
      document.removeEventListener("touchend", onUp as EventListener);
    };

    document.addEventListener("mousemove", onMove as EventListener);
    document.addEventListener("mouseup", onUp as EventListener);
    document.addEventListener("touchmove", onMove as EventListener);
    document.addEventListener("touchend", onUp as EventListener);
  };

  return (
    <div className="mt-2" style={{ userSelect: dragging ? "none" : undefined }}>
      {/* Barra de gradiente continuo */}
      <div
        ref={barRef}
        className="w-full h-1.5 rounded-full bg-white/8 relative mb-1.5"
        style={{ cursor: interactive ? "pointer" : "default" }}
        onClick={(e) => {
          if (!interactive || dragging) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          const next = pctToNivel(pct);
          if (next !== nivelId) onSetNivel!(next);
        }}
      >
        {/* Fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
          style={{
            width: visible ? NIVEL_WIDTH[activeNivel] : "0%",
            transitionDelay: fastTransition ? "0ms" : `${delay}ms`,
            background: "linear-gradient(to right, rgba(255,255,255,0.4), #EC008C)",
          }}
        />
        {/* Dot handle */}
        {interactive && visible && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#EC008C] border border-white/20 transition-all duration-500 ${dragging ? "scale-125" : "hover:scale-125"}`}
            style={{
              left: `calc(${NIVEL_WIDTH[activeNivel]} - 7px)`,
              transitionDelay: fastTransition ? "0ms" : `${delay}ms`,
              cursor: dragging ? "grabbing" : "grab",
              boxShadow: "0 0 8px rgba(236,0,140,0.6)",
              touchAction: "none",
            }}
            onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientX); }}
            onTouchStart={(e) => { e.preventDefault(); startDrag(e.touches[0].clientX); }}
          />
        )}
      </div>
      {/* Etiquetas interactivas */}
      <div className="flex">
        {niveles.map((n) => {
          const isActive = n === nivelId;
          const isHovered = n === (dragNivel ?? hover);
          return (
            <button
              key={n}
              disabled={!interactive}
              onClick={() => {
                if (interactive && n !== nivelId) onSetNivel!(n);
              }}
              onMouseEnter={() => interactive && !dragging && setHover(n)}
              onMouseLeave={() => setHover(null)}
              className={`flex-1 text-[10px] font-black transition-all duration-200 py-0.5 rounded ${
                interactive ? "cursor-pointer hover:bg-white/5" : "cursor-default"
              } ${
                isActive ? "text-white" : isHovered ? "text-white/60" : "text-white/20"
              }`}
            >
              {NIVEL_DISPLAY_LABEL[n]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function StepResultado({
  resultado, tipoLabel, asistentesLabel, regionLabel, fechaEvento,
  onAgregar, onCambiarNivel, onQuitar, onNext, onBack,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [removedItems, setRemovedItems] = useState<Recomendacion[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const displayTotal = useAnimatedTotal(resultado.total);

  const handleQuitar = (bloqueId: string, nivelId: NivelId, label: string) => {
    setRemovedItems((prev) => [
      { msg: `Tenías ${label} (${NIVEL_DISPLAY_LABEL[nivelId]}) en tu estimación.`, bloqueId, nivelId },
      ...prev.filter((r) => r.bloqueId !== bloqueId),
    ]);
    onQuitar(bloqueId, nivelId);
  };

  const handleAgregar = (bloqueId: string, nivelId: NivelId) => {
    setRemovedItems((prev) => prev.filter((r) => r.bloqueId !== bloqueId));
    onAgregar(bloqueId, nivelId);
  };

  const todasRecomendaciones = [
    ...removedItems,
    ...resultado.recomendaciones.filter((r) => !removedItems.some((rm) => rm.bloqueId === r.bloqueId)),
  ];

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
        {fechaEvento && (
          <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/60 text-xs font-bold">
            {formatFecha(fechaEvento)}
          </span>
        )}
      </div>

      {/* Número grande animado */}
      <div
        className="mb-10 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <p className="text-white/30 text-sm font-black uppercase tracking-widest mb-2">Estimación total</p>
        <p className="font-black leading-none tracking-tighter text-white">
          <span className="text-5xl md:text-7xl">{formatCLP(displayTotal[0])}</span>
          <span className="text-3xl md:text-5xl text-white/40"> – </span>
          <span className="text-5xl md:text-7xl text-[#EC008C]">{formatCLP(displayTotal[1])}</span>
        </p>
        <p className="text-white/30 text-sm mt-3">Valores referenciales en pesos chilenos, sin IVA.</p>
      </div>

      {/* Desglose — barras interactivas */}
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
              <div className="flex items-center justify-between mb-1 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-white/70 text-sm font-bold">{item.label}</span>
                  {item.bloqueId && (
                    <button
                      onClick={() => handleQuitar(item.bloqueId!, item.nivelId!, item.label)}
                      className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-black border border-white/15 text-white/30 hover:border-red-400/40 hover:text-red-400/60 transition-all duration-200"
                    >
                      Quitar
                    </button>
                  )}
                </div>
                <span className="text-white font-black text-sm flex-shrink-0">{formatRango(item.monto)}</span>
              </div>
              <BarraInteractiva
                nivelId={item.nivelId!}
                bloqueId={item.bloqueId}
                visible={visible}
                delay={300 + i * 60}
                onSetNivel={item.bloqueId ? (n) => onCambiarNivel(item.bloqueId!, n) : undefined}
              />
            </div>
          ))}
      </div>

      {/* Fee de producción */}
      <p
        className="text-white/25 text-xs mb-10 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "500ms" }}
      >
        Incluye honorarios de producción y gestión LaPizarra ({Math.round(17)}–{Math.round(20)}%).
      </p>

      {/* Recomendaciones */}
      {todasRecomendaciones.length > 0 && (
        <div
          className="mb-10 p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-4">Te recomendamos</p>
          <ul className="space-y-4">
            {todasRecomendaciones.map((r, i) => (
              <li key={i} className="flex items-start justify-between gap-4">
                <div className="flex gap-2 text-sm text-white/50 flex-1">
                  <span className="text-[#EC008C] mt-0.5 flex-shrink-0">→</span>
                  {r.msg}
                </div>
                {r.bloqueId && r.nivelId && (
                  <button
                    onClick={() => handleAgregar(r.bloqueId!, r.nivelId!)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-black border border-[#EC008C]/50 text-[#EC008C] hover:bg-[#EC008C] hover:text-white transition-all duration-200"
                  >
                    + Agregar
                  </button>
                )}
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
