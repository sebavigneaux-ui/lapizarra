import type { RangoAsistentes, TipoEvento, Resultado, SeleccionBloques } from "../../types/calculator";
import { BLOQUES_BY_ID } from "../../config/bloques";
import { TIPOS_EVENTO, PROMEDIO_ASISTENTES, FEE_PRODUCCION } from "../../config/pricing";

export function calcular(
  tipoEvento: TipoEvento,
  asistentes: RangoAsistentes,
  seleccionBloques: SeleccionBloques
): Resultado {
  const tipo = TIPOS_EVENTO.find((t) => t.id === tipoEvento)!;
  const personas = PROMEDIO_ASISTENTES[asistentes];
  const mult = tipo.multiplicador;

  const desglose: Resultado["desglose"] = [];
  let subtotalMin = 0;
  let subtotalMax = 0;

  for (const [bloqueId, nivelId] of Object.entries(seleccionBloques)) {
    if (!nivelId) continue;
    const bloque = BLOQUES_BY_ID[bloqueId];
    if (!bloque) continue;

    const nivel = bloque.niveles.find((n) => n.id === nivelId);
    if (!nivel) continue;

    const min = (nivel.costoFijo[0] + nivel.costoPorPersona[0] * personas) * mult;
    const max = (nivel.costoFijo[1] + nivel.costoPorPersona[1] * personas) * mult;

    const nivelLabel: Record<string, string> = {
      basico: "Básico",
      medio: "Premium",
      top: "Top",
    };

    desglose.push({
      label: `${bloque.label} · ${nivelLabel[nivelId] ?? nivelId}`,
      monto: [min, max],
    });
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
    Object.keys(seleccionBloques),
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
  seleccionados: string[],
  recomendados: string[]
): string[] {
  const faltantes = recomendados.filter((id) => !seleccionados.includes(id));
  const msgs: string[] = [];

  if (faltantes.includes("tecnica")) {
    msgs.push("Para este tipo de evento recomendamos incluir al menos técnica audiovisual básica.");
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
  if (seleccionados.length < 2) {
    msgs.push("Considera agregar más bloques para tener una estimación más completa.");
  }

  return msgs.slice(0, 2);
}
