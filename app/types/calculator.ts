export type TipoEvento =
  | "corporativo"
  | "lanzamiento"
  | "btl"
  | "interno"
  | "stand"
  | "audiovisual";

export type RangoAsistentes =
  | "menos50"
  | "50-100"
  | "100-200"
  | "200-400"
  | "400plus";

export type NivelId = "basico" | "medio" | "top";

export interface Nivel {
  id: NivelId;
  label: string;
  desc: string;
  costoFijo: [number, number];       // CLP [min, max]
  costoPorPersona: [number, number]; // CLP adicional por persona [min, max]
}

export interface BloqueConfig {
  id: string;
  label: string;
  categoria: CategoriaId;
  niveles: [Nivel, Nivel, Nivel];
}

export type CategoriaId =
  | "espacio"
  | "gastronomia"
  | "tecnica"
  | "iluminacion"
  | "streaming"
  | "contenido"
  | "logistica";

export interface CategoriaConfig {
  id: CategoriaId;
  label: string;
}

// Selección: bloqueId → NivelId elegido (o ausente = no seleccionado)
export type SeleccionBloques = Partial<Record<string, NivelId>>;

export interface TipoEventoConfig {
  id: TipoEvento;
  label: string;
  desc: string;
  icon: string;
  multiplicador: number;
  bloquesRecomendados: string[];
}

export interface CalculadoraState {
  step: 1 | 2 | 3 | 4;
  tipoEvento: TipoEvento | null;
  asistentes: RangoAsistentes | null;
  seleccionBloques: SeleccionBloques;
  nombre: string;
  empresa: string;
  correo: string;
  mensaje: string;
}

export interface DesgloseLine {
  label: string;
  monto: [number, number];
}

export interface Resultado {
  total: [number, number];
  desglose: DesgloseLine[];
  recomendaciones: string[];
}
