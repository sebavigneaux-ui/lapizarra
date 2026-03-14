const clientes = [
  "Samsung", "Nike", "Walmart", "The North Face", "Marriott",
  "Stellantis", "KIA", "PUIG", "Linde", "Metso Outotec",
  "SQM", "Parque Arauco", "Ripley", "Alsea", "Kaufmann",
  "Polpaico", "CChC", "Universidad de los Andes",
  "Orsan Seguros", "Cool Carriers", "Novo Nordisk",
];

export default function ClientesDestacados() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Stat + título */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16 pb-16 border-b border-[#231F20]/10">
          <div className="flex-shrink-0">
            <p className="text-[#EC008C] text-[6rem] md:text-[9rem] font-black leading-none tracking-tighter">
              21<span className="text-[#EC008C]">+</span>
            </p>
          </div>
          <div className="md:pb-4">
            <p className="text-[#231F20] text-2xl md:text-3xl font-black leading-tight max-w-sm">
              marcas que han confiado en LaPizarra para sus eventos.
            </p>
          </div>
        </div>

        {/* Lista de clientes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
          {clientes.map((nombre, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <span className="w-1 h-4 bg-[#EC008C] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[#231F20] text-lg font-medium group-hover:text-[#EC008C] transition-colors">
                {nombre}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
