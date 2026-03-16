"use client";
import { useState } from "react";
import type { CalculadoraState, BloqueId, TipoEvento, RangoAsistentes } from "../types/calculator";

const initial: CalculadoraState = {
  step: 1,
  tipoEvento: null,
  asistentes: null,
  bloquesSeleccionados: [],
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

  const toggleBloque = (id: BloqueId) =>
    setState((s) => ({
      ...s,
      bloquesSeleccionados: s.bloquesSeleccionados.includes(id)
        ? s.bloquesSeleccionados.filter((b) => b !== id)
        : [...s.bloquesSeleccionados, id],
    }));

  const goTo = (step: CalculadoraState["step"]) =>
    setState((s) => ({ ...s, step }));

  const next = () =>
    setState((s) => ({ ...s, step: Math.min(4, s.step + 1) as CalculadoraState["step"] }));

  const back = () =>
    setState((s) => ({ ...s, step: Math.max(1, s.step - 1) as CalculadoraState["step"] }));

  const setLead = (field: "nombre" | "empresa" | "correo" | "mensaje", value: string) =>
    setState((s) => ({ ...s, [field]: value }));

  const reset = () => setState(initial);

  const canAdvanceStep1 = state.tipoEvento !== null && state.asistentes !== null;
  const canAdvanceStep2 = state.bloquesSeleccionados.length >= 1;

  return {
    state,
    setTipo,
    setAsistentes,
    toggleBloque,
    goTo,
    next,
    back,
    setLead,
    reset,
    canAdvanceStep1,
    canAdvanceStep2,
  };
}
