import Blobs from "./Blobs";

const pasos = [
  {
    num: "01",
    titulo: "Entendemos el objetivo",
    desc: "Partimos por comprender el contexto, la audiencia y el resultado esperado.",
  },
  {
    num: "02",
    titulo: "Diseñamos la experiencia",
    desc: "Construimos una propuesta creativa alineada con la marca y sus objetivos.",
  },
  {
    num: "03",
    titulo: "Aterrizamos producción y presupuesto",
    desc: "Definimos cada elemento necesario para ejecutar el proyecto con precisión.",
  },
  {
    num: "04",
    titulo: "Ejecutamos con obsesión por el detalle",
    desc: "Producción, coordinación, montaje y control de cada componente.",
  },
  {
    num: "05",
    titulo: "Acompañamos hasta el cierre",
    desc: "Nos aseguramos de que cada momento del evento funcione como fue pensado.",
  },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-[#231F20] pt-24 pb-24 px-6 relative overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Cómo trabajamos
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-xl">
            Un proceso claro para producir experiencias impecables.
          </h2>
        </div>

        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10" />

          <div className="grid md:grid-cols-5 gap-8">
            {pasos.map((paso) => (
              <div key={paso.num} className="relative">
                <div className="bg-[#EC008C] w-12 h-12 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-white font-black text-sm">{paso.num}</span>
                </div>
                <h3 className="text-white font-black text-base mb-3">{paso.titulo}</h3>
                <p className="text-white/50 text-base leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
