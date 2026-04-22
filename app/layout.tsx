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

const schemaOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://somoslapizarra.cl/#organization",
      name: "LaPizarra",
      url: "https://somoslapizarra.cl",
      logo: {
        "@type": "ImageObject",
        url: "https://somoslapizarra.cl/logo-blanco.png",
      },
      sameAs: [
        "https://www.instagram.com/somoslapizarra/",
        "https://www.youtube.com/@somosLaPizarra",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+56-9-5841-9326",
        contactType: "customer service",
        email: "sebastian@somoslapizarra.cl",
        areaServed: "CL",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://somoslapizarra.cl/#localbusiness",
      name: "LaPizarra",
      description:
        "Productora de eventos corporativos y experiencias de marca. Diseño, producción y ejecución de eventos corporativos, activaciones BTL, ferias y stands en Chile.",
      url: "https://somoslapizarra.cl",
      telephone: "+56-9-5841-9326",
      email: "sebastian@somoslapizarra.cl",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.4489,
        longitude: -70.6693,
      },
      priceRange: "$$$",
      areaServed: [
        "Santiago",
        "Región Metropolitana",
        "Valparaíso",
        "Biobío",
        "La Araucanía",
        "Los Lagos",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de producción de eventos",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eventos corporativos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Activaciones BTL" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ferias y stands" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lanzamientos de producto" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Producción audiovisual" } },
        ],
      },
      sameAs: [
        "https://www.instagram.com/somoslapizarra/",
        "https://www.youtube.com/@somosLaPizarra",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        {children}
      </body>
    </html>
  );
}
