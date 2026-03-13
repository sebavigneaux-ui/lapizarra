const clientes = [
  "Samsung", "Nike", "Walmart", "The North Face", "Marriott",
  "Stellantis", "KIA", "PUIG", "Linde", "Metso Outotec",
  "SQM", "Parque Arauco", "Ripley", "Alsea", "Kaufmann",
  "Polpaico", "CChC", "Universidad de los Andes",
  "Clínica Universidad de los Andes", "Orsan", "Cool Carriers", "Novo Nordisk",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #231F20, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #231F20, transparent)" }} />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="marquee-track">
        {[...clientes, ...clientes].map((nombre, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="text-white/60 text-sm font-medium px-6 hover:text-white transition-colors">
              {nombre}
            </span>
            <span className="text-[#EC008C] text-xs select-none">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
