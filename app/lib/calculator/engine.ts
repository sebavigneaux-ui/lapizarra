import type { RangoAsistentes, TipoEvento, Resultado, SeleccionBloques, RegionId } from "../../types/calculator";
import { BLOQUES_BY_ID } from "../../config/bloques";
import { TIPOS_EVENTO, PROMEDIO_ASISTENTES, FEE_PRODUCCION, REGIONES } from "../../config/pricing";

export function calcular(
  tipoEvento: TipoEvento,
  asistentes: RangoAsistentes,
  seleccionBloques: SeleccionBloques,
  region: RegionId = "rm"
): Resultado {
  const tipo = TIPOS_EVENTO.find((t) => t.id === tipoEvento)!;
  const regionConfig = REGIONES.find((r) => r.id === region)!;
  const personas = PROMEDIO_ASISTENTES[asistentes];
  const mult = tipo.multiplicador * regionConfig.multiplicador;

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

    desglose.push({
      label: bloque.label,
      monto: [min, max],
      nivelId,
    });
    subtotalMin += min;
    subtotalMax += max;
  }

  const feeMin = subtotalMin * FEE_PRODUCCION[0];
  const feeMax = subtotalMax * FEE_PRODUCCION[1];
  desglose.push({ label: "Producción y gestión", monto: [feeMin, feeMax] });

  const totalMin = Math.round((subtotalMin + feeMin) / 250_000) * 250_000;
  const totalMax = Math.round((subtotalMax + feeMax) / 250_000) * 250_000;

  const recomendaciones = generarRecomendaciones(tipoEvento, seleccionBloques);

  return { total: [totalMin, totalMax], desglose, recomendaciones };
}

// Mensajes de upgrade por bloque y nivel actual
const UPGRADE_MSGS: Record<string, { basico?: string; medio?: string }> = {
  venue: {
    basico: "Subir el Venue a Medio te da un hotel de categoría que eleva la percepción de marca ante los asistentes.",
    medio:  "Un Venue Premium —espacio exclusivo con montaje completo— es la decisión que más impacta en eventos de alto perfil.",
  },
  catering: {
    basico: "Pasar a Catering Medio (cóctel con bocados) transforma la experiencia gastronómica y prolonga la estadía.",
    medio:  "Una cena de gala con menú y maridaje convierte el evento en una experiencia memorable que los asistentes recuerdan.",
  },
  tecnica: {
    basico: "Con Técnica Media sumas pantallas múltiples y audio profesional: el contenido llega con mucho más impacto.",
    medio:  "Un LED wall con operación multicámara en vivo es el estándar en eventos corporativos de primer nivel.",
  },
  iluminacion: {
    basico: "Iluminación escénica con efectos transforma el ambiente y refuerza la identidad de marca en sala.",
    medio:  "Diseño de luz con gobos e iluminación dinámica convierte el espacio en una experiencia visual completa.",
  },
  streaming: {
    basico: "Streaming profesional multicámara con operador amplía tu alcance y protege la imagen de marca en digital.",
    medio:  "Una producción broadcast con gráficos en vivo posiciona tu evento al nivel de las transmisiones premium.",
  },
  fotografia: {
    basico: "Dos fotógrafos con edición avanzada multiplican el material de comunicación post-evento.",
    medio:  "Cobertura editorial completa con entrega express te permite publicar contenido de alto impacto el mismo día.",
  },
  video: {
    basico: "Un video con motion graphics y locución convierte el resumen del evento en una pieza de comunicación real.",
    medio:  "Producción cinematográfica con color grading es la diferencia entre un video corporativo y una pieza de marca.",
  },
  construccion_stand: {
    basico: "Un stand con diseño personalizado y materiales de calidad proyecta una imagen de marca muy superior.",
    medio:  "Carpintería a medida con producción completa hace que tu stand destaque frente a la competencia en feria.",
  },
  decoracion: {
    basico: "Montaje temático con elementos de marca genera cohesión visual y una experiencia de ingreso memorable.",
    medio:  "Un diseño integral de espacio con producción escénica convierte el venue en una extensión de tu marca.",
  },
};

function generarRecomendaciones(tipo: TipoEvento, seleccion: SeleccionBloques): string[] {
  const msgs: string[] = [];

  // Prioridad: bloques con upgrade disponible, del más impactante al menos
  const prioridad = ["venue", "tecnica", "catering", "iluminacion", "video", "fotografia", "streaming", "construccion_stand", "decoracion"];

  for (const bloqueId of prioridad) {
    if (msgs.length >= 2) break;
    const nivelActual = seleccion[bloqueId];
    if (!nivelActual) continue;
    const upgrade = UPGRADE_MSGS[bloqueId]?.[nivelActual as "basico" | "medio"];
    if (upgrade) msgs.push(upgrade);
  }

  // Si no hay 2 upgrades (todo en top o pocos bloques), sugerir incorporar servicios clave
  if (msgs.length < 2 && !seleccion["fotografia"]) {
    msgs.push("El registro fotográfico profesional es el activo de comunicación más rentable que puedes añadir al evento.");
  }
  if (msgs.length < 2 && !seleccion["tecnica"] && tipo !== "audiovisual") {
    msgs.push("La técnica audiovisual es la base de cualquier evento: asegura que tu contenido llegue con claridad y presencia.");
  }
  if (msgs.length < 2 && !seleccion["video"] && (tipo === "lanzamiento" || tipo === "corporativo")) {
    msgs.push("Un video de resumen potencia el alcance del evento en redes y sirve como activo de comunicación durante meses.");
  }

  return msgs.slice(0, 2);
}
