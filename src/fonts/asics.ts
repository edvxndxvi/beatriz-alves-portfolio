import localFont from "next/font/local";

/**
 * Fonte ASICS Font 3.0 do case Campanha Promocional (Asics). Só existe em itálico: Italic 400
 * (textos, legendas e o contorno do título) e Bold Italic 700 (títulos). Aplicar
 * `asicsFontVariables` no wrapper da página.
 */
export const asicsFont = localFont({
  src: [
    {
      path: "./files/asics/ASICSFont3.0-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./files/asics/ASICSFont3.0-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--nf-asics",
});

export const asicsFontVariables = asicsFont.variable;
