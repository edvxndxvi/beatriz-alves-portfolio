import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático: `next build` gera a pasta /out
  output: "export",
  // /cases/corridas -> /cases/corridas/index.html (funciona em qualquer host estático)
  trailingSlash: true,
  // O loader padrão não existe em export estático; as imagens são otimizadas (WebP) antes de entrar em /public
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
