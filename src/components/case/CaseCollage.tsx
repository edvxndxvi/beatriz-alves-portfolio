import Image from "next/image";
import type { CSSProperties } from "react";
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
}: {
  slug: string;
  /** Largura e altura da colagem no desenho (px) */
  width: number;
  height: number;
  items: readonly CollageItem[];
  mobile?: "stack" | "scale";
}) {
  const scale = mobile === "scale";

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
          : "mx-auto flex w-full max-w-md flex-col items-center gap-6 lg:relative lg:block lg:h-(--ch) lg:w-(--cw) lg:max-w-none lg:gap-0"
      }
    >
      {items.map((item) => {
        const img = caseImage(slug, item.name);
        const w = img.width * (item.scale ?? 1);
        return (
          <Image
            key={item.name}
            src={img.src}
            alt={item.alt}
            width={img.width}
            height={img.height}
            sizes="(min-width: 1024px) 40vw, 90vw"
            style={
              {
                "--x": `calc(${item.x}*var(--u))`,
                "--y": `calc(${item.y}*var(--u))`,
                "--w": `calc(${w}*var(--u))`,
                "--mw": `${item.mobileWidth ?? 100}%`,
                "--px": `${(item.x / width) * 100}%`,
                "--py": `${(item.y / height) * 100}%`,
                "--pw": `${(w / width) * 100}%`,
              } as CSSProperties
            }
            className={
              scale
                ? "absolute top-(--py) left-(--px) h-auto w-(--pw)"
                : "h-auto w-(--mw) max-w-none lg:absolute lg:top-(--y) lg:left-(--x) lg:w-(--w)"
            }
          />
        );
      })}
    </div>
  );
}
