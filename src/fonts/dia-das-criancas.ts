import localFont from "next/font/local";

/**
 * Fonte ABC Favorit Mono (versão Trial) do case Dia das Crianças. Pesos usados: Book 350 (textos),
 * Bold 700 (palavras coloridas), Bold Italic 700 (títulos e rótulos dos personagens) e Light
 * Italic 300 (legendas e descrições). Aplicar `diaDasCriancasFontVariables` no wrapper da página.
 */
export const abcMono = localFont({
  src: [
    {
      path: "./files/abc/ABCFavoritMono-Book-Trial.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "./files/abc/ABCFavoritMono-Bold-Trial.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./files/abc/ABCFavoritMono-BoldItalic-Trial.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./files/abc/ABCFavoritMono-LightItalic-Trial.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--nf-abc-mono",
});

export const diaDasCriancasFontVariables = abcMono.variable;
