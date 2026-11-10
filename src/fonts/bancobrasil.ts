import localFont from "next/font/local";

/**
 * Fonte Banco do Brasil Títulos no case Bora Encantar (BrasilSeg): Regular 400, Italic 400,
 * Bold 700 e Extra Bold Italic 800. Aplicar `bancoBrasilFontVariables` no wrapper da página e usar
 * a classe `font-bb-titulo`.
 */
export const bbTitulo = localFont({
  src: [
    {
      path: "./files/bb/titulo/BancoDoBrasilTitulos-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./files/bb/titulo/BancoDoBrasilTitulos-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./files/bb/titulo/BancoDoBrasilTitulos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./files/bb/titulo/BancoDoBrasilTitulos-XBoldIt.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--nf-bb-titulo",
});

export const bancoBrasilFontVariables = bbTitulo.variable;
