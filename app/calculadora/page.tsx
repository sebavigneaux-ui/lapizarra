"use client";
import Link from "next/link";
import Image from "next/image";
import Blobs from "../components/Blobs";
import Stepper from "./components/Stepper";
import StepContexto from "./components/StepContexto";
import StepBloques from "./components/StepBloques";
import StepDetalle from "./components/StepDetalle";
import StepResultado from "./components/StepResultado";
import StepLead from "./components/StepLead";
import { useEffect } from "react";
import { useCalculadora } from "../hooks/useCalculadora";
import { calcular } from "../lib/calculator/engine";
import { TIPOS_EVENTO, LABELS_ASISTENTES, REGIONES } from "../config/pricing";

export default function CalculadoraPage() {
  const {
    state,
    setTipo,
    setAsistentes,
    setRegion,
    setFechaEvento,
    toggleNivel,
    next,
    back,
    setLead,
    canAdvanceStep1,
    canAdvanceStep2,
    canAdvanceStep3,
  } = useCalculadora();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state.step]);

  const tipoConfig = state.tipoEvento
    ? TIPOS_EVENTO.find((t) => t.id === state.tipoEvento)
    : null;

  const multiplicador = tipoConfig?.multiplicador ?? 1;
  const bloquesRecomendados = tipoConfig?.bloquesRecomendados ?? [];
  const labelCortoEvento = tipoConfig?.labelCorto ?? "tu evento";

  const resultado =
    state.step >= 4 && state.tipoEvento && state.asistentes && state.region
      ? calcular(state.tipoEvento, state.asistentes, state.seleccionBloques, state.region)
      : null;

  return (
    <div className="min-h-screen bg-[#231F20] relative overflow-hidden">
      <Blobs />

      {/* Header */}
      <header className="relative z-20 border-b border-white/8">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-white/40 group-hover:text-white/70 text-sm font-bold transition-colors duration-200">
              Volver al sitio
            </span>
          </Link>
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo-blanco.png" alt="LaPizarra" width={120} height={48} className="object-contain" />
          </Link>
        </div>
      </header>

      {/* Contenido */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
        {state.step === 1 && (
          <div className="mb-16">
            <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-4">
              Calculadora de eventos
            </p>
            <h1 className="text-white font-black leading-none tracking-tighter">
              <span className="block text-4xl md:text-6xl lg:text-7xl">Calcula tu evento</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl text-white/30">en LaPizarra.</span>
            </h1>
            <p className="text-white/40 text-lg mt-6 max-w-xl leading-relaxed">
              Responde 2 preguntas, elige los bloques de tu evento y obtén una estimación
              referencial en menos de 2 minutos.
            </p>
          </div>
        )}

        <div className="mb-10">
          <Stepper step={state.step} />
        </div>

        <div className="max-w-3xl">
          {state.step === 1 && (
            <StepContexto
              tipoEvento={state.tipoEvento}
              asistentes={state.asistentes}
              region={state.region}
              fechaEvento={state.fechaEvento}
              onTipo={setTipo}
              onAsistentes={setAsistentes}
              onRegion={setRegion}
              onFecha={setFechaEvento}
              onNext={next}
              canNext={canAdvanceStep1}
            />
          )}

          {state.step === 2 && state.asistentes && (
            <StepBloques
              seleccion={state.seleccionBloques}
              asistentes={state.asistentes}
              multiplicador={multiplicador}
              bloquesRecomendados={bloquesRecomendados}
              labelCortoEvento={labelCortoEvento}
              onToggle={toggleNivel}
              onNext={next}
              onBack={back}
            />
          )}

          {state.step === 3 && state.asistentes && (
            <StepDetalle
              seleccion={state.seleccionBloques}
              asistentes={state.asistentes}
              multiplicador={multiplicador}
              bloquesRecomendados={bloquesRecomendados}
              labelCortoEvento={labelCortoEvento}
              onToggle={toggleNivel}
              onNext={next}
              onBack={back}
              canNext={canAdvanceStep3}
            />
          )}

          {state.step === 4 && resultado && state.tipoEvento && state.asistentes && state.region && (
            <StepResultado
              resultado={resultado}
              tipoLabel={TIPOS_EVENTO.find((t) => t.id === state.tipoEvento)?.label ?? ""}
              asistentesLabel={LABELS_ASISTENTES[state.asistentes!]}
              regionLabel={REGIONES.find((r) => r.id === state.region)?.label ?? ""}
              onNext={next}
              onBack={back}
            />
          )}

          {state.step === 5 && resultado && state.tipoEvento && state.asistentes && state.region && (
            <StepLead
              nombre={state.nombre}
              empresa={state.empresa}
              correo={state.correo}
              mensaje={state.mensaje}
              tipoEvento={state.tipoEvento}
              asistentes={state.asistentes}
              region={state.region}
              resultado={resultado}
              onChange={setLead}
              onBack={back}
            />
          )}
        </div>
      </main>
    </div>
  );
}
