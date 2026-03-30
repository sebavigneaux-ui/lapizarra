import Link from "next/link";

const stats = [
  { valor: "Hasta 2X", label: "Aumento de captura de leads", cls: "text-3xl md:text-4xl" },
  { valor: "+50", label: "Empresas diagnosticadas en terreno", cls: "text-4xl md:text-5xl" },
  { valor: "96 hrs", label: "Desde el diagnóstico a la propuesta personalizada", cls: "text-3xl md:text-4xl" },
  { valor: "3", label: "Niveles de inversión adaptados a cada presupuesto", cls: "text-4xl md:text-5xl" },
];

export default function FeriasStands() {
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16">
          {stats.map((s) => (
            <div key={s.valor} className="bg-[#231F20] px-6 py-8 text-center">
              <span className={`block font-black text-[#EC008C] mb-2 whitespace-nowrap ${s.cls}`}>{s.valor}</span>
              <span className="text-white/40 text-xs leading-snug">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-start">
          <Link
            href="/ferias-stands"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/60 font-black text-sm hover:text-white hover:border-white/50 transition-all duration-200"
          >
            Conocer nuestra metodología
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
