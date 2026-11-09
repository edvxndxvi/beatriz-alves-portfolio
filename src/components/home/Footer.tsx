import Image from "next/image";
import { contacts } from "@/data/profile";

const rows = [
  { ...contacts.phone, icon: "telefone", w: 20, h: 20 },
  { ...contacts.email, icon: "email", w: 22, h: 15 },
  { ...contacts.linkedin, icon: "linkedin", w: 19, h: 20 },
];

export default function Footer() {
  return (
    <footer className="bg-vinho ">
      <div className="text-rosa relative overflow-hidden mx-auto max-w-[1920px] flex justify-center">
        {/* Estrelas decorativas. TODO(posição): aproximadas a partir de um screenshot. */}
        <Image
          src="/images/home/conjunto-estrelas-1.svg"
          alt=""
          width={239}
          height={443}
          className="absolute top-[calc(83*var(--u))] left-[calc(114*var(--u))] hidden h-auto w-[calc(239*var(--u))] lg:block"
        />
        <Image
          src="/images/home/conjunto-estrelas-2.svg"
          alt=""
          width={245}
          height={487}
          className="absolute top-[calc(60*var(--u))] left-[calc(1600*var(--u))] hidden h-auto w-[calc(245*var(--u))] lg:block"
        />

        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-10 px-5 py-14 lg:block lg:h-[calc(620*var(--u))] lg:p-0">
          <Image
            src="/images/home/logo-footer.svg"
            alt="beatriz"
            width={142}
            height={436}
            className="h-55 w-auto lg:absolute lg:top-[calc(81*var(--u))] lg:left-[calc(456*var(--u))] lg:h-auto lg:w-[calc(142*var(--u))]"
          />

          <ul className="font-salted space-y-6 text-[max(20px,calc(40*var(--u)))] tracking-wide uppercase lg:absolute lg:top-[calc(189*var(--u))] lg:left-[calc(753*var(--u))] lg:space-y-[calc(37*var(--u))]">
            {rows.map((row) => (
              <li key={row.icon}>
                <a
                  href={row.href}
                  className="focus-visible:outline-limao flex items-center gap-4 break-all focus-visible:outline-2 focus-visible:outline-offset-4 lg:gap-[calc(20*var(--u))]"
                >
                  {/* Estrela: 64px de altura, largura pela proporção do SVG (54×52); ícone centralizado. */}
                  <span className="relative flex aspect-54/52 h-16 shrink-0 items-center justify-center">
                    <Image
                      src="/images/home/estrela-limao.svg"
                      alt=""
                      width={54}
                      height={52}
                      className="absolute inset-0 size-full"
                    />
                    <Image
                      src={`/images/home/${row.icon}.svg`}
                      alt=""
                      width={row.w}
                      height={row.h}
                      className="relative h-auto w-[35%]"
                    />
                  </span>
                  <span>{row.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
