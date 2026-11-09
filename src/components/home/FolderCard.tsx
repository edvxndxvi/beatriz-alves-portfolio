import Image from "next/image";
import Link from "next/link";
import { thumbSrc, type Case } from "@/data/cases";

// Rotação leve e alternada do thumbnail que "sai" da pasta (ver Figma).
const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];

export default function FolderCard({
  item,
  index,
}: {
  item: Case;
  index: number;
}) {
  return (
    <Link
      href={`/cases/${item.slug}/`}
      className="group focus-visible:outline-vinho relative block aspect-417/366 w-full focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {/* Thumbnail que espia por trás da pasta */}
      <div
        className={`absolute top-0 left-[6%] aspect-video w-[88%] overflow-hidden rounded-lg bg-white transition-transform duration-300 group-hover:-translate-y-3 group-focus-visible:-translate-y-3 ${tilts[index % tilts.length]}`}
      >
        <Image
          src={thumbSrc(item.slug)}
          alt=""
          fill
          sizes="(min-width: 1024px) 370px, 90vw"
          className="object-cover"
        />
      </div>

      {/* Corpo da pasta (aba + três pontos) */}
      <svg
        viewBox="0 0 417 271"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-auto w-full"
      >
        <path
          d="M0 24Q0 0 24 0H132Q146 0 154 8L172 28Q180 36 194 36H393Q417 36 417 60V247Q417 271 393 271H24Q0 271 0 247Z"
          className="fill-vinho"
        />
        <circle cx="28" cy="18" r="5" className="fill-creme" />
        <circle cx="50" cy="18" r="5" className="fill-creme" />
        <circle cx="72" cy="18" r="5" className="fill-limao" />
      </svg>

      <div className="text-creme font-salted absolute bottom-[8%] left-[7%] uppercase">
        <span className="text-limao block text-[max(13px,calc(15*var(--u)))] tracking-wide">
          {item.client}
        </span>
        <span className="block text-[max(26px,calc(34*var(--u)))] leading-tight">
          {item.title}
        </span>
      </div>
    </Link>
  );
}
