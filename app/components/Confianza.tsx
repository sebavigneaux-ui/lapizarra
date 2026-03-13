const items = [
  "Atención directa del equipo senior",
  "Experiencia con grandes marcas",
  "Proyectos pequeños muy cuidados y producciones de gran escala",
  "Red sólida de proveedores",
  "Alto estándar visual y operativo",
];

export default function Confianza() {
  return (
    <section className="bg-white py-20 px-6 border-b border-[#231F20]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-start gap-4">
              <span className="text-[#EC008C] font-black text-3xl leading-none">✓</span>
              <span className="text-[#231F20] text-base font-black leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
