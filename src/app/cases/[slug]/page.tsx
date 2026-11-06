import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases } from "@/data/cases";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} — ${c.client} | Beatriz Alves`,
    description: `Case ${c.title} (${c.client}) no portfólio de Beatriz Alves.`,
  };
}

export default async function CasePage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16">
      <p className="text-sm uppercase">{c.client}</p>
      <h1 className="font-display text-5xl">{c.title}</h1>
    </main>
  );
}
