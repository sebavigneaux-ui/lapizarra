const atributos = [
  "Estrategia",
  "Diseño",
  "Narrativa",
  "Producción rigurosa",
  "Ejecución impecable",
];

const diferencias = [
  "Atención directa y senior",
  "Pensamiento estratégico en cada proyecto",
  "Creatividad aterrizada",
  "Control absoluto de la producción",
  "Obsesión por los detalles",
];

export default function PropuestaValor() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda */}
          <div>
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
              Nuestra propuesta
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-8">
              Una productora que piensa como socio estratégico, no solo como proveedor.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              En LaPizarra ayudamos a empresas a transformar ideas en experiencias de marca y eventos corporativos que combinan:
            </p>
            <ul className="space-y-3">
              {atributos.map((a, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C] flex-shrink-0" />
                  <span className="text-white font-bold text-base">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha */}
          <div className="border border-white/10 p-10">
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Somos una productora boutique, lo que significa:
            </p>
            <ul className="space-y-5">
              {diferencias.map((d, i) => (
                <li key={i} className="flex items-start gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                  <span className="text-[#EC008C] font-black text-xl leading-none">0{i + 1}</span>
                  <span className="text-white text-base font-medium">{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-white/80 text-base leading-relaxed border-t border-white/10 pt-8">
              Nuestro objetivo no es solo que el evento funcione. Es que funcione perfecto y represente bien a tu marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
