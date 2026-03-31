import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaPizarra — Productora de eventos corporativos y experiencias de marca",
  description: "Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables para empresas exigentes.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: "LaPizarra — Productora de eventos corporativos y experiencias de marca",
    description: "Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables para empresas exigentes.",
    url: "https://somoslapizarra.cl",
    siteName: "LaPizarra",
    images: [
      {
        url: "https://somoslapizarra.cl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LaPizarra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaPizarra — Productora de eventos corporativos y experiencias de marca",
    description: "Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables para empresas exigentes.",
    images: ["https://somoslapizarra.cl/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
