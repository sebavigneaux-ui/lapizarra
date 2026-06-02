"use client";
import { useEffect } from "react";
import Link from "next/link";

interface Props {
  nombre: string;
  tipoLabel: string;
  asistentesLabel: string;
  regionLabel: string;
  totalMin: number;
  totalMax: number;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function StepGracias({ nombre, tipoLabel, asistentesLabel, regionLabel, totalMin, totalMax }: Props) {
  useEffect(() => {
    window.history.pushState({}, "", "/calculadora/thank-you");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "calculadora_completada",
      tipo_evento: tipoLabel,
      asistentes: asistentesLabel,
      region: regionLabel,
      total_min: totalMin,
      total_max: totalMax,
    });
  }, []);

  const nombreCorto = nombre.split(" ")[0] || "tu evento";

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-400 py-8 md:py-16 text-center">
      {/* Icono check */}
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/30 flex items-center justify-center">
          <svg className="w-9 h-9 text-[#EC008C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-4">
        ¡Listo!
      </p>
      <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4 leading-tight">
        Nos vemos pronto{nombre ? `, ${nombreCorto}` : ""}.
      </h2>
      <p className="text-white/50 text-lg max-w-md mx-auto leading-relaxed mb-12">
        Ya abrimos WhatsApp para que puedas contarnos los detalles de tu evento. Te responderemos en menos de 24 horas.
      </p>

      {/* CTA secundario */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://wa.me/56958419326?text=Hola%2C%20acabo%20de%20simular%20mi%20evento%20en%20la%20calculadora%20de%20LaPizarra%20y%20me%20gustar%C3%ADa%20que%20me%20contactaran"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-full font-black text-base bg-[#EC008C] text-white hover:bg-[#EC008C]/90 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Abrir WhatsApp
        </a>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-4 rounded-full font-black text-sm border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
