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
  published?: boolean;
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
      "Polpaico es una de las marcas más reconocidas de la industria de materiales de construcción en Chile. Con décadas de trayectoria y una red de clientes y distribuidores que abarca todo el territorio nacional, la compañía enfrenta un desafío que comparten las marcas líderes: mantener y profundizar vínculos comerciales genuinos en un mercado cada vez más competitivo y acelerado. Bajo ese contexto, Polpaico nos convocó para diseñar y producir su Convención de Clientes en Concepción, un evento corporativo de alto estándar destinado a reunir a sus 200 principales clientes y distribuidores en una experiencia que fuera mucho más allá de una reunión anual tradicional. El objetivo era múltiple y ambicioso. Por una parte, comunicar los resultados del año y proyectar la visión estratégica de la compañía para el período siguiente, en un formato que generara impacto real y no solo información. Por otra, fortalecer el posicionamiento de Polpaico como una marca moderna, cercana y ligada a la innovación tecnológica, capaz de acompañar a sus socios comerciales no solo en el presente, sino también en el futuro de la industria. Además, el evento debía ser una instancia de conexión genuina: un espacio donde los principales referentes de la red comercial de Polpaico pudieran reconocerse, compartir y sentir que pertenecen a algo más grande que una relación transaccional. Organizar una convención de clientes de esta magnitud en Concepción requería también una lectura precisa del contexto regional. La Región del Biobío concentra una parte significativa de la actividad de construcción del país, y muchos de los distribuidores más relevantes de Polpaico operan en ese territorio. Llevar el evento al corazón de esa región fue en sí mismo un mensaje: Polpaico está presente donde sus clientes están.",
    conceptoCreativo:
      "El concepto creativo de esta convención de clientes nació de una tensión aparente: cómo construir una experiencia íntima y cercana para 200 personas, sin perder el impacto y la escala propios de un evento corporativo de alto nivel. La respuesta fue diseñar una propuesta tecnológica envolvente que, paradójicamente, potenciara la conexión humana en lugar de reemplazarla. Trabajamos con una puesta en escena que integraba tecnología audiovisual de última generación —pantallas LED de gran formato, iluminación dinámica programada, sonido envolvente en todo el recinto— pero al servicio de una narrativa cálida y directa. La tecnología no fue el centro del evento: fue el vehículo que permitió que los mensajes de Polpaico llegaran con mayor fuerza, claridad y emoción. Cada momento de la jornada fue coreografiado para alternar entre instancias de impacto colectivo e instancias de conversación real. Las presentaciones ejecutivas utilizaron recursos visuales que facilitaban la comprensión de datos complejos, transformando cifras y proyecciones en relatos comprensibles y motivadores. El uso estratégico de la tecnología permitió que cada asistente, independientemente de dónde estuviera sentado en la sala, viviera la misma experiencia con la misma intensidad. Desde lo conceptual, el hilo conductor del evento fue el de Polpaico como marca constructora de futuro: una compañía con raíces sólidas, capaz de evolucionar con las necesidades de sus clientes y de incorporar innovación sin perder su esencia cercana y confiable. Este posicionamiento fue desplegado de manera consistente en todos los elementos de producción: desde la identidad visual del evento hasta el diseño de los espacios, pasando por la selección de los contenidos y el tono de cada intervención. La elección de Concepción como sede no fue casual. Fue parte del concepto: un evento corporativo que se instala en el territorio donde viven y trabajan sus clientes más relevantes transmite un compromiso territorial que ningún discurso puede igualar. Producir una convención de clientes de este nivel en la Región del Biobío fue también una declaración de intenciones sobre el tipo de marca que Polpaico quiere ser.",
    resultado:
      "La Convención de Clientes de Polpaico en Concepción reunió a más de 200 clientes y distribuidores en una jornada que elevó la percepción de marca de manera significativa. El evento logró combinar con éxito la comunicación estratégica de los resultados y proyecciones de la compañía con momentos de reconocimiento, celebración y conexión genuina entre los asistentes. Las presentaciones ejecutivas fueron recibidas con alto nivel de atención e involucramiento, resultado directo del soporte audiovisual y de la cuidada producción del evento, que transformó información corporativa en un relato motivador. Los reconocimientos a los mejores socios comerciales del período generaron momentos de emoción colectiva que reforzaron el sentido de pertenencia y orgullo de pertenecer a la red de distribución de Polpaico. La instancia de networking estructurada que formó parte del programa permitió que clientes de distintas regiones del país se conectaran entre sí, generando conversaciones y oportunidades que difícilmente habrían ocurrido en otro contexto. Desde el punto de vista del posicionamiento de marca, el evento cumplió con precisión el objetivo estratégico: Polpaico fue percibida por sus clientes y distribuidores como una compañía moderna, tecnológicamente actualizada y genuinamente comprometida con su red comercial. La propuesta tecnológica envolvente no solo impresionó a los asistentes, sino que reforzó el mensaje de que Polpaico es una marca que invierte en la relación con sus socios. Para LaPizarra, esta convención de clientes en Concepción representa un ejemplo claro de lo que puede lograr una producción de eventos corporativos bien concebida: alinear equipos, comunicar estrategia, fortalecer marca y generar vínculos comerciales duraderos. Todo en una sola experiencia.",
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
      "Cool Carriers es una de las empresas líderes en logística de temperatura controlada en Chile y Latinoamérica. Con una red de clientes que abarca las principales industrias del país —alimentos, farmacéutica, retail, exportación— la compañía opera en un mercado donde la confianza y la continuidad de las relaciones comerciales son tan importantes como la eficiencia operativa. En ese contexto, Cool Carriers nos encargó el diseño y producción de su Convención de Clientes 2025, un evento corporativo de alto estándar realizado en uno de los venues más destacados del sector oriente de Santiago. El objetivo era claro pero exigente: reunir a sus 150 principales clientes en una experiencia que fuera mucho más que una cena de negocios, y que lograra fortalecer los lazos comerciales existentes, proyectar relaciones de largo plazo y transmitir el compromiso de Cool Carriers con quienes confían en su operación día a día. Para una empresa cuyo negocio se basa en la precisión y la confiabilidad, el evento debía reflejar exactamente esos mismos valores: impecable en cada detalle, generoso en la experiencia, inolvidable en el resultado. La convención de clientes en Santiago debía convertirse en un punto de inflexión en la relación entre la empresa y su red comercial: un momento donde cada asistente pudiera sentir el peso real del vínculo que los une y la solidez de la propuesta de valor que Cool Carriers representa para sus negocios.",
    conceptoCreativo:
      "El concepto creativo de esta convención de clientes en Santiago partió de una premisa simple: las mejores relaciones comerciales no se construyen en reuniones de trabajo, sino en experiencias compartidas que generan recuerdos. Por eso diseñamos una jornada que priorizó la calidad de cada momento sobre la cantidad de contenido, apostando por una producción de eventos que elevara la experiencia de los 150 asistentes desde el minuto en que ingresaban al venue. La elección de una locación única en el sector oriente de Santiago fue parte central del concepto. Un espacio de esas características —con arquitectura de carácter, ambientes que permiten tanto la reunión íntima como el evento de gala, y una ubicación que transmite distinción— envía un mensaje sin necesidad de palabras: Cool Carriers cuida a sus clientes con el mismo estándar con el que cuida su cadena de frío. La gastronomía de primer nivel fue otro eje fundamental del diseño experiencial. Trabajamos con una propuesta culinaria a la altura del evento: selección cuidada de menú, presentación impecable y un servicio que complementó la calidad de la producción en cada mesa. En un evento donde el networking y la conversación son el verdadero propósito, la gastronomía opera como un catalizador de conexión: una buena mesa invita a quedarse, a conversar, a construir. La música en vivo fue el elemento que completó la atmósfera. Seleccionada para generar un ambiente que equilibrara la energía del encuentro con la posibilidad de conversación fluida, la propuesta musical acompañó cada fase de la noche sin interrumpirla, creando un telón de fondo que elevó la percepción del evento y reforzó el carácter especial de la ocasión. Desde la producción audiovisual hasta la ambientación del espacio, cada elemento fue diseñado con coherencia y criterio, asegurando que la identidad de Cool Carriers estuviera presente en cada detalle sin necesidad de ser explícita.",
    resultado:
      "La Convención de Clientes 2025 de Cool Carriers en Santiago reunió a 150 de sus principales clientes en una noche que superó las expectativas en todos los frentes. La locación del sector oriente de Santiago generó impacto desde el primer momento: el venue por sí solo comunicó el nivel de la ocasión y la valoración que la compañía tiene por su red comercial. La gastronomía y la música en vivo crearon un ambiente que favoreció la conversación espontánea y el networking genuino, exactamente lo que una convención de clientes bien producida debe lograr. Las instancias de presentación de negocio fueron recibidas con alto nivel de atención e interés, potenciadas por una producción audiovisual que facilitó la comunicación de los mensajes estratégicos de la compañía. Los clientes presentes tuvieron la oportunidad de conocer las proyecciones de crecimiento y las nuevas rutas que Cool Carriers está desarrollando, en un contexto que favorecía la escucha y la conversación. El feedback posterior al evento fue consistentemente positivo: los asistentes destacaron la calidad de la producción, el nivel de la experiencia gastronómica y musical, y la sensación de haber participado en algo genuinamente especial. Para Cool Carriers, el resultado más importante fue intangible pero medible en el tiempo: clientes que se fueron del evento con un sentido renovado de pertenencia y con la convicción de que su relación con la compañía va mucho más allá de una transacción logística. Para LaPizarra, esta convención de clientes en Santiago confirma que los eventos corporativos bien concebidos son una de las herramientas más poderosas para construir relaciones comerciales de largo plazo.",
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
      "Orsan Seguros es una compañía de seguros de crecimiento sostenido en Chile, cuya red de corredores independientes constituye uno de sus activos comerciales más relevantes. Los corredores de seguros operan en un mercado altamente competitivo, donde la elección de con qué compañía trabajar depende tanto de la calidad del producto como de la solidez de la relación con la aseguradora. Mantener esa relación activa, motivada y alineada es un desafío estratégico que requiere más que comunicación rutinaria. Bajo ese contexto, Orsan Seguros nos convocó para diseñar y producir su Convención de Corredores en Santiago, un evento corporativo para 80 de sus principales corredores realizado en un rooftop en Providencia con vistas privilegiadas a la ciudad. El evento tenía dos objetivos igualmente importantes. El primero: comunicar el lanzamiento de una nueva plataforma digital desarrollada para facilitar y potenciar el trabajo diario de los corredores, una herramienta que transformaba la forma en que gestionarían sus operaciones con Orsan desde ese momento en adelante. El segundo: reforzar los lazos comerciales con los corredores más relevantes de su red, generando una instancia de encuentro genuino que reafirmara el compromiso de Orsan Seguros con quienes eligen representar su marca en el mercado. La elección de un rooftop en Providencia no fue casual: la locación debía estar a la altura de la ocasión y transmitir, desde el primer momento, que este evento era diferente a cualquier reunión de negocio anterior.",
    conceptoCreativo:
      "El concepto creativo de esta convención de corredores en Santiago partió de una tensión productiva: cómo comunicar un lanzamiento tecnológico relevante —una nueva plataforma digital— sin que el evento se convirtiera en una presentación técnica fría y desconectada de las personas. La respuesta fue diseñar una experiencia que pusiera a los corredores en el centro, utilizando el lanzamiento de la plataforma como el punto de partida de una conversación sobre el futuro de la relación entre Orsan y su red comercial. El rooftop en Providencia fue la locación perfecta para ese concepto. Un espacio abierto, con la ciudad de Santiago como telón de fondo, transmite apertura, amplitud y visión de futuro: exactamente los atributos que Orsan quería asociar tanto a su nueva plataforma como a su posicionamiento de marca. Producir un evento corporativo en un rooftop de Providencia también implica un desafío técnico que requiere experiencia: iluminación que funcione en la transición del día a la noche, sonido que opere en espacios abiertos sin perder calidad, ambientación que genere intimidad dentro de un entorno de gran escala. Cada uno de esos elementos fue resuelto con precisión para que los 80 corredores presentes vivieran una experiencia coherente de principio a fin. La presentación de la nueva plataforma fue diseñada como un momento de revelación, no como una capacitación. Utilizamos recursos audiovisuales que mostraban el impacto concreto de la herramienta en la operación diaria de un corredor, haciendo tangible lo que en papel podría haberse percibido como una mejora abstracta. El objetivo era que cada asistente saliera del evento entendiendo no solo qué era la plataforma, sino por qué cambiaba su día a día. La instancia social que rodeó la presentación fue diseñada con el mismo cuidado: gastronomía acorde al nivel del evento, ambiente que favorecía la conversación y un clima general que equilibraba la formalidad del negocio con la calidez de un encuentro entre personas que comparten un propósito.",
    resultado:
      "La Convención de Corredores de Orsan Seguros en Providencia reunió a 80 de sus principales corredores en una noche que cumplió ambos objetivos con claridad. El lanzamiento de la nueva plataforma digital fue recibido con alto nivel de interés y entusiasmo: los corredores presentes pudieron ver en vivo las funcionalidades de la herramienta y comprender de inmediato el impacto que tendría en su operación. La presentación, apoyada por una producción audiovisual cuidada y un formato que priorizaba la comprensión sobre la densidad técnica, generó preguntas, conversación y una adopción temprana significativamente mayor a la proyectada. El rooftop en Providencia como locación del evento corporativo cumplió su rol de manera precisa: generó impacto desde la llegada, facilitó una atmósfera de encuentro genuino y ofreció un contexto visual que ninguna sala de convenciones tradicional podría haber igualado. Los 80 corredores presentes experimentaron una noche que les comunicó, sin necesidad de decirlo explícitamente, cuánto los valora Orsan Seguros. El resultado más duradero fue el fortalecimiento del vínculo comercial. En un mercado donde los corredores de seguros pueden elegir con qué compañías trabajar, eventos como este son inversiones estratégicas que generan lealtad, diferenciación y preferencia en el largo plazo. Para LaPizarra, esta convención de corredores en Santiago es un ejemplo de cómo un evento corporativo bien ejecutado puede ser simultáneamente un lanzamiento de producto, una instancia de relacionamiento y una declaración de valores de marca.",
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
      "Parque Arauco es uno de los operadores de centros comerciales más relevantes de Chile y Latinoamérica. Con presencia en múltiples comunas y un posicionamiento que trasciende el retail para convertirse en un punto de encuentro comunitario, la compañía entiende que su relación con el entorno local es uno de sus activos más valiosos. Bajo esa convicción, Parque Arauco Maipú nos convocó para diseñar y producir la Corrida de Maipú 2024, uno de los eventos deportivos comunitarios más importantes de la comuna, con más de 5.000 corredores participantes en sus distintas categorías. El objetivo central era producir una activación masiva de marca a través del deporte, utilizando la carrera como vehículo para fortalecer el vínculo entre Parque Arauco y la comunidad de Maipú. En una comuna de alta densidad poblacional y con una identidad territorial fuerte, un evento de estas características tiene un impacto que ninguna campaña publicitaria convencional puede replicar: lleva la marca al territorio, la hace parte de la vida cotidiana de las personas y la asocia con valores genuinos como la salud, la familia y el esfuerzo. Más allá de la activación puntual, el evento buscaba consolidar a la Corrida de Maipú como un hito deportivo y comunitario recurrente, capaz de crecer en convocatoria y relevancia en cada edición. Producir un evento masivo de running en Maipú requería, además, una coordinación logística y operacional de primer nivel: coordinación con autoridades municipales, diseño del recorrido, habilitación de espacios, gestión de permisos, seguridad vial, sistemas de cronometraje y una experiencia de participante que estuviera a la altura del estándar de marca de Parque Arauco.",
    conceptoCreativo:
      "El concepto creativo de la Corrida de Maipú 2024 partió de una premisa que define los mejores eventos deportivos comunitarios: una carrera de calle no es solo competencia, es celebración. Diseñamos toda la experiencia bajo ese principio, asegurándonos de que cada elemento de la producción —desde la zona de largada hasta la ceremonia de premiación— transmitiera energía, inclusión y orgullo de comunidad. La identidad visual del evento fue desarrollada con coherencia de marca, integrando los colores y valores de Parque Arauco en una gráfica deportiva vibrante y contemporánea que estuvo presente en la señalética del recorrido, el vestuario oficial, los materiales del kit del corredor, el escenario principal y todas las comunicaciones previas al evento. El objetivo era que cualquier foto tomada durante la carrera fuera, al mismo tiempo, una pieza de comunicación de marca. El recorrido fue diseñado con criterio tanto deportivo como experiencial: un trazado que recorre las principales arterias de Maipú, que pasa en momentos estratégicos frente al mall y que ofrece a los corredores una perspectiva de su propio barrio que pocas veces tienen. Correr por las calles de tu comuna es una experiencia con una carga emocional particular, y esa carga fue parte deliberada del concepto. La zona de partida y llegada fue producida como el corazón del evento: escenario con pantalla LED, sistema de sonido de alto impacto, animación en vivo y un ambiente que generaba adrenalina antes del disparo de largada y emoción genuina en cada llegada a meta. Las categorías del evento —5K, 10K y corridas infantiles— fueron pensadas para garantizar la participación de toda la familia, convirtiendo la jornada en un evento multigeneracional que reforzaba exactamente los valores que Parque Arauco quiere asociar a su marca: familia, comunidad y bienestar activo.",
    resultado:
      "La Corrida de Maipú 2024 superó todas las proyecciones en convocatoria, participación y repercusión. Más de 5.000 corredores completaron las distintas categorías del evento, convirtiéndola en una de las carreras de calle más concurridas de la historia reciente de la comuna. La diversidad de participantes —desde atletas competitivos hasta familias con niños corriendo su primera carrera— reflejó el carácter inclusivo y comunitario que fue central en el diseño del evento. La cobertura orgánica en redes sociales superó ampliamente las proyecciones iniciales. Miles de publicaciones, historias y menciones espontáneas durante el día de la carrera convirtieron el evento en tendencia local, extendiendo el alcance de la marca Parque Arauco mucho más allá de los 5.000 participantes presentes. Cada corredor que compartió su dorsal, su tiempo o su foto de llegada se convirtió en un embajador espontáneo del evento y, por extensión, de la marca. La producción logística funcionó con precisión: cronometraje oficial, señalética clara en todo el recorrido, habilitación segura de calles, atención médica en puntos estratégicos y una operación de hidratación y soporte que garantizó la experiencia de cada participante. La ceremonia de premiación cerró el evento con el nivel de producción que caracterizó toda la jornada, reconociendo a los ganadores de cada categoría en un escenario que hizo sentir a cada premiado que su logro era celebrado por toda la comunidad. La Corrida de Maipú 2024 quedó instalada como un referente deportivo en la comuna y como un modelo de evento de activación de marca a través del deporte. Para LaPizarra, este proyecto confirma que los eventos masivos de running son una de las herramientas más poderosas del marketing experiencial: generan impacto territorial, construyen marca con autenticidad y crean recuerdos que ninguna pantalla puede competir.",
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
      "La idea central fue simple: comunicar y enseñar con los códigos actuales de consumo de contenido. Diseñamos una metodología basada en cápsulas breves, visuales y directas, enfocadas en transmitir mensajes de forma clara y inolvidable. Cada pieza fue desarrollada bajo principios de microlearning audiovisual, combinando síntesis, ritmo narrativo y una producción cuidada para elevar la percepción del contenido interno. La producción se desarrolla en INACAP Vitacura, espacio que permite operar con eficiencia logística, jornadas estructuradas de grabación y condiciones técnicas adecuadas para un proyecto de alto volumen. Desde lo visual, nos alejamos del formato corporativo tradicional para acercarnos a estándares contemporáneos de comunicación digital: dirección audiovisual profesional, iluminación cuidada, sonido limpio, edición ágil, motion graphics corporativos e identidad visual consistente en cada pieza. Desde lo narrativo, cada cápsula sigue una estructura diseñada para maximizar atención y comprensión: inicio dinámico, contexto claro, desarrollo concreto, refuerzo visual y cierre orientado a aplicación real.",
    resultado:
      "El resultado es una plataforma audiovisual sólida y escalable para Stellantis, diseñada para acompañar procesos internos de formación y comunicación de manera moderna y eficiente. La organización cuenta hoy con una biblioteca audiovisual de más de 200 piezas que puede crecer, actualizarse y seguir generando valor en el tiempo. Los equipos reciben contenido breve, claro y atractivo que mejora predisposición, atención y recordación. Los mensajes se distribuyen de forma homogénea, fortaleciendo alineación interna. Nuevas necesidades comunicacionales pueden transformarse rápidamente en contenido útil y bien producido. Las cápsulas pueden revisarse cuando sea necesario, facilitando consulta, onboarding y reforzamiento continuo. Este proyecto confirma algo esencial: LaPizarra no solo desarrolla eventos y experiencias presenciales; también crea experiencias audiovisuales que fortalecen a las organizaciones desde adentro. Cuando una empresa necesita transformar información en impacto, nos convertimos en el socio estratégico capaz de lograrlo.",
  },
  {
    slug: "novo-nordisk-unordinary-drives-change",
    cliente: "Novo Nordisk",
    titulo: "Unordinary Drives Change — Branding de Oficinas",
    heroFoto: "/galeria15/2.jpg",
    fotos: [
      "/galeria15/2.jpg",
      "/galeria15/1.jpg",
    ],
    objetivo:
      "Novo Nordisk es una compañía que opera bajo una convicción profunda: las personas que trabajan en ella no son ordinarias. Son científicos, representantes médicos, líderes y operadores que dedican su carrera a cambiar la vida de los pacientes. Esa convicción tiene nombre a nivel global: «Unordinary Drives Change». La campaña de employer branding de Novo Nordisk nació para celebrar y comunicar lo que hace extraordinaria a su cultura interna, y para recordarle a cada colaborador —todos los días, desde el espacio físico donde trabaja— que lo que hace importa. En Chile, Novo Nordisk nos convocó para materializar esa campaña en sus oficinas de Santiago. El encargo fue concreto: traducir el lenguaje visual y conceptual de «Unordinary Drives Change» a intervenciones de branding interno que transformaran el espacio de trabajo en un entorno que hablara de propósito, identidad y pertenencia.",
    conceptoCreativo:
      "Las intervenciones tomaron el sistema visual de la campaña global —azul profundo, fotos de colaboradores reales, tipografía bold y el claim «Unordinary Drives Change... And It Starts With You»— y lo desplegaron en los puntos de mayor tráfico y visibilidad de la oficina. Una columna cilíndrica en el área de colaboración fue forrada con la gráfica de campaña dividida en capas conceptuales: «Unordinary Dedication», «Unordinary Development» y el mensaje central en el tercio inferior. Las fotos de colaboradores reales de Novo Nordisk integraron la pieza, haciendo que el concepto no fuera abstracto sino reconocible: estas son las personas que hacen que la compañía sea lo que es. El pasillo principal de la oficina fue intervenido con un mural fotográfico de largo recorrido que cubría de pared a pared y de piso a techo, con imágenes de colaboradores de la compañía en sus facetas más auténticas —no poses corporativas, sino momentos reales de pasión, creatividad y vida. En la parte inferior del mural, el claim de campaña en azul acompañaba cada paso del trayecto, convirtiendo el corredor en una experiencia de inmersión en la cultura de la compañía. El neón «Yo transformo la vida de mis pacientes» instalado en el área de reuniones completó el relato: del propósito colectivo a la voz individual de quien trabaja ahí.",
    resultado:
      "Las intervenciones transformaron las oficinas de Novo Nordisk Chile en un espacio que comunica cultura desde el primer momento en que alguien entra. Colaboradores, visitas y nuevos ingresos se encuentran con un entorno que no necesita explicarse: habla por sí solo de quiénes son las personas que trabajan ahí y por qué lo hacen. Para LaPizarra, este proyecto representa una dimensión estratégica del branding de espacios: cuando el entorno físico de una empresa refleja con precisión sus valores y su propósito, el espacio deja de ser infraestructura y se convierte en cultura visible. Eso es exactamente lo que «Unordinary Drives Change» logró en las oficinas de Novo Nordisk Santiago.",
  },
  {
    slug: "novo-nordisk-wegovy-lanzamiento",
    cliente: "Novo Nordisk",
    titulo: "Lanzamiento Wegovy — Intervención de Oficinas",
    heroFoto: "/galeria14/1.jpg",
    fotos: [
      "/galeria14/1.jpg",
    ],
    objetivo:
      "Novo Nordisk es una de las compañías farmacéuticas más relevantes del mundo, con décadas de liderazgo en el tratamiento de la obesidad y la diabetes. En 2026, la compañía lanzó en Chile Wegovy® —semaglutida 2.4 mg— marcando un hito en el tratamiento médico de la obesidad en el país: la primera aprobación de un medicamento de este tipo para el manejo del peso en pacientes adultos. Un lanzamiento de esta magnitud no podía limitarse a un anuncio. Requería una experiencia de marca que comunicara al propio equipo de Novo Nordisk la dimensión histórica del momento que estaban viviendo. En ese contexto, la compañía nos convocó para diseñar e implementar una intervención de branding interno en sus oficinas en Santiago, transformando el espacio de trabajo en un escenario del lanzamiento. El objetivo era que cada colaborador, al ingresar a la oficina, sintiera físicamente que algo importante estaba ocurriendo: que su empresa estaba escribiendo una página nueva en la historia de la salud en Chile.",
    conceptoCreativo:
      "La intervención tomó como punto de partida el lenguaje visual de campaña de Wegovy —su paleta de magenta y azul, la pluma autoinyectable como ícono de producto, el claim «Vive Ligero con Wegovy»— y lo llevó a escala arquitectónica. La entrada de las oficinas de Novo Nordisk fue completamente intervenida con iluminación ambiente en magenta sobre los paneles de madera, letrero de marca retroiluminado con el logo de Novo Nordisk y el claim de campaña en letras de neón, y réplicas a escala real de las pens Wegovy montadas como piezas de exhibición sobre la pared. El resultado fue un espacio que funcionaba simultáneamente como hall de entrada y como declaración de posicionamiento: imposible de ignorar, coherente de marca en cada detalle, y capaz de generar en quien lo veía por primera vez la misma emoción que genera un lanzamiento que se ha esperado. Esta intervención de oficinas fue una de las múltiples acciones ejecutadas para el lanzamiento de Wegovy en Chile. Otras intervenciones y activaciones realizadas en el marco de este proyecto son de carácter privado y no se publican por acuerdo con el cliente.",
    resultado:
      "La intervención transformó la entrada de las oficinas de Novo Nordisk en un punto de contacto de marca que comunicó con precisión la escala del momento. El equipo de la compañía —científicos, representantes médicos, ejecutivos comerciales y personal administrativo— vivió el lanzamiento desde adentro con la misma intensidad con que se buscaba que lo viviera el mercado desde afuera. Para LaPizarra, este proyecto representa una dimensión del trabajo que nos resulta especialmente significativa: la capacidad de transformar espacios físicos en experiencias de marca. Cuando una compañía como Novo Nordisk confía en nosotros para marcar internamente un hito de esta relevancia, el resultado tiene que estar a la altura de lo que ese hito representa.",
  },
  {
    slug: "natura-activacion-dia-del-padre",
    cliente: "Natura",
    titulo: "Activación Día del Padre",
    heroFoto: "/galeria13/3.jpg",
    fotos: [
      "/galeria13/3.jpg",
      "/galeria13/1.jpg",
      "/galeria13/2.jpg",
      "/galeria13/4.jpg",
    ],
    objetivo:
      "Natura es una marca de origen brasileño cuya identidad está profundamente ligada a los valores del cuidado, la conexión humana y el bienestar. En Chile, la compañía opera con una red de colaboradores que comparten esa misma filosofía en su quehacer diario. En el marco del Día del Padre, Natura nos convocó para diseñar y ejecutar una activación interna en su edificio logístico en Santiago: una instancia de participación para los equipos corporativos que honrara la fecha de manera auténtica, emotiva y completamente alineada con el universo de marca. El desafío era crear una experiencia que no se sintiera como un evento corporativo genérico, sino como un momento genuino de reconocimiento y conexión entre personas. La activación debía funcionar en el espacio de trabajo, integrarse al entorno natural y con propósito que caracteriza a Natura, y generar en cada participante una experiencia personal que se llevara más allá del edificio.",
    conceptoCreativo:
      "El concepto nació del lenguaje propio de Natura: cuidar, acompañar, dejar huella. Lo llamamos «El Álbum de las Huellas que Cuidan», y giró en torno a un mural participativo de gran formato instalado frente al icónico muro vegetal del edificio logístico de la compañía. El mural propuso a cada colaborador completar frases que invitaban a reflexionar sobre la paternidad desde distintos ángulos: «Me tuve que ingeniar para…», «Estar presente como papá para mí es…», «Cuando fui papá sentí…», «Cuando fui papá entendí…», «Gracias por…», «Acompañar también es…». Cada respuesta era escrita en una tarjeta y pegada en el tablero colectivo, convirtiendo el mural en una obra construida entre todos: única, irrepetible y cargada de voces reales. La elección del muro vegetal como telón de fondo no fue casual. Esa pared viva es uno de los elementos más identitarios del espacio Natura, y situar la activación ahí fue una decisión que reforzó el mensaje de marca sin necesidad de palabras: aquí el cuidado es parte del entorno, no una declaración. Cada participante se llevó además un recuerdo tangible: una fotografía impresa y personalizada con el mensaje «Feliz Día del Padre», acompañada de un tote bag de regalo. Dos elementos sencillos pero significativos, coherentes con la sensibilidad de una marca que entiende que el detalle bien elegido dice más que el obsequio costoso.",
    resultado:
      "La activación logró exactamente lo que una experiencia interna de marca debe lograr: que las personas salieran sintiéndose vistas, reconocidas y parte de algo con significado. El mural colectivo se fue llenando durante la jornada con respuestas que reflejaron la diversidad de historias del equipo: padres primerizos, hijos agradecidos, personas que reconocieron en las frases algo que nunca habían puesto en palabras. El espacio se convirtió en un punto de encuentro espontáneo entre colaboradores de distintas áreas que rara vez comparten el mismo momento en la jornada laboral. La foto personalizada y el tote bag funcionaron como catalizadores de conversación y como recuerdos físicos de una experiencia que muchos describieron como la primera vez que una celebración interna les resultó verdaderamente especial. Para Natura, la activación fue coherente con su identidad de marca de principio a fin: sin artificios, con propósito, anclada en la emoción genuina. Para LaPizarra, este proyecto reafirma que las activaciones internas bien concebidas son tan estratégicas como cualquier evento de cara al cliente: el equipo es la primera comunidad de una marca, y cuidarlo con criterio es también una decisión de negocio.",
  },
  {
    published: false,
    slug: "entel-empresas-gira-2023",
    cliente: "Entel Empresas",
    titulo: "Gira 2023",
    heroFoto: "/galeria12/1.jpg",
    fotos: [
      "/galeria12/1.jpg",
      "/galeria12/2.jpg",
      "/galeria12/3.jpg",
      "/galeria12/4.jpg",
      "/galeria12/5.jpg",
      "/galeria12/6.jpg",
      "/galeria12/7.jpg",
    ],
    objetivo:
      "Entel Empresas es la unidad de negocios B2B de Entel, referente en conectividad, nube y soluciones tecnológicas para el mercado corporativo en Chile. En 2023, la compañía tomó una decisión estratégica que pocos ejecutan con convicción: llevar su propuesta de valor a los clientes en sus propios territorios. La Gira Entel Empresas 2023 fue un roadshow nacional que recorrió las principales ciudades del país, reuniendo en cada parada a los clientes y prospectos más relevantes de cada región en un evento de alto impacto productivo. El objetivo no era solo comunicar el portafolio de soluciones —era demostrar, con la escala y calidad de la propia producción, que Entel Empresas opera en el estándar de las mejores marcas tecnológicas del mundo. Desarrollado en partnership con La Tropa, el evento debía funcionar como una declaración de posicionamiento en cada ciudad: aquí está Entel Empresas, y esto es lo que significa trabajar con nosotros.",
    conceptoCreativo:
      "El concepto de la Gira fue construido sobre una premisa de coherencia total: si Entel Empresas vende tecnología de punta, la experiencia del evento tiene que ser tecnológicamente impactante. Diseñamos una producción de escenografía full LED —piso LED en formato runway, pantalla corrida de gran formato y paneles laterales— que sumergía a los asistentes en una atmósfera digital de conectividad y redes desde el primer momento. La paleta azul eléctrica, el pattern de nodos interconectados y el diseño de contenidos en pantalla reforzaron el lenguaje visual de Entel de manera coherente en cada ciudad. Los partners tecnológicos de Entel —Google, Microsoft, Cisco y Fortinet— tuvieron presencia protagónica en la producción: no como logos en un banner, sino integrados en el sistema de pantallas y en los puntos de contacto del venue, subrayando la solidez del ecosistema tecnológico que la marca representa. La gira incorporó además elementos de alto impacto emocional: un acróbata aéreo que intervino el espacio de manera inesperada y la actuación en vivo de López, uno de los artistas más relevantes de la escena musical chilena contemporánea. La combinación de tecnología, entretenimiento y negocio convirtió cada fecha en un evento que los asistentes recordarían mucho más allá de los contenidos corporativos.",
    resultado:
      "La Gira Entel Empresas 2023 recorrió las principales ciudades de Chile con una producción que igualó —y en varios aspectos superó— el estándar de los grandes eventos tecnológicos internacionales. En cada parada, el evento generó impacto inmediato desde la llegada al venue: pantallas en el lobby, branding inmersivo y una producción de escenario que comunicaba por sí sola el nivel de la propuesta. La integración de los partners tech en la narrativa visual del evento reforzó la credibilidad del ecosistema Entel Empresas de manera más efectiva que cualquier presentación de diapositivas. El cierre musical con López y la intervención aérea crearon momentos de impacto colectivo que sellaron cada jornada con una experiencia emocional que los asistentes no esperaban en un evento corporativo. Para LaPizarra y La Tropa, este proyecto demuestra que un roadshow bien producido es uno de los instrumentos más poderosos del marketing B2B: lleva la marca al territorio de los clientes y hace que cada ciudad sienta que fue elegida, valorada y visitada con intención.",
  },
  {
    published: false,
    slug: "bci-pagos-casa-espoz",
    cliente: "BCI Pagos",
    titulo: "Evento de Clientes en Casa Espoz",
    heroFoto: "/galeria11/1.jpg",
    fotos: [
      "/galeria11/1.jpg",
      "/galeria11/2.jpg",
      "/galeria11/3.jpg",
    ],
    objetivo:
      "BCI Pagos, la división de soluciones de pago para empresas de BCI, opera en un mercado donde la confianza y la relación comercial son tan determinantes como la tecnología. Para una unidad de negocio cuya propuesta se resume en ser más que un proveedor —ser un partner estratégico— la comunicación de ese posicionamiento no puede limitarse a un deck o un correo. Tiene que vivirse. En el marco de un partnership con La Tropa, diseñamos y produjimos un evento de relacionamiento con clientes y socios comerciales en Casa Espoz, uno de los venues más singulares de Santiago: un espacio con alma propia, madera, vegetación y una atmósfera que favorece exactamente el tipo de conversaciones que BCI Pagos quería generar. El objetivo era reunir a los principales clientes y partners de la compañía en una instancia donde el mensaje «Más que un banco, un partner» dejara de ser un slogan y se convirtiera en una experiencia.",
    conceptoCreativo:
      "La elección de Casa Espoz fue en sí misma una declaración de posicionamiento. Un banco podría haber organizado un cóctel en una sala corporativa con branding prolijo; BCI Pagos eligió un espacio con carácter, irregular, vivo, que comunica apertura y criterio. Esa decisión fue el primer gesto creativo del evento. La producción fue diseñada para integrarse al espacio sin imponerle una identidad genérica: iluminación que respetaba la calidez del venue, pantalla LED como punto focal sin dominar el ambiente, señalética mínima y precisa. El foco estaba puesto en la calidad de la experiencia social: gastronomía de nivel, servicio atento y un formato de circulación libre que favorecía el encuentro espontáneo entre los asistentes. El mensaje de marca —desplegado en pantalla y presente en cada pieza de comunicación del evento— reforzó con coherencia el posicionamiento de BCI Pagos como socio tecnológico y financiero de sus clientes, no como un proveedor transaccional.",
    resultado:
      "El evento reunió a clientes y partners de BCI Pagos en una noche que cumplió su propósito central: generar conversaciones de valor en un contexto que la marca podía controlar y que los asistentes podían disfrutar. La atmósfera de Casa Espoz hizo el trabajo que ningún salón de convenciones hubiera logrado: crear un clima de informalidad productiva donde los vínculos comerciales se construyen con más naturalidad. Para LaPizarra y La Tropa, este proyecto confirma que el venue es parte del mensaje: elegir bien dónde ocurre un evento de relacionamiento es ya una decisión estratégica.",
  },
  {
    published: false,
    slug: "seat-move-art",
    cliente: "SEAT",
    titulo: "Move Art",
    heroFoto: "/galeria10/1.jpg",
    fotos: [
      "/galeria10/1.jpg",
      "/galeria10/2.jpg",
      "/galeria10/3.jpg",
      "/galeria10/4.jpg",
      "/galeria10/5.jpg",
      "/galeria10/6.jpg",
      "/galeria10/7.jpg",
      "/galeria10/8.jpg",
      "/galeria10/9.jpg",
      "/galeria10/10.jpg",
      "/galeria10/11.jpg",
      "/galeria10/12.jpg",
    ],
    objetivo:
      "SEAT es una marca que lleva décadas construyendo su identidad en torno a dos ejes: diseño y movimiento. Para una compañía cuyo lenguaje de marca cruza el mundo del automóvil con el del arte urbano y la cultura contemporánea, el desafío no era comunicar esos valores con palabras —era materializarlos en una experiencia que no pudiera explicarse sin verse. Bajo ese desafío, y en el marco de un partnership estratégico con La Tropa, desarrollamos Move Art: una activación de marca que convirtió a un SEAT en el instrumento de creación de una obra de arte monumental. El objetivo era generar un momento único, imposible de ignorar y difícil de olvidar, que asociara la marca con creatividad, movimiento y expresión en su forma más literal y poderosa.",
    conceptoCreativo:
      "El concepto de Move Art parte de una pregunta simple y radical: ¿qué pasa cuando un auto deja de ser un objeto y se convierte en un pincel? La respuesta fue suspender un SEAT del techo de un venue de gran formato, cargar sus neumáticos con pintura y utilizar el movimiento del vehículo —guiado sobre un lienzo monumental desplegado bajo él— como gesto artístico. Los neumáticos, con su textura característica, dejaron huellas que ninguna mano humana podría replicar: trazos anchos, patrones de banda de rodadura, velocidades distintas que generaron capas de color y densidad variables. Un artista trabajó en paralelo sobre el mismo lienzo, respondiendo en tiempo real a lo que el auto iba creando: completando, interrumpiendo, amplificando los gestos mecánicos con intervenciones manuales. El resultado no fue una obra hecha por una máquina ni por un humano, sino por la tensión creativa entre ambos. La pieza final —enorme, vibrante, con la huella literal del SEAT impresa en cada centímetro— fue simultáneamente una obra de arte y el argumento más poderoso que la marca podría haber hecho sobre su identidad.",
    resultado:
      "Move Art produjo una obra monumental que existe como artefacto físico de la identidad de SEAT: irrepetible, co-creada entre máquina y artista, y con la huella literal de los neumáticos de la marca en cada trazo. La activación generó contenido visual de alto impacto en todas sus etapas —el auto suspendido antes del inicio, el proceso de creación en vivo, los detalles del lienzo terminado— convirtiéndose en una pieza de comunicación que la marca puede usar mucho más allá del evento en sí. Para LaPizarra y La Tropa, este proyecto representa un límite: el punto donde la producción de eventos deja de ser logística y se convierte en autoría. Cuando una marca nos da la confianza de llevar una idea hasta sus últimas consecuencias, esto es lo que puede ocurrir.",
  },
  {
    published: false,
    slug: "claro-empresas-fiesta-clientes-2024",
    cliente: "Claro Empresas",
    titulo: "Fiesta de Clientes 2024",
    heroFoto: "/galeria9/1.jpg",
    fotos: [
      "/galeria9/1.jpg",
      "/galeria9/2.jpg",
      "/galeria9/3.jpg",
      "/galeria9/4.jpg",
      "/galeria9/5.jpg",
      "/galeria9/6.jpg",
      "/galeria9/7.jpg",
      "/galeria9/8.jpg",
      "/galeria9/9.jpg",
    ],
    objetivo:
      "Claro Empresas, la división B2B de Claro Chile, reúne a miles de empresas del país en torno a una propuesta de conectividad, tecnología y soluciones digitales que transforma la forma en que los negocios operan. Para una marca que vende innovación, la relación con sus clientes no puede limitarse a una propuesta comercial: debe vivirse. Bajo ese contexto, y en el marco de un partnership estratégico con La Tropa —productora de experiencias con quien compartimos la visión de que los eventos deben ser inolvidables en cada detalle— diseñamos y produjimos la Fiesta de Clientes Claro Empresas 2024. El evento reunió a los principales clientes corporativos de la compañía en una experiencia outdoor de alto estándar, con el skyline de Santiago como telón de fondo y una propuesta que integraba celebración, tecnología y marca de manera orgánica. El objetivo era claro: que cada asistente viviera en carne propia lo que Claro Empresas promete a sus clientes todos los días —conectividad, innovación y cercanía— pero en formato de fiesta.",
    conceptoCreativo:
      "El concepto giró en torno a una idea simple pero poderosa: una fiesta que se vive con la misma energía que la marca proyecta en el mercado. El rojo Claro fue el hilo conductor visual de toda la experiencia: desde el arco de entrada con estructura geométrica branded hasta el vestuario del equipo de anfitriones, pasando por la señalética y los puntos de activación distribuidos en el espacio. El venue outdoor con vistas al skyline corporativo de Santiago no fue un telón de fondo casual —fue un mensaje: Claro Empresas opera donde los negocios ocurren, en el corazón de la ciudad. Las activaciones tecnológicas fueron el alma del evento. La experiencia de realidad virtual RINESIX por Claro Empresas permitió a los asistentes explorar una demostración inmersiva de las soluciones de la compañía, convirtiendo un concepto abstracto como la conectividad empresarial en algo tangible y sorprendente. Los robots interactivos Cisco reforzaron el mensaje tech y funcionaron como puntos de conversación espontánea entre los asistentes. La Barra Zero —una barra de coctelería sin alcohol con estética marquesina y diseño artesanal— añadió un guiño contemporáneo e inclusivo a la experiencia social. La DJ en rojo, las sombrillas blancas, el pasto verde y el formato de circulación libre crearon una atmósfera que equilibraba perfectamente la escala corporativa con la calidez de una fiesta bien pensada.",
    resultado:
      "La Fiesta de Clientes Claro Empresas 2024 logró lo que los mejores eventos de relacionamiento corporativo deben lograr: hacer sentir a cada asistente que es parte de algo que vale la pena celebrar. La experiencia VR y los robots generaron fila espontánea desde los primeros minutos, convirtiéndose en los puntos de mayor densidad social del evento y en los temas de conversación de la noche. El formato outdoor con activaciones distribuidas favoreció el movimiento natural de los asistentes por el espacio, garantizando que cada zona cumpliera su rol: acreditar, activar, conectar, celebrar. La coherencia visual fue total: cualquier fotografía tomada en el evento comunicaba instantáneamente la identidad de Claro Empresas sin necesidad de un logo en primer plano. Para LaPizarra y La Tropa, este proyecto es un ejemplo de lo que puede lograrse cuando dos equipos con visión compartida suman sus capacidades: una producción técnicamente impecable, con alma creativa y un resultado que la marca puede mostrar con orgullo.",
  },
];

export const proyectosPublicados = proyectos.filter((p) => p.published !== false);

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
