import Blobs from "./Blobs";

const items = [
  {
    titulo: "Pensamiento estratégico",
    desc: "No solo producimos eventos. Entendemos el objetivo de negocio detrás de cada experiencia.",
  },
  {
    titulo: "Creatividad ejecutable",
    desc: "Ideas que funcionan en la práctica, no solo en una presentación.",
  },
  {
    titulo: "Atención senior directa",
    desc: "Los fundadores están involucrados en los proyectos. Siempre.",
  },
  {
    titulo: "Estética y estándar premium",
    desc: "Cuidamos diseño, narrativa y detalle visual en cada producción.",
  },
  {
    titulo: "Respuesta rápida y clara",
    desc: "Sabemos que los proyectos corporativos necesitan agilidad y certeza.",
  },
  {
    titulo: "Red de proveedores confiables",
    desc: "Trabajamos con partners que cumplen estándares exigentes.",
  },
  {
    titulo: "Flexibilidad real",
    desc: "Los proyectos cambian. Estamos preparados para adaptarnos sin perder calidad.",
  },
  {
    titulo: "Obsesión por la ejecución",
    desc: "Cada elemento del evento está pensado y controlado hasta el último detalle.",
  },
];

export default function Diferenciadores() {
  return (
    <section id="diferenciadores" className="bg-[#231F20] py-24 px-6 relative overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Por qué LaPizarra
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-xl">
            La diferencia está en cómo se produce cada detalle.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group">
              <div className="w-8 h-0.5 bg-[#EC008C] mb-6" />
              <h3 className="text-white font-black text-base mb-3">{item.titulo}</h3>
              <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
