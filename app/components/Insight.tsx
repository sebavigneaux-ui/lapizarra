const problemas = [
  "Propuestas creativas que terminan siendo más de lo mismo",
  "Ideas que no se pueden ejecutar en la práctica",
  "Proveedores que prometen mucho pero fallan en la ejecución",
  "Tiempos de respuesta lentos y presupuestos poco claros",
  "Desorden operativo y detalles que nadie controla",
  "Eventos que funcionan, pero no representan bien a la marca",
];

export default function Insight() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda */}
          <div>
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
              El problema del mercado
            </p>
            <h2 className="text-[#231F20] text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Cuando un evento importa, no puedes darte el lujo de que salga "más o menos bien".
            </h2>
          </div>

          {/* Columna derecha */}
          <div>
            <p className="text-[#231F20]/70 text-base leading-relaxed mb-8">
              Los equipos de marketing, comunicaciones y cultura organizacional suelen enfrentarse al mismo problema cuando buscan una productora:
            </p>
            <ul className="space-y-4">
              {problemas.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#EC008C] font-black text-lg leading-none mt-0.5">—</span>
                  <span className="text-[#231F20]/80 text-base leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[#231F20] font-bold text-base">
              Porque un evento no solo tiene que funcionar. Tiene que representar bien a la empresa que está detrás.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
