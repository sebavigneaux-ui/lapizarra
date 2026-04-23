import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import { ARTICULOS, type SeccionArticulo } from "../../data/articulos";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICULOS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = ARTICULOS.find((a) => a.slug === slug);
  if (!articulo) return {};
  return {
    title: articulo.metaTitle,
    description: articulo.metaDescription,
    openGraph: {
      title: articulo.metaTitle,
      description: articulo.metaDescription,
      url: `https://somoslapizarra.cl/centro-de-aprendizaje/${articulo.slug}`,
      siteName: "LaPizarra",
      images: [{ url: "https://somoslapizarra.cl/og-image.jpg", width: 1200, height: 630 }],
      type: "article",
      publishedTime: articulo.fecha,
    },
    twitter: {
      card: "summary_large_image",
      title: articulo.metaTitle,
      description: articulo.metaDescription,
      images: ["https://somoslapizarra.cl/og-image.jpg"],
    },
    alternates: {
      canonical: `https://somoslapizarra.cl/centro-de-aprendizaje/${articulo.slug}`,
    },
  };
}

function formatFecha(fecha: string) {
  const [year, month, day] = fecha.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function RenderSeccion({ seccion }: { seccion: SeccionArticulo }) {
  switch (seccion.type) {
    case "intro":
      return (
        <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-medium mb-10 border-l-2 border-[#EC008C] pl-6">
          {seccion.content}
        </p>
      );

    case "p":
      return (
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
          {seccion.content}
        </p>
      );

    case "h2":
      return (
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight leading-tight mt-14 mb-6">
          {seccion.content}
        </h2>
      );

    case "h3":
      return (
        <h3 className="text-white font-black text-xl md:text-2xl tracking-tight leading-tight mt-10 mb-4">
          {seccion.content}
        </h3>
      );

    case "list":
      return (
        <ul className="mb-8 space-y-4">
          {seccion.items.map((item, i) =>
            typeof item === "string" ? (
              <li key={i} className="flex gap-3 text-white/60 text-base leading-relaxed">
                <span className="text-[#EC008C] font-black mt-1 flex-shrink-0">→</span>
                <span>{item}</span>
              </li>
            ) : (
              <li key={i} className="flex gap-3">
                <span className="text-[#EC008C] font-black mt-1 flex-shrink-0">→</span>
                <div>
                  <span className="text-white font-bold text-base">{item.titulo}. </span>
                  <span className="text-white/60 text-base leading-relaxed">{item.descripcion}</span>
                </div>
              </li>
            )
          )}
        </ul>
      );

    case "ordered-list":
      return (
        <ol className="mb-8 space-y-5">
          {seccion.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-[#EC008C] font-black text-xl leading-none flex-shrink-0 w-6">
                {i + 1}.
              </span>
              <div>
                <span className="text-white font-bold text-base">{item.titulo}. </span>
                <span className="text-white/60 text-base leading-relaxed">{item.descripcion}</span>
              </div>
            </li>
          ))}
        </ol>
      );

    case "highlight":
      return (
        <div className="my-10 border border-white/10 rounded-2xl p-7 bg-white/[0.03] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#EC008C] via-[#EC008C]/40 to-transparent" />
          {seccion.stat && (
            <p className="text-[#EC008C] font-black text-5xl md:text-6xl leading-none tracking-tighter mb-3">
              {seccion.stat}
            </p>
          )}
          <p className="text-white/70 text-lg leading-relaxed">{seccion.content}</p>
        </div>
      );

    case "cta-inline": {
      const href = seccion.href ?? "/calculadora";
      const label = seccion.buttonLabel ?? "Simular ahora";
      const isExternal = href.startsWith("http");
      return (
        <div className="my-10 p-7 border border-[#EC008C]/20 rounded-2xl bg-[#EC008C]/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-1">
              LaPizarra
            </p>
            <p className="text-white font-black text-lg leading-tight">
              {seccion.label}
            </p>
          </div>
          {isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-[#EC008C] text-white font-black px-7 py-3.5 hover:bg-[#d4007d] transition-colors duration-200 whitespace-nowrap"
            >
              {label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <Link
              href={href}
              className="flex-shrink-0 inline-flex items-center gap-3 bg-[#EC008C] text-white font-black px-7 py-3.5 hover:bg-[#d4007d] transition-colors duration-200 whitespace-nowrap"
            >
              {label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      );
    }

    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-[#EC008C] pl-6 py-2">
          <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-3">
            &ldquo;{seccion.content}&rdquo;
          </p>
          <cite className="text-white/40 text-sm font-medium not-italic">
            — {seccion.author}
          </cite>
        </blockquote>
      );

    case "table":
      return (
        <div className="my-10 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {seccion.headers.map((header, i) => (
                  <th
                    key={i}
                    className="text-left text-[#EC008C] text-xs font-black uppercase tracking-widest py-3 px-4 border-b border-white/20 bg-white/[0.03]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seccion.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-150">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-3 px-4 text-sm leading-relaxed ${j === 0 ? "text-white/50" : "text-white/70"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default async function ArticuloPage({ params }: Props) {
  const { slug } = await params;
  const articulo = ARTICULOS.find((a) => a.slug === slug);
  if (!articulo) notFound();

  const relacionados = ARTICULOS.filter(
    (a) => a.slug !== articulo.slug && a.categoria === articulo.categoria
  ).slice(0, 3);

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articulo.titulo,
    description: articulo.metaDescription,
    author: { "@type": "Organization", name: "LaPizarra" },
    publisher: {
      "@type": "Organization",
      name: "LaPizarra",
      logo: { "@type": "ImageObject", url: "https://somoslapizarra.cl/logo-blanco.png" },
    },
    datePublished: articulo.fecha,
    url: `https://somoslapizarra.cl/centro-de-aprendizaje/${articulo.slug}`,
    image: "https://somoslapizarra.cl/og-image.jpg",
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://somoslapizarra.cl" },
      { "@type": "ListItem", position: 2, name: "Centro de Aprendizaje", item: "https://somoslapizarra.cl/centro-de-aprendizaje" },
      { "@type": "ListItem", position: 3, name: articulo.titulo, item: `https://somoslapizarra.cl/centro-de-aprendizaje/${articulo.slug}` },
    ],
  };

  return (
    <div className="bg-[#231F20] min-h-screen">
      <Header />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Breadcrumb + navegación */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-xs text-white/30 font-medium">
          <Link href="/" className="hover:text-white/60 transition-colors duration-150">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/centro-de-aprendizaje" className="hover:text-white/60 transition-colors duration-150">
            Centro de Aprendizaje
          </Link>
          <span>/</span>
          <span className="text-white/50 truncate max-w-[200px]">{articulo.titulo}</span>
        </div>
      </div>

      {/* Hero del artículo */}
      <header className="pt-14 pb-14 px-6 border-b border-white/10 relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-5 block">
            {articulo.categoriaLabel}
          </span>
          <h1 className="text-white font-black leading-tight tracking-tight text-3xl md:text-4xl lg:text-5xl mb-8">
            {articulo.titulo}
          </h1>
          <div className="flex items-center gap-6 text-white/30 text-sm font-medium">
            <span>{formatFecha(articulo.fecha)}</span>
            <span className="w-px h-4 bg-white/20" />
            <span>{articulo.readTime} min de lectura</span>
            <span className="w-px h-4 bg-white/20" />
            <span>Por LaPizarra</span>
          </div>
        </div>
      </header>

      {/* Cuerpo del artículo */}
      <article className="py-14 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {articulo.secciones.map((seccion, i) => (
            <RenderSeccion key={i} seccion={seccion} />
          ))}
        </div>
      </article>

      {/* CTA post-artículo */}
      <section className="py-16 px-6 bg-[#EC008C] relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-white font-black leading-none tracking-tighter mb-3">
              <span className="block text-3xl md:text-5xl">¿Estás planificando</span>
              <span className="block text-3xl md:text-5xl">un evento corporativo?</span>
            </h2>
            <p className="text-white/80 text-lg">
              Simula el presupuesto de tu evento en 2 minutos y obtén una estimación referencial por servicio.
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
              href="https://wa.me/56958419326?text=Hola,%20quiero%20cotizar%20un%20evento%20corporativo"
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

      {/* Artículos relacionados */}
      {relacionados.length > 0 && (
        <section className="py-16 px-6 border-t border-white/10 relative z-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-white/30 text-xs font-black uppercase tracking-widest mb-8">
              También te puede interesar
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {relacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/centro-de-aprendizaje/${rel.slug}`}
                  className="group border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-all duration-300"
                >
                  <span className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-3 block">
                    {rel.categoriaLabel}
                  </span>
                  <h3 className="text-white font-black text-base leading-tight group-hover:text-white/80 transition-colors duration-200 mb-3">
                    {rel.titulo}
                  </h3>
                  <span className="text-white/30 text-xs">{rel.readTime} min de lectura</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer mínimo */}
      <footer className="border-t border-white/10 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/">
            <Image src="/logo-blanco.png" alt="LaPizarra" width={80} height={26} className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-200" />
          </Link>
          <Link
            href="/centro-de-aprendizaje"
            className="flex items-center gap-2 text-white/40 text-sm font-bold hover:text-white/70 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Centro de Aprendizaje
          </Link>
        </div>
      </footer>
    </div>
  );
}
