import { Montserrat } from "next/font/google";

/**
 * Fonte do case Vibrações Urbanas: Montserrat (livre, OFL), usada só no texto do link para a
 * revista completa. Variável, então cobre o regular e o itálico seminegrito com um arquivo por
 * estilo. Aplicar `vibracoesFontVariables` no wrapper da página.
 * TODO(conferir): fonte identificada pelo desenho das letras no screenshot do Figma.
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--nf-montserrat",
});

export const vibracoesFontVariables = montserrat.variable;
