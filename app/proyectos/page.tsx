import Image from "next/image";
import Link from "next/link";
import { proyectos } from "../data/proyectos";
import Header from "../components/Header";

export const metadata = {
  title: "Proyectos — LaPizarra",
  description: "Muestra de trabajos: eventos corporativos, lanzamientos, activaciones BTL y experiencias de marca producidas por LaPizarra.",
};

export default function ProyectosPage() {
  return (
    <>
      <Header />
      <main className="bg-[#231F20] min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Headline */}
          <div className="mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm font-medium hover:text-white/60 transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Volver al inicio
            </Link>
            <p className="text-[#EC008C] font-black text-sm tracking-widest uppercase mb-4">Proyectos</p>
            <h1 className="text-white font-black leading-none tracking-tighter">
              <span className="block text-5xl md:text-7xl">Cada proyecto,</span>
              <span className="block text-5xl md:text-7xl text-white/30">una historia.</span>
            </h1>
          </div>

          {/* Grid de proyectos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto) => {
              const hero = proyecto.heroFoto ?? proyecto.fotos[0];
              return (
                <Link
                  key={proyecto.slug}
                  href={`/proyectos/${proyecto.slug}`}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
                >
                  <Image
                    src={hero}
                    alt={proyecto.titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EC008C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-[#EC008C] text-[10px] font-black uppercase tracking-widest mb-1">
                      {proyecto.cliente}
                    </p>
                    <p className="text-white font-black text-lg leading-tight mb-3">
                      {proyecto.titulo}
                    </p>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                      <span>Ver proyecto</span>
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </main>
    </>
  );
}
