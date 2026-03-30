"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

const WA_BASE = "https://wa.me/56958419326?text=";
const WA_FERIA = WA_BASE + encodeURIComponent("Hola, quiero mejorar los resultados comerciales de mi presencia en ferias con LaPizarra");
const WA_DIAGNOSTICO = WA_BASE + encodeURIComponent("Hola, me interesa un diagnóstico de stand gratuito con LaPizarra");

const niveles = [
  {
    num: "01",
    tag: "NIVEL 1",
    titulo: "Mejoras rápidas",
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
    desc: "Evaluamos tu stand actual o el de la competencia: flujo de visitas, calidad de interacción, oportunidades comerciales perdidas y brechas versus el estándar del mercado. En 96 hrs tienes una propuesta personalizada con acciones concretas.",
  },
  {
    num: "02",
    titulo: "Propuesta a medida",
    desc: "Un plan con acciones priorizadas por nivel de inversión y retorno esperado. Cada acción tiene un objetivo claro: convertir visitantes en leads calificados, reducir el tiempo de conversación o aumentar la recordación de marca post-feria.",
  },
  {
    num: "03",
    titulo: "Ejecución con proveedores top",
    desc: "Activamos nuestra red de proveedores especializados en construcción de stands para marcas premium. Diseño, materialidad, tecnología y producción integrados en una sola propuesta coherente — sin que tengas que coordinar múltiples proveedores.",
  },
  {
    num: "04",
    titulo: "Resultado medible",
    desc: "Definimos los KPIs antes de la feria: leads capturados, reuniones agendadas, tiempo promedio de permanencia. Al cierre del evento tienes un informe de resultados que justifica la inversión y mejora la siguiente edición.",
  },
];

const diferenciadores = [
  {
    titulo: "Enfoque comercial, no decorativo",
    desc: "Cada decisión de diseño tiene un propósito comercial. El layout, los materiales, las interacciones y el contenido están calibrados para convertir visitas en oportunidades de negocio.",
  },
  {
    titulo: "Red de proveedores calificados",
    desc: "Trabajamos con los constructores de stands que producen para las marcas más exigentes de Chile. Accedes a ese estándar sin tener que buscarlo tú.",
  },
  {
    titulo: "Metodología diagnóstica propia",
    desc: "Antes de proponer cualquier solución, evaluamos tu stand o el de la competencia en terreno. Las propuestas nacen de datos reales, no de suposiciones.",
  },
  {
    titulo: "Acompañamiento el día de la feria",
    desc: "No te dejamos solo el día D. Estamos presentes para asegurarnos de que cada elemento funcione como fue diseñado y para capturar aprendizajes en tiempo real.",
  },
];

const preguntas = [
  {
    q: "¿En qué ferias tienen experiencia?",
    a: "Hemos trabajado en las principales ferias industriales, tecnológicas y de consumo del país, incluyendo Aquasur, Edifica, Sodimac, Food and Service y otros recintos ferias de primer nivel. Si tu feria es en regiones, también podemos ayudarte — tenemos red de proveedores fuera de Santiago.",
  },
  {
    q: "¿Pueden encargarse solo del diseño comercial sin la construcción?",
    a: "Sí. Si ya tienes un stand armado o un proveedor de construcción definido, podemos actuar como consultores de experiencia comercial: diagnóstico, diseño de journey, contenidos y entrenamiento del equipo. El alcance lo defines tú.",
  },
  {
    q: "¿Cuánto tiempo antes de la feria debo contactarlos?",
    a: "Idealmente 6 a 8 semanas antes para tener margen de producción. Pero hemos operado en plazos mucho más cortos. Si tu feria es en menos de 3 semanas, contáctanos igual — evaluamos qué podemos hacer.",
  },
  {
    q: "¿Qué incluye el diagnóstico gratuito?",
    a: "Una evaluación de tu stand o del espacio que planeas ocupar, análisis del flujo de visitantes esperado, identificación de las 3 principales oportunidades de mejora y una recomendación de nivel de intervención con rango de inversión estimado.",
  },
];

export default function FeriasStandsPage() {
  const [nivelActivo, setNivelActivo] = useState<number | null>(1);
  const [preguntaActiva, setPreguntaActiva] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="bg-[#231F20] min-h-screen">

        {/* ── HERO ── */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#EC008C]/8 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <Link href="/#ferias-stands" className="inline-flex items-center gap-2 text-white/30 text-sm font-medium hover:text-white/60 transition-colors mb-10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Volver al inicio
            </Link>
            <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-6">Ferias &amp; Stands</p>
            <h1 className="text-white font-black leading-none tracking-tighter mb-8">
              <span className="block text-4xl md:text-6xl text-white/30">No diseñamos stands.</span>
              <span className="block text-5xl md:text-7xl">Diseñamos sistemas de</span>
              <span className="block text-5xl md:text-7xl text-[#EC008C]">conversión comercial.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
              La mayoría de las marcas invierte en estar en ferias, pero pocas miden lo que realmente importa: leads calificados, tiempo de permanencia, recordación de marca o conversiones post-evento.
              Nosotros transformamos esa inversión en resultados concretos, medibles y comparables entre ediciones.
            </p>
          </div>
        </section>

        {/* ── EL PROBLEMA ── */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
              <div>
                <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">El problema</p>
                <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tighter mb-6">
                  Tu stand se ve bien.<br />¿Pero convierte?
                </h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  La mayoría de los stands están diseñados para verse atractivos. Pocos están diseñados para generar reuniones,
                  capturar leads calificados o mover a un visitante a la conversión deseada.
                </p>
              </div>
              <div className="mt-12 md:mt-0 grid grid-cols-1 gap-4">
                {[
                  { stat: "70%", desc: "de los visitantes de una feria no recuerda el nombre del stand que visitó 24 hrs después" },
                  { stat: "< 20%", desc: "de los leads capturados en ferias reciben seguimiento estructurado post-evento" },
                  { stat: "3x", desc: "mayor tasa de conversión en stands con journey de experiencia definido vs. stands decorativos" },
                ].map((item) => (
                  <div key={item.stat} className="border border-white/10 rounded-2xl p-6 flex gap-5 items-start">
                    <span className="text-[#EC008C] font-black text-3xl flex-shrink-0 leading-none">{item.stat}</span>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3 NIVELES ── */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">Niveles de intervención</p>
            <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tighter mb-4">
              Adaptado a tu presupuesto<br />y objetivos.
            </h2>
            <p className="text-white/40 text-base mb-12 max-w-xl">
              No existe una solución única. Diseñamos intervenciones según el tipo de feria, el perfil del visitante y el retorno esperado.
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
                    <h3 className="text-white font-black text-2xl mb-1">{n.titulo}</h3>
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
        </section>

        {/* ── PROCESO ── */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">Cómo trabajamos</p>
            <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tighter mb-4">
              De la evaluación<br />a la ejecución.
            </h2>
            <p className="text-white/40 text-base mb-12 max-w-xl">
              Un proceso claro, con entregables concretos en cada etapa y proveedores especializados en marcas top.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {fases.map((f) => (
                <div key={f.num} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
                  <span className="text-[#EC008C] font-black text-4xl leading-none block mb-5">{f.num}</span>
                  <h3 className="text-white font-black text-xl mb-3">{f.titulo}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIFERENCIADORES ── */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">Por qué LaPizarra</p>
            <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tighter mb-12">
              Lo que nos hace<br />diferentes.
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {diferenciadores.map((d) => (
                <div key={d.titulo} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
                  <div className="w-2 h-2 bg-[#EC008C] rounded-full mb-5" />
                  <h3 className="text-white font-black text-xl mb-3">{d.titulo}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALIANZAS ── */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="border border-white/10 rounded-2xl p-8 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#EC008C]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
              <div className="relative z-10 md:flex md:items-center md:gap-16">
                <div className="flex-1 mb-10 md:mb-0">
                  <p className="text-[#EC008C] font-black text-xs tracking-widest uppercase mb-4">Red de proveedores</p>
                  <h3 className="text-white font-black text-3xl md:text-4xl leading-tight mb-5">
                    Los mejores constructores de stands del mercado, dentro de tu propuesta.
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed max-w-lg">
                    Hemos construido alianzas con los proveedores que trabajan para las marcas más exigentes de Chile.
                    Accedes a ese nivel de producción sin tener que buscarlos, coordinarlos ni negociar por separado.
                    Nosotros integramos todo en una sola propuesta coherente con un único punto de contacto.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {[
                      { label: "Diseño", desc: "Arquitectura y gráfica" },
                      { label: "Construcción", desc: "Materialidad premium" },
                      { label: "Tecnología", desc: "Interacción y datos" },
                      { label: "Contenido", desc: "Audiovisual y digital" },
                    ].map((item) => (
                      <div key={item.label} className="border border-white/10 rounded-xl px-5 py-5">
                        <span className="text-white font-black text-sm block mb-1">{item.label}</span>
                        <span className="text-white/30 text-xs">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-16">
              <div className="mb-10 md:mb-0">
                <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">Preguntas frecuentes</p>
                <h2 className="text-white font-black text-4xl leading-tight tracking-tighter">
                  Todo lo que necesitas saber.
                </h2>
              </div>
              <div className="space-y-2">
                {preguntas.map((p, i) => {
                  const isOpen = preguntaActiva === i;
                  return (
                    <div
                      key={i}
                      className="border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors duration-200"
                      onClick={() => setPreguntaActiva(isOpen ? null : i)}
                    >
                      <div className="flex items-center justify-between px-7 py-5 gap-4">
                        <span className={`font-black text-base transition-colors duration-200 ${isOpen ? "text-[#EC008C]" : "text-white"}`}>
                          {p.q}
                        </span>
                        <span className={`text-2xl font-thin flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-[#EC008C]" : "text-white/30"}`}>+</span>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-64 pb-6" : "max-h-0"}`}>
                        <p className="text-white/50 text-sm leading-relaxed px-7">{p.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-end md:justify-between gap-12">
              <div className="mb-10 md:mb-0">
                <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">Próximo paso</p>
                <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tighter mb-4">
                  ¿Tu próxima feria<br />ya tiene fecha?
                </h2>
                <p className="text-white/40 text-base max-w-md">
                  Conversemos 30 minutos. Te contamos qué nivel de intervención tiene sentido para tu caso y te damos una estimación de inversión sin compromiso.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href={WA_DIAGNOSTICO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-sm bg-[#EC008C] text-white hover:bg-[#c8007a] transition-colors duration-200 whitespace-nowrap"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L0 24l6.345-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.374l-.36-.214-3.724.878.916-3.618-.235-.372A9.789 9.789 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  Quiero un diagnóstico gratuito
                </a>
                <a
                  href={WA_FERIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-sm border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200 whitespace-nowrap"
                >
                  Conversemos →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
