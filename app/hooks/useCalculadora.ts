"use client";
import { useState } from "react";
import type { CalculadoraState, NivelId, TipoEvento, RangoAsistentes, RegionId, DiasId } from "../types/calculator";

const initial: CalculadoraState = {
  step: 1,
  tipoEvento: null,
  asistentes: null,
  region: null,
  diasEvento: null,
  fechaEvento: null,
  seleccionBloques: {},
  nombre: "",
  empresa: "",
  correo: "",
  mensaje: "",
};

export function useCalculadora() {
  const [state, setState] = useState<CalculadoraState>(initial);

  const setTipo = (tipoEvento: TipoEvento) =>
    setState((s) => ({ ...s, tipoEvento }));

  const setAsistentes = (asistentes: RangoAsistentes) =>
    setState((s) => ({ ...s, asistentes }));

  const setRegion = (region: RegionId) =>
    setState((s) => ({ ...s, region }));

  const setDiasEvento = (diasEvento: DiasId) =>
    setState((s) => ({ ...s, diasEvento }));

  const setFechaEvento = (fechaEvento: string | null) =>
    setState((s) => ({ ...s, fechaEvento }));

  const toggleNivel = (bloqueId: string, nivelId: NivelId) =>
    setState((s) => {
      const actual = s.seleccionBloques[bloqueId];
      const nueva = { ...s.seleccionBloques };
      if (actual === nivelId) {
        delete nueva[bloqueId];
      } else {
        nueva[bloqueId] = nivelId;
      }
      return { ...s, seleccionBloques: nueva };
    });

  const goTo = (step: CalculadoraState["step"]) =>
    setState((s) => ({ ...s, step }));

  const next = () =>
    setState((s) => ({ ...s, step: Math.min(5, s.step + 1) as CalculadoraState["step"] }));

  const back = () =>
    setState((s) => ({ ...s, step: Math.max(1, s.step - 1) as CalculadoraState["step"] }));

  const setLead = (field: "nombre" | "empresa" | "correo" | "mensaje", value: string) =>
    setState((s) => ({ ...s, [field]: value }));

  const reset = () => setState(initial);

  const canAdvanceStep1 = state.tipoEvento !== null && state.asistentes !== null && state.region !== null && state.diasEvento !== null;
  const canAdvanceStep2 = true; // puede avanzar aunque no haya seleccionado en paso 2
  const canAdvanceStep3 = Object.keys(state.seleccionBloques).length >= 1;

  return {
    state,
    setTipo,
    setAsistentes,
    setRegion,
    setDiasEvento,
    setFechaEvento,
    toggleNivel,
    goTo,
    next,
    back,
    setLead,
    reset,
    canAdvanceStep1,
    canAdvanceStep2,
    canAdvanceStep3,
  };
}
