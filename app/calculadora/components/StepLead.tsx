"use client";
import type { TipoEvento, RangoAsistentes, RegionId } from "../../types/calculator";
import { TIPOS_EVENTO, LABELS_ASISTENTES, REGIONES } from "../../config/pricing";
import { formatRango } from "../../lib/formatters";
import type { Resultado } from "../../types/calculator";

interface Props {
  nombre: string;
  empresa: string;
  correo: string;
  mensaje: string;
  tipoEvento: TipoEvento;
  asistentes: RangoAsistentes;
  region: RegionId;
  resultado: Resultado;
  onChange: (field: "nombre" | "empresa" | "correo" | "mensaje", value: string) => void;
  onBack: () => void;
}

export default function StepLead({
  nombre, empresa, correo, mensaje,
  tipoEvento, asistentes, region, resultado,
  onChange, onBack,
}: Props) {
  const tipoLabel = TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.label ?? tipoEvento;
  const asistentesLabel = LABELS_ASISTENTES[asistentes];
  const regionLabel = REGIONES.find((r) => r.id === region)?.label ?? region;
  const rangoLabel = formatRango(resultado.total);

  const handleSubmit = () => {
    const texto = [
      `*Calculadora LaPizarra*`,
      ``,
      `*Tipo de evento:* ${tipoLabel}`,
      `*Asistentes:* ${asistentesLabel}`,
      `*Región:* ${regionLabel}`,
      `*Estimación:* ${rangoLabel}`,
      ``,
      `*Nombre:* ${nombre}`,
      `*Empresa:* ${empresa}`,
      `*Correo:* ${correo}`,
      mensaje ? `*Mensaje:* ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/56958419326?text=${encodeURIComponent(texto)}`, "_blank");
  };

  const canSubmit = nombre.trim() && empresa.trim() && correo.trim();

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">
      {/* Back button arriba */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-bold transition-colors duration-200 mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver a la estimación
      </button>

      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 5 — Contacto</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-3 leading-tight">
        Cuéntanos más sobre ti
      </h2>
      <p className="text-white/40 text-sm mb-10">
        Te enviamos el desglose completo y coordinamos una llamada para afinar la propuesta.
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
          <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-black text-xs">
            {rangoLabel}
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
          <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Correo electrónico</label>
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
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-base transition-all duration-300 ${
            canSubmit
              ? "bg-[#EC008C] text-white hover:bg-[#EC008C]/90 hover:gap-4"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          Enviar por WhatsApp
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
