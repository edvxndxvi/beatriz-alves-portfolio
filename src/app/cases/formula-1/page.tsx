import Image from "next/image";
import CaseCollage, { type CollageItem } from "@/components/case/CaseCollage";
import { caseImage } from "@/data/caseImages";
import { caseMetadata } from "@/data/caseMetadata";
import { cases } from "@/data/cases";
import { claroFontVariables } from "@/fonts/claro";

const slug = "formula-1";
const c = cases.find((x) => x.slug === slug)!;

export const metadata = caseMetadata(
  c,
  "Case Formula 1: experiência da Claro Empresas, fornecedora oficial de telecomunicações e TI do GP São Paulo F1 2026, com key visuals, convites, site, instagramáveis, sinalização, kit e agenda.",
);

/** Largura das peças em coluna cheia (Figma: 1228px) sobre o arquivo de 2400px. */
const full = 1228 / 2400;

/**
 * Peças posicionadas como no Figma (1920px de largura). A colagem começa no topo do primeiro
 * key visual (y = 1052 no desenho), então `y` é relativo a esse ponto. Os arquivos estão em 2x
 * (scale 0.5). As legendas têm posição própria (ver `CollageCaption`).
 */
const items: CollageItem[] = [
  {
    name: "01a-key-visual-1",
    alt: "Key visual: carro de Fórmula 1 prata e preto, de lado, sobre fundo vermelho com faixas de luz, com o texto “O próximo novo da performance começa aqui”.",
    x: 348,
    y: 0,
    scale: full,
    caption: {
      mobileAfter: "01d-key-visual-4",
      text: "key visual",
      x: 352,
      y: 695,
    },
  },
  {
    name: "01b-key-visual-2",
    alt: "Key visual: detalhe da frente do carro de Fórmula 1 sobre fundo vermelho, com o texto “O próximo novo da performance começa aqui”.",
    x: 348,
    y: 732,
    scale: full,
  },
  {
    name: "01c-key-visual-3",
    alt: "Key visual: carro de Fórmula 1 visto de frente sobre fundo vermelho, com o texto “O próximo novo da performance começa aqui”.",
    x: 348,
    y: 1460,
    scale: full,
  },
  {
    name: "01d-key-visual-4",
    alt: "Key visual: carro de Fórmula 1 em ângulo sobre fundo vermelho com faixas de luz, com o texto “O próximo novo da performance começa aqui”.",
    x: 348,
    y: 2192,
    scale: full,
  },
  {
    name: "02a-convite",
    alt: "Convite digital vermelho do GP São Paulo F1, com o carro, a data 08 de novembro e as informações do evento.",
    x: 348,
    y: 2984,
    scale: 0.5,
    mobileWidth: 56,
    caption: { text: "convite", x: 516, y: 4019, align: "center" },
  },
  {
    name: "02b-reminder",
    alt: "Reminder do evento: “É amanhã!”, com a data 08 de novembro, o carro e as informações de chegada.",
    x: 712,
    y: 2984,
    scale: 0.5,
    mobileWidth: 56,
    caption: { text: "reminder", x: 910, y: 4019, align: "center" },
  },
  {
    name: "02c-agradecimento",
    alt: "Mensagem de agradecimento após o evento: “Obrigado por viver esse momento com a gente”.",
    x: 1136,
    y: 2988,
    scale: 0.5,
    mobileWidth: 60,
    caption: { text: "agradecimento", x: 1356, y: 4019, align: "center" },
  },
  {
    name: "03a-home",
    alt: "Tela inicial do site do evento, vermelha, com o carro e o texto “O próximo novo da performance começa aqui”.",
    x: 348,
    y: 4148,
    scale: 0.5,
  },
  {
    name: "03b-interlagos",
    alt: "Tela “Interlagos” do site, com o traçado do autódromo em linhas de luz.",
    x: 980,
    y: 4148,
    scale: 0.5,
  },
  {
    name: "03c-etapas",
    alt: "Tela do site com as etapas do fim de semana: Free Practice Session, Qualifying Session e Grand Prix Race.",
    x: 348,
    y: 4520,
    scale: 0.5,
  },
  {
    name: "03d-meeting-point",
    alt: "Tela “Meeting Point” do site, com um mapa e as instruções de encontro.",
    x: 980,
    y: 4520,
    scale: 0.5,
  },
  {
    name: "03e-programacao",
    alt: "Tela do site com a contagem regressiva e a programação do Grand Prix Race.",
    x: 348,
    y: 4896,
    scale: 0.5,
  },
  {
    name: "03f-classificacao-etaria",
    alt: "Tela do site com a classificação etária do evento.",
    x: 980,
    y: 4896,
    scale: 0.5,
  },
  {
    name: "03g-dicas",
    alt: "Tela “Dicas” do site, com ícones e recomendações para o dia do evento.",
    x: 348,
    y: 5268,
    scale: 0.5,
    caption: { mobileAfter: "03h-fotos", text: "hotsite", x: 352, y: 5615 },
  },
  {
    name: "03h-fotos",
    alt: "Tela “Fotos” do site, com uma grade de espaços para as fotos do evento.",
    x: 980,
    y: 5268,
    scale: 0.5,
  },
  {
    name: "04a-instagramavel-1",
    alt: "Ambiente instagramável: painel com o carro de Fórmula 1 e a mensagem da Claro Empresas, com duas pessoas posando em frente, sobre carpete vermelho.",
    x: 348,
    y: 5728,
    scale: full,
  },
  {
    name: "04b-instagramavel-2",
    alt: "Segundo ambiente instagramável: painel vermelho com o carro de frente, uma pessoa fotografando e um sofá vermelho ao lado.",
    x: 348,
    y: 6584,
    scale: full,
    caption: { text: "instagramáveis", x: 352, y: 7391 },
  },
  {
    name: "05a-totem-sinalizacao-1",
    alt: "Totem de sinalização vermelho com o carro e a mensagem “Bem-vindos!”.",
    x: 348,
    y: 7516,
    scale: 0.5,
    mobileWidth: 55,
    caption: {
      mobileAfter: "05c-totem-sinalizacao-3",
      text: "totens de sinalização",
      x: 352,
      y: 8263,
    },
  },
  {
    name: "05b-totem-sinalizacao-2",
    alt: "Totem de sinalização vermelho com o carro e a mensagem “Vagas reservadas”.",
    x: 780,
    y: 7512,
    scale: 0.5,
    mobileWidth: 55,
  },
  {
    name: "05c-totem-sinalizacao-3",
    alt: "Totem de sinalização vermelho com o carro e a mensagem “Acesso ao evento”.",
    x: 1208,
    y: 7512,
    scale: 0.5,
    mobileWidth: 55,
  },
  {
    name: "06a-jaqueta",
    alt: "Jaqueta vinho com a logo da Claro Empresas no peito.",
    x: 344,
    y: 8356,
    scale: 0.5,
    mobileWidth: 62,
    caption: {
      mobileAfter: "06c-bone",
      text: "kit para os clientes",
      x: 352,
      y: 8851,
    },
  },
  {
    name: "06b-camiseta",
    alt: "Camiseta bege com gola e punhos vinho e a logo da Claro Empresas.",
    x: 776,
    y: 8384,
    scale: 0.5,
    mobileWidth: 66,
  },
  {
    name: "06c-bone",
    alt: "Boné vinho com a logo da Claro Empresas.",
    x: 1212,
    y: 8532,
    scale: 0.5,
    mobileWidth: 72,
  },
  {
    name: "07a-agenda-completa",
    alt: "Agenda completa do evento: “Grand Prix Race, 08 de novembro”, com a programação do dia em lista.",
    x: 436,
    y: 8988,
    scale: 0.5,
    mobileWidth: 70,
    caption: {
      mobileAfter: "07b-agenda-reduzida",
      text: "agendas - completa e resumida",
      x: 960,
      y: 9719,
      align: "center",
    },
  },
  {
    name: "07b-agenda-reduzida",
    alt: "Agenda resumida do evento: “Grand Prix Race, 08 de novembro”, com os principais horários.",
    x: 984,
    y: 8988,
    scale: 0.5,
    mobileWidth: 70,
  },
  {
    name: "08-prisma-de-mesa",
    alt: "Prisma de mesa triangular vermelho com o carro de Fórmula 1 e o texto “O próximo novo da performance começa aqui”.",
    x: 412,
    y: 9812,
    scale: 0.5,
    mobileWidth: 80,
    caption: { text: "prisma de mesa", x: 962, y: 10471, align: "center" },
  },
];

export default function Formula1Page() {
  const title = caseImage(slug, "0-formula1-logo");
  const claro = caseImage(slug, "0-claro-empresas-logo");

  return (
    <main
      className={`${claroFontVariables} font-claro mx-auto flex max-w-[1920px] flex-col items-center gap-10 overflow-x-clip px-5 pt-12 pb-20 text-black lg:gap-0 lg:px-0 lg:pt-[calc(120*var(--u))] lg:pb-[calc(180*var(--u))]`}
    >
      <h1 className="w-[min(90%,460px)] lg:w-[calc(921*var(--u))]">
        <Image
          src={title.src}
          alt="Formula 1"
          width={title.width}
          height={title.height}
          priority
          className="h-auto w-full"
        />
      </h1>
      <Image
        src={claro.src}
        alt="Claro empresas"
        width={claro.width}
        height={claro.height}
        className="h-auto w-[min(50%,200px)] lg:mt-[calc(36*var(--u))] lg:w-[calc(267*var(--u))]"
      />

      <p className="w-full max-w-md text-[max(18px,calc(47.3*var(--u)))] leading-[1.3] font-normal italic sm:max-w-3xl lg:mt-[calc(156*var(--u))] lg:w-[calc(1232*var(--u))] lg:max-w-none lg:leading-[calc(57*var(--u))] lg:whitespace-nowrap">
        A experiência tem como objetivo reforçar a presença da marca como
        <br className="hidden lg:inline" /> fornecedora oficial de
        Telecomunicações e TI o GP São Paulo F1
        <br className="hidden lg:inline" /> 2026, por meio de uma jornada
        premium para clientes e prospects
        <br className="hidden lg:inline" /> conectando{" "}
        <b className="text-claro font-bold italic">tecnologia</b>,{" "}
        <b className="text-claro font-bold italic">sofisticação</b> e{" "}
        <b className="text-claro font-bold italic">alta performance</b>.
      </p>

      <div className="w-full lg:mt-[calc(102*var(--u))]">
        <CaseCollage
          slug={slug}
          width={1920}
          height={10510}
          items={items}
          captionClassName="text-claro text-[max(15px,calc(27*var(--u)))] font-normal italic"
        />
      </div>
    </main>
  );
}
