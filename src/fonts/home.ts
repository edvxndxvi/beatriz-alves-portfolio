import { Gaegu, Krona_One, Poppins } from "next/font/google";

/**
 * Fontes da home. Cada uma expõe uma variável CSS (--nf-*) que o Tailwind usa em
 * `font-sans`, `font-salted` e `font-gunter` (ver globals.css).
 *
 * TODO(licença): Salted e Gunter são fontes comerciais e ainda não estão licenciadas.
 * Os valores abaixo são SUBSTITUTAS livres do Google Fonts. Quando houver licença, troque
 * por `next/font/local` apontando para o arquivo, mantendo o mesmo `variable`.
 */

// Texto corrido (Poppins Light) — livre (OFL)
export const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-poppins",
});

// Placeholder da Salted 400 (manuscrita em caixa alta: títulos, rótulos, contatos)
export const salted = Gaegu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-salted",
});

// Placeholder da Gunter 400 (faixa em loop)
export const gunter = Krona_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-gunter",
});

/** Classes que definem as três variáveis; aplicar no wrapper da home. */
export const homeFontVariables = `${poppins.variable} ${salted.variable} ${gunter.variable}`;
