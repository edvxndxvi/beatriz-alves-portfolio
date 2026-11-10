import Image from "next/image";
import { Fragment, type CSSProperties } from "react";
import { caseImage } from "@/data/caseImages";

export type CollageItem = {
  /** Nome do arquivo em images.generated.json (sem extensão) */
  name: string;
  alt: string;
  /** Posição no desenho do Figma (px), relativa ao canto da colagem */
  x: number;
  y: number;
  /** Largura no desenho = largura do arquivo × scale (2x exportado → 0.5). Padrão 1. */
  scale?: number;
  /**
   * Só no `mobile="stack"`: largura da imagem em % da coluna. Padrão 100. Serve para peças com
   * margem transparente (ou muito altas) não ficarem desproporcionais às outras.
   */
  mobileWidth?: number;
  /**
   * Altura da peça no desenho (px), quando o quadro é mais baixo que o arquivo: a imagem é
   * recortada pelo centro (object-cover) em vez de esticada. Padrão: proporção do arquivo.
   */
  height?: number;
  /** Cantos arredondados (24px no desenho), como nas fotos dos cases da BB Seguros. */
  rounded?: boolean;
  /** Contorno de 1px na cor `--color-grafite`, como no key visual do case Dia das Crianças. */
  bordered?: boolean;
  /**
   * Legenda sob a peça (só em `mobile="stack"`). Em lg+ fica posicionada sem ocupar espaço no
   * fluxo; abaixo disso vem logo após a imagem.
   */
  caption?: CollageCaption;
};

export type CollageCaption = {
  text: string;
  /**
   * Posição da legenda no desenho (px), relativa ao canto da colagem: `x` é a borda esquerda,
   * o centro ou a borda direita do texto (conforme `align`) e `y` é o topo da linha. Pode cair
   * em qualquer lugar, inclusive sobre a imagem. Abaixo de lg a legenda vem logo após a imagem.
   */
  x: number;
  y: number;
  /** Padrão "left" */
  align?: "left" | "center" | "right";
  /**
   * Só abaixo de lg: nome da peça depois da qual a legenda aparece (ex.: a última peça da seção
   * que a legenda descreve). Sem isso, ela vem logo após a própria peça. Em lg+ não muda nada.
   */
  mobileAfter?: string;
};

/**
 * Colagem de peças posicionadas como no Figma. As medidas do desenho (px) viram a unidade
 * fluida --u em lg+.
 *
 * - `mobile="stack"`: abaixo de lg as peças ficam em uma coluna, uma por linha.
 * - `mobile="scale"`: a colagem inteira encolhe proporcionalmente (posições em %), útil
 *   quando são muitas peças pequenas.
 */
export default function CaseCollage({
  slug,
  width,
  height,
  items,
  mobile = "stack",
  stackMaxWidth = "max-w-md",
  captionClassName = "",
}: {
  slug: string;
  /** Largura e altura da colagem no desenho (px) */
  width: number;
  height: number;
  items: readonly CollageItem[];
  mobile?: "stack" | "scale";
  /** Só no `mobile="stack"`: largura máxima da coluna abaixo de lg (classe do Tailwind). Padrão "max-w-md". */
  stackMaxWidth?: string;
  /** Estilo do texto das legendas (fonte, tamanho, cor) */
  captionClassName?: string;
}) {
  const scale = mobile === "scale";
  /** Legendas que, abaixo de lg, vão para depois de outra peça */
  const moved = new Map<string, string[]>();
  if (!scale) {
    for (const it of items) {
      const after = it.caption?.mobileAfter;
      if (after)
        moved.set(after, [...(moved.get(after) ?? []), it.caption!.text]);
    }
  }

  return (
    <div
      style={
        {
          "--cw": `calc(${width}*var(--u))`,
          "--ch": `calc(${height}*var(--u))`,
          ...(scale && { aspectRatio: `${width}/${height}` }),
        } as CSSProperties
      }
      className={
        scale
          ? "relative mx-auto w-full max-w-2xl lg:w-(--cw) lg:max-w-none"
          : `mx-auto flex w-full ${stackMaxWidth} flex-col items-center gap-6 lg:relative lg:block lg:h-(--ch) lg:w-(--cw) lg:max-w-none lg:gap-0`
      }
    >
      {items.map((item) => {
        const img = caseImage(slug, item.name);
        const w = img.width * (item.scale ?? 1);
        const cap = scale ? undefined : item.caption;
        const style = {
          "--x": `calc(${item.x}*var(--u))`,
          "--y": `calc(${item.y}*var(--u))`,
          "--w": `calc(${w}*var(--u))`,
          "--mw": `${item.mobileWidth ?? 100}%`,
          "--px": `${(item.x / width) * 100}%`,
          "--py": `${(item.y / height) * 100}%`,
          "--pw": `${(w / width) * 100}%`,
          "--cx": `calc(${(item.caption?.x ?? 0) - item.x}*var(--u))`,
          "--cy": `calc(${(item.caption?.y ?? 0) - item.y}*var(--u))`,
        } as CSSProperties;
        const sizes = `(min-width: 1024px) ${Math.max(5, Math.round((w / width) * 100))}vw, ${item.mobileWidth ?? 100}vw`;
        const position = scale
          ? "absolute top-(--py) left-(--px) h-auto w-(--pw)"
          : "w-(--mw) max-w-none lg:absolute lg:top-(--y) lg:left-(--x) lg:w-(--w)";

        const crop = item.height
          ? ({ aspectRatio: `${w}/${item.height}` } as CSSProperties)
          : undefined;
        const shape = `${item.height ? "object-cover " : ""}${item.rounded ? "rounded-[calc(24*var(--u))] " : ""}${item.bordered ? "border border-grafite " : ""}`;
        const image = (
          <Image
            src={img.src}
            alt={item.alt}
            width={img.width}
            height={img.height}
            sizes={sizes}
            style={cap ? crop : { ...style, ...crop }}
            className={
              cap ? `${shape}h-auto w-full` : `${shape}h-auto ${position}`
            }
          />
        );
        const extra = moved.get(item.name)?.map((text) => (
          <p
            key={`${item.name}-${text}`}
            className={`w-full text-left lg:hidden ${captionClassName}`}
          >
            {text}
          </p>
        ));
        if (!cap)
          return (
            <Fragment key={item.name}>
              {image}
              {extra}
            </Fragment>
          );

        const align = {
          left: "text-left",
          center: "text-center lg:-translate-x-1/2",
          right: "text-right lg:-translate-x-full",
        }[cap.align ?? "left"];
        return (
          <Fragment key={item.name}>
            <figure style={style} className={position}>
              {image}
              <figcaption
                className={`${cap.mobileAfter ? "max-lg:hidden" : "mt-2"} lg:absolute lg:top-(--cy) lg:left-(--cx) lg:mt-0 lg:whitespace-nowrap ${align} ${captionClassName}`}
              >
                {cap.text}
              </figcaption>
            </figure>
            {extra}
          </Fragment>
        );
      })}
    </div>
  );
}
