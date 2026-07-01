"use client";
import { useState } from "react";

const TIPOS = [
  { id: "Evento corporativo", label: "Evento corporativo" },
  { id: "Lanzamiento de producto", label: "Lanzamiento de producto" },
  { id: "Activación BTL", label: "Activación BTL" },
  { id: "Experiencia interna", label: "Experiencia interna" },
  { id: "Stand o espacio de marca", label: "Stand o espacio de marca" },
  { id: "Otro", label: "Otro" },
];

export default function HeroContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    tipoEvento: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit =
    form.nombre.trim() &&
    form.empresa.trim() &&
    form.correo.trim() &&
    form.telefono.trim() &&
    form.tipoEvento;

  const handleSubmit = async () => {
    if (!canSubmit || loading) return;
    setLoading(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "hero_form_submit",
      tipo_evento: form.tipoEvento,
    });

    try {
      await fetch("/api/leads-simple", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (e) {
      console.error("Error enviando formulario:", e);
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    const nombreCorto = form.nombre.split(" ")[0] || "";
    return (
      <div className="relative border border-white/15 bg-white/[0.04] backdrop-blur-sm p-8 md:p-10 animate-in fade-in duration-500">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#EC008C] via-[#EC008C]/40 to-transparent" />
        <div className="flex flex-col items-center text-center py-6">
          <div className="w-16 h-16 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/30 flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-[#EC008C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-3">¡Listo!</p>
          <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-3 leading-tight">
            Nos vemos pronto{nombreCorto ? `, ${nombreCorto}` : ""}.
          </h3>
          <p className="text-white/50 text-base leading-relaxed max-w-sm">
            Recibimos tu solicitud. Te contactaremos en menos de 24 horas para hablar de tu evento.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative border border-white/15 bg-white/[0.04] backdrop-blur-sm p-8 md:p-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#EC008C] via-[#EC008C]/40 to-transparent" />

      <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-4">
        Hablemos de tu evento
      </p>
      <h2 className="text-white font-black leading-none tracking-tighter mb-6">
        <span className="block text-2xl md:text-3xl">¿Tienes un evento</span>
        <span className="block text-2xl md:text-3xl">en mente?</span>
      </h2>

      <div className="space-y-3 mb-6">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-1.5">Nombre</label>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
              placeholder="Tu nombre"
              className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-1.5">Empresa</label>
            <input
              type="text"
              value={form.empresa}
              onChange={(e) => setForm((f) => ({ ...f, empresa: e.target.value }))}
              placeholder="Tu empresa"
              className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-1.5">Correo</label>
            <input
              type="email"
              value={form.correo}
              onChange={(e) => setForm((f) => ({ ...f, correo: e.target.value }))}
              placeholder="tu@empresa.cl"
              className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-1.5">Teléfono</label>
            <input
              type="tel"
              value={form.telefono}
              onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
              placeholder="+569 1234 5678"
              className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/25 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-1.5">Tipo de evento</label>
          <select
            value={form.tipoEvento}
            onChange={(e) => setForm((f) => ({ ...f, tipoEvento: e.target.value }))}
            className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#EC008C]/60 transition-all duration-200 appearance-none"
            style={{ color: form.tipoEvento ? "white" : "rgba(255,255,255,0.25)" }}
          >
            <option value="" disabled style={{ color: "#888", background: "#231F20" }}>
              ¿Qué tipo de evento tienes en mente?
            </option>
            {TIPOS.map((t) => (
              <option key={t.id} value={t.id} style={{ color: "white", background: "#231F20" }}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!canSubmit || loading}
        className={`group flex items-center justify-between w-full font-black px-6 py-5 transition-all duration-300 ${
          canSubmit && !loading
            ? "bg-[#EC008C] hover:bg-[#d4007d] text-white"
            : "bg-white/8 text-white/30 cursor-not-allowed"
        }`}
      >
        <span className="text-base">{loading ? "Enviando..." : "Quiero que me contacten"}</span>
        {!loading && (
          <span className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${canSubmit ? "bg-white/20 group-hover:bg-white/30 group-hover:translate-x-1" : "bg-white/5"}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        )}
      </button>

      <p className="text-white/20 text-xs mt-4 text-center">
        También puedes usar la{" "}
        <a href="/calculadora" className="text-white/35 hover:text-white/55 underline underline-offset-2 transition-colors">
          calculadora de costos
        </a>{" "}
        para obtener una estimación detallada.
      </p>
    </div>
  );
}
