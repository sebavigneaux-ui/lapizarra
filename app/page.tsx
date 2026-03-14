import Header from "./components/Header";
import Hero from "./components/Hero";
import Insight from "./components/Insight";
import PropuestaValor from "./components/PropuestaValor";
import Servicios from "./components/Servicios";
import Diferenciadores from "./components/Diferenciadores";
import Proyectos from "./components/Proyectos";
import Galeria from "./components/Galeria";
import Testimonios from "./components/Testimonios";
import Metodologia from "./components/Metodologia";
import CTAIntermedio from "./components/CTAIntermedio";
import Confianza from "./components/Confianza";
import FAQ from "./components/FAQ";
import QuienesSomos from "./components/QuienesSomos";
import CTAFinal from "./components/CTAFinal";
import Blobs from "./components/Blobs";
import ClientesDestacados from "./components/ClientesDestacados";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="bg-[#231F20] relative overflow-hidden">
          <Blobs />
          <Galeria />
        </div>
        <Insight />
        <div className="bg-[#231F20] relative overflow-hidden">
          <Blobs />
          <PropuestaValor />
          <Metodologia />
        </div>
        <Servicios />
        <Diferenciadores />
        <Proyectos />
        <CTAIntermedio />
        <Confianza />
        <Testimonios />
        <ClientesDestacados />
        <FAQ />
        <QuienesSomos />
        <CTAFinal />
      </main>
    </>
  );
}
