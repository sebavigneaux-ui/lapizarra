import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Blobs from "../../components/Blobs";
import { SERVICIOS } from "../../data/servicios";
import { proyectos } from "../../data/proyectos";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servicio = SERVICIOS.find((s) => s.slug === slug);
  if (!servicio) return {};
  return {
    title: servicio.metaTitle,
    description: servicio.metaDescription,
    openGraph: {
      title: servicio.metaTitle,
      description: servicio.metaDescription,
      url: `https://somoslapizarra.cl/servicios/${servicio.slug}`,
      siteName: "LaPizarra",
      images: [{ url: "https://somoslapizarra.cl/og-image.jpg", width: 1200, height: 630 }],
      type: "website",
    },
    alternates: { canonical: `https://somoslapizarra.cl/servicios/${servicio.slug}` },
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = SERVICIOS.find((s) => s.slug === slug);
  if (!servicio) notFound();

  const proyectosRel = proyectos.filter((p) =>
    servicio.proyectosRelacionados.includes(p.slug)
  );

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servicio.titulo,
    description: servicio.metaDescription,
    provider: {
      "@type": "Organization",
      name: "LaPizarra",
      url: "https://somoslapizarra.cl",
    },
    areaServed: { "@type": "Country", name: "Chile" },
    url: `https://somoslapizarra.cl/servicios/${servicio.slug}`,
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://somoslapizarra.cl" },
      { "@type": "ListItem", position: 2, name: "Servicios", item: "https://somoslapizarra.cl/servicios" },
      { "@type": "ListItem", position: 3, name: servicio.titulo, item: `https://somoslapizarra.cl/servicios/${servicio.slug}` },
    ],
  };

  return (
    <div className="bg-[#231F20] min-h-screen">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-xs text-white/30 font-medium">
          <Link href="/" className="hover:text-white/60 transition-colors duration-150">Inicio</Link>
          <span>/</span>
          <Link href="/servicios" className="hover:text-white/60 transition-colors duration-150">Servicios</Link>
          <span>/</span>
          <span className="text-white/50">{servicio.titulo}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-20 px-6">
        <Blobs />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-6">
              Servicios
            </p>
            <h1 className="text-white font-black leading-none tracking-tighter mb-4">
              <span className="block text-4xl md:text-6xl lg:text-7xl">{servicio.titulo}</span>
            </h1>
            <p className="text-[#EC008C] text-xl md:text-2xl font-bold italic mb-8">
              {servicio.tagline}
            </p>
            {servicio.descripcion.map((p, i) => (
              <p key={i} className="text-white/60 text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/calculadora"
                className="inline-flex items-center gap-3 bg-[#EC008C] text-white font-black px-8 py-4 hover:bg-[#d4007d] transition-colors duration-200"
              >
                Calcula tu evento
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/56958419326?text=Hola,%20quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 text-white/60 font-black px-8 py-4 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                Hablemos →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-10">
            Qué incluye
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicio.queIncluye.map((item, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-200">
                <div className="flex gap-3 mb-3">
                  <span className="text-[#EC008C] font-black flex-shrink-0 mt-0.5">→</span>
                  <h3 className="text-white font-black text-base leading-tight">{item.titulo}</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed pl-5">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-16 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-10">
            Para quién es
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {servicio.paraQuien.map((item, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors duration-200">
                <h3 className="text-white font-black text-lg mb-3">{item.perfil}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-10">
            Cómo lo producimos
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicio.proceso.map((paso) => (
              <div key={paso.numero} className="relative">
                <span className="text-[#EC008C] font-black text-5xl leading-none tracking-tighter block mb-4 opacity-30">
                  {paso.numero}
                </span>
                <h3 className="text-white font-black text-lg mb-2">{paso.titulo}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos relacionados */}
      {proyectosRel.length > 0 && (
        <section className="py-16 px-6 border-t border-white/10 relative z-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-10">
              Casos reales
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {proyectosRel.map((p) => (
                <Link
                  key={p.slug}
                  href={`/proyectos/${p.slug}`}
                  className="group border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.fotos[0]}
                      alt={`${p.cliente} — ${p.titulo}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-0.5">{p.cliente}</p>
                      <p className="text-white font-black text-sm leading-tight">{p.titulo}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-white/40 text-xs font-bold uppercase tracking-wide">Ver proyecto</span>
                    <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#EC008C] group-hover:translate-x-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-16 px-6 bg-[#EC008C] relative z-10 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-white font-black leading-none tracking-tighter mb-3">
              <span className="block text-3xl md:text-4xl">¿Tenemos un proyecto</span>
              <span className="block text-3xl md:text-4xl">en común?</span>
            </h2>
            <p className="text-white/80 text-lg">
              Cuéntanos qué necesitas y te proponemos cómo abordarlo.
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
              href="https://wa.me/56958419326?text=Hola,%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#EC008C] font-black px-8 py-4 hover:bg-white/90 transition-colors duration-200"
            >
              Hablemos →
            </a>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-white/10 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/">
            <Image src="/logo-blanco.png" alt="LaPizarra" width={80} height={26} className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-200" />
          </Link>
          <Link
            href="/servicios"
            className="flex items-center gap-2 text-white/40 text-sm font-bold hover:text-white/70 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Todos los servicios
          </Link>
        </div>
      </footer>
    </div>
  );
}
