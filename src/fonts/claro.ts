import localFont from "next/font/local";

/**
 * Fonte AMX dos cases da Claro Empresas (Formula 1 e Kick Off). Kick Off usa Light, Light Italic e
 * Bold Italic; Formula 1 usa Regular em itálico e Bold Italic. Não há arquivo Regular Italic, então
 * o itálico do 400 é sintetizado pelo navegador. Aplicar `claroFontVariables` no wrapper da página.
 */
export const amx = localFont({
  src: [
    { path: "./files/amx/AMX-Light.ttf", weight: "300", style: "normal" },
    { path: "./files/amx/AMX-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./files/amx/AMX-Regular.ttf", weight: "400", style: "normal" },
    { path: "./files/amx/AMX-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  display: "swap",
  variable: "--nf-amx",
});

export const claroFontVariables = amx.variable;
