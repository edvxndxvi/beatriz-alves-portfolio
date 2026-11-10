import Image from "next/image";
import type { CSSProperties } from "react";
import { caseImage } from "@/data/caseImages";
import { caseMetadata } from "@/data/caseMetadata";
import { cases } from "@/data/cases";
import { vibracoesFontVariables } from "@/fonts/vibracoes";

const c = cases.find((x) => x.slug === "vibracoes-urbanas")!;

export const metadata = caseMetadata(
  c,
  "Case Vibrações Urbanas: revista sobre festas de música eletrônica em espaços públicos no Brasil, com identidade visual e projeto gráfico editorial.",
);

// TODO(conferir): endereço lido de um screenshot do Figma.
const magazineUrl = "https://heyzine.com/flip-book/fd5a5497e3.html#page/1";

/**
 * Páginas da apresentação, na ordem. Cada uma é um slide 16:9 exportado do Figma (1225px de
 * largura no desenho). O texto dos slides está dentro da imagem, então o `alt` resume o
 * conteúdo. `before` ajusta o espaço padrão (46px) até o slide anterior, em px do desenho.
 */
const slides: { name: string; alt: string; before?: number }[] = [
  {
    name: "0-capa",
    alt: "Capa da apresentação: Vibrações Urbanas. Revista aberta com a capa “Coletivo Plano” sobre fundo laranja. Autoria: Beatriz Alves, Fernanda Rizzo, Gabriela Abrantes e Thiago Eguilhor.",
  },
  {
    name: "01-pagina-1",
    before: 6,
    alt: "Citação sobre fundo claro, ao lado de uma foto de multidão em festa sob um viaduto: “Enxergar praças, avenidas e ruas como engrenagens de uma máquina voltada para produtividade e consumo traz efeitos perversos para a vida urbana, eliminando o espaço das possibilidades. Movimentos e coletivos resistem a essa mercantilização, restaurando a principal função do espaço público: a troca de ideias e a construção de corpos políticos coletivos.” Pedro Cosme, 2020.",
  },
  {
    name: "02-introducao",
    alt: "Introdução: as festas da cultura independente da cena de música eletrônica alternativa se organizam de forma autônoma, em pequenos e grandes eventos, e ocupam espaços públicos muitas vezes de forma ilegal. O design complementa a estética desse cenário e contribui para fortalecer a cultura da música eletrônica underground no país.",
  },
  {
    name: "03-justificativa",
    alt: "Justificativa: há pouca documentação sobre festas de música eletrônica em espaços públicos, apesar do interesse e da popularidade desses eventos. A revista Vibrações Urbanas propõe um registro histórico dessas festas no Brasil, documentando eventos, histórias e experiências e cooperando para a preservação da memória cultural.",
  },
  {
    name: "04-objetivo",
    alt: "Objetivo: desenvolver uma proposta estética para a revista que capture a diversidade das festas de música eletrônica em espaços públicos, oferecendo uma plataforma informativa e educativa para os leitores. Três fotos de festas ao lado do texto.",
  },
  {
    name: "05-capa-identidade-visual",
    alt: "Abertura da seção “Identidade Visual”, sobre uma foto de público em uma festa à noite, sob luzes de palco.",
  },
  {
    name: "06-tipografia",
    alt: "Tipografia: Space Grotesk para os textos corridos e LL Black Matrix para o logotipo, cuja estética eletrônica reforça o tema central da revista. Amostras das duas fontes sobre fundo vermelho.",
  },
  {
    name: "07-poster",
    alt: "Pôster com a logo Vibrações Urbanas e a frase “Festas de música eletrônica em espaços públicos no Brasil”, sobre uma foto de DJ e público à noite.",
  },
  {
    name: "08-pagina-8",
    alt: "Títulos de matérias em fontes diferentes: Schabo, Kubos, Build, Bochum, Outward e Elevator. Cada estilo tipográfico foi pensado para transmitir a diversidade do conteúdo e remeter ao universo da música eletrônica.",
  },
  {
    name: "09-cores",
    alt: "Cores: paleta de tons quentes e vivos que busca traduzir o espírito dinâmico da revista. Vermelho, laranja, amarelo, verde claro, verde, azul claro, azul escuro, roxo e rosa vibrantes, mais branco e preto, cada um com seus códigos HEX, RGB, CMYK e Pantone.",
  },
  {
    name: "10-simbologia",
    alt: "Simbologia: um poste de luz representa a semiótica presente nos significados de iluminação, a paisagem urbana brasileira e a interseção entre a vida urbana e as festas realizadas nas ruas. Ilustração branca de um poste e fios sobre fundo vermelho.",
  },
  {
    name: "11-grids-e-layouts",
    alt: "Grids e layouts: o grid foi pensado para permitir diagramações dinâmicas, com alinhamentos assimétricos e variação de tamanhos para trazer movimento ao leitor. Esquemas de página sobre papel quadriculado.",
  },
  {
    name: "12-pagina-12",
    alt: "Abertura da seção “Resultado final”, sobre uma foto de público em uma festa com iluminação verde.",
  },
  {
    name: "13-mockup-1",
    before: 55,
    alt: "Mockup da capa e da quarta capa da revista sobre fundo vermelho, com a ilustração do poste de luz.",
  },
  {
    name: "14-mockup-2",
    alt: "Mockup de página dupla da matéria “Masterplano: a nova identidade visual”, sobre fundo rosa.",
  },
  {
    name: "15-mockup-3",
    alt: "Mockup da revista aberta em uma página de quadrinhos, sobre fundo roxo.",
  },
  {
    name: "16-mockup-4",
    alt: "Mockup de página dupla escura com pôsteres e cartazes de festas, sobre fundo azul-escuro.",
  },
  {
    name: "17-mockup-5",
    alt: "Mockup de página dupla com fotos de festas e texto em colunas, sobre fundo azul.",
  },
  {
    name: "18-mockup-6",
    alt: "Mockup de página dupla com fotos de shows e luzes, sobre fundo verde.",
  },
  {
    name: "19-mockup-7",
    alt: "Mockup da capa e de uma página dupla com o título “Sounds in the city”, sobre fundo verde-claro.",
  },
  {
    name: "20-mockup-8",
    alt: "Mockup de página dupla da matéria “Balada em tempos de crise”, sobre fundo amarelo.",
  },
  {
    name: "21-mockup-9",
    alt: "Mockup de página dupla da matéria “Reverse”, sobre fundo laranja.",
  },
  {
    name: "22-mockup-10",
    alt: "Mockup com uma pilha de exemplares da revista, mostrando a capa, sobre fundo rosa.",
  },
  {
    name: "23-revista-completa",
    alt: "Visão geral de todas as páginas da revista lado a lado.",
  },
];

export default function VibracoesUrbanasPage() {
  return (
    <main
      className={`${vibracoesFontVariables} mx-auto flex max-w-[1920px] flex-col items-center gap-6 px-5 pt-8 pb-16 lg:gap-[calc(46*var(--u))] lg:px-0 lg:pt-[calc(215*var(--u))] lg:pb-[calc(74*var(--u))]`}
    >
      <h1 className="sr-only">Vibrações Urbanas</h1>

      {slides.map((s, i) => {
        const img = caseImage("vibracoes-urbanas", s.name);
        return (
          <Image
            key={s.name}
            src={img.src}
            alt={s.alt}
            width={img.width}
            height={img.height}
            priority={i === 0}
            sizes="(min-width: 1024px) 64vw, 100vw"
            style={
              {
                "--before": `calc(${s.before ?? 0}*var(--u))`,
              } as CSSProperties
            }
            className="h-auto w-full max-w-3xl lg:mt-(--before) lg:w-[calc(1225*var(--u))] lg:max-w-none"
          />
        );
      })}

      <p className="font-montserrat text-vinho mt-6 text-center text-[max(16px,calc(27*var(--u)))] leading-[1.1] lg:mt-0">
        <em className="block font-semibold">Confira a revista completa em:</em>
        <a
          href={magazineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:outline-vinho break-all underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {magazineUrl}
        </a>
      </p>
    </main>
  );
}
