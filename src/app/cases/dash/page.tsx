import Image from "next/image";
import AppScreens from "@/components/case/dash/AppScreens";
import IdentityCollage from "@/components/case/dash/IdentityCollage";
import { caseImage } from "@/data/caseImages";
import { caseMetadata } from "@/data/caseMetadata";
import { cases } from "@/data/cases";
import { dashFontVariables } from "@/fonts/dash";

const c = cases.find((x) => x.slug === "dash")!;

export const metadata = caseMetadata(
  c,
  "Case Dash: identidade visual e interface de um aplicativo de entrega de comida rápido e prático.",
);

// Texto do Figma (frame "dash", 189:173).
const description =
  "A Dash é um aplicativo de entrega de alimentos rápido e prático, que conecta você a uma variedade de restaurantes e opções de comida. Com uma interface simples e intuitiva, o app facilita o pedido e o pagamento de forma ágil, ideal para quem tem um estilo de vida corrido. Destinado a jovens adultos, estudantes e profissionais, o Dash oferece uma experiência sem complicação, entregando sua comida favorita de forma rápida e confiável. Nosso objetivo é ser a solução de delivery que você confia, garantindo variedade e agilidade em cada pedido. Chegou a hora de pedir sua comida do jeito mais rápido e fácil.";

export default function DashPage() {
  const logo = caseImage("dash", "0-dash-logo");

  return (
    <main
      className={`${dashFontVariables} mx-auto flex max-w-[1920px] flex-col items-center gap-14 px-5 pt-12 pb-20 font-sans lg:gap-0 lg:px-0 lg:pt-[calc(98*var(--u))] lg:pb-[calc(186*var(--u))]`}
    >
      <h1 className="w-[min(70vw,300px)] lg:w-[calc(443*var(--u))]">
        <Image
          src={logo.src}
          alt="Dash"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-full"
        />
      </h1>

      <section
        aria-label="Identidade visual"
        className="w-full lg:mt-[calc(127*var(--u))]"
      >
        <IdentityCollage />
      </section>

      <section
        aria-label="Sobre o projeto"
        className="bg-dash-laranja text-dash-creme w-full max-w-[calc(1103*var(--u))] rounded-[calc(56*var(--u))] border px-[calc(62*var(--u))] py-[calc(49*var(--u))] max-lg:max-w-2xl max-lg:rounded-4xl max-lg:p-6 lg:mt-[calc(63*var(--u))]"
      >
        <p className="text-[max(16px,calc(24*var(--u)))] leading-[1.6] font-light">
          {description}
        </p>
      </section>

      <section
        aria-label="Telas do aplicativo"
        className="w-full lg:mt-[calc(104*var(--u))]"
      >
        <AppScreens />
      </section>
    </main>
  );
}
