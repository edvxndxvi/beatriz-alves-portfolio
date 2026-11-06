import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beatriz Alves — Designer gráfica e diretora de arte",
  description:
    "Portfólio de Beatriz Alves: identidade visual, campanhas, eventos e design gráfico digital.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
