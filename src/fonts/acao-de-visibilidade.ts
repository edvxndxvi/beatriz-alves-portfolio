import { Inter } from "next/font/google";

/**
 * Fonte do case Ação de Visibilidade: Inter (livre, OFL), em itálico, para o texto de
 * abertura e os títulos das seções. Variável, então cobre do light ao extrabold. Aplicar
 * `acaoFontVariables` no wrapper da página.
 */
export const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--nf-inter",
});

export const acaoFontVariables = inter.variable;
