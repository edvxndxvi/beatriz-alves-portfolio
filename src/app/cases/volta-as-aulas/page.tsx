import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import CaseCollage, { type CollageItem } from "@/components/case/CaseCollage";
import { caseImage } from "@/data/caseImages";
import { caseMetadata } from "@/data/caseMetadata";
import { cases } from "@/data/cases";
import { voltaFontVariables } from "@/fonts/volta-as-aulas";

const slug = "volta-as-aulas";
const c = cases.find((x) => x.slug === slug)!;

export const metadata = caseMetadata(
  c,
  "Case Volta às Aulas: campanha da Pravaler com key visual, estande e brindes, sob o conceito “Educação sem obstáculos, diversão sem limites”.",
);

const estande = [
  {
    name: "02a-estande-1",
    alt: "Render do estande Pravaler à noite: parede com o key visual, balcão iluminado, totem e um esqueleto de jaleco com capelo de formatura.",
  },
  {
    name: "02b-estande-2",
    alt: "Estande Pravaler visto de frente: parede com o key visual sob um letreiro em arco, balcão com a logo e esqueleto de jaleco com capelo.",
  },
  {
    name: "02c-estande-3",
    alt: "Estande Pravaler visto em ângulo, com letreiro em arco iluminado, balcão laranja, totem e expositores de brindes.",
  },
];

const brindes: CollageItem[] = [
  {
    name: "03a-adesivos",
    alt: "Cartela de adesivos com os ícones do parque de diversões da campanha e a logo Pravaler.",
    x: 384,
    y: 12,
    scale: 0.5,
    mobileWidth: 90,
  },
  {
    name: "03b-bone",
    alt: "Boné laranja com bottons dos ícones da campanha.",
    x: 835,
    y: 50,
    scale: 0.5,
    mobileWidth: 70,
  },
  {
    name: "03c-cordao-cracha",
    alt: "Cordão estampado com o padrão da campanha, preso a um crachá laranja com a logo Pravaler.",
    x: 1156,
    y: 0,
    scale: 0.5,
    mobileWidth: 100,
  },
];

/** Faixa laranja inclinada atrás dos títulos de seção (a mesma do Figma, 482×214). */
function Bar({ children }: { children: ReactNode }) {
  const bar = caseImage(slug, "02-title-decoration");
  return (
    <div
      style={
        {
          "--bw": `calc(${bar.width}*var(--u))`,
          "--ref": bar.width * 1.3,
        } as CSSProperties
      }
      className={`unidade-local relative grid h-[calc(214*var(--u))] w-(--bw) place-items-center`}
    >
      <Image
        src={bar.src}
        alt=""
        width={bar.width}
        height={bar.height}
        className="absolute inset-0 h-full w-full"
      />
      <h2 className="font-impact relative translate-x-[calc(5*var(--u))] translate-y-[calc(-10*var(--u))] text-[calc(129*var(--u))] leading-none text-white [-webkit-text-stroke:calc(2*var(--u))_var(--color-pravaler)]">
        {children}
      </h2>
    </div>
  );
}

export default function VoltaAsAulasPage() {
  const logo = caseImage(slug, "0-volta-as-aulas-pravaler-logo");
  const aspas = caseImage(slug, "aspas");
  const key = caseImage(slug, "01-key-visual");

  return (
    <main
      className={`${voltaFontVariables} text-pravaler mx-auto flex max-w-[1920px] flex-col items-center gap-12 overflow-x-clip px-5 pt-12 pb-20 font-sans lg:gap-0 lg:px-0 lg:pt-[calc(108*var(--u))] lg:pb-[calc(172*var(--u))]`}
    >
      {/* Título: "Volta às aulas" + logo Pravaler, em uma imagem só (1524×480, 2x) */}
      <h1 className="w-full max-w-md sm:max-w-xl lg:w-[calc(762*var(--u))] lg:max-w-none">
        <Image
          src={logo.src}
          alt="Volta às aulas — Pravaler"
          width={logo.width}
          height={logo.height}
          priority
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="h-auto w-full"
        />
      </h1>

      {/* Citação */}
      <figure className="relative w-full max-w-md sm:max-w-3xl lg:mt-[calc(60*var(--u))] lg:w-[calc(1232*var(--u))] lg:max-w-none">
        <Image
          src={aspas.src}
          alt=""
          width={aspas.width}
          height={aspas.height}
          className="h-auto w-[18%] max-w-[72px] lg:absolute lg:top-0 lg:-left-[calc(60*var(--u))] lg:w-[calc(123*var(--u))] lg:max-w-none"
        />
        <blockquote className="font-impact mt-3 text-[max(26px,calc(75.5*var(--u)))] leading-[1.22] lg:mt-[calc(104*var(--u))] lg:pl-[calc(4*var(--u))]">
          Porque, com o Pravaler, a educação não tem travas. Ela é uma jornada
          mais leve, onde o futuro é a maior aventura que você pode viver,”
        </blockquote>
      </figure>

      {/* Key visual */}
      <figure className="w-full max-w-md sm:max-w-3xl lg:mt-[calc(96*var(--u))] lg:w-[calc(1232*var(--u))] lg:max-w-none">
        <Image
          src={key.src}
          alt="Key visual da campanha: mosaico de ícones de parque de diversões (castelo, roda-gigante, carrinho de pipoca, ingresso, carrossel) em laranja, preto e branco, com a logo Pravaler e o texto “Educação sem obstáculos, diversão sem limites”."
          width={key.width}
          height={key.height}
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="h-auto w-full"
        />
        <figcaption className="font-sans text-[max(14px,calc(28*var(--u)))] font-light lg:mt-[calc(8*var(--u))]">
          Key Visual
        </figcaption>
      </figure>

      <section
        aria-label="Estande"
        className="flex w-full flex-col items-center gap-12 lg:mt-[calc(76*var(--u))] lg:gap-0"
      >
        <Bar>ESTANDE</Bar>
        <div className="flex w-full max-w-md flex-col gap-4 sm:max-w-3xl lg:mt-[calc(92*var(--u))] lg:w-[calc(1232*var(--u))] lg:max-w-none lg:gap-[calc(28*var(--u))]">
          {estande.map((e) => {
            const img = caseImage(slug, e.name);
            return (
              <Image
                key={e.name}
                src={img.src}
                alt={e.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="h-auto w-full"
              />
            );
          })}
        </div>
      </section>

      <section
        aria-label="Brindes"
        className="flex w-full flex-col items-center gap-12 lg:mt-[calc(116*var(--u))] lg:gap-0"
      >
        <Bar>BRINDES</Bar>
        <div className="w-full lg:mt-[calc(96*var(--u))]">
          <CaseCollage slug={slug} width={1920} height={344} items={brindes} />
        </div>
      </section>
    </main>
  );
}
