import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Galeria from "./components/Galeria";
import Testimonios from "./components/Testimonios";
import Metodologia from "./components/Metodologia";
import CTAIntermedio from "./components/CTAIntermedio";
import Confianza from "./components/Confianza";
import FeriasStands from "./components/FeriasStands";
import FAQ from "./components/FAQ";
import QuienesSomos from "./components/QuienesSomos";
import CTAFinal from "./components/CTAFinal";
import Blobs from "./components/Blobs";
import ClientesDestacados from "./components/ClientesDestacados";

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Trabajan proyectos pequeños o solo eventos grandes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos ambos, y esa distinción nos importa menos de lo que se podría pensar. Hemos producido eventos para 30 personas y para varios cientos. Lo que nos define es el nivel de exigencia: cada proyecto tiene un equipo dedicado, un proceso de planificación real y un estándar de ejecución que no baja independientemente del tamaño. Si hay un objetivo claro y un cliente que quiere hacerlo bien, ahí estamos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con cuánto tiempo de anticipación conviene cotizar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 4 y 8 semanas es el rango ideal para la mayoría de los proyectos: hay tiempo para definir bien el concepto, cotizar proveedores con calma y no improvisar en los detalles. Para eventos más complejos —convenciones grandes, stands feriales o lanzamientos con producción audiovisual— 2 a 3 meses es mejor. Dicho eso, hemos trabajado con tiempos más ajustados cuando el proyecto lo exige. No es lo ideal, pero sabemos movernos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden hacerse cargo de la creatividad y de la producción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y eso es algo que nos define. No somos solo un proveedor de logística que recibe un brief cerrado: podemos entrar desde la pregunta inicial —qué quiere lograr el evento, qué tiene que sentir el asistente— y desde ahí desarrollar el concepto, el diseño, la ambientación, la agenda y la ejecución completa. Para clientes que ya tienen el concepto claro, también trabajamos en modo producción pura. Depende de lo que necesite cada proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con lineamientos corporativos exigentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y es algo a lo que estamos bien acostumbrados. Hemos trabajado con empresas multinacionales que tienen manuales de marca globales, procesos de aprobación rigurosos y estándares de compliance estrictos. Sabemos movernos dentro de esos marcos sin que eso frene la ejecución. Si tienes un equipo de marketing corporativo con criterios bien definidos, lo más probable es que ya hayamos trabajado en contextos similares.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden adaptarse a cambios de último minuto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los cambios en los eventos son la norma, no la excepción. Cambia el número de asistentes, cambia el espacio, cambia el presupuesto, cambia el brief a mitad del proceso. Nuestra forma de trabajar está construida asumiendo eso: proceso modular, proveedores de confianza y un equipo que no se quiebra bajo presión. No prometemos que los cambios no cuestan nada, pero sí que los manejamos sin que el evento lo acuse.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden solo Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayor parte de nuestros proyectos ocurre en Santiago y la Región Metropolitana, que es donde tenemos la red de proveedores más consolidada. También hemos trabajado en regiones —Valparaíso, Biobío, La Araucanía y Los Lagos, entre otras— cuando el proyecto lo requiere. En esos casos la logística es más exigente, pero el estándar de ejecución es el mismo.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="bg-[#231F20] relative overflow-hidden">
          <Blobs />
          <Servicios />
          <Galeria />
        </div>
        <Testimonios />
        <div className="bg-[#231F20] relative overflow-hidden">
          <Blobs />
          <Metodologia />
        </div>
        <CTAIntermedio />
        <div className="bg-[#231F20] relative overflow-hidden">
          <Blobs />
          <FeriasStands />
        </div>
        <ClientesDestacados />
        <FAQ />
        <QuienesSomos />
        <CTAFinal />
      </main>
    </>
  );
}
