import type { BloqueId, RangoAsistentes, TipoEvento, Resultado } from "../../types/calculator";
import { BLOQUES_BY_ID } from "../../config/bloques";
import { TIPOS_EVENTO, PROMEDIO_ASISTENTES, FEE_PRODUCCION } from "../../config/pricing";

export function calcular(
  tipoEvento: TipoEvento,
  asistentes: RangoAsistentes,
  bloquesSeleccionados: BloqueId[]
): Resultado {
  const tipo = TIPOS_EVENTO.find((t) => t.id === tipoEvento)!;
  const personas = PROMEDIO_ASISTENTES[asistentes];
  const mult = tipo.multiplicador;

  const desglose: Resultado["desglose"] = [];
  let subtotalMin = 0;
  let subtotalMax = 0;

  for (const id of bloquesSeleccionados) {
    const bloque = BLOQUES_BY_ID[id];
    if (!bloque) continue;

    const min =
      (bloque.costoFijo[0] + bloque.costoPorPersona[0] * personas) * mult;
    const max =
      (bloque.costoFijo[1] + bloque.costoPorPersona[1] * personas) * mult;

    desglose.push({ label: bloque.label, monto: [min, max] });
    subtotalMin += min;
    subtotalMax += max;
  }

  // Fee de producción y gestión LaPizarra
  const feeMin = subtotalMin * FEE_PRODUCCION[0];
  const feeMax = subtotalMax * FEE_PRODUCCION[1];
  desglose.push({ label: "Producción y gestión", monto: [feeMin, feeMax] });

  const totalMin = Math.round((subtotalMin + feeMin) / 500_000) * 500_000;
  const totalMax = Math.round((subtotalMax + feeMax) / 500_000) * 500_000;

  const recomendaciones = generarRecomendaciones(
    tipoEvento,
    bloquesSeleccionados,
    tipo.bloquesRecomendados
  );

  return {
    total: [totalMin, totalMax],
    desglose,
    recomendaciones,
  };
}

function generarRecomendaciones(
  tipo: TipoEvento,
  seleccionados: BloqueId[],
  recomendados: BloqueId[]
): string[] {
  const faltantes = recomendados.filter((id) => !seleccionados.includes(id));
  const msgs: string[] = [];

  if (faltantes.includes("av_basico") && !seleccionados.includes("av_premium")) {
    msgs.push("Para este tipo de evento recomendamos incluir al menos AV básico.");
  }
  if (faltantes.includes("fotografia")) {
    msgs.push("El registro fotográfico es clave para aprovechar el evento en comunicaciones.");
  }
  if (tipo === "lanzamiento" && !seleccionados.includes("video")) {
    msgs.push("Un video de resumen potencia el alcance del lanzamiento en redes y medios.");
  }
  if (tipo === "corporativo" && !seleccionados.includes("catering")) {
    msgs.push("El catering mejora significativamente la experiencia en eventos corporativos.");
  }
  if (seleccionados.length < 3) {
    msgs.push("Considera agregar más bloques para tener una estimación más completa.");
  }

  return msgs.slice(0, 2);
}
