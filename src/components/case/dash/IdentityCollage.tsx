import Image from "next/image";
import { caseImage } from "@/data/caseImages";

/**
 * Colagem da identidade visual (Figma: 1328×861). Posições em px do desenho (relativas ao canto
 * da colagem), na unidade fluida --u. Os rasters estão exportados em 2x, então a largura no
 * desenho é a metade da largura do arquivo; o SVG do símbolo está em 1x.
 * Abaixo de lg vira uma coluna simples.
 */
const items = [
  {
    name: "01a-card-logo",
    alt: "Card laranja com a logo Dash e o ícone de uma cloche",
    x: 0,
    y: 0,
    scale: 0.5,
  },
  {
    name: "01b-card-slogan",
    alt: "Card com o slogan “sabor rápido, sabor Dash” e o ícone de um hambúrguer",
    x: 740,
    y: 0,
    scale: 0.5,
  },
  {
    name: "01c-cards-paleta",
    alt: "Paleta de cores da marca: #f55a32, #653221 e #f7f0eb, com o ícone de uma salada",
    x: 0,
    y: 488,
    scale: 0.5,
  },
  {
    name: "01d-card-moto",
    alt: "Card laranja com o ícone de uma moto de entrega",
    x: 484,
    y: 488,
    scale: 0.5,
  },
  {
    name: "01e-card-simbolo",
    alt: "Card marrom com o símbolo da marca: um gorro de chef e a letra d",
    x: 916,
    y: 488,
    scale: 1,
  },
] as const;

export default function IdentityCollage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 lg:relative lg:block lg:h-[calc(861*var(--u))] lg:w-[calc(1328*var(--u))] lg:max-w-none lg:gap-0">
      {items.map((item) => {
        const img = caseImage("dash", item.name);
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
                "--w": `calc(${img.width * item.scale}*var(--u))`,
              } as React.CSSProperties
            }
            className="h-auto w-full lg:absolute lg:top-(--y) lg:left-(--x) lg:w-(--w)"
          />
        );
      })}
    </div>
  );
}
