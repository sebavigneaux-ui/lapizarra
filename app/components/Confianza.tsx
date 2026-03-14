import Blobs from "./Blobs";

const items = [
  "Atención directa del equipo senior",
  "Experiencia con grandes marcas",
  "Proyectos pequeños muy cuidados y producciones de gran escala",
  "Red sólida de proveedores",
  "Alto estándar visual y operativo",
];

export default function Confianza() {
  return (
    <section className="bg-[#231F20] py-20 px-6 relative overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#EC008C] font-black text-3xl leading-none flex-shrink-0">✓</span>
              <span className="text-white text-base leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
