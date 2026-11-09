import CaseHeader from "@/components/case/CaseHeader";
import Footer from "@/components/home/Footer";
import { salted } from "@/fonts/shared";

/** Estrutura comum a todos os cases: cabeçalho (voltar + logo) e rodapé de contato. */
export default function CasesLayout({ children }: LayoutProps<"/cases">) {
  return (
    <div className={`${salted.variable} font-sans`}>
      <CaseHeader />
      {children}
      <Footer />
    </div>
  );
}
