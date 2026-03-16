"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import type { TipoEvento, RangoAsistentes, RegionId } from "../../types/calculator";
import { TIPOS_EVENTO, LABELS_ASISTENTES, REGIONES } from "../../config/pricing";
import { formatRango } from "../../lib/formatters";
import type { Resultado } from "../../types/calculator";

const PDFDownloadButton = dynamic(() => import("./PDFDownloadButton"), { ssr: false });

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

type Estado = "idle" | "enviando" | "enviado" | "error";

export default function StepLead({
  nombre, empresa, correo, mensaje,
  tipoEvento, asistentes, region, resultado,
  onChange, onBack,
}: Props) {
  const [estado, setEstado] = useState<Estado>("idle");

  const tipoLabel = TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.label ?? tipoEvento;
  const asistentesLabel = LABELS_ASISTENTES[asistentes];
  const regionLabel = REGIONES.find((r) => r.id === region)?.label ?? region;
  const rangoLabel = formatRango(resultado.total);

  const handleSubmit = async () => {
    setEstado("enviando");

    const fecha = new Date().toLocaleDateString("es-CL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const payload = {
      nombre,
      empresa,
      correo,
      tipoLabel,
      asistentesLabel,
      regionLabel,
      desglose: resultado.desglose,
      total: resultado.total,
      fecha,
    };

    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setEstado("enviado");

      // Abrir WhatsApp después de un breve delay
      setTimeout(() => {
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
      }, 1500);
    } catch {
      setEstado("error");
    }
  };

  const canSubmit = nombre.trim() && empresa.trim() && correo.trim();

  const pdfData = {
    nombre,
    empresa,
    correo,
    tipoLabel,
    asistentesLabel,
    regionLabel,
    desglose: resultado.desglose,
    total: resultado.total,
    fecha: new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" }),
  };

  // Pantalla de éxito
  if (estado === "enviado") {
    return (
      <div className="animate-in fade-in duration-500 text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#EC008C] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-3">
          ¡Listo!
        </h2>
        <p className="text-white/50 text-base leading-relaxed max-w-sm mx-auto mb-8">
          Enviamos el PDF con tu simulación a <span className="text-white font-bold">{correo}</span>.
          Abriendo WhatsApp para coordinar...
        </p>
        <div className="flex justify-center">
          <PDFDownloadButton data={pdfData} />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400">
      {/* Back button arriba */}
      <button
        onClick={onBack}
        disabled={estado === "enviando"}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 mb-8 disabled:opacity-30"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Volver
      </button>

      <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Paso 5 — Contacto</p>
      <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-3 leading-tight">
        Cuéntanos más sobre ti
      </h2>
      <p className="text-white/40 text-sm mb-10">
        Te enviamos el PDF con tu simulación y coordinamos una llamada para afinar la propuesta.
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
              disabled={estado === "enviando"}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Empresa</label>
            <input
              type="text"
              value={empresa}
              onChange={(e) => onChange("empresa", e.target.value)}
              placeholder="Nombre de tu empresa"
              disabled={estado === "enviando"}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200 disabled:opacity-50"
            />
          </div>
        </div>
        <div>
          <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2">
            Correo electrónico
            <span className="text-[#EC008C] ml-1">— aquí recibirás el PDF</span>
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => onChange("correo", e.target.value)}
            placeholder="tu@empresa.cl"
            disabled={estado === "enviando"}
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200 disabled:opacity-50"
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
            disabled={estado === "enviando"}
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200 resize-none disabled:opacity-50"
          />
        </div>
      </div>

      {/* Error */}
      {estado === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          Hubo un problema al enviar el email. Prueba de nuevo o contáctanos directamente.
        </div>
      )}

      {/* Navegación */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          disabled={estado === "enviando"}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 disabled:opacity-30"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Volver
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit || estado === "enviando"}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-base transition-all duration-300 ${
            canSubmit && estado !== "enviando"
              ? "bg-[#EC008C] text-white hover:bg-[#EC008C]/90"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          {estado === "enviando" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando PDF...
            </>
          ) : (
            <>
              Recibir PDF y coordinar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
