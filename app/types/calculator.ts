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

export type RegionId = "rm" | "iv" | "v" | "viii" | "ix" | "x";

export type DiasId = "1" | "2" | "3" | "4" | "5" | "otro";

export type NivelId = "basico" | "medio" | "top";

export interface Nivel {
  id: NivelId;
  label: string;
  desc: string;
  costoFijo: [number, number];
  costoPorPersona: [number, number];
}

export interface BloqueConfig {
  id: string;
  label: string;
  categoria: CategoriaId;
  niveles: [Nivel, Nivel, Nivel];
  /** 0 = no escala con días (costo único), 1 = escala completamente por día */
  diasFactor: number;
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

export type SeleccionBloques = Partial<Record<string, NivelId>>;

export interface TipoEventoConfig {
  id: TipoEvento;
  label: string;
  labelCorto: string; // para el título del paso 2: "tu stand", "tu lanzamiento"…
  desc: string;
  icon: string;
  multiplicador: number;
  bloquesRecomendados: string[];
}

export interface CalculadoraState {
  step: 1 | 2 | 3 | 4 | 5;
  tipoEvento: TipoEvento | null;
  asistentes: RangoAsistentes | null;
  region: RegionId | null;
  diasEvento: DiasId | null;
  fechaEvento: string | null; // formato "YYYY-MM"
  seleccionBloques: SeleccionBloques;
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export interface DesgloseLine {
  label: string;
  monto: [number, number];
  nivelId?: NivelId;  // undefined = fee de producción
  bloqueId?: string;  // undefined for fee line
}

export interface Recomendacion {
  msg: string;
  bloqueId?: string;  // si tiene, muestra botón "Agregar"
  nivelId?: NivelId;  // nivel a aplicar al hacer click
}

export interface Resultado {
  total: [number, number];
  desglose: DesgloseLine[];
  recomendaciones: Recomendacion[];
}
