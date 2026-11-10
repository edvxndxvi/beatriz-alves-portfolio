import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import CaseCollage, { type CollageItem } from "@/components/case/CaseCollage";
import { caseImage } from "@/data/caseImages";
import { cases } from "@/data/cases";
import { corridasFontVariables } from "@/fonts/corridas";

const slug = "corridas";
const c = cases.find((x) => x.slug === slug)!;

export const metadata: Metadata = {
  title: `${c.title} — ${c.client} | Beatriz Alves`,
  description:
    "Case Corridas: a plataforma “Soluções pra Viver Bem” da BB Seguros em quatro corridas (Bota pra Correr, Dog Race, Circuitinho das Estações e Girl Power), com key visuals, estandes, guarda-volumes, instagramáveis e meias colecionáveis.",
};

/** Largura das peças em coluna cheia (Figma: 1220px) sobre o arquivo de 2400px. */
const full = 1220 / 2400;
/** Peças mais largas (instagramáveis), com 1228px no Figma. */
const wide = 1228 / 2400;

/** Alturas do quadro das fotos de estande (o arquivo é mais alto; o Figma recorta pelo centro). */
const frame = 686;

/**
 * Cada corrida é uma colagem com as peças posicionadas como no Figma (1920px de largura). A
 * colagem começa no topo do key visual, então `y` é relativo a esse ponto. Arquivos em 2x
 * (scale 0.5). Legendas com posição própria (ver `CollageCaption`).
 */
const botaPraCorrer: CollageItem[] = [
  {
    name: "01-key-visual",
    alt: "Key visual do Bota pra Correr: quadro colorido com dois corredores, o tênis, o logo BB Seguros e a mensagem “Soluções para viver bem — corre junto”.",
    x: 350,
    y: 0,
    scale: full,
    rounded: true,
    caption: { text: "Key Visual", x: 350, y: 694 },
  },
  {
    name: "02-estande",
    alt: "Estande da BB Seguros em amarelo e azul, com guarda-sol branco e mesa, em um gramado sob céu azul.",
    x: 350,
    y: 780,
    scale: full,
    height: frame,
    rounded: true,
    caption: { text: "Estande", x: 350, y: 1474 },
  },
  {
    name: "03-parede-estande",
    alt: "Parede do estande: painel colorido com o logo BB Seguros, “Soluções pra viver bem”, os corredores e o QR code.",
    x: 350,
    y: 1558,
    scale: full,
    caption: { text: "Parede estande", x: 350, y: 1904 },
  },
  {
    name: "04-guarda-volumes",
    alt: "Tenda do guarda-volumes amarela com o texto “Seguro de Itens Pessoais” e grades de proteção com a marca BB Seguros.",
    x: 350,
    y: 1988,
    scale: 0.5,
    rounded: true,
    caption: { text: "Guarda-volumes", x: 350, y: 2701 },
  },
  {
    name: "05-totem-guarda-volumes",
    alt: "Totem do guarda-volumes: “Seguro de Itens Pessoais — Conheça e contrate”, com QR code.",
    x: 1212,
    y: 1992,
    scale: 0.5,
    mobileWidth: 55,
  },
  {
    name: "06-instagramavel",
    alt: "Ambiente instagramável com fundo azul e amarelo, uma fita de chegada e um casal de corredores posando.",
    x: 348,
    y: 2780,
    scale: wide,
    caption: { text: "Instagramável", x: 350, y: 3713 },
  },
];

const dogRace: CollageItem[] = [
  {
    name: "01-key-visual",
    alt: "Key visual do Dog Race: quadro colorido com cachorros, o logo BB Seguros e a mensagem “Soluções para viver bem — melhor amigo”.",
    x: 350,
    y: 0,
    scale: full,
    rounded: true,
    caption: { text: "Key Visual", x: 350, y: 694 },
  },
  {
    name: "02-estande",
    alt: "Estande da BB Seguros amarelo com guarda-sol branco, mesa e banquetas, em um gramado sob céu azul.",
    x: 350,
    y: 780,
    scale: full,
    height: frame,
    rounded: true,
    caption: { text: "Estande", x: 350, y: 1474 },
  },
  {
    name: "03-parede-estande",
    alt: "Parede do estande do Dog Race: painel colorido com cachorros, “Soluções pra viver bem” e QR code.",
    x: 350,
    y: 1558,
    scale: full,
    caption: { text: "Parede estande", x: 350, y: 1904 },
  },
  {
    name: "04-guarda-volumes",
    alt: "Tenda do guarda-volumes amarela com o texto “Seguro de Itens Pessoais” e grades com ossinhos e a marca BB Seguros.",
    x: 350,
    y: 1988,
    scale: 0.5,
    rounded: true,
    caption: { text: "Guarda-volumes", x: 350, y: 2701 },
  },
  {
    name: "05-totem-guarda-volumes",
    alt: "Totem do guarda-volumes do Dog Race: “Seguro de Itens Pessoais — Conheça e contrate”, com QR code.",
    x: 1211,
    y: 1992,
    scale: 0.5,
    mobileWidth: 55,
  },
  {
    name: "06-instagramavel",
    alt: "Ambiente instagramável amarelo com uma mulher e um cachorro golden retriever posando sobre um pedestal.",
    x: 348,
    y: 2780,
    scale: wide,
    caption: { text: "Instagramável", x: 350, y: 3713 },
  },
];

const circuitinho: CollageItem[] = [
  {
    name: "01-key-visual",
    alt: "Key visual do Circuitinho das Estações: quadro colorido com crianças, lápis, o logo BB Seguros e a mensagem “Soluções para viver bem — futuro”.",
    x: 350,
    y: 0,
    scale: full,
    rounded: true,
    caption: { text: "Key Visual", x: 350, y: 694 },
  },
  {
    name: "02-estande",
    alt: "Estande da BB Seguros amarelo com guarda-sol branco, mesa e banquetas, em um gramado sob céu azul.",
    x: 350,
    y: 780,
    scale: full,
    height: frame,
    rounded: true,
    caption: { text: "Estande", x: 350, y: 1474 },
  },
  {
    name: "03-parede-estande",
    alt: "Parede do estande do Circuitinho das Estações: painel colorido com crianças e “Soluções pra viver bem”.",
    x: 350,
    y: 1558,
    scale: full,
    caption: { text: "Parede estande", x: 350, y: 1904 },
  },
  {
    name: "04-guarda-volumes",
    alt: "Tenda do guarda-volumes amarela com o texto “Seguro de Itens Pessoais” e grades de proteção com a marca BB Seguros.",
    x: 350,
    y: 1988,
    scale: 0.5,
    rounded: true,
    caption: { text: "Guarda-volumes", x: 350, y: 2701 },
  },
  {
    name: "05-totem-guarda-volumes",
    alt: "Totem do guarda-volumes: “Seguro de Itens Pessoais — Conheça e contrate”, com QR code.",
    x: 1210,
    y: 1996,
    scale: 0.5,
    mobileWidth: 55,
  },
  {
    name: "06-totem-jogo-da-memoria",
    alt: "Totem do jogo da memória: “Preparado para testar sua memória? Vem jogar!”, com uma família ilustrada.",
    x: 436,
    y: 2874,
    scale: 0.5,
    mobileWidth: 55,
  },
  {
    name: "07-jogo-da-memoria",
    alt: "Telas do jogo da memória “Memória da Proteção”: início, cadastro, tabuleiros e a mensagem “Você mandou muito bem!”, além do totem de tela.",
    x: 886,
    y: 2828,
    scale: 0.5,
    caption: {
      text: "Jogo da memória",
      x: 1570,
      y: 3619,
      align: "right",
    },
  },
];

const girlPower: CollageItem[] = [
  {
    name: "01-key-visual",
    alt: "Key visual do Girl Power: quadro colorido com duas corredoras, a medalha, o logo BB Seguros e a mensagem “Soluções para viver bem — sabe onde quer chegar”.",
    x: 350,
    y: 0,
    scale: full,
    rounded: true,
    caption: { text: "Key Visual", x: 350, y: 694 },
  },
  {
    name: "02-estande",
    alt: "Estande da BB Seguros amarelo com guarda-sol branco, mesa e banquetas, em um gramado sob céu azul.",
    x: 350,
    y: 780,
    scale: full,
    height: frame,
    rounded: true,
    caption: { text: "Estande", x: 350, y: 1474 },
  },
  {
    name: "03-parede-estande",
    alt: "Parede do estande do Girl Power: painel colorido com corredoras e “Soluções pra viver bem”.",
    x: 350,
    y: 1558,
    scale: full,
    caption: { text: "Parede estande", x: 350, y: 1904 },
  },
];

const captionClass =
  "text-[max(14px,calc(24.5*var(--u)))] leading-[1.3] font-normal italic text-bb-azul";

/** Tamanho em px do desenho, em lg+ (usado com `lg:w-(--w)`). */
const px = (n: number) => ({ "--w": `calc(${n}*var(--u))` }) as CSSProperties;

/** Linha tracejada que separa os blocos. */
function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`tracejado w-full lg:w-[calc(1228*var(--u))] ${className}`}
    />
  );
}

/**
 * Cabeçalho de cada corrida: tracejado e logo, ocupando 343px (do tracejado ao key visual) com
 * a logo centralizada.
 */
function EventHeader({
  eventSlug,
  logoName,
  alt,
}: {
  eventSlug: string;
  logoName: string;
  alt: string;
}) {
  const logo = caseImage(`corridas/${eventSlug}`, logoName);
  return (
    <>
      <Divider className="mt-12 lg:mt-[calc(34*var(--u))]" />
      <h2
        className="flex w-full items-center justify-center py-10 lg:h-[calc(341*var(--u))] lg:py-0"
        aria-label={alt}
      >
        <Image
          src={logo.src}
          alt=""
          width={logo.width}
          height={logo.height}
          style={px(logo.width)}
          className="h-auto w-[min(50%,220px)] lg:w-(--w)"
        />
      </h2>
    </>
  );
}

/** Marca-texto amarela. `className` ajusta espessura/posição (ver .marca-amarela). */
function Marca({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`marca-amarela -mx-[max(3px,calc(3*var(--u)))] px-[max(3px,calc(3*var(--u)))] pb-[calc(8*var(--u))] [--mh:max(10px,calc(24*var(--u)))] [--mb:calc(8*var(--u))] ${className}`}
    >
      {children}
    </span>
  );
}

const eyebrow =
  "font-bb-texto text-bb-ciano text-[max(15px,calc(32*var(--u)))] leading-[1.3] tracking-[0.1em] lg:leading-[calc(40*var(--u))] uppercase";

export default function CorridasPage() {
  const logo = caseImage(slug, "0-corridas-logo");
  const meias = caseImage(slug, "meias-colecionaveis");

  return (
    <main
      className={`${corridasFontVariables} font-bb-texto text-bb-azul mx-auto flex max-w-[1920px] flex-col items-center overflow-x-clip px-5 pt-12 pb-20 lg:px-0 lg:pt-[calc(88*var(--u))] lg:pb-[calc(160*var(--u))]`}
    >
      <h1 className="w-[min(70%,300px)] lg:w-[calc(465*var(--u))]">
        <Image
          src={logo.src}
          alt="Corridas — BB Seguros"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>

      {/* Apresentação */}
      <section className="mt-12 flex w-full max-w-md flex-col gap-8 sm:max-w-3xl lg:mt-[calc(159*var(--u))] lg:w-[calc(1220*var(--u))] lg:max-w-none lg:flex-row lg:gap-0">
        <div className="lg:w-[calc(780*var(--u))]">
          <p className={eyebrow}>
            BB Seguros apresenta uma
            <br className="hidden lg:inline" /> nova plataforma de produto
          </p>
          <h2 className="font-bb-titulo mt-1 text-[max(28px,calc(67*var(--u)))] leading-[1.2] font-bold lg:leading-[calc(72*var(--u))] lg:mt-[calc(4*var(--u))]">
            <Marca>Soluções pra</Marca>
            <br />
            <Marca>Viver Bem</Marca>
          </h2>
          <p className="font-bb-texto text-bb-ciano mt-2 text-[max(14px,calc(26*var(--u)))] leading-[1.3]">
            Reposicionando a marca no
            <br className="hidden lg:inline" /> território da vida
          </p>
        </div>
        <p className="border-bb-ciano font-bb-texto border-l-2 pl-5 text-[max(17px,calc(33*var(--u)))] leading-[1.45] lg:h-[calc(316*var(--u))] lg:w-[calc(440*var(--u))] lg:pl-[calc(32*var(--u))] lg:leading-[calc(52*var(--u))] lg:whitespace-nowrap">
          Tratamos seguros como
          <br className="hidden lg:inline" /> produtos para{" "}
          <b className="font-bold">viver bem</b>,
          <br className="hidden lg:inline" /> ampliando o valor da
          <br className="hidden lg:inline" /> proteção para o{" "}
          <b className="font-bold">presente</b>,
          <br className="hidden lg:inline" /> aproximando a
          <br className="hidden lg:inline" /> marca do bem-estar.
        </p>
      </section>

      <Divider className="mt-12 lg:mt-[calc(88*var(--u))]" />

      {/* Oportunidade */}
      <section className="mt-12 flex w-full max-w-md flex-col gap-8 sm:max-w-3xl lg:mt-[calc(78*var(--u))] lg:w-[calc(1220*var(--u))] lg:max-w-none lg:flex-row lg:gap-0">
        <div className="lg:w-[calc(787*var(--u))] lg:pt-[calc(19*var(--u))]">
          <p className={eyebrow}>Temos uma oportunidade em mãos</p>
          <h2 className="font-bb-titulo mt-2 text-[max(24px,calc(57*var(--u)))] leading-[1.15] font-bold lg:mt-[calc(22*var(--u))] lg:leading-[calc(62*var(--u))] lg:whitespace-nowrap">
            Expandir o território
            <br className="hidden lg:inline" /> do conceito para além do
            <br className="hidden lg:inline" /> papel, sempre pensando
            <br className="hidden lg:inline" /> em 3 pilares principais
          </h2>
        </div>
        <ul className="border-bb-ciano font-bb-titulo relative flex flex-col gap-8 border-l-2 pl-(--pl) [--dot:max(14px,calc(28*var(--u)))] [--pl:max(2rem,calc(71*var(--u)))] lg:h-[calc(382*var(--u))] lg:gap-[calc(41*var(--u))] lg:pt-[calc(60*var(--u))]">
          {["Estabilidade", "Tranquilidade", "Continuidade"].map((word) => (
            <li
              key={word}
              className="relative text-[max(22px,calc(53*var(--u)))] leading-[1.2] font-bold lg:leading-[calc(60*var(--u))]"
            >
              <span
                aria-hidden
                className="bg-bb-ciano absolute top-1/2 left-[calc(-1*var(--pl)-var(--dot)/2-1px)] h-(--dot) w-(--dot) -translate-y-1/2 rounded-full"
              />
              <Marca className="[--mh:max(8px,calc(20*var(--u)))] [--mb:calc(10*var(--u))]">
                {word}
              </Marca>
            </li>
          ))}
        </ul>
      </section>

      <Divider className="mt-12 lg:mt-[calc(62*var(--u))]" />

      {/* Afinal */}
      <section className="mt-12 flex w-full max-w-md flex-col sm:max-w-3xl lg:mt-[calc(72*var(--u))] lg:w-[calc(1220*var(--u))] lg:max-w-none lg:pl-[calc(346*var(--u))]">
        <p
          className={`${eyebrow} lg:text-[calc(36*var(--u))] lg:leading-[calc(40*var(--u))]`}
        >
          Afinal,
        </p>
        <p className="font-bb-titulo text-[max(28px,calc(68*var(--u)))] leading-[1.1] font-normal lg:mt-[calc(28*var(--u))] lg:leading-[calc(68*var(--u))]">
          Corrida é onde o
        </p>
        <p className="font-bb-titulo text-[max(44px,calc(110*var(--u)))] leading-none font-bold lg:mt-[calc(-3*var(--u))] lg:leading-[calc(110*var(--u))]">
          <Marca className="[--mh:max(12px,calc(28*var(--u)))] [--mb:calc(2*var(--u))]">
            Viver Bem
          </Marca>
        </p>
        <p className="font-bb-texto text-bb-ciano mt-2 text-[max(20px,calc(44*var(--u)))] leading-[1.15] font-medium italic lg:mt-[calc(21*var(--u))] lg:leading-[calc(50*var(--u))]">
          acontece em movimento
        </p>
      </section>

      <div className="flex w-full flex-col items-center lg:mt-[calc(31*var(--u))]">
        <EventHeader
          eventSlug="bota-pra-correr"
          logoName="0-bota-pra-correr-logo"
          alt="Bota pra Correr — RJ e SP"
        />
        <CaseCollage
          slug="corridas/bota-pra-correr"
          width={1920}
          height={3750}
          items={botaPraCorrer}
          captionClassName={captionClass}
        />

        <EventHeader
          eventSlug="dog-race"
          logoName="0-dog-race-logo"
          alt="Dog Race — SP"
        />
        <CaseCollage
          slug="corridas/dog-race"
          width={1920}
          height={3750}
          items={dogRace}
          captionClassName={captionClass}
        />

        <EventHeader
          eventSlug="circuitinho-das-estacoes"
          logoName="0-circuitinho-das-estações-logo"
          alt="Circuitinho das Estações — BA"
        />
        <CaseCollage
          slug="corridas/circuitinho-das-estacoes"
          width={1920}
          height={3660}
          items={circuitinho}
          captionClassName={captionClass}
        />

        <EventHeader
          eventSlug="girl-power"
          logoName="0-girl-power-logo"
          alt="Girl Power — SP"
        />
        <CaseCollage
          slug="corridas/girl-power"
          width={1920}
          height={1940}
          items={girlPower}
          captionClassName={captionClass}
        />
      </div>

      <Divider className="mt-12 lg:mt-[calc(34*var(--u))]" />
      <figure className="mt-10 flex w-full flex-col items-center lg:mt-[calc(90*var(--u))]">
        <Image
          src={meias.src}
          alt="Quatro pares de meias colecionáveis, uma para cada corrida: Bota Pra Correr, Dog Race, Girl Power e Circuitinho das Estações."
          width={meias.width}
          height={meias.height}
          style={px(meias.width / 2)}
          className="h-auto w-[min(100%,28rem)] lg:w-(--w)"
        />
        <figcaption
          className={`mt-4 lg:mt-[calc(40*var(--u))] ${captionClass}`}
        >
          Meias colecionáveis
        </figcaption>
      </figure>
    </main>
  );
}
