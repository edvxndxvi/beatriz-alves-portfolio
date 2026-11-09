import Image from "next/image";
import Link from "next/link";

/**
 * Cabeçalho comum a todos os cases: fundo listrado, seta de voltar e logo centralizada
 * (Figma: 1920×220, seta em x=144, logo 254×91 a 64px do topo).
 */
export default function CaseHeader() {
  return (
    <header className="bg-listrado">
      <div className="relative mx-auto flex max-w-[1920px] items-center justify-center px-5 py-6 lg:h-[calc(220*var(--u))] lg:p-0">
        <Link
          href="/"
          aria-label="Voltar para a home"
          className="focus-visible:outline-vinho absolute left-5 flex items-center focus-visible:outline-2 focus-visible:outline-offset-8 lg:top-[calc(86*var(--u))] lg:left-[calc(144*var(--u))]"
        >
          <Image
            src="/images/ui/seta-esquerda.svg"
            alt=""
            width={28}
            height={48}
            className="h-7 w-auto lg:h-[calc(48*var(--u))]"
          />
        </Link>

        <Image
          src="/images/home/logo-topo.svg"
          alt="Beatriz Alves"
          width={403}
          height={145}
          priority
          className="h-auto w-[min(50vw,200px)] lg:w-[calc(254*var(--u))]"
        />
      </div>
    </header>
  );
}
