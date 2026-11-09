import Image from "next/image";
import { services } from "@/data/profile";

type Service = (typeof services)[number];

function ServiceItem({ service }: { service: Service }) {
  return (
    <li className="space-y-2 text-center">
      <h3
        className={`font-salted text-[max(17px,calc(22*var(--u)))] leading-tight uppercase ${service.number === "01" || service.number === "02" ? "text-limao" : ""}`}
      >
        {service.number}. {service.title}
      </h3>
      <p className="text-[max(14px,calc(18*var(--u)))] leading-snug font-light">
        {service.description}
      </p>
      <p className="text-[max(14px,calc(18*var(--u)))] leading-snug font-light">
        {service.items.join(" · ")}
      </p>
    </li>
  );
}

/**
 * Seção "Como posso ajudar?": caderno com post-its.
 * - ≥1280px (xl): post-its absolutos sobre o papel.svg (layout do Figma).
 * - <1280px: o papel vira CSS (.papel-caderno) e os post-its (.postit) ficam em fluxo normal,
 *   com rotação, sombra e fita adesiva para manter a cara de post-it. Tablet usa 2 colunas.
 */
export default function Help() {
  const [first, second, third, fourth] = services;

  return (
    <section
      aria-labelledby="ajuda-titulo"
      className="bg-vinho px-5 py-14 xl:px-0 xl:py-[calc(113*var(--u))]"
    >
      <div className="papel-caderno relative mx-auto grid max-w-md grid-cols-1 gap-8 p-6 pt-10 pb-10 md:max-w-3xl md:grid-cols-2 md:gap-x-6 md:gap-y-10 md:p-10 xl:block xl:w-[calc(1774*var(--u))] xl:max-w-none xl:p-0">
        <Image
          src="/images/home/papel.svg"
          alt=""
          width={1775}
          height={918}
          className="hidden h-auto w-full xl:block"
        />

        <Image
          src="/images/home/estrela-vinho.svg"
          alt=""
          width={107}
          height={102}
          className="absolute top-0 left-3 z-10 h-auto w-10-translate-y-1/2 md:left-6 md:w-14 xl:top-[21%] xl:left-[7%] xl:w-[5.8%] xl:translate-y-0"
        />

        {/* Post-it rosa: título */}
        <div className="postit bg-rosa text-vinho flex -rotate-2 items-center justify-center px-8 py-10 md:col-span-2 md:mx-auto md:w-3/5 md:-rotate-1 xl:absolute xl:top-[22.7%] xl:left-[11.6%] xl:mx-0 xl:h-[65%] xl:w-[23%] xl:-rotate-8 xl:p-0">
          <h2
            id="ajuda-titulo"
            className="font-salted text-[max(36px,calc(64*var(--u)))] leading-[1.35] uppercase"
          >
            <span className="block">Como</span>
            <span className="block">posso</span>
            <span className="block">ajudar?</span>
          </h2>
        </div>

        {/* Post-it vinho: serviços 01 e 02 */}
        <ul className="postit bg-vinho text-white flex rotate-1 flex-col justify-center gap-6 p-6 md:p-7 xl:absolute xl:top-[24.5%] xl:left-[36.5%] xl:h-[64%] xl:w-[27%] xl:rotate-[5.5deg] xl:gap-[4%] xl:p-[2%]">
          <ServiceItem service={first} />
          <ServiceItem service={second} />
        </ul>

        {/* Post-it limão: serviços 03 e 04 */}
        <ul className="postit bg-limao text-vinho flex -rotate-1 flex-col justify-center gap-6 p-6 md:p-7 xl:absolute xl:top-[22.7%] xl:left-[65%] xl:h-[64%] xl:w-[26.5%] xl:rotate-[-4.8deg] xl:gap-[4%] xl:p-[1.5%]">
          <ServiceItem service={third} />
          <ServiceItem service={fourth} />
        </ul>

        <Image
          src="/images/home/estrela-vinho.svg"
          alt=""
          width={107}
          height={102}
          className="absolute right-3 bottom-0 z-10 h-auto w-10translate-y-1/2 rotate-15 md:right-6 md:w-14 xl:bottom-[12%] xl:left-[90%] xl:w-[5.8%] xl:translate-y-0"
        />
      </div>
    </section>
  );
}
