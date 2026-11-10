import type { Metadata } from "next";
import type { Case } from "./cases";

/** Imagem de pré-visualização (1200×630) do case, gerada por scripts/build-og.mjs. */
export const ogImageSrc = (slug: string) => `/images/og/${slug}.jpg`;

/**
 * Metadata de uma página de case: título, descrição e a pré-visualização para compartilhamento
 * (Open Graph e Twitter Card). Como o Next substitui `openGraph` inteiro quando a página o define,
 * título e descrição são repetidos aqui. URLs relativas são resolvidas pelo `metadataBase` do layout.
 */
export function caseMetadata(c: Case, description: string): Metadata {
  const title = `${c.title} — ${c.client} | Beatriz Alves`;
  const image = {
    url: ogImageSrc(c.slug),
    width: 1200,
    height: 630,
    alt: `${c.title} — ${c.client}`,
  };
  return {
    title,
    description,
    alternates: { canonical: `/cases/${c.slug}/` },
    openGraph: {
      type: "article",
      siteName: "Beatriz Alves",
      locale: "pt_BR",
      url: `/cases/${c.slug}/`,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
