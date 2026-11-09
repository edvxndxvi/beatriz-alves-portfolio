import Image from "next/image";
import { marqueeWords } from "@/data/profile";

function Star({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/home/estrela-limao.svg"
      alt=""
      width={54}
      height={52}
      className={`h-5 w-auto ${className}`}
    />
  );
}

function Word({ word }: { word: string }) {
  return (
    <span className="text-creme font-gunter flex shrink-0 items-center gap-12 text-[18px] whitespace-nowrap">
      <Star />
      {word}
    </span>
  );
}

/**
 * Faixa decorativa (estrela + palavra). Oculta para leitores de tela: é só ornamento.
 *
 * Tem DUAS versões, trocadas pelo breakpoint `xl` (1280px):
 *  - >= 1280px: estática, itens espalhados pela largura (como no Figma).
 *  - <  1280px: animada em loop. O texto e as estrelas têm tamanho fixo (não escalam com a
 *    tela), então abaixo de 1280px os itens não cabem mais e a faixa passa a rolar.
 *
 * Para mudar o ponto de troca, altere `xl:` nos DOIS blocos (`hidden xl:flex` e `xl:hidden`).
 *
 * Como o loop funciona:
 *  1. O conteúdo é renderizado em DUAS cópias idênticas lado a lado, dentro de um
 *     contêiner `w-max` (largura do conteúdo, sem quebrar linha).
 *  2. A animação (`animate-marquee`, em globals.css) desloca o contêiner de 0 até -50%,
 *     exatamente uma cópia, e recomeça. Como a segunda cópia é igual à primeira, o salto
 *     do reinício não aparece.
 *  3. Cada cópia repete a lista de palavras 3x para ser mais larga que a tela (senão
 *     aparece um espaço vazio no fim do loop).
 *  4. `overflow-hidden` na faixa corta o que passa da tela.
 *  - Velocidade: o `40s` em `--animate-marquee` (globals.css); maior = mais lento.
 *  - `prefers-reduced-motion`: o bloco do globals.css encerra a animação quase instantaneamente
 *    e ela volta à posição inicial, então a faixa fica parada.
 */

// TODO: Em 1280 px exatos a versão estática está bem justa, sem folga nas bordas. Se algum texto mudar para uma fonte mais larga (a Gunter de verdade, por exemplo), ela pode estourar ali. Quando as fontes definitivas entrarem, vale conferir de novo e, se precisar, subir o breakpoint para 2xl ou reduzir o gap

export default function Marquee() {
  const repeated = [...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <div
      aria-hidden="true"
      className="bg-vinho flex h-15 items-center overflow-hidden"
    >
      {/* >= 1280px: estática */}
      <div className="mx-auto hidden w-full max-w-[1920px] items-center justify-center gap-[calc(100*var(--u))] xl:flex">
        {marqueeWords.map((word) => (
          <Word key={word} word={word} />
        ))}
        <Star className="shrink-0" />
      </div>

      {/* < 1280px: animada */}
      <div className="animate-marquee flex w-max items-center xl:hidden">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-12 pr-12">
            {repeated.map((word, i) => (
              <Word key={`${copy}-${i}`} word={word} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
