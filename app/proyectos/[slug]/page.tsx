import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { proyectos, getProyecto } from "../../data/proyectos";
import Blobs from "../../components/Blobs";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) notFound();

  return (
    <main className="bg-[#231F20] min-h-screen relative overflow-hidden">
      <Blobs />
      {/* Contenido sobre los blobs */}
      <div className="relative z-10">
      {/* Barra superior */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/#galeria" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2">
            ← Volver
          </Link>
          <Link href="/">
            <Image src="/logo-blanco.png" alt="LaPizarra" width={120} height={48} className="h-10 w-auto object-contain" />
          </Link>
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
            src={proyecto.fotos[0]}
            alt={proyecto.titulo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1152px"
            priority
          />
        </div>
      </div>

      {/* Grid resto de fotos */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {proyecto.fotos.slice(1).map((src, i) => (
            <div key={i} className="relative aspect-video overflow-hidden">
              <Image
                src={src}
                alt={`${proyecto.titulo} ${i + 2}`}
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
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-4">Objetivo</p>
            <p className="text-white/70 text-lg leading-relaxed">{proyecto.objetivo}</p>
          </div>

          <div>
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-4">Concepto Creativo</p>
            <p className="text-white/70 text-lg leading-relaxed">{proyecto.conceptoCreativo}</p>
          </div>

          <div>
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-4">Resultado</p>
            <p className="text-white/70 text-lg leading-relaxed">{proyecto.resultado}</p>
          </div>

          <div>
            <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-4">Presupuesto</p>
            <p className="text-white font-black text-4xl">{proyecto.presupuesto}</p>
          </div>

        </div>
      </div>

      {/* Footer mínimo */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} LaPizarra. Todos los derechos reservados.</p>
          <Link href="/#galeria" className="text-white/50 hover:text-white text-sm transition-colors">
            Ver más proyectos →
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
}
