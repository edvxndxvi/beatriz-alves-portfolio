import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import CaseCollage, {
  type CollageCaption,
  type CollageItem,
} from "@/components/case/CaseCollage";
import { caseImage } from "@/data/caseImages";
import { caseMetadata } from "@/data/caseMetadata";
import { cases } from "@/data/cases";
import { diaDasCriancasFontVariables } from "@/fonts/dia-das-criancas";

const slug = "dia-das-criancas";
const c = cases.find((x) => x.slug === slug)!;

export const metadata = caseMetadata(
  c,
  "Case Dia das Crianças: evento da Núclea com a Turma dos Super-Nuclinhos, com key visual, personagens, convite, brincadeiras, brindes, álbum de figurinhas e história em quadrinhos.",
);

/** Legenda no desenho (Figma 1920px). `y` é o topo do glifo; o -3 leva ao topo da linha. */
const cap = (
  text: string,
  x: number,
  y: number,
  align: CollageCaption["align"] = "center",
): CollageCaption => ({ text, x, y: y - 3, align });

/**
 * A página tem três blocos com origens próprias (y do desenho no Figma, 1920px de largura): o key
 * visual (começa em y = 2094), os personagens (y = 2894) e a colagem das peças (y = 3436). Os
 * arquivos estão em 2x (scale 0.5). O key visual (1226px de largura, com contorno de 1px que o arquivo não traz) começa em x = 352.
 */
const keyVisual: CollageItem[] = [
  {
    name: "01-key-visual",
    alt: "Key visual: quadrinho colorido com os cinco Super-Nuclinhos sobre uma cidade e o título “Turma dos Super-Nuclinhos — transformando o futuro, gerando conexões”.",
    x: 352,
    y: 0,
    scale: 1226 / 2400,
    bordered: true,
    caption: cap("Key Visual", 353, 708, "left"),
  },
];

type Hero = { name: string; alt: string; role: string; lines: string[] };

const heroes: Hero[] = [
  {
    name: "02-nexo",
    alt: "Figurinha do Nexo: super-herói de capacete e óculos roxos, em voo.",
    role: "O Conector",
    lines: ["Liga pessoas, ideias e", "soluções com empatia", "e colaboração."],
  },
  {
    name: "03-dado",
    alt: "Figurinha do Dado: super-heroína de cabelo black power roxo e óculos.",
    role: "A Estrategista",
    lines: [
      "Transforma informações",
      "em conhecimento para",
      "tomar as melhores",
      "decisões.",
    ],
  },
  {
    name: "04-nuc",
    alt: "Figurinha do Nuc: super-herói com uma caixa de papelão na cabeça, que forma um focinho.",
    role: "O Inovador",
    lines: [
      "Cria, desenvolve e",
      "encontra novos",
      "formas de fazer o que",
      "parece impossível.",
    ],
  },
  {
    name: "05-lumi",
    alt: "Figurinha da Lumi: super-heroína de cabelo verde em formato de chama.",
    role: "A Inspiradora",
    lines: [
      "Ilumina caminhos,",
      "promove inclusão e",
      "espalha positividade",
      "por onde passa.",
    ],
  },
  {
    name: "06-verdinho",
    alt: "Figurinha do Verdinho: super-herói de cabelo amarelo e óculos.",
    role: "O Guardião",
    lines: [
      "Protege o planeta e cuida",
      "do hoje para garantir",
      "um amanhã melhor.",
    ],
  },
];

/** x do primeiro card (px do desenho) e distância entre eles (cards de 234px, 15px de vão). */
const heroX = 354;
const heroPitch = 249.25;

const pecas: CollageItem[] = [
  {
    name: "07-save-the-date",
    alt: "Celular exibindo o save the date: “Uma nova missão está prestes a começar”, com a data 16 de outubro e a Turma dos Super-Nuclinhos.",
    x: 393,
    y: 6,
    scale: 0.5,
    mobileWidth: 58,
    caption: cap("Save the Date", 547, 670),
  },
  {
    name: "08-varal-dos-herois",
    alt: "Varal de heróis: os cinco personagens e estrelas suspensos por fios, com as logos Turma dos Super-Nuclinhos e Núclea.",
    x: 772,
    y: 6,
    scale: 0.5,
    mobileWidth: 86,
    caption: cap("Varal de heróis", 994.5, 670),
  },
  {
    name: "09-lama-de-boas-vindas",
    alt: "Lâmina vertical de boas-vindas, com o Nuc, o texto “Bem-vindos à Central de Super Nuclinhos” e um QR code.",
    x: 1313,
    y: 0,
    scale: 0.5,
    mobileWidth: 46,
    caption: cap("Lamá de boas-vindas", 1425, 670),
  },
  {
    name: "10-amarelinha",
    alt: "Amarelinha numerada de 1 a 10, em quadrados coloridos, com a logo Núclea na base.",
    x: 430,
    y: 877,
    scale: 0.5,
    mobileWidth: 36,
    caption: cap("Amarelinha", 517, 1656),
  },
  {
    name: "11-backdrop-para-fotos",
    alt: "Backdrop para fotos com o key visual em quadrinhos dos Super-Nuclinhos.",
    x: 715,
    y: 762,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("Backdrop para fotos", 1100, 1656),
  },
  {
    name: "12-fantoche-de-dedo",
    alt: "Fantoches de dedo dos cinco Super-Nuclinhos, lado a lado.",
    x: 583,
    y: 1756,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("Fantoche de dedo", 965, 2104),
  },
  {
    name: "13-mascara-e-capa-oficina",
    alt: "Máscaras de papel dos heróis e três capas lisas, nas cores roxo, lima e menta, para a oficina de personalização.",
    x: 400,
    y: 2189,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("Máscara e capa para oficina de personalização", 965, 2987),
  },
  {
    name: "14-copo-para-colorir",
    alt: "Copo com canudo estampado em contornos de desenho para colorir.",
    x: 421,
    y: 3157,
    scale: 0.5,
    mobileWidth: 40,
    caption: cap("Copo para colorir", 532.5, 3616),
  },
  {
    name: "15-pipoca",
    alt: "Dois cones de pipoca com a logo da Turma dos Super-Nuclinhos.",
    x: 744,
    y: 3163,
    scale: 0.5,
    mobileWidth: 72,
    caption: cap("Pipoca", 923.5, 3617),
  },
  {
    name: "16-pao-de-mel",
    alt: "Pão de mel em embalagem transparente, fechada com laço roxo e a etiqueta da Turma dos Super-Nuclinhos.",
    x: 1260,
    y: 3180,
    scale: 0.5,
    mobileWidth: 52,
    caption: cap("Pão de mel", 1403.5, 3617),
  },
  {
    name: "17-pacotinhos-album",
    alt: "Pacotinho de figurinhas e três cartas dos heróis, entre elas a do Nexo.",
    x: 349,
    y: 3807,
    scale: 0.5,
    mobileWidth: 72,
  },
  {
    name: "18-album-de-figurinhas",
    alt: "Álbum de figurinhas aberto: à esquerda o título e o texto de apresentação, à direita os espaços das figurinhas do Nexo e do Dado.",
    x: 700,
    y: 3762,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("Álbum de figurinhas", 538, 4181, "left"),
  },
  {
    name: "19-quebra-cabeca",
    alt: "Quebra-cabeça com o key visual dos Super-Nuclinhos, com duas peças soltas ao lado.",
    x: 380,
    y: 4414,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("Quebra-cabeça", 709.5, 4762),
  },
  {
    name: "20-caderno-de-atividades",
    alt: "Caderno de atividades com capa de papel kraft, a logo Turma dos Super-Nuclinhos e os cinco heróis sobre a cidade.",
    x: 1177,
    y: 4519,
    scale: 0.5,
    mobileWidth: 62,
    caption: cap("Caderno de atividades", 1338, 5016),
  },
  {
    name: "21-historia-em-quadrinhos",
    alt: "Revista de história em quadrinhos aberta: a apresentação dos heróis na página da esquerda e a aventura “Somos os Super-Nuclinhos!” na da direita.",
    x: 374,
    y: 4858,
    scale: 0.5,
    mobileWidth: 100,
    caption: cap("História em quadrinhos", 390, 5392, "left"),
  },
];

/** Destaque colorido de uma palavra do texto: negrito reto, na cor do personagem. */
function Hl({
  color,
  children,
}: {
  color: "lilas" | "limao" | "menta";
  children: ReactNode;
}) {
  const cls = {
    lilas: "text-nuclea-lilas",
    limao: "text-nuclea-limao",
    menta: "text-nuclea-menta",
  }[color];
  return <b className={`${cls} font-bold`}>{children}</b>;
}

/** Quebra de linha só em lg+, onde o desenho tem as linhas definidas. */
const Br = () => <br className="hidden lg:inline" />;

const captionClass =
  "text-[max(13px,calc(16*var(--u)))] font-light text-black italic";

export default function DiaDasCriancasPage() {
  const logo = caseImage(slug, "0-logo");

  return (
    <main
      className={`${diaDasCriancasFontVariables} font-abc-mono mx-auto flex max-w-[1920px] flex-col items-center overflow-x-clip px-5 pt-12 pb-20 text-black lg:px-0 lg:pt-[calc(126*var(--u))] lg:pb-[calc(136*var(--u))]`}
    >
      <h1 className="w-[min(80%,360px)] lg:w-[calc(564*var(--u))]">
        <Image
          src={logo.src}
          alt="Dia das Crianças — Núclea"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>

      <div className="mt-12 flex w-full max-w-md flex-col sm:max-w-3xl lg:mt-[calc(150*var(--u))] lg:w-[calc(1224*var(--u))] lg:max-w-none lg:whitespace-nowrap">
        <h2 className="text-[max(28px,calc(85*var(--u)))] leading-[1.1] font-bold italic lg:ml-[calc(3*var(--u))] lg:leading-[calc(80*var(--u))]">
          O FUTURO NÃO SE
          <br />
          TRANSFORMA <span className="text-nuclea-limao">SOZINHO.</span>
        </h2>

        <div className="mt-8 flex flex-col gap-[1.3em] text-[max(17px,calc(45*var(--u)))] leading-[1.3] font-[350] lg:mt-[calc(57*var(--u))] lg:ml-[calc(8*var(--u))] lg:gap-[calc(52*var(--u))] lg:leading-[calc(52*var(--u))]">
          <p>
            Ele nasce das conexões que criamos,
            <Br /> das ideias que compartilhamos e das
            <Br /> atitudes que escolhemos todos os dias.
          </p>
          <p>
            Nasce quando tecnologia e
            <Br /> pessoas <Hl color="lilas">caminham juntas</Hl>.
            <Br /> Quando inovação tem propósito.
            <Br /> Quando cuidar do outro também
            <Br /> significa cuidar do mundo.
          </p>
        </div>

        <h3 className="mt-10 text-[max(17px,calc(66*var(--u)))] leading-[1.15] font-bold italic lg:mt-[calc(100*var(--u))] lg:ml-[calc(3*var(--u))] lg:leading-[calc(70*var(--u))]">
          FOI DESSA INSPIRAÇÃO QUE NASCEU
          <br />A TURMA DOS{" "}
          <span className="text-nuclea-menta">SUPER-NUCLINHOS.</span>
        </h3>

        <p className="mt-8 text-[max(17px,calc(45*var(--u)))] leading-[1.3] font-[350] lg:mt-[calc(65*var(--u))] lg:ml-[calc(8*var(--u))] lg:leading-[calc(52*var(--u))]">
          Um time de pequenos heróis que mostra
          <Br /> que os verdadeiros superpoderes não
          <Br /> estão nas capas ou nas máscaras,
          <Br /> mas na capacidade de <Hl color="limao">conectar</Hl>,{" "}
          <Hl color="lilas">criar</Hl>,
          <Br /> <Hl color="menta">inspirar</Hl>,{" "}
          <Hl color="limao">planejar</Hl> e <Hl color="lilas">proteger</Hl>.
        </p>
      </div>

      <div className="mt-12 w-full lg:mt-[calc(82*var(--u))]">
        <CaseCollage
          slug={slug}
          stackMaxWidth="max-w-2xl"
          width={1920}
          height={725}
          items={keyVisual}
          captionClassName={captionClass}
        />
      </div>

      <ul className="mt-12 flex w-full max-w-5xl list-none flex-wrap justify-center gap-x-8 gap-y-12 min-[1700px]:relative min-[1700px]:mt-[calc(75*var(--u))] min-[1700px]:block min-[1700px]:h-[calc(428*var(--u))] min-[1700px]:w-[calc(1920*var(--u))] min-[1700px]:max-w-none min-[1700px]:gap-0">
        {heroes.map((hero, i) => {
          const img = caseImage(slug, hero.name);
          return (
            <li
              key={hero.name}
              style={
                {
                  "--x": `calc(${heroX + i * heroPitch}*var(--u))`,
                } as CSSProperties
              }
              className="flex w-[min(100%,234px)] flex-col items-center min-[1700px]:absolute min-[1700px]:top-0 min-[1700px]:left-(--x) min-[1700px]:w-[calc(234*var(--u))]"
            >
              <div className="w-full min-[1700px]:h-[calc(302*var(--u))]">
                <Image
                  src={img.src}
                  alt={hero.alt}
                  width={img.width}
                  height={img.height}
                  style={
                    { "--iw": `calc(${img.width}*var(--u))` } as CSSProperties
                  }
                  className="h-auto w-full min-[1700px]:w-(--iw)"
                />
              </div>
              <p className="mt-3 text-center text-[max(18px,calc(21*var(--u)))] leading-tight font-bold whitespace-nowrap uppercase italic min-[1700px]:mt-[calc(20*var(--u))] min-[1700px]:translate-x-[calc(-5*var(--u))] min-[1700px]:leading-[calc(25*var(--u))]">
                {hero.role}
              </p>
              <p className="mt-2 text-center text-[max(14px,calc(15.5*var(--u)))] leading-[1.3] font-light italic min-[1700px]:mt-[calc(14*var(--u))] min-[1700px]:translate-x-[calc(-5*var(--u))] min-[1700px]:leading-[calc(17.5*var(--u))] min-[1700px]:whitespace-nowrap">
                {hero.lines.map((line, n) => (
                  <span key={line}>
                    {n > 0 && <br className="hidden min-[1700px]:inline" />}
                    {n > 0 && " "}
                    {line}
                  </span>
                ))}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 w-full lg:mt-[calc(114*var(--u))]">
        <CaseCollage
          slug={slug}
          stackMaxWidth="max-w-2xl"
          width={1920}
          height={5520}
          items={pecas}
          captionClassName={captionClass}
        />
      </div>
    </main>
  );
}
