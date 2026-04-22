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
        text: "Trabajamos ambos. Lo importante no es el tamaño del evento, sino el impacto que tiene para la organización o la marca.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con cuánto tiempo de anticipación conviene cotizar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo de proyecto, pero idealmente entre 4 y 8 semanas. En algunos casos también podemos trabajar con tiempos más ajustados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden hacerse cargo de la creatividad y de la producción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Podemos desarrollar la experiencia desde el concepto creativo hasta la ejecución completa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con lineamientos corporativos exigentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Estamos acostumbrados a trabajar con manuales de marca, compliance y estándares corporativos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden adaptarse a cambios de último minuto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los eventos cambian constantemente. Nuestro proceso y equipo están preparados para adaptarse sin comprometer la calidad de ejecución.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden solo Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos principalmente en Santiago, pero también desarrollamos proyectos en regiones cuando el proyecto lo requiere.",
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
