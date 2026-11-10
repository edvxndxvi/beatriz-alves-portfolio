import Image from "next/image";
import { caseImage } from "@/data/caseImages";
import { caseMetadata } from "@/data/caseMetadata";
import { cases } from "@/data/cases";
import { bancoBrasilFontVariables } from "@/fonts/bancobrasil";

const slug = "bora-encantar";
const c = cases.find((x) => x.slug === slug)!;

export const metadata = caseMetadata(
  c,
  "Case Bora Encantar: plataforma digital da Jornada do Cliente da BrasilSeg, com tela home, passaporte digital e cinco games (Decolagem, Escala, Conexão, Destino e Bagagem).",
);

type Shot = { name: string; alt: string };

/** Telas em grade de duas colunas (576px cada no Figma). */
const games: {
  n: number;
  title: string;
  shots: Shot[];
  /** Destino: a tela 2 é alta e ocupa duas linhas na coluna da direita. */
  tallSecond?: boolean;
  /** Conexão: a última tela fica sozinha, deslocada como no Figma. */
  loneLast?: boolean;
}[] = [
  {
    n: 1,
    title: "Decolagem",
    shots: [
      {
        name: "04a-decolagem-1",
        alt: "Tela “Perspectiva do Cliente”: “É hora de ouvir quem realmente importa”, com o botão “Ouvir o relato”.",
      },
      {
        name: "04b-decolagem-2",
        alt: "Tela com um player de áudio e a pergunta “Qual pilar da experiência do cliente não foi atendido nessa interação?”, com três alternativas.",
      },
      {
        name: "04c-decolagem-3",
        alt: "Tela “Sua reflexão foi registrada!”, com um check azul e o botão “Próximo desafio”.",
      },
      {
        name: "04d-decolagem-4",
        alt: "Tela “Decolagem”: selo conquistado, “Passaporte: 1 de 5 selos conquistados”.",
      },
    ],
  },
  {
    n: 2,
    title: "Escala",
    shots: [
      {
        name: "05a-escala-1",
        alt: "Tela “Cada decisão influencia a experiência do cliente”, com o botão “Iniciar desafio”.",
      },
      {
        name: "05b-escala-2",
        alt: "Desafio sobre um cliente com a casa alagada, com três alternativas de ação.",
      },
      {
        name: "05c-escala-3",
        alt: "Desafio sobre um cliente com um sinistro residencial, com três alternativas de atitude.",
      },
      {
        name: "05d-escala-4",
        alt: "Desafio sobre a contratação de um seguro residencial, com três alternativas.",
      },
      {
        name: "05e-escala-5",
        alt: "Tela “Você encontrou a rota certa! Você acertou 4/5”, com o botão “Seguir para Conexões”.",
      },
      {
        name: "05f-escala-6",
        alt: "Tela “Escala”: selo conquistado, “Passaporte: 2 de 5 selos conquistados”.",
      },
    ],
  },
  {
    n: 3,
    title: "Conexão",
    loneLast: true,
    shots: [
      {
        name: "06a-conexao-1",
        alt: "Tela “Nenhuma área viaja sozinha”, com o botão “Iniciar desafio”.",
      },
      {
        name: "06b-conexao-2",
        alt: "Desafio de combinar situações do dia a dia com os pilares da experiência.",
      },
      {
        name: "06c-conexao-3",
        alt: "Desafio de conexões já respondido, com cada situação ligada a um pilar colorido.",
      },
      {
        name: "06d-conexao-4",
        alt: "Tela “Parabéns — Conexão concluída com sucesso”, com o botão “Seguir viagem”.",
      },
      {
        name: "06e-conexao-5",
        alt: "Tela “Conexão”: selo conquistado, “Passaporte: 3 de 5 selos conquistados”.",
      },
    ],
  },
  {
    n: 4,
    title: "Destino",
    tallSecond: true,
    shots: [
      {
        name: "07a-destino-1",
        alt: "Tela “A experiência do cliente começa por você”, com o botão “Iniciar”.",
      },
      {
        name: "07b-destino-2",
        alt: "Tela com o texto “A Experiência do Cliente começa por você”, sobre encantar, valores e atitudes do dia a dia.",
      },
      {
        name: "07c-destino-3",
        alt: "Questão de múltipla escolha sobre encantar o cliente, com as alternativas A a D.",
      },
      {
        name: "07d-destino-4",
        alt: "Tela “Destino — Traçado”, com a mensagem sobre colocar o cliente no centro das escolhas.",
      },
      {
        name: "07e-destino-5",
        alt: "Tela “Destino”: selo conquistado, “Passaporte: 4 de 5 selos conquistados”.",
      },
    ],
  },
  {
    n: 5,
    title: "Bagagem",
    shots: [
      {
        name: "08a-bagagem-1",
        alt: "Tela “O que você leva dessa jornada?”, com o botão “Fazer minha escolha”.",
      },
      {
        name: "08b-bagagem-2",
        alt: "Grade de palavras, como Empatia, Cuidado, Escuta e Confiança, para escolher o compromisso.",
      },
      {
        name: "08c-bagagem-3",
        alt: "Nuvem de palavras com Empatia, Escuta, Parceria, Confiança, Compromisso e Excelência.",
      },
      {
        name: "08d-bagagem-4",
        alt: "Tela “Bagagem”: selo conquistado ao final da jornada.",
      },
    ],
  },
];

const body =
  "font-bb-titulo text-[max(17px,calc(35*var(--u)))] leading-[1.4] font-normal lg:leading-[calc(44*var(--u))] lg:whitespace-nowrap";

const caption =
  "font-bb-titulo text-[max(14px,calc(23*var(--u)))] leading-[1.4] font-normal italic lg:mt-[calc(6*var(--u))] lg:leading-[calc(36*var(--u))]";

/** Título de seção: parte leve em itálico e parte extra bold em itálico (BB Títulos). */
function SectionTitle({
  light,
  strong,
  stacked = false,
  className = "",
}: {
  light: string;
  strong?: string;
  stacked?: boolean;
  className?: string;
}) {
  const part = stacked ? "block" : "inline";
  return (
    <h2
      className={`font-bb-titulo text-[max(32px,calc(75*var(--u)))] leading-[1.1] italic lg:leading-[calc(76*var(--u))] ${className}`}
    >
      <span className={`${part} font-normal`}>{light}</span>
      {strong && (
        <>
          {stacked ? "" : " "}
          <span className={`${part} font-extrabold`}>{strong}</span>
        </>
      )}
    </h2>
  );
}

/** Tela do jogo, com o número ao lado em lg+ e acima da imagem no celular. */
function Screen({
  shot,
  n,
  className = "",
}: {
  shot: Shot;
  n: number;
  className?: string;
}) {
  const img = caseImage(slug, shot.name);
  return (
    <figure className={`relative ${className}`}>
      <span className="font-bb-titulo mb-1 block text-[max(18px,calc(34*var(--u)))] leading-none font-normal italic lg:absolute lg:top-0 lg:right-full lg:mb-0 lg:mr-[calc(8*var(--u))]">
        {n}.
      </span>
      <Image
        src={img.src}
        alt={shot.alt}
        width={img.width}
        height={img.height}
        sizes="(min-width: 1024px) 30vw, 90vw"
        className="h-auto w-full"
      />
    </figure>
  );
}

function Plain({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const img = caseImage(slug, name);
  return (
    <Image
      src={img.src}
      alt={alt}
      width={img.width}
      height={img.height}
      priority={priority}
      sizes="(min-width: 1024px) 30vw, 90vw"
      className={`h-auto ${className}`}
    />
  );
}

export default function BoraEncantarPage() {
  const logo = caseImage(slug, "0-bora-encantar-logo");
  const key = caseImage(slug, "01-key-visual");

  return (
    <main
      className={`${bancoBrasilFontVariables} font-bb-titulo text-bb-azul mx-auto flex max-w-[1920px] flex-col items-center overflow-x-clip px-5 pt-12 pb-20 lg:px-0 lg:pt-[calc(154*var(--u))] lg:pb-[calc(150*var(--u))]`}
    >
      <h1 className="w-[min(70%,300px)] lg:w-[calc(506*var(--u))]">
        <Image
          src={logo.src}
          alt="Bora Encantar — BrasilSeg"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>

      <section className="mt-12 flex w-full max-w-md flex-col gap-6 sm:max-w-3xl lg:mt-[calc(188*var(--u))] lg:w-[calc(1220*var(--u))] lg:max-w-none lg:gap-0">
        <h2 className="font-bb-titulo text-[max(30px,calc(75*var(--u)))] leading-[1.2] font-normal lg:leading-[calc(86*var(--u))]">
          Toda decisão impacta
          <br className="hidden lg:inline" /> uma{" "}
          <span className="marca-amarela px-[max(3px,calc(6*var(--u)))] pb-[calc(8*var(--u))] font-bold [--mb:calc(-8*var(--u))] [--mh:max(10px,calc(34*var(--u)))]">
            jornada
          </span>
        </h2>
        <p className={`${body} lg:mt-[calc(36*var(--u))]`}>
          Porque, por trás de cada apólice, existe uma pessoa.
          <br className="hidden lg:inline" /> E toda jornada é construída pelas
          escolhas que
          <br className="hidden lg:inline" /> fazemos todos os dias.
        </p>
        <p className={`${body} lg:mt-[calc(58*var(--u))]`}>
          A plataforma será o hub digital da Jornada do Cliente, reunindo
          <br className="hidden lg:inline" /> conteúdo, gamificação e interação
          em um único ambiente.
          <br className="hidden lg:inline" /> Ela será o ponto de encontro da
          experiência, conectando os
          <br className="hidden lg:inline" /> colaboradores às ativações da
          Semana da Cultura e incentivando
          <br className="hidden lg:inline" /> a participação durante toda a
          jornada.
        </p>
      </section>

      <figure className="mt-10 w-full max-w-md sm:max-w-3xl lg:mt-[calc(120*var(--u))] lg:w-[calc(1220*var(--u))] lg:max-w-none">
        <Image
          src={key.src}
          alt="Key visual: “Bora Encantar — BrasilSeg” sobre fundo amarelo com carimbos de viagem, avião e mapa tracejado."
          width={key.width}
          height={key.height}
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="h-auto w-full rounded-[calc(24*var(--u))]"
        />
        <figcaption className={`mt-2 ${caption}`}>Key Visual</figcaption>
      </figure>

      {/* Tela home */}
      <section className="mt-16 flex w-full flex-col items-center lg:mt-[calc(162*var(--u))]">
        <SectionTitle light="Tela" strong="Home" />
        <div className="mt-8 flex w-full max-w-md flex-col gap-6 lg:mt-[calc(60*var(--u))] lg:w-[calc(576*var(--u))] lg:max-w-none lg:gap-[calc(38*var(--u))]">
          <Plain
            name="02a-jornada-do-cliente"
            alt="Tela inicial: “Bem-vindo à Jornada do Cliente!”, com o logo Bora Encantar e o botão “Bora Embarcar”."
            className="w-full"
          />
          <Plain
            name="02b-cadastro"
            alt="Tela de cadastro: “Cadastre-se para iniciar sua Jornada do Cliente”, com campos de nome, e-mail e senha."
            className="w-full"
          />
          <Plain
            name="02c-tela-home"
            alt="Tela home completa: menu com Conceito, Passaporte, Check In e Manifesto, os cinco princípios, o passaporte digital, “A semana da cultura começa agora” e os cartões dos cinco games."
            className="w-full"
          />
        </div>
      </section>

      {/* Passaporte */}
      <section className="mt-16 flex w-full flex-col items-center lg:mt-[calc(190*var(--u))]">
        <SectionTitle light="Passaporte" />
        <div className="mt-8 w-full max-w-md lg:mt-[calc(32*var(--u))] lg:w-[calc(576*var(--u))] lg:max-w-none">
          <Plain
            name="03-passaporte"
            alt="Tela do passaporte digital aberto, com os selos Escala, Conexão e Cuidado e o texto “No final da jornada, ganhe um brinde especial!”."
            className="w-full"
          />
        </div>
      </section>

      {/* Games */}
      {games.map((g, i) => (
        <section
          key={g.n}
          className={`mt-20 w-full max-w-md sm:max-w-3xl lg:w-[calc(1220*var(--u))] lg:max-w-none ${i === 0 ? "lg:mt-[calc(246*var(--u))]" : "lg:mt-[calc(240*var(--u))]"}`}
        >
          <SectionTitle light={`Game ${g.n}`} strong={g.title} stacked />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-[calc(42*var(--u))] lg:grid-cols-[repeat(2,calc(576*var(--u)))] lg:gap-x-[calc(44*var(--u))] lg:gap-y-[calc(34*var(--u))] lg:pl-[calc(24*var(--u))]">
            {g.shots.map((shot, k) => {
              const last = k === g.shots.length - 1;
              const cls = [
                g.tallSecond && k === 1 ? "lg:row-span-2" : "",
                g.loneLast && last
                  ? "lg:col-span-2 lg:ml-[calc(296*var(--u))] lg:w-[calc(576*var(--u))]"
                  : "",
              ].join(" ");
              return (
                <Screen key={shot.name} shot={shot} n={k + 1} className={cls} />
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
