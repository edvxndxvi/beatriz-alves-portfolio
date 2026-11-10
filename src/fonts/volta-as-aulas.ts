import { Anton } from "next/font/google";
import { poppins } from "./dash";

/**
 * Fontes do case Volta às Aulas: Impact é a fonte do design (fonte do sistema, não dá para empacotar); Anton (livre, OFL) fica como reserva onde a Impact não existe (Android, Linux). Usadas nos títulos e na citação, e Poppins 300
 * (a mesma do Dash) na legenda. Aplicar `voltaFontVariables` no wrapper da página.
 */
export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-anton",
});

export const voltaFontVariables = `${anton.variable} ${poppins.variable}`;
