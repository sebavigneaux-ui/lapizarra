export interface CasoExito {
  id: string;
  cliente: string;
  titulo: string;
  sector: string;
  feria: string;
  year?: string;
  heroImage: string;
  images: string[];
  objetivo: string;
  metodologia: string;
  resultados: string;
  partnerMention: string;
}

export const casosExito: CasoExito[] = [
  {
    id: "aramark",
    cliente: "Aramark Chile",
    titulo: "Stand Premium en Exponor",
    sector: "Minería · Servicios Integrados",
    feria: "Exponor, Antofagasta",
    heroImage: "/casos/aramark/aramark-01.jpg",
    images: [
      "/casos/aramark/aramark-02.jpg",
      "/casos/aramark/aramark-03.jpg",
      "/casos/aramark/aramark-04.jpg",
      "/casos/aramark/aramark-05.jpg",
      "/casos/aramark/aramark-06.jpg",
    ],
    objetivo:
      "Consolidar el posicionamiento de Aramark como partner estratégico del sector minero en Chile. El stand debía comunicar su propuesta de servicios integrados —alimentación industrial, facilities management y hotelería— y generar reuniones ejecutivas de alto valor con operadores y stakeholders del sector.",
    metodologia:
      "Se diseñó un stand de doble nivel con zonas diferenciadas: recepción corporativa, área de exhibición interactiva con kioscos digitales, sala VIP para reuniones ejecutivas y espacio de hospitalidad para retención de visitas. La narrativa visual reforzó los valores de marca y la propuesta sectorial a través de walls de contenido y systems audiovisuales.",
    resultados:
      "Stand reconocido como referente en la feria por su nivel de producción y experiencia de marca. Flujo sostenido de visitas durante todos los días del evento, múltiples reuniones ejecutivas concretadas en sala VIP y posicionamiento de Aramark como operador de primer nivel en el mercado minero chileno.",
    partnerMention:
      "La construcción e implementación de este proyecto fue desarrollada en base a la alianza de largo plazo que mantenemos con nuestro proveedor Esferical.",
  },
  {
    id: "movistar",
    cliente: "Telefónica / Movistar",
    titulo: "Stand Tecnológico en Feria Minera",
    sector: "Telecomunicaciones · Minería",
    feria: "Exponor, Antofagasta",
    heroImage: "/casos/movistar/movistar-01.jpg",
    images: [
      "/casos/movistar/movistar-02.jpg",
      "/casos/movistar/movistar-03.jpg",
      "/casos/movistar/movistar-04.jpg",
      "/casos/movistar/movistar-05.jpg",
      "/casos/movistar/movistar-06.jpg",
    ],
    objetivo:
      "Posicionar a Telefónica/Movistar como el socio tecnológico de referencia para la industria minera en Chile, comunicando su propuesta de conectividad convergente como pilar fundamental del desarrollo tecnológico del sector. El stand debía demostrar en vivo las capacidades de la red y generar conversaciones comerciales con operadores, gerentes de tecnología y stakeholders del ecosistema minero.",
    metodologia:
      "Se diseñó una experiencia inmersiva de doble impacto: un piso LED de gran formato con imágenes aéreas de faenas mineras y un mensaje ancla —'Conectividad para acortar las distancias en la Minería'— que activaba el concepto desde el ingreso al stand. El interior integraba pantallas con demostraciones de producto, kioscos interactivos, zona lounge para reuniones y un ambient wall de tonos Movistar que proyectaba el relato de marca sobre soluciones convergentes para la industria.",
    resultados:
      "Stand de alta recordación dentro de la feria por su propuesta visual y tecnológica diferenciada. El piso LED funcionó como elemento de atracción de tráfico espontáneo, mientras la zona lounge facilitó reuniones comerciales de alto nivel. La narrativa de conectividad para minería quedó instalada de forma coherente en cada punto de contacto del stand.",
    partnerMention:
      "La construcción e implementación de este proyecto fue desarrollada en base a la alianza de largo plazo que mantenemos con nuestro proveedor Esferical.",
  },
];
