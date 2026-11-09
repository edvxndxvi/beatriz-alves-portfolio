import { Krona_One, Poppins } from "next/font/google";
import localFont from "next/font/local";

/**
 * Fontes da home. Cada uma expõe uma variável CSS (--nf-*) que o Tailwind usa em
 * `font-sans`, `font-salted` e `font-gunter` (ver globals.css).
 *
 * Salted: arquivo local licenciado (src/fonts/files).
 * TODO(licença): Gunter é comercial e ainda não está licenciada; o valor abaixo é uma
 * SUBSTITUTA livre do Google Fonts. Quando houver licença, troque por `next/font/local`,
 * mantendo o mesmo `variable`.
 */

// Texto corrido (Poppins Light) — livre (OFL)
export const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-poppins",
});

// Salted 400 (manuscrita em caixa alta: títulos, rótulos, contatos)
export const salted = localFont({
  src: "./files/salted-regular.otf",
  weight: "400",
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
