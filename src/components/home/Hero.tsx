import Image from "next/image";
import { intro } from "@/data/profile";

export default function Hero() {
  return (
    <section className="bg-listrado">
      <div className="mx-auto max-w-[1920px] px-5 pt-10 pb-16 lg:px-0 lg:min-h-[calc(1071*var(--u))] lg:pt-[calc(83*var(--u))] lg:pb-[calc(60*var(--u))]">
        <h1 className="mx-auto w-[min(60vw,260px)] lg:w-[calc(403*var(--u))]">
          <Image
            src="/images/home/logo-topo.svg"
            alt="Beatriz Alves"
            width={403}
            height={145}
            priority
            className="h-auto w-full"
          />
        </h1>

        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-[calc(84*var(--u))] lg:flex-row lg:items-start lg:gap-0 lg:pl-[calc(201*var(--u))]">
          <Image
            src="/images/home/foto-apresentacao.svg"
            alt="Ilustração da Beatriz sorrindo, de braços cruzados, dentro de uma polaroid"
            width={582}
            height={658}
            priority
            className="h-auto w-[min(80vw,420px)] lg:w-[calc(582*var(--u))] lg:shrink-0"
          />

          <Image
            src="/images/home/seta.svg"
            alt=""
            width={102}
            height={35}
            className="mt-[calc(115*var(--u))] hidden h-auto w-[calc(102*var(--u))] lg:block lg:shrink-0"
          />

          <div className="w-full max-w-192.75 lg:mt-[calc(69*var(--u))] lg:ml-[calc(74*var(--u))] lg:w-[calc(771*var(--u))] lg:max-w-none">
            <h2 className="font-salted text-[max(30px,calc(40*var(--u)))] leading-tight uppercase">
              {intro.title}
            </h2>
            <div className="mt-[calc(30*var(--u))] space-y-5 text-[max(16px,calc(24*var(--u)))] leading-[1.3] font-light lg:space-y-[calc(30*var(--u))]">
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
