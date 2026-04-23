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
    slug: "cuanto-cuesta-evento-corporativo-chile",
    titulo: "¿Cuánto cuesta un evento corporativo en Chile? Rangos reales y desglose por bloque",
    excerpt:
      "Desde $3 millones hasta $80 millones: los rangos reales de producción de eventos corporativos en Chile, desglosados por bloque de servicio, tipo de evento y región. Sin rodeos.",
    categoria: "eventos-corporativos",
    categoriaLabel: "Eventos corporativos",
    fecha: "2026-04-22",
    readTime: 5,
    metaTitle: "¿Cuánto cuesta un evento corporativo en Chile? Precios reales 2026 | LaPizarra",
    metaDescription:
      "Rangos reales de costo para eventos corporativos en Chile: venue, catering, técnica, iluminación y producción. Ejemplos con presupuestos de $5M, $20M y $50M+ según tipo de evento y región.",
    secciones: [
      {
        type: "intro",
        content:
          "La pregunta más común que recibimos —y también la que más rodeos genera en el mercado— es esta: ¿cuánto cuesta producir un evento corporativo en Chile? La respuesta honesta tiene dos partes. Primero: depende de varias variables que vamos a desgranar en este artículo. Segundo: tenemos datos reales, y te los vamos a mostrar sin eufemismos. Llevamos más de 21 marcas producidas y hemos aprendido que la transparencia en los precios genera mejores proyectos —no al revés.",
      },
      {
        type: "h2",
        content: "Las variables que mueven el presupuesto",
      },
      {
        type: "p",
        content:
          "El costo de un evento corporativo no es una cifra plana. Es el resultado de al menos cuatro variables que se multiplican entre sí: el tipo de evento, el tamaño (número de asistentes), los bloques de servicio que incluyes y la región donde se realiza. Cambia uno de estos factores y el presupuesto puede moverse un 25% hacia arriba o hacia abajo.",
      },
      {
        type: "h3",
        content: "Variable 1: Tipo de evento",
      },
      {
        type: "list",
        items: [
          { titulo: "Evento interno (incentivos, kick-off, celebración de equipo)", descripcion: "El más acotado en producción. Exige menos infraestructura técnica y el estándar de venue es más flexible. Factorización: ×0.80 sobre base." },
          { titulo: "Activación BTL o de marca", descripcion: "Requiere mayor creatividad en diseño, pero los eventos son más cortos y en espacios no convencionales. Factorización: ×0.85." },
          { titulo: "Stand o presencia en feria", descripcion: "El costo depende casi enteramente del stand y los materiales. La logística de transporte es intensiva. Factorización: ×0.90." },
          { titulo: "Evento corporativo estándar (convención, seminario, gala)", descripcion: "La base de cálculo. Incluye venue profesional, técnica completa y catering formal. Factorización: ×1.00." },
          { titulo: "Lanzamiento de producto", descripcion: "El más exigente en producción audiovisual y diseño de experiencia. Las expectativas son altas y el margen de error, bajo. Factorización: ×1.25." },
        ],
      },
      {
        type: "h3",
        content: "Variable 2: Región",
      },
      {
        type: "p",
        content:
          "Producir fuera de la Región Metropolitana encarece el proyecto principalmente por logística y transporte de equipos técnicos. Los multiplicadores regionales que usamos como referencia son: Región Metropolitana ×1.00 (base), Región de Valparaíso ×1.08, Regiones IV y VIII ×1.15, Región IX ×1.20, y Región X hacia el sur ×1.25. Un evento de $20 millones en Santiago puede costar cerca de $25 millones en Puerto Montt.",
      },
      {
        type: "h2",
        content: "Desglose por bloque: cuánto cuesta cada componente",
      },
      {
        type: "p",
        content:
          "Un evento corporativo se construye por bloques de servicio. Cada bloque tiene tres niveles de producción —básico, intermedio y premium— y el costo total es la suma de los bloques que eliges. Estos son los rangos reales que manejamos:",
      },
      {
        type: "list",
        items: [
          { titulo: "Venue / espacio", descripcion: "Entre $2.000.000 y $10.000.000 dependiendo del aforo, la ubicación y si incluye equipamiento básico. Un salón de hotel 5 estrellas para 200 personas cuesta entre $4M y $7M." },
          { titulo: "Catering y alimentación", descripcion: "Entre $15.000 y $100.000 por persona. Un coffee break básico para 100 personas puede salir en $1.5M; un cóctel de gala con barra abierta para 200 personas puede superar los $12M." },
          { titulo: "Técnica (audio, video, streaming)", descripcion: "Entre $1.500.000 y $14.000.000. Aquí entran sonido, pantallas, operación técnica en sala y transmisión en vivo. Un nivel básico para 80 personas con pantalla y sonido: $1.5M-$2.5M. Un evento producido para 500 personas con múltiples pantallas, cámaras y streaming: $8M-$14M." },
          { titulo: "Iluminación y ambientación", descripcion: "Entre $500.000 y $5.500.000. Una puesta de luz básica para un auditorio puede costar $500K. Un diseño de iluminación para escenario de gala o lanzamiento con luces moving y efectos especiales puede llegar a $5.5M." },
          { titulo: "Escenografía y producción física", descripcion: "Entre $800.000 y $8.000.000. Desde tarimas estándar hasta sets construidos a medida con impresión en gran formato, estructuras de tensión y diseño de marca integrado." },
          { titulo: "Fotografía y video profesional", descripcion: "Entre $300.000 y $2.500.000. Un fotógrafo para medio día de evento: $300K-$500K. Un equipo audiovisual completo con video aéreo, cobertura multipunto y edición en 48 horas: $1.5M-$2.5M." },
          { titulo: "Producción general y coordinación", descripcion: "El fee de producción se calcula como un porcentaje sobre el total neto de servicios: entre el 17% y el 20%. No es un cobro arbitrario: cubre la dirección de proyecto, proveedores, logística, contingencias y ejecución en terreno." },
        ],
      },
      {
        type: "h2",
        content: "Tres ejemplos reales de presupuesto",
      },
      {
        type: "p",
        content:
          "Para hacer esto más concreto, aquí tienes tres escenarios que representan rangos reales del mercado chileno de producción de eventos corporativos:",
      },
      {
        type: "ordered-list",
        items: [
          {
            titulo: "Evento interno · 80 personas · Santiago · $5M–$8M",
            descripcion: "Kick-off de equipo en sala de hotel. Incluye venue con coffee break, técnica básica (pantalla + sonido), presentaciones y moderación. Sin escenografía elaborada. Fee de producción incluido. Ideal para comunicar resultados anuales o lanzar un nuevo período.",
          },
          {
            titulo: "Convención corporativa · 200 personas · Santiago · $18M–$28M",
            descripcion: "Salón de hotel o centro de eventos, catering completo (almuerzo + cocktail), técnica con pantallas dobles, iluminación de escenario, fotografía profesional y producción general. Este rango cubre el 80% de los eventos corporativos que producimos en Chile.",
          },
          {
            titulo: "Lanzamiento de producto · 300 personas · Valparaíso · $45M–$65M",
            descripcion: "Venue experiencial, producción audiovisual de alto nivel, diseño de escenografía a medida, catering gourmet, video aéreo, livestreaming y equipo de producción completo por 2 días. El multiplicador regional (+8%) y el multiplicador de lanzamiento (+25%) elevan significativamente la base respecto a un evento corporativo estándar en RM.",
          },
        ],
      },
      {
        type: "highlight",
        content:
          "El rango más común en el mercado chileno para un evento corporativo bien producido de 100-200 personas está entre $12M y $30M todo incluido.",
        stat: "$12M–$30M",
      },
      {
        type: "h2",
        content: "Lo que nadie te dice sobre el fee de producción",
      },
      {
        type: "p",
        content:
          "Muchas productoras presentan presupuestos que ocultan el fee dentro de los ítems, inflando artificialmente el costo de cada proveedor. En LaPizarra separamos el fee de producción como una línea explícita —entre el 17% y el 20%— porque creemos que el cliente merece saber qué paga por gestión y qué paga por servicios.",
      },
      {
        type: "p",
        content:
          "Ese fee cubre: búsqueda y negociación con proveedores, dirección de proyecto, coordinación logística, presencia en terreno el día del evento, gestión de contingencias y reportería post-evento. No es un margen de ganancia encubierto: es el costo de tener un equipo que responde por el resultado.",
      },
      {
        type: "h2",
        content: "¿Cómo obtener una estimación precisa para tu evento?",
      },
      {
        type: "p",
        content:
          "La forma más rápida de tener un presupuesto real es usar nuestra calculadora. En menos de 2 minutos puedes seleccionar el tipo de evento, los bloques de servicio que necesitas, la región y el nivel de producción. El resultado es un estimado desglosado por bloque —no un número mágico sin explicación.",
      },
      {
        type: "p",
        content:
          "Si prefieres hablar directamente, también podemos hacer una reunión de 30 minutos para entender tu proyecto y enviarte una propuesta en 48 horas. No cobramos por cotizar.",
      },
      {
        type: "cta-inline",
        label: "Simula el presupuesto de tu evento",
      },
    ],
  },
  {
    slug: "expo-2025-osaka-lecciones-diseno-experiencias-eventos",
    titulo: "Expo 2025 Osaka: 7 Lecciones de Diseño de Experiencias que Puedes Aplicar en tus Eventos",
    excerpt:
      "La Expo 2025 Osaka reunió los pabellones más innovadores del mundo en diseño de experiencias. Estas son las lecciones concretas que puedes trasladar a tus próximos eventos corporativos, activaciones y stands.",
    categoria: "experiencia-de-marca",
    categoriaLabel: "Experiencia de marca",
    fecha: "2026-04-22",
    readTime: 8,
    metaTitle: "Expo 2025 Osaka: 7 Lecciones de Diseño de Experiencias para tus Eventos | LaPizarra",
    metaDescription:
      "Analizamos los pabellones más innovadores de la Expo 2025 Osaka y extraemos lecciones concretas de diseño de experiencias aplicables a eventos corporativos, activaciones y stands en Chile.",
    secciones: [
      {
        type: "intro",
        content:
          "La Expo 2025 Osaka es, antes que todo, una demostración en tiempo real de lo que es posible cuando el diseño de experiencias se toma en serio. Más de 150 países construyeron pabellones que compiten no por metro cuadrado, sino por impacto emocional, claridad de mensaje y capacidad de transportar al visitante a otro estado mental. Revisamos los pabellones que empujaron los límites del diseño experiencial y extraemos las lecciones que cualquier organización puede aplicar en sus eventos, activaciones y stands.",
      },
      {
        type: "h2",
        content: "1. El storytelling en capas retiene a la audiencia más tiempo",
      },
      {
        type: "p",
        content:
          "El pabellón de Pasona Natureverse, inspirado en la forma del amonites —una criatura marina que sobrevivió múltiples extinciones—, no se conformó con tener una pieza estrella. Tenía muchas. Su exhibición central, el 'iPS Heart', es un modelo tridimensional de corazón creado con células vivas mediante bioingeniería. Por sí solo, habría bastado para generar una oleada de grabaciones. Pero el pabellón construyó una narrativa guiada por personajes icónicos —Astroboy y Black Jack— que dieron coherencia a todo el recorrido, desde el pasado evolutivo hasta el futuro de la medicina, el sueño y la agricultura.",
      },
      {
        type: "highlight",
        content:
          "La lección: una pieza impresionante atrae. Una narrativa coherente que conecta cada momento retiene, emociona y convierte al asistente en embajador.",
      },
      {
        type: "h2",
        content: "2. Una marca de lujo puede convertirse en arquitectura",
      },
      {
        type: "p",
        content:
          "El pabellón de Francia, titulado 'Theatre of Life', fue co-producido con el grupo LVMH. Louis Vuitton no apareció como sponsor en un banner: sus maletas icónicas se convirtieron en el material de construcción de dos salas completas. En la primera, 84 baúles apilados formaron un espacio fluido. En la segunda, baúles blancos construyeron una esfera cinética de gran escala que funcionó como lienzo para arte digital.",
      },
      {
        type: "p",
        content:
          "Dior tuvo su propio espacio: una galería completamente blanca con sus diseños, infundida por proyecciones de modelos. La marca no interrumpió la experiencia, la fue.",
      },
      {
        type: "highlight",
        content:
          "La lección: integrar la marca en el diseño del espacio —no en la señalética— es la diferencia entre patrocinar un evento y protagonizarlo.",
      },
      {
        type: "h2",
        content: "3. La tecnología más poderosa es la que genera emoción real",
      },
      {
        type: "p",
        content:
          "El pabellón de Singapur, apodado 'Little Red Dot' en referencia al apodo del país, presentó el 'Dream Sphere': una estructura envuelta en miles de discos reciclados, imposible de ignorar. Pero el momento más potente no fue visual: fue cuando los visitantes compartieron sus sueños y vieron cómo la tecnología los hacía iluminar la esfera en tiempo real.",
      },
      {
        type: "highlight",
        content:
          "La lección: la tecnología no impresiona por ser sofisticada. Impresiona cuando hace que el asistente sienta que es parte de algo más grande que él mismo.",
      },
      {
        type: "h2",
        content: "4. La arquitectura reactiva redefine qué es un stand",
      },
      {
        type: "p",
        content:
          "El pabellón Null², diseñado por el estudio NOIZ, está construido con módulos tipo vóxel cubiertos por una membrana espejada que se mueve y hace sonidos en respuesta al entorno. En el interior, gemelos digitales responden a la presencia de los visitantes, brazos robóticos interactúan con superficies espejadas, y usuarios remotos pueden participar a través de avatares robóticos.",
      },
      {
        type: "p",
        content:
          "No es un stand. Es un organismo. Y esa distinción cambia completamente la relación entre el espacio y quien lo habita.",
      },
      {
        type: "highlight",
        content:
          "La lección: un espacio que responde a la presencia del visitante genera una experiencia imposible de replicar en digital y difícil de olvidar.",
      },
      {
        type: "h2",
        content: "5. La narrativa necesita un clímax",
      },
      {
        type: "p",
        content:
          "El pabellón de Estados Unidos construyó su recorrido sobre la exploración espacial como la mayor aventura de la humanidad. Videos, pantallas y displays estáticos prepararon el terreno. Pero el momento cumbre fue la simulación de despegue hacia la Luna —con energía de parque temático— seguida de la oportunidad de ver una muestra lunar real recolectada en la misión Apollo.",
      },
      {
        type: "p",
        content:
          "El contenido previo no fue relleno: fue la construcción emocional necesaria para que el clímax funcionara.",
      },
      {
        type: "highlight",
        content:
          "La lección: todo evento necesita un momento cumbre claramente diseñado. Sin clímax, la experiencia se siente plana, independiente de cuánto presupuesto se haya invertido.",
      },
      {
        type: "h2",
        content: "6. Lo analógico puede ser el elemento de mayor impacto",
      },
      {
        type: "p",
        content:
          "El pabellón de España jugó con el contraste cromático —azules oceánicos y un espacio final rojo-naranja— para contar la historia de la Corriente de Kuroshio que conecta Oriente y Occidente. Hologramas y laboratorios interactivos dominaron el recorrido. Pero el espacio final, lleno de postales físicas y posts de redes sociales impresos, fue el más memorable.",
      },
      {
        type: "highlight",
        content:
          "La lección: en un entorno saturado de tecnología, un elemento analógico bien ejecutado puede ser el momento que el asistente recuerde y comparta.",
      },
      {
        type: "h2",
        content: "7. Lo multisensorial no es un extra: es la experiencia",
      },
      {
        type: "p",
        content:
          "El pabellón de Brasil regaló ponchos de colores a los visitantes que llegaban bajo la lluvia. Las persianas exteriores se levantaban para revelar esculturas inflables que se movían con la música y la luz. El espacio comenzaba completamente blanco y vivía una transformación dramática: las esculturas se desinflaban y 'morían', para luego renacer. Y en algún punto del recorrido: café auténtico.",
      },
      {
        type: "p",
        content:
          "Vista, tacto, sonido, movimiento y olfato. Cinco sentidos comprometidos al mismo tiempo. La experiencia no solo se vio: se vivió.",
      },
      {
        type: "highlight",
        content:
          "La lección: los eventos más recordados son aquellos que comprometen más de un sentido. El café de Brasil no fue un detalle de hospitalidad: fue parte del diseño de la experiencia.",
      },
      {
        type: "h2",
        content: "¿Qué tienen en común estos pabellones?",
      },
      {
        type: "list",
        items: [
          {
            titulo: "Propósito antes que estética",
            descripcion: "Cada decisión de diseño sirvió a una narrativa clara, no al revés.",
          },
          {
            titulo: "El asistente como protagonista",
            descripcion: "Los mejores pabellones no fueron shows: fueron experiencias donde el visitante tenía agencia.",
          },
          {
            titulo: "Clímax diseñado",
            descripcion: "Todos construyeron hacia un momento cumbre. Ninguno terminó de forma plana.",
          },
          {
            titulo: "Integración sensorial",
            descripcion: "Sonido, movimiento, tacto y olfato no fueron extras: fueron parte del diseño desde el inicio.",
          },
        ],
      },
      {
        type: "p",
        content:
          "Estos principios no requieren el presupuesto de un pabellón de Expo. Requieren el criterio correcto desde el briefing inicial. Y eso es exactamente lo que distingue a un evento bien producido de uno verdaderamente memorable.",
      },
      {
        type: "p",
        content:
          "Fuente: Event Marketer — Expo 2025 Osaka, Part One: Experience Design Ideas from the Pavilions (Anna Huddleston, junio 2025). Ver artículo original en eventmarketer.com",
      },
      {
        type: "cta-inline",
        label: "¿Quieres producir un evento que deje huella? Simula tu presupuesto en 2 minutos.",
      },
    ],
  },
  {
    slug: "datos-sentimiento-6-innovaciones-para-medir-eventos",
    titulo: "Datos de Sentimiento: 6 Innovaciones que Cambiarán la Forma en que Mides tus Eventos",
    excerpt:
      "Las encuestas post-evento dicen que todo estuvo 'muy bien'. Los datos de sentimiento dicen la verdad. Conoce las 6 innovaciones que están transformando la forma en que las marcas miden el impacto real de sus experiencias.",
    categoria: "experiencia-de-marca",
    categoriaLabel: "Experiencia de marca",
    fecha: "2026-04-22",
    readTime: 6,
    metaTitle: "Datos de Sentimiento: 6 Innovaciones para Medir el Impacto de tus Eventos | LaPizarra",
    metaDescription:
      "Descubre cómo la tecnología de sentiment data y la IA están revolucionando la medición de eventos: emociones en tiempo real, optimización de contenido y ROI concreto.",
    secciones: [
      {
        type: "intro",
        content:
          "Los mejores eventos generan una respuesta visceral en sus asistentes. Capturar esas emociones y traducirlas en datos concretos entrega una base poderosa para demostrar el impacto real de una experiencia. Sin embargo, comparado con el mundo data-driven del marketing digital, muchas organizaciones de eventos todavía dependen de métricas anticuadas o simplemente de la intuición para justificar su inversión. Aquí es donde entran los datos de sentimiento.",
      },
      {
        type: "h2",
        content: "¿Por qué las encuestas tradicionales no son suficientes?",
      },
      {
        type: "p",
        content:
          "Imagina que te invitan a cenar y al final te preguntan cómo estuvo. La mayoría responderá 'muy bien', aunque no haya sido así. Es amable, pero no es útil. Los datos de sentimiento superan ese problema: en lugar de preguntar, analizan expresiones faciales para capturar reacciones honestas e involuntarias.",
      },
      {
        type: "highlight",
        content:
          "\"Las micro-expresiones —reacciones faciales inconscientes que ocurren en milisegundos— no pueden ser controladas conscientemente. Dado que los asistentes a un evento no intentan mantener una cara de póker, estas reacciones entregan insights sorprendentemente honestos.\" — Ron Schneider, Co-Fundador de THESE GUYS.",
      },
      {
        type: "p",
        content:
          "La tecnología NEURAL, desarrollada por THESE GUYS, rastrea 35 emociones individuales agrupadas en seis clústeres: euforia, felicidad, atención, indiferencia, incomodidad y rechazo. Al analizar los peaks y valles de estas emociones —y el contexto que los rodea— los organizadores pueden entender qué los provocó y cuán exitoso fue realmente el evento.",
      },
      {
        type: "h2",
        content: "Las 6 innovaciones en datos de sentimiento que debes conocer",
      },
      {
        type: "h3",
        content: "1. Emoción de salida (Exit Emotion)",
      },
      {
        type: "p",
        content:
          "El peak —o valle— emocional al final del evento es quizás el dato más crítico que puedes capturar. Como dice Schneider: 'Es como correr una maratón y detenerse justo antes de la meta. Gran esfuerzo, pero sin medalla.' Un cierre poderoso asegura que tu audiencia se vaya con una impresión duradera, capaz de superar incluso los errores cometidos durante el camino.",
      },
      {
        type: "h3",
        content: "2. Optimización en tiempo real",
      },
      {
        type: "p",
        content:
          "Los datos de sentimiento son valiosos para mejorar la comunicación post-evento, pero su verdadero poder está en la funcionalidad en tiempo real. Imagina una keynote donde puedes detectar momentos de confusión o duda mientras ocurren y ajustar el flujo del evento en vivo. Algunos speakers incluso pueden abordar las preocupaciones de la audiencia directamente, convirtiendo la incertidumbre en engagement.",
      },
      {
        type: "h3",
        content: "3. Selección de contenido",
      },
      {
        type: "p",
        content:
          "Para el lanzamiento mundial del ŠKODA Elroq —el primer SUV eléctrico compacto de la marca— se utilizó NEURAL para identificar el loop de contenido óptimo para la audiencia presente. El análisis en tiempo real generó un aumento del 28% en atención y un 67% en tiempo de visualización. Los datos de sentimiento permiten adaptar el contenido con una precisión imposible con métodos tradicionales.",
      },
      {
        type: "highlight",
        stat: "+67%",
        content: "de aumento en tiempo de visualización logrado al optimizar el contenido en tiempo real mediante datos de sentimiento en el lanzamiento del ŠKODA Elroq.",
      },
      {
        type: "h3",
        content: "4. Ubicación del mensaje",
      },
      {
        type: "p",
        content:
          "El mejor mensaje cae en saco roto si se entrega en el momento equivocado. Cuando la audiencia está viviendo un momento de euforia, su capacidad de absorber contenido informativo se reduce. Sin embargo, muchas marcas siguen colocando sus mensajes clave justo después de esos peaks, donde corren el riesgo de desaparecer. Los datos de sentimiento optimizan no solo qué decir, sino cuándo decirlo.",
      },
      {
        type: "h3",
        content: "5. Insights visibles para el asistente",
      },
      {
        type: "p",
        content:
          "Los asistentes aman los datos. Compartir los insights —en lugar de guardarlos— puede transformar los datos de sentimiento en una experiencia interactiva, donde los propios asistentes exploran sus comportamientos subconscientes. Imagina emojis que visualizan en tiempo real el sentimiento colectivo de la sala, mientras cada persona puede 'votar' con sus propias emociones simultáneamente.",
      },
      {
        type: "h3",
        content: "6. Potencial predictivo",
      },
      {
        type: "p",
        content:
          "¿Y si pudieras predecir cómo se sentirá tu audiencia antes de que el evento comience? Los datos de sentimiento pueden integrarse directamente en los discursos mostrando palabras clave en pantalla —organizadas en categorías como 'emocionado por' o 'dudando sobre'— para que el speaker interactúe con ellas en tiempo real. Esto no solo genera conversaciones más significativas, sino que también puede moldear la emoción de salida final.",
      },
      {
        type: "h2",
        content: "¿Qué significa esto para los eventos en Chile?",
      },
      {
        type: "p",
        content:
          "Para eventos B2C, métricas como 'sonrisas por minuto' pueden medirse contra los KPIs del evento. Para eventos B2B —como convenciones, lanzamientos de producto o ferias comerciales— los indicadores clave suelen girar en torno a la atención y el engagement, y detectar señales de cansancio o desconexión puede ser especialmente valioso.",
      },
      {
        type: "p",
        content:
          "La adopción de estas tecnologías en Latinoamérica aún está en etapas tempranas, lo que representa una ventaja competitiva real para las marcas que las incorporen antes que su competencia. Los datos de sentimiento no son el futuro de los eventos: son el presente.",
      },
      {
        type: "cta-inline",
        label: "¿Quieres producir un evento que genere impacto medible? Simula tu presupuesto.",
      },
    ],
  },
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
