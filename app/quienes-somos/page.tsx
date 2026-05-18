import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Blobs from "../components/Blobs";

export const metadata: Metadata = {
  title: "Quiénes somos | LaPizarra — Productora de Eventos Corporativos",
  description:
    "Sebastián Vigneaux y Daniel Soto fundaron LaPizarra en 2023 para reunir visión estratégica y excelencia en producción en una sola agencia. Más de 33 años de experiencia combinada y 200 eventos producidos.",
  openGraph: {
    title: "Quiénes somos | LaPizarra",
    description:
      "Sebastián Vigneaux y Daniel Soto fundaron LaPizarra en 2023 para reunir visión estratégica y excelencia en producción en una sola agencia.",
    url: "https://somoslapizarra.cl/quienes-somos",
    siteName: "LaPizarra",
    images: [{ url: "https://somoslapizarra.cl/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: { canonical: "https://somoslapizarra.cl/quienes-somos" },
};

const schemaPage = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://somoslapizarra.cl" },
        { "@type": "ListItem", position: 2, name: "Quiénes somos", item: "https://somoslapizarra.cl/quienes-somos" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://somoslapizarra.cl/#sebastian-vigneaux",
      name: "Sebastián Vigneaux",
      jobTitle: "Co-fundador y Director Comercial",
      worksFor: { "@id": "https://somoslapizarra.cl/#organization" },
      description:
        "18 años de experiencia en gestión corporativa y dirección comercial en empresas de primer nivel. Co-fundador de LaPizarra, productora de eventos corporativos en Chile.",
    },
    {
      "@type": "Person",
      "@id": "https://somoslapizarra.cl/#daniel-soto",
      name: "Daniel Soto",
      jobTitle: "Co-fundador y Director de Producción",
      worksFor: { "@id": "https://somoslapizarra.cl/#organization" },
      description:
        "15 años de experiencia como productor de eventos corporativos y experiencias de marca en Chile. Co-fundador de LaPizarra.",
    },
  ],
};

export default function QuienesSomosPage() {
  return (
    <div className="bg-[#231F20] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPage) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-44 md:pt-52 pb-20 px-6">
        <Blobs />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-6">
            Quiénes somos
          </p>
          <h1 className="text-white font-black leading-none tracking-tighter mb-8">
            <span className="block text-4xl md:text-6xl lg:text-7xl">Visión de negocio</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-white/30">y excelencia en ejecución,</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl">en una misma <span className="text-[#EC008C]">agencia.</span></span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl">
            Fundamos LaPizarra porque el mercado tenía un problema repetido: agencias que piensan bien pero ejecutan regular, o que ejecutan bien pero no entienden el negocio. Nosotros cerramos esa brecha.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {[
            { num: "+200", label: "eventos producidos" },
            { num: "33", label: "años de experiencia combinada" },
            { num: "2023", label: "fundada en Santiago" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="text-[#EC008C] font-black text-5xl md:text-7xl leading-none tracking-tighter mb-2">
                {num}
              </p>
              <p className="text-white/40 text-sm md:text-base uppercase tracking-widest font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-12">
            Los fundadores
          </p>

          {/* Foto */}
          <div className="relative w-full aspect-[16/7] overflow-hidden mb-16">
            <Image
              src="/founders.png"
              alt="Sebastián Vigneaux y Daniel Soto, co-fundadores de LaPizarra"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </div>

          {/* Bios */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Sebastián */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight">
                  Sebastián Vigneaux
                </h2>
              </div>
              <p className="text-[#EC008C] text-sm font-bold uppercase tracking-widest mb-6">
                Co-fundador · Director Comercial
              </p>
              <div className="flex flex-col gap-4 text-white/60 text-lg leading-relaxed">
                <p>
                  18 años de carrera en gestión corporativa y dirección comercial en empresas de primera línea. Esa trayectoria le da a LaPizarra algo que pocas agencias tienen: la capacidad de entender el negocio del cliente antes de pensar en el evento.
                </p>
                <p>
                  Sebastián lidera la relación con los clientes, la estrategia comercial y el vínculo entre los objetivos del negocio y la propuesta creativa de cada proyecto.
                </p>
              </div>
            </div>

            {/* Daniel */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight">
                  Daniel Soto
                </h2>
              </div>
              <p className="text-[#EC008C] text-sm font-bold uppercase tracking-widest mb-6">
                Co-fundador · Director de Producción
              </p>
              <div className="flex flex-col gap-4 text-white/60 text-lg leading-relaxed">
                <p>
                  15 años produciendo eventos para empresas que no aceptan errores el día del evento. Ha trabajado en convenciones, lanzamientos, stands feriales y activaciones BTL a lo largo de Chile y en el extranjero.
                </p>
                <p>
                  Daniel lidera la operación: proveedores, logística, equipo en terreno y la obsesión por los detalles que hace que un evento funcione exactamente como se prometió.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué LaPizarra */}
      <section className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-6">
                Nuestra propuesta
              </p>
              <h2 className="text-white font-black leading-none tracking-tighter">
                <span className="block text-4xl md:text-5xl">Un solo equipo.</span>
                <span className="block text-4xl md:text-5xl text-white/30">Una sola</span>
                <span className="block text-4xl md:text-5xl">responsabilidad.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-white/60 text-lg leading-relaxed">
              <p>
                En LaPizarra no hay un equipo creativo por un lado y un equipo de producción por otro. Somos la misma agencia desde el brief hasta el post evento. Eso elimina la fricción entre lo que se diseña y lo que se ejecuta, que es donde la mayoría de los eventos falla.
              </p>
              <p>
                Trabajamos con empresas medianas y grandes que tienen criterios exigentes: manuales de marca, procesos de aprobación, presupuestos ajustados y equipos de marketing que ya saben lo que quieren. Con esos clientes nos entendemos bien.
              </p>
              <p>
                No somos la agencia más grande. Somos la agencia más comprometida con el resultado de cada proyecto que tomamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#EC008C] relative z-10 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-white font-black leading-none tracking-tighter mb-3">
              <span className="block text-3xl md:text-5xl">¿Tienes un evento</span>
              <span className="block text-3xl md:text-5xl">en mente?</span>
            </h2>
            <p className="text-white/80 text-lg">
              Cuéntanos de qué se trata y te respondemos el mismo día.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/calculadora"
              className="inline-flex items-center gap-3 border-2 border-white text-white font-black px-8 py-4 hover:bg-white hover:text-[#EC008C] transition-all duration-200"
            >
              Calcular mi evento
            </Link>
            <a
              href="https://wa.me/56958419326?text=Hola,%20quiero%20cotizar%20un%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#EC008C] font-black px-8 py-4 hover:bg-white/90 transition-colors duration-200"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablemos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
