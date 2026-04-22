export type CategoriaArticulo =
  | "eventos-corporativos"
  | "activaciones-btl"
  | "ferias-stands"
  | "experiencia-de-marca";

export const CATEGORIAS: { id: CategoriaArticulo; label: string }[] = [
  { id: "eventos-corporativos", label: "Eventos corporativos" },
  { id: "activaciones-btl", label: "Activaciones BTL" },
  { id: "ferias-stands", label: "Ferias & Stands" },
  { id: "experiencia-de-marca", label: "Experiencia de marca" },
];

export type SeccionArticulo =
  | { type: "intro"; content: string }
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "list"; items: (string | { titulo: string; descripcion: string })[] }
  | { type: "ordered-list"; items: { titulo: string; descripcion: string }[] }
  | { type: "highlight"; content: string; stat?: string }
  | { type: "cta-inline"; label: string };

export interface Articulo {
  slug: string;
  titulo: string;
  excerpt: string;
  categoria: CategoriaArticulo;
  categoriaLabel: string;
  fecha: string;
  readTime: number;
  metaTitle: string;
  metaDescription: string;
  secciones: SeccionArticulo[];
}

export const ARTICULOS: Articulo[] = [
  {
    slug: "marketing-experiencial-2026-guia-tendencias-eventos",
    titulo: "Marketing Experiencial 2026: Guía Completa de las Tendencias que Transformarán tus Eventos",
    excerpt:
      "El estudio EventTrack 2026 revela que las experiencias de marca ya no son un accesorio, sino el motor principal de las estrategias de las empresas Fortune 1000. Estas son las cinco tendencias que debes conocer.",
    categoria: "experiencia-de-marca",
    categoriaLabel: "Experiencia de marca",
    fecha: "2026-04-22",
    readTime: 7,
    metaTitle: "Marketing Experiencial 2026: Tendencias que Transformarán tus Eventos | LaPizarra",
    metaDescription:
      "Descubre las 5 tendencias del marketing experiencial para 2026 según el estudio EventTrack. PR como objetivo principal, menos eventos de mayor calidad, efecto IA y más.",
    secciones: [
      {
        type: "intro",
        content:
          "En LaPizarra sabemos que el mundo del marketing no se detiene, y los eventos en vivo están viviendo una transformación sin precedentes. El reciente estudio EventTrack 2026, elaborado por Event Marketer y Sparks, revela que las experiencias de marca ya no son solo un accesorio, sino el motor principal de las estrategias de las empresas Fortune 1000. Si buscas optimizar tu estrategia para el próximo año, aquí desglosamos los puntos clave de este informe esencial para entender hacia dónde va el marketing experiencial.",
      },
      {
        type: "h2",
        content: "1. Adiós a la 'Consciencia', hola a las relaciones y el PR",
      },
      {
        type: "p",
        content:
          "Históricamente, el objetivo principal de un evento era generar awareness (visibilidad). Sin embargo, el panorama ha cambiado drásticamente. Por primera vez en la historia del estudio, el PR y la cobertura mediática se han convertido en el objetivo número uno tanto para el sector B2C como para las ferias comerciales (trade shows).",
      },
      {
        type: "highlight",
        content:
          "Hoy en día, las marcas diseñan eventos como si fueran sets de grabación, buscando que cada rincón sea compartible y genere un impacto masivo en redes sociales y medios tradicionales.",
      },
      {
        type: "h2",
        content: "2. Inversión al alza: menos eventos, mayor calidad",
      },
      {
        type: "p",
        content:
          "El estudio trae noticias optimistas: el 84% de los mercadólogos B2C y el 86% de los B2B planean aumentar su presupuesto para eventos en 2026. Pero cuidado, esto no significa hacer más eventos, sino hacerlos mejores.",
      },
      {
        type: "p",
        content: "Estamos ante la tendencia del 'menos es más':",
      },
      {
        type: "list",
        items: [
          {
            titulo: "Portafolios más acotados",
            descripcion:
              "La mayoría de las marcas mantendrá o reducirá el volumen de eventos para concentrar recursos en experiencias de alta calidad y muy segmentadas.",
          },
          {
            titulo: "Foco en generación de leads",
            descripcion:
              "El objetivo es crear experiencias sofisticadas que justifiquen cada peso invertido ante los directivos.",
          },
        ],
      },
      {
        type: "h2",
        content: "3. El 'efecto IA' y el retorno a lo real",
      },
      {
        type: "p",
        content:
          "En un mundo saturado de contenido generado por Inteligencia Artificial, el público está empezando a valorar lo que puede tocar y sentir. El informe destaca que, ante la incertidumbre de lo digital, las personas acudirán a los eventos para juzgar por sí mismas qué es real y qué es verdad.",
      },
      {
        type: "highlight",
        content:
          "El contacto cara a cara se convierte en la fuente de confianza definitiva para el consumidor. Los eventos en vivo son el único canal que no puede ser replicado por la IA.",
      },
      {
        type: "h2",
        content: "4. Un embudo de ventas acelerado",
      },
      {
        type: "p",
        content:
          "Los eventos tienen un impacto directo y casi inmediato en las ventas. Los datos del estudio son contundentes:",
      },
      {
        type: "list",
        items: [
          {
            titulo: "61% de los asistentes",
            descripcion: "se siente más inclinado a comprar después de una interacción en vivo.",
          },
          {
            titulo: "38% de los consumidores",
            descripcion: "realiza la compra dentro de las primeras 24 horas tras el evento.",
          },
          {
            titulo: "Prueba antes de comprar",
            descripcion:
              "Las muestras gratuitas y las demostraciones de producto siguen siendo los principales motivadores para que la audiencia se acerque a un stand.",
          },
        ],
      },
      {
        type: "highlight",
        stat: "38%",
        content: "de los consumidores realiza una compra dentro de las primeras 24 horas después de asistir a un evento en vivo.",
      },
      {
        type: "h2",
        content: "5. El dilema de la sostenibilidad",
      },
      {
        type: "p",
        content:
          "La sostenibilidad es una prioridad en papel, pero un desafío en la práctica. Aunque el 82% de las grandes marcas ya tiene o está trabajando en una política de sostenibilidad, sigue habiendo una tensión presupuestaria: las opciones 'verdes' suelen ser las primeras en recortarse cuando el presupuesto aprieta.",
      },
      {
        type: "list",
        items: [
          {
            titulo: "B2B vs B2C",
            descripcion:
              "Los asistentes a ferias comerciales (B2B) se preocupan más por la sostenibilidad (85%) que los asistentes a eventos de consumo masivo (60%).",
          },
          {
            titulo: "Brecha de género",
            descripcion:
              "Las mujeres en todas las categorías de edad muestran un interés significativamente mayor por las prácticas eco-amigables que los hombres.",
          },
        ],
      },
      {
        type: "h2",
        content: "Conclusión: ¿qué significa esto para tu negocio?",
      },
      {
        type: "p",
        content:
          "Para triunfar en 2026, tu estrategia de eventos debe ser estratégica, mediática y humana. Enfócate en la calidad del contenido y en facilitar la captura de leads, ya que las métricas de 'vanidad' —como el simple conteo de asistentes— ya no son suficientes para demostrar el ROI ante los directivos.",
      },
      {
        type: "p",
        content:
          "Los eventos son, hoy más que nunca, plataformas de contenido y confianza. Cada interacción en vivo es una oportunidad única que ningún algoritmo puede replicar. La pregunta no es si invertir en experiencias, sino cómo hacerlo con criterio y precisión.",
      },
      {
        type: "cta-inline",
        label: "¿Cuánto cuesta producir tu próximo evento? Simúlalo en 2 minutos.",
      },
    ],
  },
  {
    slug: "como-organizar-evento-corporativo-que-genere-resultados",
    titulo: "Cómo organizar un evento corporativo que realmente genere resultados",
    excerpt:
      "Organizar un evento corporativo exitoso no es solo reservar un venue y convocar a tu equipo. Es una decisión estratégica que, bien ejecutada, refuerza cultura, activa marcas y genera impacto real en la organización.",
    categoria: "eventos-corporativos",
    categoriaLabel: "Eventos corporativos",
    fecha: "2026-04-22",
    readTime: 10,
    metaTitle:
      "Cómo organizar un evento corporativo que genere resultados | LaPizarra",
    metaDescription:
      "Guía estratégica para gerentes de marketing, RRHH y comunicaciones sobre cómo planificar eventos corporativos en Chile que generen impacto real. Metodología, errores comunes, costos y más.",
    secciones: [
      {
        type: "intro",
        content:
          "Organizar un evento corporativo es mucho más que reservar un venue y enviar invitaciones. Bien ejecutado, un evento puede reforzar la cultura de una organización, activar una marca frente a su audiencia o marcar un antes y después en la relación con el equipo. Mal ejecutado, es simplemente dinero y tiempo perdido. Esta guía está pensada para gerentes de marketing, RRHH, cultura y comunicaciones que necesitan tomar decisiones estratégicas sobre la planificación de eventos corporativos en Chile, con criterio y sin humo.",
      },
      {
        type: "h2",
        content:
          "Por qué la mayoría de los eventos corporativos no generan impacto",
      },
      {
        type: "p",
        content:
          "La respuesta corta: porque se planifican al revés. Se elige el venue antes de definir el objetivo. Se decide el catering antes de pensar en la experiencia. Se confirma el presupuesto sin saber qué se quiere comunicar.",
      },
      {
        type: "p",
        content:
          "El resultado es un ciclo de eventos que se hacen porque 'hay que hacerlos', no porque exista una estrategia clara detrás. Los asistentes llegan, pasan el día, se van, y tres semanas después nadie recuerda qué mensaje quería transmitir la organización.",
      },
      {
        type: "highlight",
        stat: "+60%",
        content:
          "de los organizadores de eventos corporativos reconoce no medir el impacto de sus eventos con ninguna métrica concreta.",
      },
      {
        type: "p",
        content:
          "Un evento corporativo que genera resultados parte siempre de lo mismo: una respuesta clara a la pregunta ¿para qué hacemos este evento?",
      },
      {
        type: "h2",
        content: "Define el objetivo antes de elegir el venue",
      },
      {
        type: "p",
        content:
          "El objetivo del evento determina el formato, el tono, el presupuesto y los indicadores de éxito. Sin objetivo claro, cada decisión posterior es arbitraria. No todos los eventos tienen el mismo propósito, y confundirlos es uno de los errores más comunes.",
      },
      {
        type: "h3",
        content: "Los 4 tipos de objetivo de un evento corporativo",
      },
      {
        type: "ordered-list",
        items: [
          {
            titulo: "Cohesión interna",
            descripcion:
              "Fortalecer cultura, celebrar logros, alinear equipos. Requiere experiencias participativas, diseño emocional y actividades que generen conversación genuina.",
          },
          {
            titulo: "Comunicación estratégica",
            descripcion:
              "Transmitir un mensaje clave a colaboradores, clientes o socios. Requiere producción audiovisual de calidad, escenografía y control del mensaje en cada punto de contacto.",
          },
          {
            titulo: "Lanzamiento o activación de marca",
            descripcion:
              "Presentar un producto, servicio o campaña. Requiere diseño de experiencia de marca, alto impacto visual y generación de contenido que extienda el evento en el tiempo.",
          },
          {
            titulo: "Relacionamiento comercial",
            descripcion:
              "Fortalecer vínculos con clientes, distribuidores o socios estratégicos. Requiere un balance preciso entre exclusividad, hospitalidad y contenido de valor.",
          },
        ],
      },
      {
        type: "p",
        content:
          "Definir correctamente el tipo de objetivo te permite tomar mejores decisiones en cada etapa de la organización del evento corporativo y evitar gastar recursos en elementos que no aportan al resultado esperado.",
      },
      {
        type: "h2",
        content:
          "Los 7 elementos que no pueden fallar en un evento corporativo",
      },
      {
        type: "p",
        content:
          "Independientemente del tipo de evento, hay elementos que determinan la diferencia entre una experiencia memorable y una jornada olvidable. Estos son los que más impactan en la percepción final de los asistentes.",
      },
      {
        type: "list",
        items: [
          {
            titulo: "Propósito claro y comunicado",
            descripcion:
              "El mensaje central debe estar definido antes de empezar a producir. Todo lo demás lo sirve.",
          },
          {
            titulo: "Venue adecuado al formato",
            descripcion:
              "No se trata del espacio más bonito, sino del más funcional. Capacidad, acceso, infraestructura técnica y logística son variables críticas.",
          },
          {
            titulo: "Producción técnica impecable",
            descripcion:
              "Audio, iluminación, pantallas y conectividad determinan la percepción profesional del evento. Un audio deficiente arruina incluso el mejor contenido.",
          },
          {
            titulo: "Flujo de experiencia diseñado",
            descripcion:
              "¿Qué vive el asistente desde que llega hasta que se va? Cada punto de contacto comunica algo sobre la marca.",
          },
          {
            titulo: "Contenido relevante y bien producido",
            descripcion:
              "Presentaciones, oradores, videos y momentos de pausa deben estar al servicio del objetivo, no del ego de quien organiza.",
          },
          {
            titulo: "Logística ejecutada con precisión",
            descripcion:
              "Registro, traslados, catering, timing y contingencias. Un evento bien pensado puede arruinarse por detalles operativos descuidados.",
          },
          {
            titulo: "Métricas de éxito definidas de antemano",
            descripcion:
              "Encuestas, NPS interno, generación de contenido, leads. Tener esto definido antes convierte el evento en inversión, no en gasto.",
          },
        ],
      },
      {
        type: "h2",
        content:
          "Producción de eventos vs. ejecución estratégica: la diferencia importa",
      },
      {
        type: "p",
        content:
          "Existe una distinción importante entre contratar producción de eventos y contratar ejecución estratégica. Entender esta diferencia puede cambiar el resultado de tu próximo evento.",
      },
      {
        type: "p",
        content:
          "Una empresa de producción ejecuta lo que le pides: monta el escenario, instala las luces, coordina el catering. Hace lo que está en el brief, y lo hace bien si tienes un brief claro.",
      },
      {
        type: "p",
        content:
          "Una agencia con visión estratégica te ayuda a construir ese brief. Entiende el objetivo de negocio detrás del evento, propone el formato más eficiente para lograrlo, anticipa problemas antes de que ocurran, diseña la experiencia completa y te acompaña en las decisiones antes, durante y después.",
      },
      {
        type: "highlight",
        content:
          "Para eventos donde el impacto importa —lanzamientos, eventos de cultura interna, activaciones de marca— la diferencia entre ambos enfoques puede ser determinante tanto en resultado como en retorno sobre la inversión.",
      },
      {
        type: "h2",
        content:
          "Cómo planificar un evento corporativo en Chile: paso a paso",
      },
      {
        type: "p",
        content:
          "La planificación de un evento corporativo exitoso sigue un proceso claro. Saltarse etapas genera errores que se pagan caro más adelante. Este es el marco que usamos en LaPizarra para cada proyecto.",
      },
      {
        type: "h3",
        content: "1. Briefing estratégico",
      },
      {
        type: "p",
        content:
          "Antes de hablar con cualquier proveedor, define por escrito: objetivo del evento, público asistente, mensaje central, formato general, fecha tentativa y presupuesto estimado. Este documento es la base de todo lo que viene después. Sin él, cada proveedor te cotizará algo diferente y tú no tendrás cómo comparar.",
      },
      {
        type: "h3",
        content: "2. Selección de venue y fecha",
      },
      {
        type: "p",
        content:
          "El venue debe ser funcional para el formato, accesible para los asistentes y coherente con la imagen de la marca. La fecha debe considerar feriados, temporadas altas del sector y disponibilidad real del equipo clave. En Chile, los meses de enero y febrero tienen disponibilidad de espacios pero baja asistencia. Los meses de mayor demanda son marzo-abril y agosto-octubre.",
      },
      {
        type: "h3",
        content: "3. Producción y logística",
      },
      {
        type: "p",
        content:
          "Aquí entran los proveedores: escenografía, audio, iluminación, catering, registro, traslados, impresiones y soporte operativo. La clave es tener un coordinador de producción que centralice todos los frentes y anticipe contingencias. La comunicación entre proveedores sin un coordinador central es la causa principal de errores en el día del evento.",
      },
      {
        type: "h3",
        content: "4. Diseño de la experiencia",
      },
      {
        type: "p",
        content:
          "El flujo del evento —desde la llegada hasta el cierre— debe estar diseñado con intención. Tiempos, transiciones, momentos de participación, contenido audiovisual y detalles de hospitalidad componen la experiencia que vive el asistente. Este diseño no puede improvisarse el día anterior.",
      },
      {
        type: "h3",
        content: "5. Métricas de éxito",
      },
      {
        type: "p",
        content:
          "Define antes del evento cómo lo vas a medir. ¿Satisfacción de asistentes mediante encuesta? ¿Contenido generado orgánicamente? ¿Net Promoter Score interno post-evento? ¿Leads o contactos generados? Tener esto definido con anticipación permite diseñar el evento con los indicadores en mente, no al revés.",
      },
      {
        type: "h2",
        content:
          "Errores más comunes al organizar eventos corporativos (y cómo evitarlos)",
      },
      {
        type: "list",
        items: [
          {
            titulo: "Empezar por el presupuesto y no por el objetivo",
            descripcion:
              "El presupuesto es una variable de contexto, no el punto de partida. Definir primero qué quieres lograr te permite asignar recursos con criterio.",
          },
          {
            titulo: "Subestimar los tiempos de producción",
            descripcion:
              "Un evento corporativo bien producido requiere entre 6 y 12 semanas de planificación dependiendo de la complejidad. Menos tiempo significa más riesgo y más costo.",
          },
          {
            titulo: "No considerar la experiencia del asistente",
            descripcion:
              "El evento es para quien asiste, no para quien lo organiza. Cada decisión debe evaluarse desde la perspectiva de la persona que vivirá la experiencia.",
          },
          {
            titulo: "Ahorrar en producción técnica",
            descripcion:
              "El audio y la iluminación son los elementos que más impactan en la percepción de profesionalismo. Ahorrar ahí es uno de los errores más caros que existe.",
          },
          {
            titulo: "No medir el resultado",
            descripcion:
              "Sin métricas, el próximo evento empieza desde cero. La medición es lo que convierte los eventos en activos estratégicos de la organización.",
          },
        ],
      },
      {
        type: "h2",
        content: "¿Cuánto cuesta organizar un evento corporativo en Chile?",
      },
      {
        type: "p",
        content:
          "El costo de un evento corporativo en Chile varía ampliamente según el formato, la cantidad de asistentes, la región y el nivel de producción requerido. No existe un precio estándar porque cada evento es diferente.",
      },
      {
        type: "p",
        content:
          "Para eventos de entre 50 y 200 asistentes en la Región Metropolitana, las propuestas pueden ir desde los $3 millones hasta más de $25 millones dependiendo de las variables involucradas. Ampliar el rango no es evasiva: es realidad del mercado.",
      },
      {
        type: "p",
        content:
          "Los principales factores que determinan el presupuesto de un evento corporativo son:",
      },
      {
        type: "list",
        items: [
          "Venue y catering (generalmente el 40-50% del presupuesto total)",
          "Producción técnica: audio, iluminación y pantallas",
          "Escenografía, ambientación y diseño de espacio",
          "Contenido audiovisual y streaming",
          "Logística, personal de apoyo y coordinación",
          "Región del país (cada región tiene un multiplicador de costo)",
        ],
      },
      {
        type: "p",
        content:
          "La mejor forma de tener claridad sobre el presupuesto que necesita tu evento es hacer una simulación detallada que considere todas estas variables desde el inicio.",
      },
      {
        type: "cta-inline",
        label: "Simula el presupuesto de tu evento corporativo",
      },
      {
        type: "h2",
        content: "Conclusión",
      },
      {
        type: "p",
        content:
          "Organizar un evento corporativo que genere resultados no es cuestión de suerte ni de presupuesto ilimitado. Es cuestión de metodología, criterio y ejecución rigurosa. Desde el briefing inicial hasta la medición final, cada decisión importa y cada etapa construye sobre la anterior.",
      },
      {
        type: "p",
        content:
          "Las organizaciones que tratan los eventos corporativos como inversiones estratégicas —no como gastos operativos— son las que logran que sus equipos, clientes y marcas recuerden cada experiencia durante años. El estándar es posible. Solo requiere el enfoque correcto.",
      },
    ],
  },
];
