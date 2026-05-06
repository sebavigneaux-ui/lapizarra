import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
