import type { MetadataRoute } from "next";
import { ARTICULOS } from "./data/articulos";
import { proyectos } from "./data/proyectos";

const BASE = "https://somoslapizarra.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/calculadora`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/ferias-stands`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/proyectos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/centro-de-aprendizaje`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const proyectosPages: MetadataRoute.Sitemap = proyectos.map((p) => ({
    url: `${BASE}/proyectos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const articulosPages: MetadataRoute.Sitemap = ARTICULOS.map((a) => ({
    url: `${BASE}/centro-de-aprendizaje/${a.slug}`,
    lastModified: new Date(a.fecha),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...proyectosPages, ...articulosPages];
}
