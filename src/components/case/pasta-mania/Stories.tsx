import Image from "next/image";
import { caseImage } from "@/data/caseImages";

const stories = [
  {
    name: "09a-story-lista",
    alt: "Story do Instagram com a receita “Molho Pesto em 3 passos!”",
  },
  {
    name: "09b-story-chef",
    alt: "Story do Instagram com um chef preparando massa fresca",
  },
  {
    name: "09c-story-enquete",
    alt: "Story do Instagram com uma enquete: “Se você pudesse criar um prato no nosso cardápio, como seria?”",
  },
];

/** Três stories lado a lado (Figma: 339 de largura cada, 31,5 de espaço). */
export default function Stories() {
  return (
    <ul className="mx-auto grid w-full max-w-2xl grid-cols-3 gap-2 sm:gap-4 lg:flex lg:w-auto lg:max-w-none lg:gap-[calc(31.5*var(--u))]">
      {stories.map((s) => {
        const img = caseImage("pasta-mania", s.name);
        return (
          <li key={s.name} className="lg:w-[calc(339*var(--u))]">
            <Image
              src={img.src}
              alt={s.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 18vw, 30vw"
              className="h-auto w-full"
            />
          </li>
        );
      })}
    </ul>
  );
}
