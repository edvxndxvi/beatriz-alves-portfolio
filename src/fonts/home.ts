import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { salted } from "./shared";

/**
 * Fontes da home. Cada uma expõe uma variável CSS (--nf-*) que o Tailwind usa em
 * `font-sans`, `font-salted` e `font-gunter` (ver globals.css).
 *
 * Salted (em shared.ts, também usada no layout dos cases) e Gunter: arquivos locais em src/fonts/files.
 * TODO(licença): a Gunter é a versão "Test" (demo) e pode não ter todos os glifos (acentos,
 * números); trocar pelo arquivo licenciado quando houver, mantendo o mesmo `variable`.
 */

// Texto corrido (Poppins Light) — livre (OFL)
export const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-poppins",
});

// Gunter Test 400 (faixa em loop)
export const gunter = localFont({
  src: "./files/guntertest-regular.otf",
  weight: "400",
  display: "swap",
  variable: "--nf-gunter",
});

/** Classes que definem as três variáveis; aplicar no wrapper da home. */
export const homeFontVariables = `${poppins.variable} ${salted.variable} ${gunter.variable}`;
