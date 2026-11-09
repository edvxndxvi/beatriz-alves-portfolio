import generated from "./images.generated.json";

export type CaseImage = {
  name: string;
  src: string;
  width: number;
  height: number;
  kind: "svg" | "raster";
};

const byCase = generated.cases as Record<string, CaseImage[]>;

/**
 * Imagem de um case pelo nome do arquivo (sem extensão), conforme images.generated.json.
 * Falha no build se o nome não existir, para não publicar imagem quebrada.
 */
export function caseImage(slug: string, name: string): CaseImage {
  const img = byCase[slug]?.find((i) => i.name === name);
  if (!img)
    throw new Error(`Imagem "${name}" não encontrada no case "${slug}"`);
  return img;
}
