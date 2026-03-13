import Header from "./components/Header";
import Hero from "./components/Hero";
import Clientes from "./components/Clientes";
import Insight from "./components/Insight";
import PropuestaValor from "./components/PropuestaValor";
import Servicios from "./components/Servicios";
import Diferenciadores from "./components/Diferenciadores";
import Metodologia from "./components/Metodologia";
import CTAIntermedio from "./components/CTAIntermedio";
import Confianza from "./components/Confianza";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clientes />
        <Insight />
        <PropuestaValor />
        <Servicios />
        <Diferenciadores />
        <Metodologia />
        <CTAIntermedio />
        <Confianza />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
