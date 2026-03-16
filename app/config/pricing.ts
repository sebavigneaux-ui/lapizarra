import type { TipoEventoConfig, RangoAsistentes, RegionId, DiasId } from "../types/calculator";

export const TIPOS_EVENTO: TipoEventoConfig[] = [
  {
    id: "corporativo",
    label: "Evento corporativo",
    labelCorto: "tu evento corporativo",
    desc: "Convención, kick off, aniversario o celebración institucional.",
    icon: "01",
    multiplicador: 1.0,
    bloquesRecomendados: ["venue", "catering", "tecnica", "iluminacion", "fotografia", "staff"],
  },
  {
    id: "lanzamiento",
    label: "Lanzamiento de producto",
    labelCorto: "tu lanzamiento",
    desc: "Presentación que genera anticipación, cobertura y recordación.",
    icon: "02",
    multiplicador: 1.25,
    bloquesRecomendados: ["venue", "tecnica", "iluminacion", "decoracion", "video", "fotografia"],
  },
  {
    id: "btl",
    label: "Activación BTL",
    labelCorto: "tu activación",
    desc: "Experiencia en punto de venta, espacio público o evento masivo.",
    icon: "03",
    multiplicador: 0.85,
    bloquesRecomendados: ["activacion", "branding_fisico", "staff", "anfitrionas", "fotografia"],
  },
  {
    id: "interno",
    label: "Experiencia interna",
    labelCorto: "tu experiencia interna",
    desc: "Evento que construye cultura, motiva equipos y refuerza pertenencia.",
    icon: "04",
    multiplicador: 0.8,
    bloquesRecomendados: ["venue", "catering", "tecnica", "staff"],
  },
  {
    id: "stand",
    label: "Stand o espacio de marca",
    labelCorto: "tu stand",
    desc: "Diseño y producción para ferias, exposiciones y activaciones.",
    icon: "05",
    multiplicador: 0.9,
    bloquesRecomendados: ["construccion_stand", "activacion", "branding_fisico", "iluminacion", "staff", "anfitrionas"],
  },
  {
    id: "audiovisual",
    label: "Producción audiovisual",
    labelCorto: "tu producción",
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

export const FEE_PRODUCCION: [number, number] = [0.17, 0.20];

export const DIAS_OPCIONES: { id: DiasId; label: string }[] = [
  { id: "1", label: "1 día" },
  { id: "2", label: "2 días" },
  { id: "3", label: "3 días" },
  { id: "4", label: "4 días" },
  { id: "5", label: "5 días" },
  { id: "otro", label: "Otro" },
];

export const DIAS_PROMEDIO: Record<DiasId, number> = {
  "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "otro": 7,
};

export const LABELS_DIAS: Record<DiasId, string> = {
  "1": "1 día", "2": "2 días", "3": "3 días", "4": "4 días", "5": "5 días", "otro": "+5 días",
};

export interface RegionConfig {
  id: RegionId;
  label: string;
  multiplicador: number;
  nota: string;
}

export const REGIONES: RegionConfig[] = [
  {
    id: "rm",
    label: "Región Metropolitana",
    multiplicador: 1.00,
    nota: "Mayor ecosistema de proveedores.",
  },
  {
    id: "iv",
    label: "IV Región",
    multiplicador: 1.15,
    nota: "Traslado de equipo y proveedores locales limitados.",
  },
  {
    id: "v",
    label: "V Región",
    multiplicador: 1.08,
    nota: "Traslado de equipo y proveedores locales limitados.",
  },
  {
    id: "viii",
    label: "VIII Región",
    multiplicador: 1.15,
    nota: "Flete largo y menor oferta técnica especializada.",
  },
  {
    id: "ix",
    label: "IX Región",
    multiplicador: 1.20,
    nota: "Logística compleja y pocos proveedores premium.",
  },
  {
    id: "x",
    label: "X Región",
    multiplicador: 1.25,
    nota: "Mayor distancia y costo de traslado significativo.",
  },
];
