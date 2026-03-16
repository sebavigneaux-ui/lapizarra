import type { BloqueConfig, CategoriaConfig } from "../types/calculator";

export const CATEGORIAS: CategoriaConfig[] = [
  { id: "espacio",      label: "Espacio y decoración" },
  { id: "gastronomia",  label: "Gastronomía" },
  { id: "tecnica",      label: "Técnica" },
  { id: "iluminacion",  label: "Iluminación" },
  { id: "streaming",    label: "Streaming / Híbrido" },
  { id: "contenido",    label: "Contenido" },
  { id: "logistica",    label: "Logística" },
];

export const BLOQUES: BloqueConfig[] = [
  // ── ESPACIO ─────────────────────────────────────────────────────────────────
  {
    id: "venue",
    label: "Venue",
    categoria: "espacio",
    niveles: [
      {
        id: "basico",
        label: "Básico",
        desc: "Salón funcional, sin producción adicional.",
        costoFijo: [1_500_000, 3_500_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Premium",
        desc: "Hotel de categoría o venue de diseño.",
        costoFijo: [3_500_000, 8_000_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "Espacio exclusivo con montaje completo.",
        costoFijo: [8_000_000, 16_000_000],
        costoPorPersona: [0, 0],
      },
    ],
  },
  {
    id: "decoracion",
    label: "Decoración",
    categoria: "espacio",
    niveles: [
      {
        id: "basico",
        label: "Básica",
        desc: "Señalética y ambientación esencial de marca.",
        costoFijo: [300_000, 700_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Media",
        desc: "Montaje temático con elementos de marca.",
        costoFijo: [700_000, 1_800_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "Diseño integral de espacio y producción escénica.",
        costoFijo: [1_800_000, 4_500_000],
        costoPorPersona: [0, 0],
      },
    ],
  },
  {
    id: "activacion",
    label: "Activación de marca",
    categoria: "espacio",
    niveles: [
      {
        id: "basico",
        label: "Básica",
        desc: "Stand simple o dinámica de bajo costo.",
        costoFijo: [800_000, 2_000_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Media",
        desc: "Activación interactiva con tecnología básica.",
        costoFijo: [2_000_000, 5_000_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "Experiencia inmersiva con producción completa.",
        costoFijo: [5_000_000, 10_000_000],
        costoPorPersona: [0, 0],
      },
    ],
  },

  // ── GASTRONOMÍA ─────────────────────────────────────────────────────────────
  {
    id: "catering",
    label: "Catering",
    categoria: "gastronomia",
    niveles: [
      {
        id: "basico",
        label: "Coffee / Almuerzo",
        desc: "Coffee break o almuerzo ejecutivo.",
        costoFijo: [0, 0],
        costoPorPersona: [8_000, 15_000],
      },
      {
        id: "medio",
        label: "Cóctel",
        desc: "Cóctel con bocados de cocina.",
        costoFijo: [0, 0],
        costoPorPersona: [15_000, 30_000],
      },
      {
        id: "top",
        label: "Cena / Gala",
        desc: "Cena de gala con menú y maridaje.",
        costoFijo: [0, 0],
        costoPorPersona: [30_000, 60_000],
      },
    ],
  },

  // ── TÉCNICA ─────────────────────────────────────────────────────────────────
  {
    id: "tecnica",
    label: "Técnica audiovisual",
    categoria: "tecnica",
    niveles: [
      {
        id: "basico",
        label: "Básica",
        desc: "Sonido, micrófonos, proyector y pantalla.",
        costoFijo: [1_200_000, 2_800_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Premium",
        desc: "Pantallas múltiples, sistema de audio profesional y switcher.",
        costoFijo: [2_800_000, 7_000_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "LED wall, operación en vivo y sistema multicámara.",
        costoFijo: [7_000_000, 16_000_000],
        costoPorPersona: [0, 0],
      },
    ],
  },

  // ── ILUMINACIÓN ─────────────────────────────────────────────────────────────
  {
    id: "iluminacion",
    label: "Iluminación",
    categoria: "iluminacion",
    niveles: [
      {
        id: "basico",
        label: "Básica",
        desc: "Iluminación funcional de sala.",
        costoFijo: [400_000, 1_000_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Media",
        desc: "Iluminación escénica con efectos.",
        costoFijo: [1_000_000, 2_500_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "Diseño de luz completo: gobos, iluminación dinámica y color.",
        costoFijo: [2_500_000, 6_000_000],
        costoPorPersona: [0, 0],
      },
    ],
  },

  // ── STREAMING ───────────────────────────────────────────────────────────────
  {
    id: "streaming",
    label: "Streaming / Híbrido",
    categoria: "streaming",
    niveles: [
      {
        id: "basico",
        label: "Básico",
        desc: "1 cámara, transmisión a plataforma.",
        costoFijo: [700_000, 1_500_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Premium",
        desc: "Multicámara, streaming profesional con operador.",
        costoFijo: [1_500_000, 3_500_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "Producción broadcast completa con gráficos en vivo.",
        costoFijo: [3_500_000, 7_000_000],
        costoPorPersona: [0, 0],
      },
    ],
  },

  // ── CONTENIDO ───────────────────────────────────────────────────────────────
  {
    id: "fotografia",
    label: "Fotografía",
    categoria: "contenido",
    niveles: [
      {
        id: "basico",
        label: "Básica",
        desc: "1 fotógrafo, galería editada.",
        costoFijo: [350_000, 700_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Premium",
        desc: "2 fotógrafos, galería completa con edición avanzada.",
        costoFijo: [700_000, 1_300_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "Cobertura editorial completa y entrega express.",
        costoFijo: [1_300_000, 2_500_000],
        costoPorPersona: [0, 0],
      },
    ],
  },
  {
    id: "video",
    label: "Video corporativo",
    categoria: "contenido",
    niveles: [
      {
        id: "basico",
        label: "Básico",
        desc: "1 cámara, montaje de resumen con texto.",
        costoFijo: [1_200_000, 2_500_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "medio",
        label: "Premium",
        desc: "Multicámara, edición con motion graphics y locución.",
        costoFijo: [2_500_000, 5_500_000],
        costoPorPersona: [0, 0],
      },
      {
        id: "top",
        label: "Top",
        desc: "Producción cinematográfica, color grading y mix de audio.",
        costoFijo: [5_500_000, 12_000_000],
        costoPorPersona: [0, 0],
      },
    ],
  },
  {
    id: "branding_fisico",
    label: "Branding físico",
    categoria: "contenido",
    niveles: [
      {
        id: "basico",
        label: "Básico",
        desc: "Credenciales, banners y señalética básica.",
        costoFijo: [200_000, 500_000],
        costoPorPersona: [1_000, 2_500],
      },
      {
        id: "medio",
        label: "Premium",
        desc: "Material gráfico completo con diseño editorial.",
        costoFijo: [500_000, 1_200_000],
        costoPorPersona: [2_500, 5_000],
      },
      {
        id: "top",
        label: "Top",
        desc: "Producción impresa premium, packaging y kit de regalo.",
        costoFijo: [1_200_000, 3_500_000],
        costoPorPersona: [5_000, 10_000],
      },
    ],
  },

  // ── LOGÍSTICA ───────────────────────────────────────────────────────────────
  {
    id: "staff",
    label: "Staff",
    categoria: "logistica",
    niveles: [
      {
        id: "basico",
        label: "Básico",
        desc: "Staff de apoyo para registro y sala.",
        costoFijo: [150_000, 300_000],
        costoPorPersona: [3_000, 5_000],
      },
      {
        id: "medio",
        label: "Completo",
        desc: "Staff con coordinadores de área.",
        costoFijo: [300_000, 600_000],
        costoPorPersona: [5_000, 9_000],
      },
      {
        id: "top",
        label: "Premium",
        desc: "Staff senior con supervisión y uniformes.",
        costoFijo: [600_000, 1_200_000],
        costoPorPersona: [9_000, 14_000],
      },
    ],
  },
  {
    id: "anfitrionas",
    label: "Anfitrionas",
    categoria: "logistica",
    niveles: [
      {
        id: "basico",
        label: "Protocolo",
        desc: "Anfitrionas de protocolo y bienvenida.",
        costoFijo: [200_000, 500_000],
        costoPorPersona: [4_000, 7_000],
      },
      {
        id: "medio",
        label: "Bilingüe",
        desc: "Anfitrionas bilingüe para eventos internacionales.",
        costoFijo: [500_000, 900_000],
        costoPorPersona: [7_000, 12_000],
      },
      {
        id: "top",
        label: "Alto perfil",
        desc: "Anfitrionas de lujo, coordinadas por producción.",
        costoFijo: [900_000, 1_800_000],
        costoPorPersona: [12_000, 20_000],
      },
    ],
  },
  {
    id: "transporte",
    label: "Transporte",
    categoria: "logistica",
    niveles: [
      {
        id: "basico",
        label: "Básico",
        desc: "Buses o furgones para traslado grupal.",
        costoFijo: [300_000, 800_000],
        costoPorPersona: [2_000, 4_000],
      },
      {
        id: "medio",
        label: "Premium",
        desc: "Buses premium o vans ejecutivas.",
        costoFijo: [800_000, 2_000_000],
        costoPorPersona: [4_000, 8_000],
      },
      {
        id: "top",
        label: "VIP",
        desc: "Flota ejecutiva o servicio puerta a puerta.",
        costoFijo: [2_000_000, 5_000_000],
        costoPorPersona: [8_000, 15_000],
      },
    ],
  },
];

export const BLOQUES_BY_ID = Object.fromEntries(
  BLOQUES.map((b) => [b.id, b])
) as Record<string, BloqueConfig>;

export const BLOQUES_BY_CATEGORIA = CATEGORIAS.map((cat) => ({
  categoria: cat,
  bloques: BLOQUES.filter((b) => b.categoria === cat.id),
}));
