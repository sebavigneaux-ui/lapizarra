import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Video del hero: el nombre cambia con cada versión (hero-2026.mp4), así que puede cachearse 1 año
        source: "/:file(hero-.*\\.mp4)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Fotos de galerías y poster: 30 días (si se reemplaza una foto con el mismo nombre, se actualiza en ≤30 días)
        source: "/:all*(jpg|jpeg|png|webp)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/centro-de-aprendizaje",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/centro-de-aprendizaje/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
