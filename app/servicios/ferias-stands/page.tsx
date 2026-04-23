import type { Metadata } from "next";
import FeriasStandsContent from "./FeriasStandsContent";

export const metadata: Metadata = {
  title: "Ferias & Stands — Sistemas de Conversión Comercial | LaPizarra",
  description:
    "Diseñamos stands que convierten visitantes en leads calificados. Diagnóstico en terreno, 3 niveles de intervención y red de proveedores top en Chile. LaPizarra.",
  openGraph: {
    title: "Ferias & Stands — Sistemas de Conversión Comercial | LaPizarra",
    description: "No diseñamos stands. Diseñamos sistemas de conversión comercial para ferias industriales, tecnológicas y de consumo en Chile.",
    url: "https://somoslapizarra.cl/servicios/ferias-stands",
    siteName: "LaPizarra",
    images: [{ url: "https://somoslapizarra.cl/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: { canonical: "https://somoslapizarra.cl/servicios/ferias-stands" },
};

export default function FeriasStandsPage() {
  return <FeriasStandsContent />;
}
