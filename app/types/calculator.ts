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

export type BloqueId =
  | "venue"
  | "catering"
  | "av_basico"
  | "av_premium"
  | "iluminacion"
  | "decoracion"
  | "fotografia"
  | "video"
  | "animacion"
  | "rrhh"
  | "transporte"
  | "activacion"
  | "streaming"
  | "branding_fisico";

export interface BloqueConfig {
  id: BloqueId;
  label: string;
  desc: string;
  icon: string;
  costoFijo: [number, number]; // CLP [min, max]
  costoPorPersona: [number, number]; // CLP adicional por persona [min, max]
  categoria: "espacio" | "gastronomia" | "tecnologia" | "contenido" | "logistica";
}

export interface TipoEventoConfig {
  id: TipoEvento;
  label: string;
  desc: string;
  icon: string;
  multiplicador: number;
  bloquesRecomendados: BloqueId[];
}

export interface CalculadoraState {
  step: 1 | 2 | 3 | 4;
  tipoEvento: TipoEvento | null;
  asistentes: RangoAsistentes | null;
  bloquesSeleccionados: BloqueId[];
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
