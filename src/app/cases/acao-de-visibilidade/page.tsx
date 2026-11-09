import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import CaseCollage, { type CollageItem } from "@/components/case/CaseCollage";
import { caseImage } from "@/data/caseImages";
import { cases } from "@/data/cases";
import { acaoFontVariables } from "@/fonts/acao-de-visibilidade";

const slug = "acao-de-visibilidade";
const c = cases.find((x) => x.slug === slug)!;

export const metadata: Metadata = {
  title: `${c.title} — ${c.client} | Beatriz Alves`,
  description:
    "Case Ação de Visibilidade: materiais de divulgação do Samaritano Paulista (Rede Américas) em academias, padarias e restaurantes, livrarias e bares durante a Copa do Mundo.",
};

/**
 * Posições das peças no desenho do Figma (1920px de largura). Cada colagem tem a origem no
 * topo da página (x = 0) e usa `y` relativo ao topo da colagem. Os PNGs estão exportados em 2x
 * (scale 0.5); o display triangular está em 0,6 e tem margem transparente em volta.
 */
const academias: CollageItem[] = [
  {
    name: "01a-cards-informativos",
    mobileWidth: 88,
    alt: "Dois cards quadrados: “Pegou pesado no treino?”, com uma pessoa levantando halteres, e “Se o treino exigir demais…”, com uma pessoa em um aparelho de musculação. Ambos indicam que o Samaritano Paulista está a poucos metros da academia.",
    x: 344,
    y: 0,
    scale: 0.5,
  },
  {
    name: "01c-totem",
    mobileWidth: 43,
    alt: "Totem de balcão roxo com o texto “Treinar é importante. Conheça seu corpo também.” e uma ilustração de pessoa se alongando, com a oferta de bioimpedância gratuita no Samaritano Paulista.",
    x: 1124,
    y: 12,
    scale: 0.5,
  },
  {
    name: "01b-esteira",
    mobileWidth: 83,
    alt: "Esteira de academia com um cartão preso ao painel: “Cansou rápido demais???”.",
    x: 412,
    y: 404,
    scale: 0.5,
  },
  {
    name: "01d-figuras",
    mobileWidth: 66,
    alt: "Folha impressa com ilustrações de pessoas se exercitando e do prédio do hospital, com a logo da Rede Américas.",
    x: 380,
    y: 984,
    scale: 0.5,
  },
  {
    name: "01e-esteira-2",
    mobileWidth: 62,
    alt: "Painel de uma esteira com um cartão “Que tal um desafio?” preso no topo, propondo percorrer os 500 metros até o hospital.",
    x: 1016,
    y: 952,
    scale: 0.5,
  },
];

const padarias: CollageItem[] = [
  {
    name: "02a-copos",
    mobileWidth: 36,
    alt: "Copos descartáveis empilhados, com listras e xadrez nas cores da marca.",
    x: 527,
    y: 0,
    scale: 0.5,
  },
  {
    name: "02b-display-mesa",
    mobileWidth: 74,
    alt: "Display de mesa roxo com o texto “Cuidar da saúde pode ser rápido.” e um mapa ilustrado até o hospital.",
    x: 987,
    y: 104,
    scale: 0.5,
  },
  {
    name: "02c-guardanapo",
    mobileWidth: 95,
    alt: "Jogo americano de papel com o texto “Uma boa refeição faz diferença. Um check-up em dia também.” e a ilustração de uma pessoa à mesa.",
    x: 196,
    y: 596,
    scale: 0.5,
  },
  {
    name: "02d-carrier-de-copo",
    mobileWidth: 134,
    alt: "Porta-copos de papel com alça, em roxo e branco, segurando um copo xadrez.",
    x: 752,
    y: 908,
    scale: 0.5,
  },
  {
    name: "02e-display-mesa-triangular",
    mobileWidth: 159,
    alt: "Display de mesa triangular com o texto “Cuidar da saúde também passa pela mesa.” e a ilustração de uma pessoa à mesa.",
    x: 72,
    y: 1172,
    scale: 0.6,
  },
];

const livrarias: CollageItem[] = [
  {
    name: "03a-sinalizador-prateleira",
    mobileWidth: 35,
    alt: "Sinalizador de prateleira com o texto “Curadoria Samaritano Paulista. Cuidar de você é a nossa melhor história!” e a ilustração de uma pessoa lendo.",
    x: 404,
    y: 4,
    scale: 0.5,
  },
  {
    name: "03b-wobbler",
    mobileWidth: 60,
    alt: "Wobbler de prateleira com o texto “Curadoria Samaritano Paulista”.",
    x: 772,
    y: 88,
    scale: 0.5,
  },
  {
    name: "03c-marca-paginas",
    mobileWidth: 43,
    alt: "Dois marcadores de página: “Vire a página. Cuide de você.” e “Samaritano Paulista, Pronto-Socorro, Consultas e Exames”.",
    x: 1172,
    y: 0,
    scale: 0.5,
  },
];

const copa: CollageItem[] = [
  {
    name: "04a-display-mesa",
    mobileWidth: 76,
    alt: "Display de mesa em formato de tenda, com os textos “Emoção de Copa faz o coração ir a mil” e “Na Copa, o coração é testado a cada jogo”, com ilustrações de jogadores de futebol.",
    x: 276,
    y: 0,
    scale: 0.5,
  },
  {
    name: "04b-porta-copo",
    mobileWidth: 72,
    alt: "Dois porta-copos quadrados: “Haja Coração!” e “Que defesa!”, com ilustrações de jogadores de futebol.",
    x: 1032,
    y: 40,
    scale: 0.5,
  },
];

/** Título numerado da seção, com o marca-texto lilás atrás (um traço por linha, se quebrar). */
function SectionTitle({
  number,
  className = "",
  children,
}: {
  number: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={`text-rede-roxo w-full max-w-md text-[max(26px,calc(88*var(--u)))] leading-[1.08] tracking-[-0.02em] italic sm:max-w-3xl lg:w-[calc(1232*var(--u))] lg:max-w-none ${className}`}
    >
      <span className="box-decoration-clone bg-[linear-gradient(to_top,transparent_0.08em,var(--color-rede-lilas)_0.08em,var(--color-rede-lilas)_0.4em,transparent_0.4em)]">
        <b className="font-extrabold">{number}</b>{" "}
        <span className="font-light">{children}</span>
      </span>
    </h2>
  );
}

export default function AcaoDeVisibilidadePage() {
  const logo = caseImage(slug, "0-acao-de-visibilidade-logo");

  return (
    <main
      className={`${acaoFontVariables} font-inter mx-auto flex max-w-[1920px] flex-col items-center gap-12 px-5 pt-12 pb-20 overflow-x-clip lg:gap-0 lg:px-0 lg:pt-[calc(112*var(--u))] lg:pb-[calc(156*var(--u))]`}
    >
      <h1 className="w-[min(60vw,260px)] lg:w-[calc(432*var(--u))]">
        <Image
          src={logo.src}
          alt="Ação de visibilidade — Rede Américas"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>

      <p className="text-rede-roxo w-full max-w-md text-[max(19px,calc(58*var(--u)))] leading-[1.13] font-light tracking-[-0.01em] italic sm:max-w-3xl lg:mt-[calc(106*var(--u))] lg:w-[calc(1232*var(--u))] lg:max-w-none lg:px-[calc(4*var(--u))]">
        Para aumentar o reconhecimento da unidade Samaritano Paulista precisamos
        <strong className="mt-[0.25em] block text-[1.32em] leading-[1.07] lg:max-w-[calc(1100*var(--u))] font-extrabold tracking-[-0.02em]">
          estar presente no cotidiano
          <br className="hidden lg:inline" /> das pessoas que vivem e
          <br className="hidden lg:inline" /> trabalham no entorno
          <br className="hidden lg:inline" /> do hospital.
        </strong>
      </p>

      <SectionTitle number="01." className="lg:mt-[calc(148*var(--u))]">
        academias
      </SectionTitle>
      <section
        aria-label="Academias"
        className="w-full lg:mt-[calc(104*var(--u))]"
      >
        <CaseCollage slug={slug} width={1920} height={1490} items={academias} />
      </section>

      <SectionTitle number="02." className="lg:mt-[calc(170*var(--u))]">
        padarias e restaurantes
      </SectionTitle>
      <section
        aria-label="Padarias e restaurantes"
        className="w-full lg:mt-[calc(144*var(--u))]"
      >
        <CaseCollage slug={slug} width={1920} height={2100} items={padarias} />
      </section>

      <SectionTitle number="03." className="lg:mt-[calc(32*var(--u))]">
        livrarias
      </SectionTitle>
      <section
        aria-label="Livrarias"
        className="w-full lg:mt-[calc(152*var(--u))]"
      >
        <CaseCollage slug={slug} width={1920} height={749} items={livrarias} />
      </section>

      <SectionTitle number="04." className="lg:mt-[calc(127*var(--u))]">
        bares durante a<br className="hidden lg:inline" /> copa do mundo
      </SectionTitle>
      <section
        aria-label="Bares durante a Copa do Mundo"
        className="w-full lg:mt-[calc(80*var(--u))]"
      >
        <CaseCollage slug={slug} width={1920} height={448} items={copa} />
      </section>
    </main>
  );
}
