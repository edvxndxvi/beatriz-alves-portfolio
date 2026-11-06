export type Case = {
  slug: string;
  /** Id do frame no Figma (arquivo 916MtrvT4BXTJqYivAR9DE) */
  figmaNodeId: string;
  client: string;
  title: string;
};

/** Thumbnail da pasta na home (já otimizado em WebP) */
export const thumbSrc = (slug: string) => `/images/home/pastas/${slug}.webp`;

// Ordem = ordem das pastas na home. Textos provisórios, conferir com o Figma.
export const cases: Case[] = [
  { slug: "corridas", figmaNodeId: "101:6", client: "BB Seguros", title: "Corridas" },
  { slug: "dia-das-criancas", figmaNodeId: "101:851", client: "Núclea", title: "Dia das Crianças" },
  { slug: "dash", figmaNodeId: "105:4912", client: "Identidade visual", title: "Dash" },
  { slug: "pasta-mania", figmaNodeId: "106:7179", client: "Identidade visual", title: "Pasta Mania" },
  { slug: "asics-campanha", figmaNodeId: "111:5020", client: "Asics", title: "Campanha Promocional" },
  { slug: "bora-encantar", figmaNodeId: "115:6028", client: "BrasilSeg", title: "Bora Encantar" },
  { slug: "kick-off", figmaNodeId: "119:9137", client: "Claro Empresas", title: "Kick Off" },
  { slug: "volta-as-aulas", figmaNodeId: "124:9744", client: "Pravaler", title: "Volta às Aulas" },
  { slug: "acao-de-visibilidade", figmaNodeId: "128:10114", client: "Rede Américas", title: "Ação de Visibilidade" },
  { slug: "formula-1", figmaNodeId: "154:3366", client: "Claro Empresas", title: "Fórmula 1" },
  { slug: "vibracoes-urbanas", figmaNodeId: "143:2", client: "Revista", title: "Vibrações Urbanas" },
];
