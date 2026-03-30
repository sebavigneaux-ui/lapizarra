"use client";
import { useState } from "react";

const WA_BASE = "https://wa.me/56958419326?text=";

const WA_FERIA = WA_BASE + encodeURIComponent("Hola, quiero mejorar los resultados comerciales de mi presencia en ferias con LaPizarra");
const WA_DIAGNOSTICO = WA_BASE + encodeURIComponent("Hola, me interesa un diagnóstico de stand gratuito con LaPizarra");

const niveles = [
  {
    num: "01",
    tag: "NIVEL 1",
    titulo: "Mejora Rápida",
    subtitulo: "Inversión baja · Impacto inmediato",
    desc: "Intervenciones estratégicas de alto impacto con bajo tiempo de implementación. Para empresas que quieren resultados concretos antes de la próxima feria.",
    items: [
      "Demo guiada express con guión de conversión",
      "Activación simple en stand con pitch entrenado",
      "Narrativa básica: Problema → Solución → Resultado",
      "Captura de leads con diagnóstico express",
      "Micro charlas de 10 min que posicionan como experto",
    ],
    color: "border-white/20 hover:border-white/40",
    tagColor: "bg-white/10 text-white/60",
    activeColor: "border-white/60",
    activeTag: "bg-white/20 text-white",
  },
  {
    num: "02",
    tag: "NIVEL 2",
    titulo: "Experiencia Completa",
    subtitulo: "Inversión media · Alto ROI comprobable",
    desc: "Un sistema de conversión completo con journey definido, interacción real y captura inteligente. Para empresas que quieren transformar visitas en leads calificados.",
    items: [
      "Journey por estaciones: Desafío → Solución → Resultado",
      "Interacción + gamificación que engancha al visitante técnico",
      "Captación inteligente con diagnóstico personalizado",
      "Personalización por perfil: cliente / partner / stakeholder",
      "Contenido dinámico + follow-up automatizado post-feria",
    ],
    color: "border-[#EC008C]/40 hover:border-[#EC008C]/70",
    tagColor: "bg-[#EC008C]/20 text-[#EC008C]",
    activeColor: "border-[#EC008C]",
    activeTag: "bg-[#EC008C] text-white",
  },
  {
    num: "03",
    tag: "NIVEL 3",
    titulo: "Experiencia Premium",
    subtitulo: "Inversión alta · Diferenciación total",
    desc: "Experiencias que la competencia no puede copiar. Para marcas que quieren ser el stand que todo el mundo recuerda — y que genera el mejor pipeline.",
    items: [
      "Sala inmersiva con mapping o realidad virtual",
      "Hospitality VIP + lounge ejecutivo para stakeholders",
      "Evento paralelo exclusivo fuera del stand",
      "Experiencia emocional con narrativa de marca profunda",
      "Extensión digital completa: landing, app, automatización CRM",
    ],
    color: "border-white/20 hover:border-white/40",
    tagColor: "bg-white/10 text-white/60",
    activeColor: "border-white/60",
    activeTag: "bg-white/20 text-white",
  },
];

const fases = [
  {
    num: "01",
    titulo: "Diagnóstico en terreno",
    desc: "Evaluamos tu stand actual o el de la competencia: flujo, interacción real y oportunidades comerciales perdidas. En 72 hrs tienes una propuesta personalizada.",
  },
  {
    num: "02",
    titulo: "Propuesta a medida",
    desc: "Un plan concreto con acciones priorizadas por inversión y retorno medible. Cada acción tiene un objetivo: convertir visitantes en leads calificados.",
  },
  {
    num: "03",
    titulo: "Ejecución con proveedores top",
    desc: "Activamos nuestra red de proveedores especializados en construcción de stands para marcas premium. Diseño, materialidad y producción de primer nivel.",
  },
  {
    num: "04",
    titulo: "Resultado medible",
    desc: "Un stand que genera reuniones, datos y oportunidades de negocio reales. ¿Cuál es el ROI de tu próxima feria? Nosotros lo hacemos medible.",
  },
];

const stats = [
  { valor: "+300%", label: "Aumento en captura de leads calificados" },
  { valor: "12", label: "Empresas diagnosticadas en terreno" },
  { valor: "72 hrs", label: "De diagnóstico a propuesta personalizada" },
  { valor: "3", label: "Niveles de inversión adaptados a cada presupuesto" },
];

export default function FeriasStands() {
  const [nivelActivo, setNivelActivo] = useState<number | null>(1);

  return (
    <section id="ferias-stands" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── HEADLINE ── */}
        <div className="mb-20">
          <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">
            Ferias &amp; Stands
          </p>
          <h2 className="text-white font-black leading-none tracking-tighter mb-6">
            <span className="block text-4xl md:text-6xl text-white/30">No diseñamos stands.</span>
            <span className="block text-5xl md:text-7xl">Diseñamos sistemas de</span>
            <span className="block text-5xl md:text-7xl text-[#EC008C]">conversión comercial.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            La mayoría de las marcas invierte en estar en ferias, pero pocas miden cuántas reuniones generó su stand.
            Nosotros transformamos esa inversión en resultados comerciales concretos y medibles.
          </p>
        </div>

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-24">
          {stats.map((s) => (
            <div key={s.valor} className="bg-[#231F20] px-6 py-8 text-center">
              <span className="block text-4xl md:text-5xl font-black text-[#EC008C] mb-2">{s.valor}</span>
              <span className="text-white/40 text-xs leading-snug">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── 3 NIVELES ── */}
        <div className="mb-24">
          <h3 className="text-white font-black text-3xl md:text-4xl mb-3">
            ¿Cómo se organizan nuestras mejoras?
          </h3>
          <p className="text-white/40 text-base mb-12 max-w-xl">
            Adaptamos cada intervención al presupuesto y objetivos de tu empresa.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {niveles.map((n, i) => {
              const isActive = nivelActivo === i;
              return (
                <div
                  key={n.num}
                  onClick={() => setNivelActivo(isActive ? null : i)}
                  className={`border rounded-2xl p-7 cursor-pointer transition-all duration-300 ${
                    isActive ? n.activeColor + " bg-white/5" : n.color + " bg-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-black tracking-wider px-3 py-1 rounded-full transition-colors duration-300 ${
                      isActive ? n.activeTag : n.tagColor
                    }`}>
                      {n.tag}
                    </span>
                    <span className="text-white/20 font-black text-3xl leading-none">{n.num}</span>
                  </div>

                  <h4 className="text-white font-black text-2xl mb-1">{n.titulo}</h4>
                  <p className={`text-xs font-medium mb-5 transition-colors duration-300 ${isActive ? "text-[#EC008C]" : "text-white/30"}`}>
                    {n.subtitulo}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{n.desc}</p>

                  <ul className={`space-y-2.5 overflow-hidden transition-all duration-500 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    {n.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="text-[#EC008C] mt-0.5 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PROCESO ── */}
        <div className="mb-24">
          <h3 className="text-white font-black text-3xl md:text-4xl mb-3">
            Cómo trabajamos
          </h3>
          <p className="text-white/40 text-base mb-12 max-w-xl">
            De la evaluación a la ejecución — con proveedores especializados en marcas top.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {fases.map((f) => (
              <div key={f.num} className="border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors duration-300">
                <span className="text-[#EC008C] font-black text-4xl leading-none block mb-4">{f.num}</span>
                <h4 className="text-white font-black text-xl mb-3">{f.titulo}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ALIANZAS ── */}
        <div className="border border-white/10 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC008C]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 md:flex md:items-center md:gap-12">
            <div className="flex-1 mb-8 md:mb-0">
              <p className="text-[#EC008C] font-black text-xs tracking-widest uppercase mb-3">Red de proveedores</p>
              <h3 className="text-white font-black text-2xl md:text-3xl leading-tight mb-4">
                Resultados diferenciadores respaldados por los mejores proveedores del mercado.
              </h3>
              <p className="text-white/50 text-base leading-relaxed max-w-lg">
                Hemos construido alianzas estratégicas con los proveedores de construcción de stands que trabajan con las marcas más exigentes de Chile.
                Diseño, materialidad y producción de clase mundial — integrados en una propuesta comercial coherente.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="grid grid-cols-2 gap-3 text-center">
                {["Diseño", "Construcción", "Tecnología", "Contenido"].map((item) => (
                  <div key={item} className="border border-white/10 rounded-xl px-5 py-4">
                    <span className="text-white/60 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-white/10 pt-12">
          <div>
            <p className="text-white font-black text-xl md:text-2xl mb-1">
              ¿Tu próxima feria ya tiene fecha?
            </p>
            <p className="text-white/40 text-sm">
              Conversemos 30 minutos · Sin compromiso · Propuesta a medida en 72 hrs
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={WA_DIAGNOSTICO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-black text-sm bg-[#EC008C] text-white hover:bg-[#c8007a] transition-colors duration-200 whitespace-nowrap"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L0 24l6.345-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.374l-.36-.214-3.724.878.916-3.618-.235-.372A9.789 9.789 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              Quiero un diagnóstico
            </a>
            <a
              href={WA_FERIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-sm border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200 whitespace-nowrap"
            >
              Conversemos →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
