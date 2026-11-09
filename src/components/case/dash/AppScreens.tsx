import Image from "next/image";
import { caseImage } from "@/data/caseImages";

const screens = [
  { name: "02a-tela-login", alt: "Tela de login do app Dash" },
  {
    name: "02b-tela-home",
    alt: "Tela inicial do app Dash, com busca, categorias e restaurantes recomendados",
  },
  {
    name: "02c-tela-restaurante",
    alt: "Tela de um restaurante no app Dash, com o cardápio por categoria",
  },
  {
    name: "02d-tela-carrinho",
    alt: "Tela do carrinho do app Dash, com os itens do pedido e o botão de pagar",
  },
  {
    name: "02e-tela-pedido",
    alt: "Tela de acompanhamento do pedido no app Dash, com o código e as etapas da entrega",
  },
];

/**
 * Telas do app (Figma: 428×863 cada, 31,8 de espaço). Duas na primeira linha, centralizadas, e
 * três na segunda: grade de 6 colunas em que cada tela ocupa 2 e a primeira começa na coluna 2.
 * Abaixo de lg: 1 coluna (sm: 2).
 */
export default function AppScreens() {
  return (
    <ul className="mx-auto grid w-full max-w-md grid-cols-1 gap-6 sm:max-w-3xl sm:grid-cols-2 lg:w-[calc(1348*var(--u))] lg:max-w-none lg:grid-cols-6 lg:gap-x-[calc(31.8*var(--u))] lg:gap-y-[calc(20*var(--u))]">
      {screens.map((s) => {
        const img = caseImage("dash", s.name);
        return (
          <li key={s.name} className="lg:col-span-2 lg:first:col-start-2">
            <Image
              src={img.src}
              alt={s.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
              className="h-auto w-full"
            />
          </li>
        );
      })}
    </ul>
  );
}
