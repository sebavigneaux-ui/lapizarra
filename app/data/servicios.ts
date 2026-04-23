export interface Servicio {
  slug: string;
  titulo: string;
  tagline: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  descripcion: string[];
  queIncluye: { titulo: string; descripcion: string }[];
  paraQuien: { perfil: string; descripcion: string }[];
  proceso: { numero: string; titulo: string; descripcion: string }[];
  proyectosRelacionados: string[];
}

export const SERVICIOS: Servicio[] = [
  {
    slug: "eventos-corporativos",
    titulo: "Eventos Corporativos",
    tagline: "Del briefing a la ovación.",
    excerpt:
      "Convenciones, kick-off, reconocimientos y cenas de gala. Producción integral de eventos corporativos para empresas que necesitan alto estándar y resultados concretos.",
    metaTitle: "Empresa de Eventos Corporativos en Chile | LaPizarra",
    metaDescription:
      "Producción integral de eventos corporativos en Chile: convenciones, kick-off, reconocimientos y cenas de gala. Diseño, producción y ejecución con alto estándar en Santiago y regiones.",
    descripcion: [
      "Un evento corporativo bien producido comunica los valores de una organización mejor que cualquier campaña publicitaria. Es el momento en que la cultura se hace visible, los equipos se alinean y la marca se experimenta desde adentro hacia afuera.",
      "En LaPizarra diseñamos y producimos eventos corporativos para empresas que necesitan que cada detalle esté al nivel de lo que representan. Desde convenciones nacionales hasta cenas de directorio, trabajamos con un proceso riguroso que combina visión estratégica con ejecución impecable.",
    ],
    queIncluye: [
      { titulo: "Diseño conceptual y dirección creativa", descripcion: "Desarrollamos el concepto del evento alineado al objetivo y la identidad de la marca." },
      { titulo: "Producción escénica", descripcion: "Escenografía, audio, iluminación y pantallas al estándar que requiere cada evento." },
      { titulo: "Gestión de venue y proveedores", descripcion: "Selección, coordinación y control de todos los actores del evento bajo un solo equipo." },
      { titulo: "Producción audiovisual", descripcion: "Videos, animaciones y contenido en pantalla diseñados para el evento." },
      { titulo: "Logística integral", descripcion: "Registro, catering, traslados y todo el soporte operativo del día." },
      { titulo: "Medición post-evento", descripcion: "Encuestas, métricas y reporte de resultados para evaluar el impacto." },
    ],
    paraQuien: [
      { perfil: "Gerentes de Marketing", descripcion: "Kick-off comerciales, lanzamientos internos y eventos que refuerzan la marca frente al equipo." },
      { perfil: "Directores de RRHH", descripcion: "Convenciones anuales, reconocimientos y eventos que fortalecen la cultura organizacional." },
      { perfil: "Directores de Comunicaciones", descripcion: "Eventos de prensa, cenas de directorio y relaciones con stakeholders estratégicos." },
    ],
    proceso: [
      { numero: "01", titulo: "Briefing estratégico", descripcion: "Definimos objetivos, audiencia y mensaje central antes de proponer cualquier solución." },
      { numero: "02", titulo: "Diseño de experiencia", descripcion: "Desarrollamos el concepto creativo y el flujo completo del evento." },
      { numero: "03", titulo: "Producción", descripcion: "Coordinamos todos los proveedores y elementos técnicos bajo un solo equipo responsable." },
      { numero: "04", titulo: "Ejecución y cierre", descripcion: "Dirigimos el evento en terreno y entregamos métricas de resultado." },
    ],
    proyectosRelacionados: ["polpaico-convencion-clientes", "cool-carriers-convencion", "orsan-seguros-convencion"],
  },
  {
    slug: "activaciones-btl",
    titulo: "Activaciones BTL",
    tagline: "Donde la marca deja de hablar y empieza a vivirse.",
    excerpt:
      "Activaciones en punto de venta, street marketing y experiencias de marca que generan contacto directo, contenido orgánico y conversión real.",
    metaTitle: "Activaciones BTL en Chile | Agencia BTL Santiago | LaPizarra",
    metaDescription:
      "Activaciones BTL y experiencias de marca en Chile. Diseño y producción de activaciones en punto de venta, street marketing y eventos experienciales que generan contacto directo y conversión.",
    descripcion: [
      "El marketing BTL es la diferencia entre hablarle a tu audiencia y hablar con ella. Una activación bien diseñada genera contacto directo, emoción auténtica y contenido que se comparte solo.",
      "En LaPizarra diseñamos activaciones BTL para marcas que quieren salir del ruido. Desde activaciones en punto de venta hasta experiencias de marca en espacios públicos, cada proyecto parte de un objetivo claro y termina con resultados medibles.",
    ],
    queIncluye: [
      { titulo: "Concepto creativo y dirección de arte", descripcion: "Desarrollamos el insight y la idea central de la activación." },
      { titulo: "Producción de materiales y estructuras", descripcion: "Fabricación e instalación de todos los elementos físicos de la activación." },
      { titulo: "Activaciones en punto de venta", descripcion: "Diseño y ejecución de experiencias en retail y puntos de distribución." },
      { titulo: "Street marketing", descripcion: "Activaciones en espacios públicos, centros comerciales y eventos masivos." },
      { titulo: "Sampling y demostraciones", descripcion: "Gestión de muestras, prueba de producto y experiencias de primer contacto." },
      { titulo: "Contenido para redes sociales", descripcion: "Generación de contenido compartible en tiempo real durante la activación." },
    ],
    paraQuien: [
      { perfil: "Brand Managers", descripcion: "Activaciones de marca, campañas de lanzamiento y presencia en puntos de contacto clave." },
      { perfil: "Gerentes de Trade Marketing", descripcion: "Activaciones en punto de venta, impulso de ventas y programas de distribución." },
      { perfil: "Agencias de publicidad", descripcion: "Producción de activaciones BTL para los clientes de la agencia." },
    ],
    proceso: [
      { numero: "01", titulo: "Concepto", descripcion: "Definimos el insight, el objetivo y el formato de la activación." },
      { numero: "02", titulo: "Diseño y producción", descripcion: "Desarrollamos los materiales, estructuras y contenidos de la activación." },
      { numero: "03", titulo: "Activación", descripcion: "Ejecutamos con equipo propio en terreno, con coordinación en tiempo real." },
      { numero: "04", titulo: "Contenido y resultados", descripcion: "Capturamos el contenido generado y medimos el impacto de la activación." },
    ],
    proyectosRelacionados: ["parque-arauco-corrida-maipu"],
  },
  {
    slug: "ferias-stands",
    titulo: "Ferias y Stands",
    tagline: "No diseñamos stands. Diseñamos sistemas de conversión.",
    excerpt:
      "Diseño y producción de stands feriales que convierten visitas en leads. Estrategia de feria, arquitectura de stand y ejecución en todo Chile.",
    metaTitle: "Diseño y Producción de Stands para Ferias en Chile | LaPizarra",
    metaDescription:
      "Diseño y producción de stands feriales en Chile. Estrategia de feria, arquitectura de stand y ejecución en Santiago y regiones. Tres niveles según objetivos y presupuesto.",
    descripcion: [
      "Un stand que se ve bien pero no convierte es un gasto, no una inversión. El diseño del espacio, el flujo de atención y el material de apoyo determinan si tu equipo comercial puede hacer su trabajo durante la feria.",
      "En LaPizarra producimos stands feriales como sistemas de conversión comercial, no como arquitectura decorativa. Cada elemento del espacio está diseñado para facilitar el proceso de venta y maximizar el retorno de la inversión en feria.",
    ],
    queIncluye: [
      { titulo: "Estrategia y concepto del stand", descripcion: "Definimos el objetivo comercial y diseñamos el stand en función de él." },
      { titulo: "Diseño arquitectónico y de experiencia", descripcion: "Planos, renders y propuesta de flujo del stand." },
      { titulo: "Producción y montaje", descripcion: "Fabricación, traslado e instalación de todos los elementos del stand." },
      { titulo: "Señalética y material comercial", descripcion: "Gráficas, catálogos, pantallas y todo el soporte visual del stand." },
      { titulo: "Coordinación logística en feria", descripcion: "Gestión de acreditaciones, tiempos y coordinación con la organización." },
      { titulo: "Desmontaje y almacenamiento", descripcion: "Retiro del stand y gestión del material reutilizable." },
    ],
    paraQuien: [
      { perfil: "Gerentes Comerciales", descripcion: "Ferias B2B, exposición de producto y generación de leads para el equipo de ventas." },
      { perfil: "Gerentes de Marketing", descripcion: "Presencia de marca en ferias del sector, visibilidad y posicionamiento." },
      { perfil: "Equipos de ventas", descripcion: "Ferias y exposiciones con objetivo concreto de generación de contactos comerciales." },
    ],
    proceso: [
      { numero: "01", titulo: "Diagnóstico", descripcion: "Analizamos el objetivo comercial, la feria y el público esperado." },
      { numero: "02", titulo: "Diseño", descripcion: "Desarrollamos el concepto y la arquitectura del stand." },
      { numero: "03", titulo: "Producción", descripcion: "Fabricamos e instalamos todos los elementos del stand." },
      { numero: "04", titulo: "Feria y cierre", descripcion: "Coordinamos montaje, soporte durante la feria y desmontaje." },
    ],
    proyectosRelacionados: ["stellantis-leap-motor", "stellantis-jeep-commander"],
  },
  {
    slug: "lanzamientos-producto",
    titulo: "Lanzamientos de Producto",
    tagline: "El primer minuto define todo.",
    excerpt:
      "Presentaciones de producto, reveals y eventos de prensa que generan impacto mediático, contenido de alto valor y primeras ventas.",
    metaTitle: "Lanzamiento de Producto Eventos en Chile | LaPizarra",
    metaDescription:
      "Producción de lanzamientos de producto y eventos de presentación en Chile. Reveals, eventos de prensa y experiencias de producto que generan impacto mediático y primeras ventas.",
    descripcion: [
      "Un lanzamiento de producto es uno de los momentos más críticos en la vida de una marca. El evento no solo presenta el producto: define la narrativa que lo acompañará durante meses. Un lanzamiento bien producido genera cobertura mediática, contenido de alta calidad y las primeras ventas.",
      "En LaPizarra producimos lanzamientos para marcas que entienden que la primera impresión lo es todo. Desde reveals con alto impacto visual hasta presentaciones técnicas para distribuidores, cada proyecto está diseñado para hacer que el producto sea el protagonista absoluto.",
    ],
    queIncluye: [
      { titulo: "Concepto creativo y narrativa", descripcion: "Desarrollamos el mensaje central y la emoción que debe generar el lanzamiento." },
      { titulo: "Producción escénica de alto impacto", descripcion: "Escenografía, reveal, iluminación y efectos diseñados para el momento cumbre." },
      { titulo: "Producción audiovisual", descripcion: "Teaser, video de producto, highlight y contenido para redes sociales." },
      { titulo: "Experiencias de producto", descripcion: "Demostraciones, pruebas y activaciones de primer contacto con el producto." },
      { titulo: "Gestión de invitados y prensa", descripcion: "Coordinación de acreditaciones, medios y agenda del evento." },
      { titulo: "Contenido post-lanzamiento", descripcion: "Material audiovisual listo para su uso en comunicaciones y campañas." },
    ],
    paraQuien: [
      { perfil: "Brand Managers", descripcion: "Lanzamientos de nuevos productos, líneas o versiones al mercado." },
      { perfil: "Gerentes de Marketing", descripcion: "Presentaciones a distribuidores, eventos de prensa y activaciones de campaña." },
      { perfil: "Agencias de publicidad", descripcion: "Producción de lanzamientos para los clientes de la agencia." },
    ],
    proceso: [
      { numero: "01", titulo: "Narrativa", descripcion: "Definimos el mensaje central y la emoción que debe generar el lanzamiento." },
      { numero: "02", titulo: "Concepto y producción", descripcion: "Diseñamos la puesta en escena y producimos todos los elementos del evento." },
      { numero: "03", titulo: "Ejecución", descripcion: "Dirigimos el evento con foco total en el momento del reveal." },
      { numero: "04", titulo: "Contenido", descripcion: "Capturamos y entregamos el material audiovisual del lanzamiento." },
    ],
    proyectosRelacionados: ["stellantis-leap-motor", "stellantis-citroen-basalt", "stellantis-jeep-commander"],
  },
  {
    slug: "eventos-internos-empresas",
    titulo: "Eventos Internos y de Cultura",
    tagline: "Los mejores embajadores de tu marca trabajan adentro.",
    excerpt:
      "Eventos de cultura organizacional, reconocimientos, team building y kick-off para equipos que necesitan conectar, celebrar y alinearse.",
    metaTitle: "Eventos Internos para Empresas en Chile | Eventos RRHH | LaPizarra",
    metaDescription:
      "Producción de eventos internos para empresas en Chile: cultura organizacional, reconocimientos, team building y kick-off. Diseño y ejecución para equipos que necesitan conectar.",
    descripcion: [
      "El equipo es el activo más importante de cualquier organización. Un evento interno bien producido puede alinear estrategias, fortalecer la cultura y recargar la energía de los equipos de una manera que ningún correo ni presentación de PowerPoint puede lograr.",
      "En LaPizarra diseñamos eventos internos que generan impacto real en la cultura organizacional. Desde kick-off anuales hasta ceremonias de reconocimiento, cada evento parte de entender qué necesita el equipo vivir —no solo ver.",
    ],
    queIncluye: [
      { titulo: "Diseño de la experiencia y flujo del evento", descripcion: "Estructura del evento diseñada para generar los momentos que necesita el equipo." },
      { titulo: "Producción escénica", descripcion: "Escenografía, audio e iluminación al nivel de la ocasión." },
      { titulo: "Actividades de participación", descripcion: "Dinámicas, juegos y momentos interactivos diseñados para el equipo específico." },
      { titulo: "Producción audiovisual", descripcion: "Videos motivacionales, reconocimientos en pantalla y registro del evento." },
      { titulo: "Logística integral", descripcion: "Venue, catering, traslados y todo el soporte operativo del evento." },
      { titulo: "Dinámica de reconocimientos", descripcion: "Diseño y producción de premiaciones, distinciones y momentos de celebración." },
    ],
    paraQuien: [
      { perfil: "Directores de RRHH", descripcion: "Convenciones anuales, reconocimientos y celebraciones de hitos organizacionales." },
      { perfil: "Gerentes de Cultura", descripcion: "Eventos de alineamiento de valores, diagnósticos y activaciones culturales." },
      { perfil: "Comunicaciones Internas", descripcion: "Kick-off de año, lanzamiento de estrategias y comunicación de resultados al equipo." },
    ],
    proceso: [
      { numero: "01", titulo: "Diagnóstico cultural", descripcion: "Entendemos el estado del equipo y el objetivo concreto del evento." },
      { numero: "02", titulo: "Diseño de experiencia", descripcion: "Creamos un flujo que combine contenido, emoción y participación real." },
      { numero: "03", titulo: "Producción", descripcion: "Coordinamos todos los elementos para una ejecución sin fricciones." },
      { numero: "04", titulo: "Cierre y follow-up", descripcion: "Entregamos contenido del evento para comunicación interna post-jornada." },
    ],
    proyectosRelacionados: ["polpaico-convencion-clientes", "cool-carriers-convencion"],
  },
  {
    slug: "produccion-audiovisual-eventos",
    titulo: "Producción Audiovisual para Eventos",
    tagline: "Lo que no se graba, no existió.",
    excerpt:
      "Cobertura de eventos, streaming en vivo y producción de contenido audiovisual para extender el impacto de tus eventos más allá del día.",
    metaTitle: "Producción Audiovisual para Eventos Corporativos en Chile | LaPizarra",
    metaDescription:
      "Producción audiovisual para eventos corporativos en Chile: streaming en vivo, cobertura fotográfica y de video, contenido para redes sociales y edición post-evento.",
    descripcion: [
      "El evento dura un día. El contenido audiovisual dura meses. Una producción audiovisual bien ejecutada extiende el impacto del evento, genera contenido para canales digitales y entrega a la organización material de alto valor para comunicación interna y externa.",
      "En LaPizarra integramos la producción audiovisual al diseño del evento desde el inicio —no como un servicio adicional, sino como parte de la estrategia. Cada evento es también una plataforma de contenido.",
    ],
    queIncluye: [
      { titulo: "Cobertura fotográfica y de video", descripcion: "Registro profesional del evento con criterio editorial, no solo cobertura de prensa." },
      { titulo: "Streaming en vivo", descripcion: "Transmisión multicanal para audiencias remotas con producción de calidad broadcast." },
      { titulo: "Video corporativo", descripcion: "Producción de piezas audiovisuales antes, durante o después del evento." },
      { titulo: "Contenido para redes sociales", descripcion: "Generación y publicación de contenido en tiempo real durante el evento." },
      { titulo: "Videos motivacionales y highlights", descripcion: "Piezas de impacto para comunicación interna y uso en próximos eventos." },
      { titulo: "Edición y entrega post-evento", descripcion: "Edición completa y entrega del material en los formatos requeridos." },
    ],
    paraQuien: [
      { perfil: "Gerentes de Marketing", descripcion: "Contenido de alto valor para campañas, redes sociales y comunicaciones externas." },
      { perfil: "Directores de Comunicaciones", descripcion: "Cobertura de eventos estratégicos para archivo, prensa y comunicación corporativa." },
      { perfil: "Gerentes de RRHH", descripcion: "Material de cultura organizacional, reconocimientos y memoria institucional." },
    ],
    proceso: [
      { numero: "01", titulo: "Brief audiovisual", descripcion: "Definimos qué piezas se necesitan, para qué canales y con qué objetivos." },
      { numero: "02", titulo: "Planificación", descripcion: "Diseñamos la cobertura para capturar los momentos clave del evento." },
      { numero: "03", titulo: "Producción en evento", descripcion: "Cubrimos el evento con equipo técnico dedicado e independiente del equipo de producción." },
      { numero: "04", titulo: "Post-producción", descripcion: "Editamos y entregamos el material en los formatos y plazos acordados." },
    ],
    proyectosRelacionados: ["stellantis-leap-motor", "stellantis-citroen-basalt", "parque-arauco-corrida-maipu"],
  },
];
