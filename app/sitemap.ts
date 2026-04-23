import type { MetadataRoute } from "next";
import { ARTICULOS } from "./data/articulos";
import { SERVICIOS } from "./data/servicios";
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
      url: `${BASE}/servicios/ferias-stands`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
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

  const serviciosPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...SERVICIOS.map((s) => ({
      url: `${BASE}/servicios/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
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

  return [...staticPages, ...serviciosPages, ...proyectosPages, ...articulosPages];
}
