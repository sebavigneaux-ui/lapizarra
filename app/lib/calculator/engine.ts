import type { RangoAsistentes, TipoEvento, Resultado, Recomendacion, SeleccionBloques, RegionId, NivelId, DiasId } from "../../types/calculator";
import { BLOQUES_BY_ID } from "../../config/bloques";
import { TIPOS_EVENTO, PROMEDIO_ASISTENTES, FEE_PRODUCCION, REGIONES, DIAS_PROMEDIO } from "../../config/pricing";

export function calcular(
  tipoEvento: TipoEvento,
  asistentes: RangoAsistentes,
  seleccionBloques: SeleccionBloques,
  region: RegionId = "rm",
  diasEvento: DiasId = "1"
): Resultado {
  const tipo = TIPOS_EVENTO.find((t) => t.id === tipoEvento)!;
  const regionConfig = REGIONES.find((r) => r.id === region)!;
  const personas = PROMEDIO_ASISTENTES[asistentes];
  const dias = DIAS_PROMEDIO[diasEvento];
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

    const diasMult = 1 + (dias - 1) * bloque.diasFactor;
    const min = (nivel.costoFijo[0] + nivel.costoPorPersona[0] * personas) * mult * diasMult;
    const max = (nivel.costoFijo[1] + nivel.costoPorPersona[1] * personas) * mult * diasMult;

    desglose.push({
      label: bloque.label,
      monto: [min, max],
      nivelId,
      bloqueId,
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

const NIVEL_SIGUIENTE: Record<string, NivelId> = { basico: "medio", medio: "top" };

// Cross-sell: [condición: tienes A, no tienes B] → recomendación
type CrossSell = { tiene: string; noTiene: string; nivelSugerido: NivelId; tipos?: TipoEvento[]; msg: string };

const CROSS_SELLS: CrossSell[] = [
  // Espacio → complementos
  { tiene: "venue",              noTiene: "decoracion",       nivelSugerido: "basico", msg: "Decoración y Ambientación en el venue refuerza la identidad de marca y genera cohesión visual desde la entrada." },
  { tiene: "venue",              noTiene: "catering",         nivelSugerido: "basico", msg: "Sin catering el venue queda desaprovechado — la gastronomía prolonga la estadía y mejora la valoración del evento." },
  { tiene: "construccion_stand", noTiene: "activacion",       nivelSugerido: "basico", msg: "Una activación de marca en el stand convierte visitantes en leads y multiplica el retorno de la inversión." },
  // Técnica ↔ iluminación
  { tiene: "tecnica",            noTiene: "iluminacion",      nivelSugerido: "basico", msg: "La iluminación escénica es el complemento directo de la técnica: juntos transforman el espacio en una experiencia visual completa." },
  { tiene: "iluminacion",        noTiene: "tecnica",          nivelSugerido: "basico", msg: "La técnica audiovisual es la base que potencia cualquier diseño de iluminación — sin ella, el impacto visual pierde soporte." },
  // Contenido — foto/video se complementan
  { tiene: "fotografia",         noTiene: "video",            nivelSugerido: "basico", msg: "Sumar video corporativo a la cobertura fotográfica multiplica las piezas de comunicación y el alcance post-evento." },
  { tiene: "video",              noTiene: "fotografia",       nivelSugerido: "basico", msg: "La fotografía editorial complementa el video: te da material inmediato para redes, prensa y comunicación el mismo día." },
  // Streaming → contenido
  { tiene: "streaming",          noTiene: "video",            nivelSugerido: "basico", msg: "Un video de producción complementa el streaming y te deja un activo de comunicación de alto valor para después del evento." },
  { tiene: "streaming",          noTiene: "fotografia",       nivelSugerido: "basico", msg: "El registro fotográfico editorial junto al streaming asegura cobertura completa en todos los canales." },
  // Logística
  { tiene: "catering",           noTiene: "staff",            nivelSugerido: "basico", msg: "El staff de coordinación es clave para que el catering fluya sin contratiempos y los asistentes tengan atención de calidad." },
  { tiene: "staff",              noTiene: "anfitrionas",      nivelSugerido: "basico", msg: "Las anfitrionas añaden protocolo y elegancia al staff: una combinación que marca la diferencia en eventos de alto perfil." },
  { tiene: "venue",              noTiene: "transporte",       nivelSugerido: "basico", msg: "Un servicio de transporte coordinado garantiza puntualidad y proyecta cuidado hacia los asistentes desde el primer momento." },
  // Por tipo de evento
  { tiene: "tecnica",            noTiene: "branding_fisico",  nivelSugerido: "basico", tipos: ["corporativo","lanzamiento","interno"], msg: "El branding físico (credenciales, señalética y material gráfico) ancla la experiencia técnica al mensaje de marca." },
  { tiene: "venue",              noTiene: "branding_fisico",  nivelSugerido: "basico", tipos: ["corporativo","interno"],               msg: "Credenciales y señalética con diseño editorial convierten el venue en un espacio de marca coherente de principio a fin." },
  { tiene: "construccion_stand", noTiene: "branding_fisico",  nivelSugerido: "basico", tipos: ["stand","btl"],                        msg: "El branding físico —gráficas y señalética— es lo que hace que el stand cuente una historia de marca consistente." },
];

function generarRecomendaciones(tipo: TipoEvento, seleccion: SeleccionBloques): Recomendacion[] {
  const upgrades: Recomendacion[] = [];
  const crossSells: Recomendacion[] = [];

  // — Upgrade (1 máximo, el más impactante) —
  const prioridadUpgrade = ["venue", "tecnica", "catering", "iluminacion", "video", "fotografia", "streaming", "construccion_stand", "decoracion"];
  for (const bloqueId of prioridadUpgrade) {
    if (upgrades.length >= 1) break;
    const nivelActual = seleccion[bloqueId];
    if (!nivelActual || nivelActual === "top") continue;
    if (nivelActual !== "basico" && nivelActual !== "medio") continue;
    const msg = UPGRADE_MSGS[bloqueId]?.[nivelActual];
    if (msg) upgrades.push({ msg, bloqueId, nivelId: NIVEL_SIGUIENTE[nivelActual] });
  }

  // — Cross-sells (hasta 2) —
  for (const cs of CROSS_SELLS) {
    if (crossSells.length >= 2) break;
    if (cs.tipos && !cs.tipos.includes(tipo)) continue;
    if (seleccion[cs.tiene] && !seleccion[cs.noTiene]) {
      crossSells.push({ msg: cs.msg, bloqueId: cs.noTiene, nivelId: cs.nivelSugerido });
    }
  }

  const resultado = [...upgrades, ...crossSells].slice(0, 3);

  if (resultado.length === 0) {
    resultado.push({ msg: "El registro fotográfico profesional es el activo de comunicación más rentable que puedes añadir al evento.", bloqueId: "fotografia", nivelId: "basico" });
  }

  return resultado;
}
