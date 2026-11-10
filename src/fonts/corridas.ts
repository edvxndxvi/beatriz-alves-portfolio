import localFont from "next/font/local";

/**
 * Fontes Banco do Brasil do case Corridas (BB Seguros). Textos: Regular 400, Italic 400, Medium
 * Italic 500 e Bold 700 (classe `font-bb-texto`). Títulos: Regular 400 e Bold 700 (classe
 * `font-bb-titulo`). Aplicar `corridasFontVariables` no wrapper da página.
 */
export const bbTexto = localFont({
  src: [
    {
      path: "./files/bb/texto/BancoDoBrasilTextos-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./files/bb/texto/BancoDoBrasilTextos-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./files/bb/texto/BancoDoBrasilTextos-MediumIt.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./files/bb/texto/BancoDoBrasilTextos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--nf-bb-texto",
});

export const bbTituloCorridas = localFont({
  src: [
    {
      path: "./files/bb/titulo/BancoDoBrasilTitulos-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./files/bb/titulo/BancoDoBrasilTitulos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--nf-bb-titulo",
});

export const corridasFontVariables = `${bbTexto.variable} ${bbTituloCorridas.variable}`;
