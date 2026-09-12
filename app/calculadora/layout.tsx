import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Eventos | LaPizarra",
  description: "Simula el presupuesto de tu evento corporativo en minutos: tipo de evento, asistentes, región y nivel de servicio.",
  openGraph: {
    title: "Calculadora de Eventos | LaPizarra",
    description: "Simula el presupuesto de tu evento corporativo en minutos: tipo de evento, asistentes, región y nivel de servicio.",
    url: "https://www.somoslapizarra.cl/calculadora",
    siteName: "LaPizarra",
    images: [{ url: "https://www.somoslapizarra.cl/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: { canonical: "https://www.somoslapizarra.cl/calculadora" },
};

export default function CalculadoraLayout({ children }: { children: React.ReactNode }) {
  return children;
}
