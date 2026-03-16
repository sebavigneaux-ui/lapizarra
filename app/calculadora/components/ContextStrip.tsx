"use client";

const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

function formatFecha(f: string): string {
  const [anio, mes] = f.split("-");
  return `${MESES[parseInt(mes) - 1]} ${anio}`;
}

interface Props {
  tipoLabel: string;
  asistentesLabel: string;
  regionLabel: string;
  fechaEvento: string | null;
}

export default function ContextStrip({ tipoLabel, asistentesLabel, regionLabel, fechaEvento }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <span className="px-3 py-1.5 rounded-full bg-[#EC008C]/20 border border-[#EC008C]/30 text-[#EC008C] text-xs font-bold">
        {tipoLabel}
      </span>
      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/60 text-xs font-bold">
        {asistentesLabel} asistentes
      </span>
      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/60 text-xs font-bold">
        {regionLabel}
      </span>
      {fechaEvento && (
        <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/60 text-xs font-bold">
          {formatFecha(fechaEvento)}
        </span>
      )}
    </div>
  );
}
