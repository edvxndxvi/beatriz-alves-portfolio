import Link from "next/link";
import { cases } from "@/data/cases";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="font-display text-5xl">beatriz alves</h1>
      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/cases/${c.slug}/`}
              className="block rounded-lg bg-vinho p-6 text-creme"
            >
              <span className="text-xs uppercase">{c.client}</span>
              <span className="block text-xl">{c.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
