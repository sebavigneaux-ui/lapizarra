import type { TipoEventoConfig, RangoAsistentes } from "../types/calculator";

export const TIPOS_EVENTO: TipoEventoConfig[] = [
  {
    id: "corporativo",
    label: "Evento corporativo",
    desc: "Convención, kick off, aniversario o celebración institucional.",
    icon: "01",
    multiplicador: 1.0,
    bloquesRecomendados: ["venue", "catering", "tecnica", "iluminacion", "fotografia", "staff"],
  },
  {
    id: "lanzamiento",
    label: "Lanzamiento de producto",
    desc: "Presentación que genera anticipación, cobertura y recordación.",
    icon: "02",
    multiplicador: 1.25,
    bloquesRecomendados: ["venue", "tecnica", "iluminacion", "decoracion", "video", "fotografia"],
  },
  {
    id: "btl",
    label: "Activación BTL",
    desc: "Experiencia en punto de venta, espacio público o evento masivo.",
    icon: "03",
    multiplicador: 0.85,
    bloquesRecomendados: ["activacion", "branding_fisico", "staff", "anfitrionas", "fotografia"],
  },
  {
    id: "interno",
    label: "Experiencia interna",
    desc: "Evento que construye cultura, motiva equipos y refuerza pertenencia.",
    icon: "04",
    multiplicador: 0.8,
    bloquesRecomendados: ["venue", "catering", "tecnica", "staff"],
  },
  {
    id: "stand",
    label: "Stand o espacio de marca",
    desc: "Diseño y producción para ferias, exposiciones y activaciones.",
    icon: "05",
    multiplicador: 0.9,
    bloquesRecomendados: ["activacion", "branding_fisico", "iluminacion", "staff", "anfitrionas"],
  },
  {
    id: "audiovisual",
    label: "Producción audiovisual",
    desc: "Cobertura, video corporativo y contenido para amplificar el evento.",
    icon: "06",
    multiplicador: 0.7,
    bloquesRecomendados: ["video", "fotografia", "streaming", "tecnica"],
  },
];

export const PROMEDIO_ASISTENTES: Record<RangoAsistentes, number> = {
  menos50: 35,
  "50-100": 75,
  "100-200": 150,
  "200-400": 300,
  "400plus": 500,
};

export const LABELS_ASISTENTES: Record<RangoAsistentes, string> = {
  menos50: "Menos de 50",
  "50-100": "50 – 100",
  "100-200": "100 – 200",
  "200-400": "200 – 400",
  "400plus": "Más de 400",
};

// Honorarios de producción y gestión (% sobre el subtotal de bloques)
export const FEE_PRODUCCION: [number, number] = [0.17, 0.20];
