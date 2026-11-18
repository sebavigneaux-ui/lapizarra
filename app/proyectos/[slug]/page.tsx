import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { proyectos, proyectosPublicados, getProyecto, type Proyecto } from "../../data/proyectos";
import { SERVICIOS } from "../../data/servicios";
import Header from "../../components/Header";
import CTAFinal from "../../components/CTAFinal";
import Blobs from "../../components/Blobs";
import VideoGaleria from "./VideoGaleria";

const BASE = "https://www.somoslapizarra.cl";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

function descripcionDe(p: Proyecto) {
  return p.descripcion ?? `Caso de éxito: ${p.titulo} para ${p.cliente}, producido por LaPizarra.`;
}

// Proyectos relacionados: primero mismo cliente, luego mismo servicio, luego los más recientes
function relacionados(p: Proyecto, servicioSlugs: string[]) {
  const otros = proyectosPublicados.filter((x) => x.slug !== p.slug);
  const mismoServicio = (x: Proyecto) =>
    SERVICIOS.some((s) => servicioSlugs.includes(s.slug) && s.proyectosRelacionados.includes(x.slug));
  const orden = [
    ...otros.filter((x) => x.cliente === p.cliente),
    ...otros.filter((x) => x.cliente !== p.cliente && mismoServicio(x)),
    ...[...otros].reverse(),
  ];
  return [...new Map(orden.map((x) => [x.slug, x])).values()].slice(0, 3);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) return {};
  const title = proyecto.seoTitle ?? `${proyecto.cliente} — ${proyecto.titulo} | LaPizarra`;
  const description = descripcionDe(proyecto);
  const url = `${BASE}/proyectos/${proyecto.slug}`;
  const image = proyecto.heroFoto ?? proyecto.fotos[0];
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "LaPizarra",
      images: [{ url: image }],
      type: "article",
    },
    alternates: { canonical: url },
    // Los proyectos ocultos siguen accesibles por enlace directo, pero fuera de Google
    ...(proyecto.published === false && { robots: { index: false, follow: true } }),
  };
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) notFound();

  // Shuffle determinístico basado en el slug — mismo orden siempre, distinto por proyecto
  const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const restantes = proyecto.fotos.filter((f) => f !== proyecto.heroFoto);
  for (let i = restantes.length - 1; i > 0; i--) {
    const j = (seed * (i + 7)) % (i + 1);
    [restantes[i], restantes[j]] = [restantes[j], restantes[i]];
  }
  const fotos = proyecto.heroFoto
    ? [proyecto.heroFoto, ...restantes]
    : [restantes[0], ...restantes.slice(1)];

  const servicios = SERVICIOS.filter((s) => s.proyectosRelacionados.includes(proyecto.slug));
  const otrosProyectos = relacionados(proyecto, servicios.map((s) => s.slug));
  const url = `${BASE}/proyectos/${proyecto.slug}`;

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${proyecto.cliente}: ${proyecto.titulo}`,
    description: descripcionDe(proyecto),
    image: proyecto.fotos.map((f) => `${BASE}${f}`),
    url,
    mainEntityOfPage: url,
    inLanguage: "es-CL",
    about: { "@type": "Organization", name: proyecto.cliente },
    author: { "@type": "Organization", name: "LaPizarra", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "LaPizarra",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo-blanco.png` },
    },
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Proyectos", item: `${BASE}/proyectos` },
      { "@type": "ListItem", position: 3, name: `${proyecto.cliente} — ${proyecto.titulo}`, item: url },
    ],
  };

  return (
    <div className="bg-[#231F20] min-h-screen">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <main className="relative overflow-hidden pt-28 md:pt-32">
        <Blobs />
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-2 text-xs text-white/30 font-medium">
              <Link href="/" className="hover:text-white/60 transition-colors duration-150">Inicio</Link>
              <span>/</span>
              <Link href="/proyectos" className="hover:text-white/60 transition-colors duration-150">Proyectos</Link>
              <span>/</span>
              <span className="text-white/50">{proyecto.cliente}</span>
            </div>
          </div>

          {/* Hero del proyecto */}
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-4">
              {proyecto.cliente}
            </p>
            <h1 className="text-white font-black leading-none tracking-tighter">
              <span className="block text-5xl md:text-7xl">{proyecto.titulo}</span>
            </h1>
          </div>

          {/* Foto principal */}
          <div className="max-w-6xl mx-auto px-6 mb-4">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={fotos[0]}
                alt={`${proyecto.cliente} — ${proyecto.titulo}`}
                fill
                className="object-cover"
                style={{ objectPosition: proyecto.heroPosition ?? "center" }}
                sizes="(max-width: 768px) 100vw, 1152px"
                priority
              />
            </div>
          </div>

          {/* Grid resto de fotos */}
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {fotos.slice(1).map((src, i) => (
                <div key={i} className="relative aspect-video overflow-hidden">
                  <Image
                    src={src}
                    alt={`${proyecto.cliente} — ${proyecto.titulo}, foto ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Descripción estructurada */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-0">
              {[
                { num: "01", label: "Objetivo", text: proyecto.objetivo },
                { num: "02", label: "Concepto Creativo", text: proyecto.conceptoCreativo },
                { num: "03", label: "Resultado", text: proyecto.resultado },
              ].map(({ num, label, text }) => (
                <section
                  key={label}
                  className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 border-t border-white/10 py-16"
                >
                  {/* Label columna */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <span aria-hidden="true" className="text-[#EC008C] font-black text-5xl md:text-7xl leading-none opacity-20 select-none">
                      {num}
                    </span>
                    <h2 className="text-[#EC008C] text-xs font-black uppercase tracking-widest md:mt-2">
                      {label}
                    </h2>
                  </div>
                  {/* Texto */}
                  <p className="text-white/65 text-base md:text-lg leading-relaxed md:leading-[1.85]">
                    {text}
                  </p>
                </section>
              ))}
            </div>
          </div>

          {/* Videos del proyecto */}
          {proyecto.videos && proyecto.videos.length > 0 && (
            <div className="border-t border-white/10">
              <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-8">Video resumen</h2>
                <VideoGaleria videos={proyecto.videos} />
              </div>
            </div>
          )}

          {/* Servicio relacionado */}
          {servicios.length > 0 && (
            <div className="border-t border-white/10">
              <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-8">
                  {servicios.length > 1 ? "Servicios de este proyecto" : "Servicio de este proyecto"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicios.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="group block border border-white/10 hover:border-[#EC008C] p-8 transition-colors duration-200"
                    >
                      <p className="text-white font-black text-2xl md:text-3xl tracking-tight mb-3">{s.titulo}</p>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{s.excerpt}</p>
                      <span className="text-[#EC008C] text-sm font-bold group-hover:translate-x-1 inline-block transition-transform">
                        Ver servicio →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Otros proyectos */}
          {otrosProyectos.length > 0 && (
            <div className="border-t border-white/10">
              <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex items-end justify-between gap-6 mb-8">
                  <h2 className="text-[#EC008C] text-xs font-bold uppercase tracking-widest">Otros proyectos</h2>
                  <Link href="/proyectos" className="text-white/50 hover:text-white text-sm transition-colors">
                    Ver todos →
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {otrosProyectos.map((p) => (
                    <Link key={p.slug} href={`/proyectos/${p.slug}`} className="group block">
                      <div className="relative aspect-video overflow-hidden mb-4">
                        <Image
                          src={p.heroFoto ?? p.fotos[0]}
                          alt={`${p.cliente} — ${p.titulo}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-1">{p.cliente}</p>
                      <p className="text-white font-black text-lg leading-tight group-hover:text-white/80 transition-colors">
                        {p.titulo}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* CTA a WhatsApp + footer, igual que en la home */}
      <CTAFinal />
    </div>
  );
}
