export type Proyecto = {
  slug: string;
  cliente: string;
  titulo: string;
  fotos: string[];
  heroFoto?: string; // fuerza una foto específica como principal
  videos?: string[]; // YouTube IDs
  objetivo: string;
  conceptoCreativo: string;
  resultado: string;
};

export const proyectos: Proyecto[] = [
  {
    slug: "polpaico-convencion-clientes",
    cliente: "Polpaico",
    titulo: "Convención de Clientes",
    fotos: [
      "/galeria/1.jpg",
      "/galeria/2.jpg",
      "/galeria/3.jpg",
      "/galeria/4.jpg",
      "/galeria/5.jpg",
      "/galeria/6.jpg",
      "/galeria/12.jpg",
      "/galeria/7.jpg",
      "/galeria/8.jpg",
      "/galeria/9.jpg",
      "/galeria/10.jpg",
      "/galeria/11.jpg",
    ],
    objetivo:
      "Reunir a los principales clientes y distribuidores de Polpaico en un evento que reforzara el vínculo comercial, comunicara los resultados del año y proyectara la visión estratégica de la compañía para el período siguiente.",
    conceptoCreativo:
      "Diseñamos una experiencia centrada en la solidez y la confianza: los mismos valores que Polpaico transmite en cada uno de sus productos. La producción combinó una puesta en escena sobria y de alto estándar con momentos de conexión genuina entre los asistentes, reforzando el mensaje de que la relación con sus clientes es el centro del negocio.",
    resultado:
      "El evento congregó a más de 200 clientes y distribuidores en un ambiente que elevó la percepción de marca. La jornada incluyó presentaciones ejecutivas, reconocimientos a los mejores socios comerciales y una instancia de networking estructurada que generó nuevas oportunidades de negocio.",
  },
  {
    slug: "stellantis-leap-motor",
    cliente: "Stellantis",
    titulo: "Formación Comercial Leap Motor",
    videos: ["jpXMz12JjXU"],
    fotos: [
      "/galeria2/1.jpg",
      "/galeria2/2.jpg",
      "/galeria2/3.jpg",
      "/galeria2/4.jpg",
      "/galeria2/5.jpg",
      "/galeria2/6.jpg",
      "/galeria2/7.jpg",
      "/galeria2/8.jpg",
      "/galeria2/9.jpg",
      "/galeria2/10.jpg",
    ],
    objetivo:
      "Introducir la nueva marca Leap Motor al equipo comercial de Stellantis Chile, entregando una formación inmersiva que combinara conocimiento de producto, posicionamiento de marca y motivación comercial para el lanzamiento al mercado.",
    conceptoCreativo:
      "Concebimos la jornada como un viaje de descubrimiento. Cada estación del evento representaba una dimensión de la marca: tecnología, diseño, sostenibilidad y rendimiento. La producción fue diseñada para que los vendedores vivieran en carne propia la propuesta de valor antes de transmitirla a sus clientes.",
    resultado:
      "Más de 80 ejecutivos y vendedores participaron en la jornada de formación. Al cierre del evento, el equipo contaba con materiales de apoyo, argumentarios de venta y una experiencia de marca que aceleró significativamente la curva de adopción comercial en los primeros meses de lanzamiento.",
  },
  {
    slug: "cool-carriers-convencion",
    cliente: "Cool Carriers",
    titulo: "Convención de Clientes 2025",
    videos: ["lNUHjeq-81s"],
    fotos: [
      "/galeria3/1.jpg",
      "/galeria3/2.jpg",
      "/galeria3/3.jpg",
      "/galeria3/4.jpg",
      "/galeria3/5.jpg",
      "/galeria3/6.jpg",
      "/galeria3/7.jpg",
      "/galeria3/8.jpg",
      "/galeria3/9.jpg",
      "/galeria3/10.jpg",
      "/galeria3/11.jpg",
    ],
    objetivo:
      "Fortalecer las relaciones con los principales clientes de Cool Carriers en Chile, destacando el rol estratégico de la compañía en la cadena de frío y proyectando su crecimiento regional en un contexto de expansión del negocio.",
    conceptoCreativo:
      "El concepto giró en torno a la precisión: el mismo valor que Cool Carriers entrega en cada operación logística. La producción apostó por una estética limpia, internacional y de alto estándar, coherente con la identidad global de la marca y con las expectativas de una audiencia exigente y acostumbrada a eventos de clase mundial.",
    resultado:
      "La convención reunió a clientes clave de distintas industrias en una jornada que combinó presentaciones de negocio, lanzamiento de nuevas rutas y un cóctel de cierre que facilitó la conversación comercial en un ambiente distendido. El feedback de los asistentes fue consistentemente positivo en cuanto a la calidad de la producción y la organización.",
  },
  {
    slug: "orsan-seguros-convencion",
    cliente: "Orsan Seguros",
    titulo: "Convención de Corredores",
    fotos: [
      "/galeria4/1.jpg",
      "/galeria4/2.jpg",
      "/galeria4/3.jpg",
      "/galeria4/4.jpg",
      "/galeria4/5.jpg",
      "/galeria4/6.jpg",
      "/galeria4/7.jpg",
      "/galeria4/8.jpg",
      "/galeria4/9.jpg",
      "/galeria4/10.jpg",
    ],
    objetivo:
      "Convocar a la red de corredores independientes de Orsan Seguros para comunicar los resultados del año, presentar las nuevas coberturas y reforzar el sentido de pertenencia y orgullo de pertenecer a una de las compañías de seguros de mayor crecimiento en Chile.",
    conceptoCreativo:
      "Diseñamos una experiencia que equilibrara el reconocimiento individual con el sentido de comunidad. La puesta en escena fue cálida pero profesional, con momentos de premiación bien producidos que celebraron los logros de los mejores corredores y motivaron al resto a alcanzar nuevas metas.",
    resultado:
      "El evento reunió a más de 150 corredores de todo Chile. La jornada incluyó presentación de resultados, lanzamiento de nuevos productos, ceremonia de premiación y un cierre de alto impacto que generó conversación entre los asistentes semanas después del evento.",
  },
  {
    slug: "stellantis-citroen-basalt",
    cliente: "Stellantis",
    titulo: "Formación Comercial Citroën Basalt",
    heroFoto: "/galeria5/7.jpg",
    fotos: [
      "/galeria5/0.jpg",
      "/galeria5/1.jpg",
      "/galeria5/2.jpg",
      "/galeria5/3.jpg",
      "/galeria5/4.jpg",
      "/galeria5/5.jpg",
      "/galeria5/6.jpg",
      "/galeria5/7.jpg",
      "/galeria5/8.jpg",
      "/galeria5/9.jpg",
      "/galeria5/10.jpg",
    ],
    objetivo:
      "Preparar al equipo de ventas de Citroën Chile para el lanzamiento del nuevo Basalt, un modelo que ingresaba a un segmento altamente competitivo y que requería una fuerza de venta profundamente convencida de su propuesta de valor.",
    conceptoCreativo:
      "El evento fue diseñado como un lanzamiento interno antes del lanzamiento al público. Apostamos por una producción que generara anticipación y deseo, con una reveal en vivo del vehículo, estaciones de experiencia de producto y una sesión de manejo que permitió a los vendedores conocer el auto desde adentro.",
    resultado:
      "La jornada impactó a 60 vendedores de la red Citroën. El 95% de los participantes calificó el evento como excelente o muy bueno. En las semanas posteriores, el equipo comercial reportó mayor seguridad y convicción al momento de presentar el modelo a los clientes finales.",
  },
  {
    slug: "stellantis-jeep-commander",
    cliente: "Stellantis",
    titulo: "Formación Comercial Jeep Commander",
    videos: ["503CFR2-nbc"],
    fotos: [
      "/galeria7/1.jpg",
      "/galeria7/2.jpg",
      "/galeria7/3.jpg",
      "/galeria7/4.jpg",
      "/galeria7/5.jpg",
      "/galeria7/6.jpg",
      "/galeria7/7.jpg",
      "/galeria7/8.jpg",
      "/galeria7/9.jpg",
      "/galeria7/10.jpg",
    ],
    objetivo:
      "Preparar al equipo comercial de Jeep Chile para el lanzamiento del Commander, dotándolos de un conocimiento profundo del modelo, sus argumentos de venta diferenciadores y la experiencia de marca necesaria para transmitir con convicción la propuesta de valor a sus clientes.",
    conceptoCreativo:
      "Diseñamos la jornada como una experiencia de inmersión en el universo Jeep: aventura, capacidad y libertad. Cada módulo del programa estuvo pensado para que los vendedores vivieran en primera persona los atributos del Commander, desde las especificaciones técnicas hasta una sesión de manejo que les permitió descubrir el auto desde adentro antes de presentarlo al mercado.",
    resultado:
      "La formación impactó a toda la red comercial de Jeep Chile. Los participantes cerraron la jornada con materiales de apoyo completos, argumentarios de venta consolidados y una experiencia directa con el vehículo que se tradujo en mayor seguridad y entusiasmo al momento de enfrentar a los primeros compradores.",
  },
  {
    slug: "parque-arauco-corrida-maipu",
    cliente: "Parque Arauco",
    titulo: "Corrida de Maipú 2024",
    videos: ["4uyNXJ2N6ow"],
    fotos: [
      "/galeria6/1.jpg",
      "/galeria6/2.jpg",
      "/galeria6/3.jpg",
      "/galeria6/4.jpg",
      "/galeria6/5.jpg",
      "/galeria6/6.jpg",
      "/galeria6/7.jpg",
      "/galeria6/8.jpg",
      "/galeria6/9.jpg",
      "/galeria6/10.jpg",
      "/galeria6/11.jpg",
    ],
    objetivo:
      "Organizar y producir la Corrida de Maipú 2024, un evento masivo de activación comunitaria asociado al mall Parque Arauco Maipú, con el objetivo de fortalecer el vínculo entre la marca y la comunidad local a través del deporte.",
    conceptoCreativo:
      "La producción integró todos los elementos de una carrera de alto estándar con una identidad visual coherente con la marca. El recorrido, la señalética, la zona de partida y llegada, el sistema de cronometraje y la premiación fueron diseñados como una experiencia unificada que reflejara los valores de Parque Arauco: familia, comunidad y bienestar.",
    resultado:
      "Más de 5.000 corredores participaron en las distintas categorías del evento. La cobertura en redes sociales superó las proyecciones iniciales, con miles de menciones orgánicas durante el día de la carrera. El evento se consolidó como un referente deportivo en la comuna de Maipú.",
  },
  {
    slug: "stellantis-capsulas-formacion",
    cliente: "Stellantis",
    titulo: "Cápsulas de Formación Corporativa",
    fotos: [
      "/galeria8/1.jpg",
      "/galeria8/2.jpg",
      "/galeria8/3.jpg",
      "/galeria8/4.jpg",
      "/galeria8/5.jpg",
    ],
    objetivo:
      "Las organizaciones líderes enfrentan un desafío constante: mantener a sus equipos alineados, actualizados y preparados en entornos cada vez más dinámicos. Bajo esa necesidad, desarrollamos junto a Stellantis un proyecto audiovisual enfocado en fortalecer la comunicación interna y los procesos de formación mediante una biblioteca de más de 200 cápsulas de alto estándar. El objetivo fue transformar información relevante para la operación diaria —productos, procesos, cultura de servicio, protocolos— en piezas audiovisuales claras, ágiles y atractivas, capaces de facilitar comprensión, reforzar mensajes clave y mejorar la experiencia de aprendizaje de los equipos de venta y postventa. Más que producir videos aislados, el desafío consistió en construir un sistema de contenidos consistente, escalable y sostenible en el tiempo.",
    conceptoCreativo:
      "La idea central fue simple: comunicar y enseñar con los códigos actuales de consumo de contenido. Diseñamos una metodología basada en cápsulas breves, visuales y directas, enfocadas en transmitir mensajes de forma clara y memorable. Cada pieza fue desarrollada bajo principios de microlearning audiovisual, combinando síntesis, ritmo narrativo y una producción cuidada para elevar la percepción del contenido interno. La producción se desarrolla en INACAP Vitacura, espacio que permite operar con eficiencia logística, jornadas estructuradas de grabación y condiciones técnicas adecuadas para un proyecto de alto volumen. Desde lo visual, nos alejamos del formato corporativo tradicional para acercarnos a estándares contemporáneos de comunicación digital: dirección audiovisual profesional, iluminación cuidada, sonido limpio, edición ágil, motion graphics corporativos e identidad visual consistente en cada pieza. Desde lo narrativo, cada cápsula sigue una estructura diseñada para maximizar atención y comprensión: inicio dinámico, contexto claro, desarrollo concreto, refuerzo visual y cierre orientado a aplicación real.",
    resultado:
      "El resultado es una plataforma audiovisual sólida y escalable para Stellantis, diseñada para acompañar procesos internos de formación y comunicación de manera moderna y eficiente. La organización cuenta hoy con una biblioteca audiovisual de más de 200 piezas que puede crecer, actualizarse y seguir generando valor en el tiempo. Los equipos reciben contenido breve, claro y atractivo que mejora predisposición, atención y recordación. Los mensajes se distribuyen de forma homogénea, fortaleciendo alineación interna. Nuevas necesidades comunicacionales pueden transformarse rápidamente en contenido útil y bien producido. Las cápsulas pueden revisarse cuando sea necesario, facilitando consulta, onboarding y reforzamiento continuo. Este proyecto confirma algo esencial: LaPizarra no solo desarrolla eventos y experiencias presenciales; también crea experiencias audiovisuales que fortalecen a las organizaciones desde adentro. Cuando una empresa necesita transformar información en impacto, nos convertimos en el socio estratégico capaz de lograrlo.",
  },
];

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
