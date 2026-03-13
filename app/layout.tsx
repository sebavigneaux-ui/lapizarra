import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaPizarra — Productora de eventos corporativos y experiencias de marca",
  description: "Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables para empresas exigentes.",
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
