import CaseCollage, { type CollageItem } from "@/components/case/CaseCollage";

/**
 * Identidade visual do Pasta Mania (Figma: 1114×1461). Todas as peças são SVG, em 1x.
 * Linha 1: símbolo e logo. Linha 2: slogan, textura e paleta. Depois, as 4 versões da logo
 * (coluna da esquerda) e as 4 do símbolo (grade 2×2 da direita), nas cores azul, branco,
 * amarelo e laranja.
 */
const items: CollageItem[] = [
  {
    name: "01a-card-simbolo",
    alt: "Card azul com o símbolo da marca: a letra m em amarelo e branco",
    x: 0,
    y: 0,
  },
  {
    name: "01b-card-logo",
    alt: "Card amarelo com a logo Pasta Mania",
    x: 500,
    y: 0,
  },
  {
    name: "01c-card-slogan",
    alt: "Card amarelo com o slogan “Massas frescas, molhos exclusivos e uma experiência autêntica”",
    x: 0,
    y: 482,
  },
  {
    name: "01d-card-textura",
    alt: "Card laranja com a textura da marca: traços de massa em amarelo",
    x: 327,
    y: 482,
  },
  {
    name: "01e-cards-paleta",
    alt: "Paleta de cores da marca: azul, branco, amarelo e laranja",
    x: 757,
    y: 482,
  },
  {
    name: "02a-logo-azul",
    alt: "Logo Pasta Mania em azul, sobre fundo azul",
    x: 0,
    y: 886,
  },
  {
    name: "02b-logo-branco",
    alt: "Logo Pasta Mania em branco, sobre fundo branco",
    x: 0,
    y: 1037,
  },
  {
    name: "02c-logo-amarelo",
    alt: "Logo Pasta Mania em amarelo, sobre fundo amarelo",
    x: 0,
    y: 1188,
  },
  {
    name: "02d-logo-laranja",
    alt: "Logo Pasta Mania em laranja, sobre fundo laranja",
    x: 0,
    y: 1339,
  },
  {
    name: "02e-simbolo-azul",
    alt: "Símbolo da marca em azul",
    x: 679,
    y: 886,
  },
  {
    name: "02f-simbolo-branco",
    alt: "Símbolo da marca em branco",
    x: 911,
    y: 886,
  },
  {
    name: "02g-simbolo-amarelo",
    alt: "Símbolo da marca em amarelo",
    x: 679,
    y: 1188,
  },
  {
    name: "02h-simbolo-laranja",
    alt: "Símbolo da marca em laranja",
    x: 911,
    y: 1188,
  },
];

export default function IdentityCollage() {
  return (
    <CaseCollage
      slug="pasta-mania"
      width={1114}
      height={1461}
      items={items}
      mobile="scale"
    />
  );
}
