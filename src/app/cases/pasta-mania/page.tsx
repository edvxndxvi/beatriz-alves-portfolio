import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import IdentityCollage from "@/components/case/pasta-mania/IdentityCollage";
import Stories from "@/components/case/pasta-mania/Stories";
import { caseImage } from "@/data/caseImages";
import { cases } from "@/data/cases";

const c = cases.find((x) => x.slug === "pasta-mania")!;

export const metadata: Metadata = {
  title: `${c.title} — ${c.client} | Beatriz Alves`,
  description:
    "Case Pasta Mania: identidade visual de uma marca de massas frescas, com logo, paleta, embalagens, outdoor, cardápio e peças para redes sociais.",
};

// Peças em tela cheia, na ordem da página, com a largura que têm no Figma (px).
const pieces = [
  {
    name: "03-foto-massa-concha",
    width: 1220,
    alt: "Prato fundo azul com massa conchiglie ao molho de tomate, decorado com ilustrações de massas",
  },
  {
    name: "04-embalagens",
    width: 1226,
    alt: "Embalagens da marca: caixas azuis de massa e uma sacola de papel, sobre fundo amarelo com a textura da marca",
  },
  {
    name: "05-outdoor",
    width: 1226,
    alt: "Outdoor com a composição de cards da marca: logo, símbolo, slogan e textura",
  },
  {
    name: "06-avental-cardapio",
    width: 1226,
    alt: "Avental azul com a logo da marca e cardápio impresso, sobre fundo azul",
  },
  {
    name: "07-foto-penne",
    width: 1226,
    alt: "Prato de penne ao molho de tomate com manjericão, decorado com ilustrações de massas",
  },
  {
    name: "08-posts-instagram",
    width: 1226,
    alt: "Grade de posts do Instagram da marca, com o slogan, fotos de massas e a curiosidade “Você sabia que a massa não foi inventada na Itália?”",
  },
];

export default function PastaManiaPage() {
  const logo = caseImage("pasta-mania", "0-pasta-mania-logo");

  return (
    <main className="mx-auto flex max-w-[1920px] flex-col items-center gap-12 px-5 pt-12 pb-20 font-sans lg:gap-[calc(72*var(--u))] lg:px-0 lg:pt-[calc(168*var(--u))] lg:pb-[calc(221*var(--u))]">
      <h1 className="w-[min(80vw,420px)] lg:w-[calc(638*var(--u))]">
        <Image
          src={logo.src}
          alt="Pasta Mania"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>

      <section
        aria-label="Identidade visual"
        className="w-full lg:mt-[calc(71*var(--u))]"
      >
        <IdentityCollage />
      </section>

      {pieces.map((p, i) => {
        const img = caseImage("pasta-mania", p.name);
        return (
          <Image
            key={p.name}
            src={img.src}
            alt={p.alt}
            width={img.width}
            height={img.height}
            sizes="(min-width: 1024px) 64vw, 100vw"
            style={{ "--pw": `calc(${p.width}*var(--u))` } as CSSProperties}
            className={`h-auto w-full max-w-3xl lg:w-(--pw) lg:max-w-none ${i === 0 ? "lg:mt-[calc(13*var(--u))]" : ""}`}
          />
        );
      })}

      <section
        aria-label="Stories"
        className="lg:mt-[calc(85*var(--u))]"
      >
        <Stories />
      </section>
    </main>
  );
}
