import type { Metadata } from "next";
import Image from "next/image";
import CaseCollage, { type CollageItem } from "@/components/case/CaseCollage";
import { caseImage } from "@/data/caseImages";
import { cases } from "@/data/cases";
import { claroFontVariables } from "@/fonts/claro";

const slug = "kick-off";
const c = cases.find((x) => x.slug === slug)!;

export const metadata: Metadata = {
  title: `${c.title} — ${c.client} | Beatriz Alves`,
  description:
    "Case Kick Off: evento de integração da Claro Empresas, com key visual, save the date, credenciamento, sinalização, plenária e gift in.",
};

/**
 * Peças posicionadas como no Figma (1920px de largura). A colagem começa no topo do key visual
 * (y = 1416 no desenho), então `y` é relativo a esse ponto. Os arquivos estão em 2x (scale 0.5);
 * o key visual e a plenária ocupam a coluna de 1228px sobre o arquivo de 2400px.
 */
const full = 1228 / 2400;
const items: CollageItem[] = [
  {
    name: "02-key-visual",
    alt: "Key visual do evento: “Kick Off 2027 — O que move o próximo novo”, sobre fundo vermelho com faixas de luz.",
    x: 348,
    y: 0,
    scale: full,
    caption: { text: "Key Visual", x: 352, y: 703 },
  },
  {
    name: "03-save-the-date",
    alt: "Celular exibindo o save the date: “Kick Off 2027 — Reserve a data e prepare-se para dar os próximos passos conosco”, com a data 02/12.",
    x: 800,
    y: 808,
    scale: 0.5,
    mobileWidth: 58,
    caption: { text: "Save the date", x: 960, y: 1495, align: "center" },
  },
  {
    name: "04a-balcao",
    alt: "Balcão de recepção branco com o painel vermelho do Kick Off 2027.",
    x: 348,
    y: 1668,
    scale: 0.5,
    mobileWidth: 90,
  },
  {
    name: "04b-credenciamento",
    alt: "Crachá vermelho do evento preso a um cordão vinho com o texto “Claro empresas”.",
    x: 328,
    y: 2044,
    scale: 0.5,
    mobileWidth: 72,
    caption: { text: "Credenciamento", x: 718, y: 2707, align: "center" },
  },
  {
    name: "04c-sinalizacao",
    alt: "Totem de sinalização em formato de placa arredondada, vermelho, com a mensagem “Bem-vindos” e a logo do Kick Off, sobre base vinho.",
    x: 1236,
    y: 1644,
    scale: 0.5,
    mobileWidth: 44,
    caption: { text: "Sinalização", x: 1354, y: 2707, align: "center" },
  },
  {
    name: "05-plenaria",
    alt: "Plenária com o palco vermelho do Kick Off 2027, mesa de debatedores e plateia em cadeiras pretas.",
    x: 348,
    y: 2844,
    scale: full,
    caption: { text: "Plenária", x: 960, y: 3683, align: "center" },
  },
  {
    name: "06-gift-in",
    alt: "Brindes do evento: garrafa térmica prata e caderno espiral vinho com elástico e lápis, ambos com a logo do Kick Off.",
    x: 516,
    y: 3820,
    scale: 0.5,
    mobileWidth: 68,
    caption: { text: "Gift in", x: 958, y: 4575, align: "center" },
  },
];

export default function KickOffPage() {
  const logo = caseImage(slug, "0-kickoff-logo");
  const claro = caseImage(slug, "0b-claro-empresas-logo");

  return (
    <main
      className={`${claroFontVariables} font-claro mx-auto flex max-w-[1920px] flex-col items-center gap-10 overflow-x-clip px-5 pt-12 pb-20 text-black lg:gap-0 lg:px-0 lg:pt-[calc(176*var(--u))] lg:pb-[calc(150*var(--u))]`}
    >
      <h1 className="w-[min(80%,360px)] lg:w-[calc(600*var(--u))]">
        <Image
          src={logo.src}
          alt="Kick Off"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>
      <Image
        src={claro.src}
        alt="Claro empresas"
        width={claro.width}
        height={claro.height}
        className="h-auto w-[min(50%,200px)] lg:mt-[calc(37*var(--u))] lg:w-[calc(268*var(--u))]"
      />

      <div className="flex w-full max-w-md flex-col gap-4 text-[max(18px,calc(42.1*var(--u)))] leading-[1.3] font-light sm:max-w-3xl lg:mt-[calc(160*var(--u))] lg:w-[calc(1232*var(--u))] lg:max-w-none lg:gap-[calc(47*var(--u))] lg:leading-[calc(47*var(--u))] lg:whitespace-nowrap">
        <p>
          O evento tem como propósito fortalecer a integração entre os
          <br className="hidden lg:inline" /> colaboradores, estimulando a
          construção de relacionamentos
          <br className="hidden lg:inline" /> mais próximos e colaborativos.
        </p>
        <p>
          É um ambiente de alinhamento estratégico, que permite compartilhar
          <br className="hidden lg:inline" /> direcionamentos, e forçar a visão
          de negócio e estabelecer metas.
        </p>
        <p>Todo Kick Off nasce de um mesmo ponto:</p>
        <p>
          Reconhecer o que já foi construído
          <br className="hidden lg:inline" /> e abrir espaço para o{" "}
          <b className="text-claro font-bold italic">novo</b>
        </p>
      </div>

      <div className="w-full lg:mt-[calc(132*var(--u))]">
        <CaseCollage
          slug={slug}
          width={1920}
          height={4580}
          items={items}
          captionClassName="text-[max(15px,calc(26*var(--u)))] font-light text-black italic"
        />
      </div>
    </main>
  );
}
