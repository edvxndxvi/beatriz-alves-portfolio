import CaseCollage, { type CollageItem } from "@/components/case/CaseCollage";

/**
 * Colagem da identidade visual do Dash (Figma: 1328×861). Os rasters estão exportados em 2x
 * (scale 0.5); o SVG do símbolo está em 1x.
 */
const items: CollageItem[] = [
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
  },
];

export default function IdentityCollage() {
  return <CaseCollage slug="dash" width={1328} height={861} items={items} />;
}
