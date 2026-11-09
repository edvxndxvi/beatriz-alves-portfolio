import { cases } from "@/data/cases";
import FolderCard from "./FolderCard";

export default function Projects() {
  return (
    <section
      aria-labelledby="projetos-titulo"
      className="bg-xadrez px-5 py-16 lg:px-0 lg:py-[calc(196*var(--u))]"
    >
      <h2 id="projetos-titulo" className="sr-only">
        Projetos
      </h2>
      <ul className="mx-auto flex max-w-360.75 flex-wrap justify-center gap-x-[calc(28*var(--u))] gap-y-10 lg:max-w-[calc(1307*var(--u))] lg:gap-y-[calc(66*var(--u))]">
        {cases.map((item, index) => (
          <li
            key={item.slug}
            className="w-full max-w-104.25 lg:w-[calc(417*var(--u))] lg:max-w-none"
          >
            <FolderCard item={item} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
