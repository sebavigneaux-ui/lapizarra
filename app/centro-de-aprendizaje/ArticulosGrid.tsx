"use client";

import { useState } from "react";
import Link from "next/link";
import type { Articulo, CategoriaArticulo } from "../data/articulos";
import { CATEGORIAS } from "../data/articulos";

interface Props {
  articulos: Articulo[];
}

function formatFecha(fecha: string) {
  const [year, month, day] = fecha.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticulosGrid({ articulos }: Props) {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaArticulo | "todos">("todos");

  const filtrados =
    categoriaActiva === "todos"
      ? articulos
      : articulos.filter((a) => a.categoria === categoriaActiva);

  return (
    <>
      {/* Filtro por categoría */}
      <div className="flex flex-wrap gap-2 mb-16">
        <button
          onClick={() => setCategoriaActiva("todos")}
          className={`px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-wider transition-all duration-200 ${
            categoriaActiva === "todos"
              ? "bg-[#EC008C] text-white"
              : "border border-white/20 text-white/50 hover:text-white hover:border-white/40"
          }`}
        >
          Todos
        </button>
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaActiva(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-wider transition-all duration-200 ${
              categoriaActiva === cat.id
                ? "bg-[#EC008C] text-white"
                : "border border-white/20 text-white/50 hover:text-white hover:border-white/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid de artículos */}
      {filtrados.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-white/30 text-lg font-medium">
            Próximamente artículos en esta categoría.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((articulo) => (
            <Link
              key={articulo.slug}
              href={`/centro-de-aprendizaje/${articulo.slug}`}
              className="group flex flex-col border border-white/10 rounded-2xl p-7 hover:border-white/25 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]"
            >
              {/* Categoría */}
              <span className="text-[#EC008C] text-xs font-black uppercase tracking-widest mb-4">
                {articulo.categoriaLabel}
              </span>

              {/* Título */}
              <h2 className="text-white font-black text-xl leading-tight tracking-tight mb-4 flex-1 group-hover:text-white/90 transition-colors duration-200">
                {articulo.titulo}
              </h2>

              {/* Excerpt */}
              <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
                {articulo.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-white/30 text-xs font-medium">
                  {formatFecha(articulo.fecha)}
                </span>
                <span className="text-white/30 text-xs font-medium">
                  {articulo.readTime} min de lectura
                </span>
              </div>

              {/* CTA hover */}
              <div className="mt-4 flex items-center gap-2 text-[#EC008C] text-xs font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <span>Leer artículo</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
