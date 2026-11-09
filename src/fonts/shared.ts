import localFont from "next/font/local";

/**
 * Fontes usadas por mais de uma página (home + layout dos cases). Cada uma expõe uma variável
 * CSS (--nf-*) que o Tailwind usa em `font-salted` (ver globals.css).
 */

// Salted 400 (manuscrita em caixa alta: títulos, rótulos, contatos)
export const salted = localFont({
  src: "./files/salted-regular.otf",
  weight: "400",
  display: "swap",
  variable: "--nf-salted",
});
