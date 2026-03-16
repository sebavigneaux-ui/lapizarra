import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
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
        <Servicios />
        <div className="bg-[#231F20] relative overflow-hidden">
          <Blobs />
          <Galeria />
        </div>
        <Testimonios />
        <div className="bg-[#231F20] relative overflow-hidden">
          <Blobs />
          <Metodologia />
        </div>
        <Proyectos />
        <CTAIntermedio />
        <Confianza />
        <ClientesDestacados />
        <FAQ />
        <QuienesSomos />
        <CTAFinal />
      </main>
    </>
  );
}
