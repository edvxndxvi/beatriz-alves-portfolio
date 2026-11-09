import { Poppins } from "next/font/google";

/** Fonte do case Dash: Poppins 300 (livre, OFL). Aplicar `dashFontVariables` no wrapper da página. */
export const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-poppins",
});

export const dashFontVariables = poppins.variable;
