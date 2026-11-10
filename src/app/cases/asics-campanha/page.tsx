import Image from "next/image";
import type { ReactNode } from "react";
import CaseCollage, {
  type CollageCaption,
  type CollageItem,
} from "@/components/case/CaseCollage";
import { caseImage } from "@/data/caseImages";
import { caseMetadata } from "@/data/caseMetadata";
import { cases } from "@/data/cases";
import { asicsFontVariables } from "@/fonts/asics";

const slug = "asics-campanha";
const c = cases.find((x) => x.slug === slug)!;

export const metadata = caseMetadata(
  c,
  "Case Campanha Promocional: campanha “Viva o Jogo” da Asics no SP Open, com key visuals, landing page, materiais de ponto de venda, photo opportunity e premiação.",
);

/** Legenda no desenho (Figma 1920px). `y` é o topo do glifo; o -3 leva ao topo da linha. */
const cap = (
  text: string,
  x: number,
  y: number,
  align: CollageCaption["align"] = "left",
): CollageCaption => ({ text, x, y: y - 3, align });

/**
 * A página tem três colagens com origens próprias (y do desenho no Figma, 1920px de largura):
 * key visuals e landing page (y = 1577), materiais de ponto de venda (y = 4561) e premiação
 * (y = 7745). Os arquivos estão em 2x (scale 0.5); os key visuals ocupam 1224px sobre os 2400px.
 */
const keyVisuals: CollageItem[] = [
  {
    name: "01a-key-visual",
    alt: "Key visual da campanha: “Viva o Jogo”, com a logo Asics, uma raquete e duas pessoas jogando tênis em ilustração, sobre fundo verde-limão e branco.",
    x: 347,
    y: 0,
    scale: 1224 / 2400,
    caption: cap("Key Visual", 347, 703),
  },
  {
    name: "01b-key-visual-promocional",
    alt: "Key visual promocional: “Promoção Viva o Jogo — Ative o movimento”, com as três etapas (compre, dobre suas chances, acesse o site) e a ilustração dos tenistas.",
    x: 347,
    y: 776,
    scale: 1224 / 2400,
    caption: cap("Key Visual - promocional", 347, 1479),
  },
  {
    name: "02a-landing-page",
    alt: "Landing page “Viva o Jogo” inteira: banner, como participar em três passos, informações sobre o sorteio e o formulário de cadastro.",
    x: 387,
    y: 1577,
    scale: 0.5,
    mobileWidth: 50,
  },
  {
    name: "02b-mockup-site",
    alt: "Notebook exibindo a página inicial do site da campanha “Viva o Jogo”.",
    x: 716,
    y: 1780,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("Landing page", 1265, 2452),
  },
];

const pdv: CollageItem[] = [
  {
    name: "03a-materiais-pdv",
    alt: "Conjunto de materiais de ponto de venda da campanha: cartazes, display de mesa e totem, com a ilustração dos tenistas.",
    x: 373,
    y: 1,
    scale: 0.5,
    mobileWidth: 90,
  },
  {
    name: "03b-vitrine",
    alt: "Vitrine de loja Asics com o adesivo da campanha “Viva o Jogo” aplicado no vidro.",
    x: 987,
    y: 0,
    scale: 0.5,
    mobileWidth: 90,
  },
  {
    name: "03c-espelho",
    alt: "Espelho de provador com o adesivo redondo da campanha “Viva o Jogo”.",
    x: 342,
    y: 1091,
    scale: 0.5,
    mobileWidth: 70,
  },
  {
    name: "03d-expositor",
    alt: "Expositor com roupas esportivas e o display da campanha ao fundo.",
    x: 773,
    y: 1091,
    scale: 0.5,
    mobileWidth: 70,
  },
  {
    name: "03e-arara",
    alt: "Arara de roupas com o cartaz da campanha pendurado.",
    x: 1204,
    y: 1091,
    scale: 0.5,
    mobileWidth: 70,
  },
  {
    name: "04-photo-opportunity",
    alt: "Photo opportunity: backdrop da campanha sobre piso azul, com três mulheres posando de tênis e uma raquete em formato de coração.",
    x: 366,
    y: 1754,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("Photo\nOpportunity", 408, 2642),
  },
];

const premiacao: CollageItem[] = [
  {
    name: "05a-kit-caixa",
    alt: "Kit de premiação: caixa aberta com uma bola de tênis personalizada e uma caixa branca com a logo “Viva o Jogo”.",
    x: 407,
    y: 27,
    scale: 0.5,
    mobileWidth: 90,
  },
  {
    name: "05b-camera",
    alt: "Câmera descartável com o adesivo “Viva o Jogo”.",
    x: 1132,
    y: 0,
    scale: 0.5,
    mobileWidth: 70,
  },
  {
    name: "05c-brindes",
    alt: "Brindes da campanha: pins em formato de coração, raquete e bola de tênis.",
    x: 1167,
    y: 281,
    scale: 0.5,
    mobileWidth: 62,
  },
  {
    name: "05d-carta",
    alt: "Carta-convite impressa e envelope com o selo da campanha, anunciando o prêmio de um dia VIP de tênis.",
    x: 621,
    y: 586,
    scale: 0.5,
    mobileWidth: 90,
  },
];

/** Quebra de linha só em lg+, onde o desenho tem as linhas definidas. */
const Br = () => <br className="hidden lg:inline" />;

/** Título de seção: primeira linha em negrito, segunda (opcional) só com contorno. */
function SectionTitle({
  filled,
  outlined,
  className = "",
}: {
  filled: ReactNode;
  outlined?: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-asics-azul text-center text-[max(30px,calc(70*var(--u)))] leading-[1.05] font-bold tracking-[-0.055em] uppercase italic lg:leading-[calc(71*var(--u))] ${className}`}
    >
      {filled}
      {outlined && (
        <>
          <br />
          <span className="font-normal tracking-[-0.03em] text-transparent [-webkit-text-stroke:calc(1.5*var(--u)+0.3px)_var(--color-asics-azul)]">
            {outlined}
          </span>
        </>
      )}
    </h2>
  );
}

const captionClass =
  "text-[max(13px,calc(23.6*var(--u)))] leading-[calc(29*var(--u))] text-asics-azul italic";

export default function AsicsCampanhaPage() {
  const logo = caseImage(slug, "0-asics-logo");

  return (
    <main
      className={`${asicsFontVariables} font-asics text-asics-azul mx-auto flex max-w-[1920px] flex-col items-center overflow-x-clip px-5 pt-12 pb-20 italic lg:px-0 lg:pt-[calc(158*var(--u))] lg:pb-[calc(142*var(--u))]`}
    >
      <h1 className="w-[min(100%,420px)] lg:w-[calc(797*var(--u))] lg:-translate-x-[calc(4*var(--u))]">
        <Image
          src={logo.src}
          alt="Campanha Promocional — Asics"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>

      <div className="mt-12 flex w-full max-w-md flex-col items-center text-center sm:max-w-2xl lg:mt-[calc(171*var(--u))] lg:max-w-none lg:whitespace-nowrap">
        <h2 className="text-[max(30px,calc(91*var(--u)))] leading-[1.1] font-bold lg:leading-[calc(94*var(--u))]">
          Viva o Jogo:
          <br />
          entre na experiência.
        </h2>
        <div className="mt-8 flex flex-col gap-[1.2em] text-[max(18px,calc(49*var(--u)))] leading-[1.3] lg:mt-[calc(65*var(--u))] lg:gap-[calc(51*var(--u))] lg:leading-[calc(56*var(--u))]">
          <p>
            Com o SP Open como palco, a ASICS convida o consumidor a
            <Br /> sair da arquibancada e viver o esporte de perto.
          </p>
          <p>
            A cada compra, um número da sorte; no sorteio final, cinco
            <Br /> vencedores e seus acompanhantes ganham um dia VIP de tênis,
            <Br /> do treino ao jogo.
          </p>
        </div>
      </div>

      <div className="mt-12 w-full lg:mt-[calc(103*var(--u))]">
        <CaseCollage
          slug={slug}
          stackMaxWidth="max-w-2xl"
          width={1920}
          height={2640}
          items={keyVisuals}
          captionClassName={captionClass}
        />
      </div>

      <SectionTitle
        filled="Materiais de"
        outlined="ponto de venda"
        className="mt-16 lg:mt-[calc(122*var(--u))]"
      />

      <div className="mt-12 w-full lg:mt-[calc(80*var(--u))]">
        <CaseCollage
          slug={slug}
          stackMaxWidth="max-w-2xl"
          width={1920}
          height={2894}
          items={pdv}
          captionClassName={captionClass}
        />
      </div>

      <SectionTitle
        filled="Premiação"
        className="mt-16 lg:mt-[calc(153*var(--u))]"
      />

      <div className="mt-12 w-full lg:mt-[calc(66*var(--u))]">
        <CaseCollage
          slug={slug}
          stackMaxWidth="max-w-2xl"
          width={1920}
          height={1093}
          items={premiacao}
          captionClassName={captionClass}
        />
      </div>
    </main>
  );
}
