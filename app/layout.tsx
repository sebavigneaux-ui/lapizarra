import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaPizarra — Productora de eventos corporativos y experiencias de marca",
  description: "Productora de eventos corporativos en Chile. Producción integral de convenciones, lanzamientos, activaciones BTL y stands feriales en Santiago y regiones.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: "LaPizarra — Productora de eventos corporativos y experiencias de marca",
    description: "Productora de eventos corporativos en Chile. Producción integral de convenciones, lanzamientos, activaciones BTL y stands feriales en Santiago y regiones.",
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
    description: "Productora de eventos corporativos en Chile. Producción integral de convenciones, lanzamientos, activaciones BTL y stands feriales en Santiago y regiones.",
    images: ["https://somoslapizarra.cl/og-image.jpg"],
  },
  verification: {
    google: "BzXBzQBx_ZLjc7-w8dSwjNGeIcnQxrfYOGf2_XdhliM",
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
      foundingDate: "2023",
      founders: [
        {
          "@type": "Person",
          name: "Sebastián Vigneaux",
          jobTitle: "Co-fundador y Director Comercial",
          description: "18 años de experiencia en gestión corporativa y dirección comercial en empresas de primer nivel.",
        },
        {
          "@type": "Person",
          name: "Daniel Soto",
          jobTitle: "Co-fundador y Director de Producción",
          description: "15 años de experiencia como productor de eventos corporativos y experiencias de marca.",
        },
      ],
      knowsAbout: [
        "Producción de eventos corporativos en Chile",
        "Activaciones BTL y experiencias de marca",
        "Ferias y stands feriales",
        "Lanzamientos de producto",
        "Eventos internos empresariales",
        "Producción audiovisual corporativa",
        "Convenciones y kick-offs corporativos",
      ],
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5P89WWS2');
        `}</Script>
        {/* Google Analytics 4 */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-G253MBG3ZL" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G253MBG3ZL');
        `}</Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5P89WWS2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        {children}
      </body>
    </html>
  );
}
