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

const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20acabo%20de%20completar%20el%20formulario%20en%20somoslapizarra.cl%20y%20me%20gustar%C3%ADa%20que%20me%20contactaran";

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
      <div className="border border-white/15 bg-white/[0.04] backdrop-blur-sm p-8 md:p-10 animate-in fade-in duration-500">
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
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
            Recibimos tu solicitud. Te contactaremos en menos de 24 horas para hablar de tu evento.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-4 font-black text-base bg-[#EC008C] hover:bg-[#d4007d] text-white transition-all duration-300"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Abrir WhatsApp
          </a>
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
