import Image from "next/image";

export default function FinalArt() {
  return (
    <section className="bg-xadrez px-5 py-12 lg:px-0 lg:py-[calc(108*var(--u))]">
      <Image
        src="/images/home/ilustra-final.svg"
        alt="Ilustração de uma garota de fones de ouvido correndo, cercada por mala, câmera, globo, lupa, sorvete, pipoca, livros e outros objetos de viagem e estudo"
        width={1414}
        height={941}
        className="mx-auto h-auto w-full max-w-[1414px] lg:w-[calc(1414*var(--u))]"
      />
    </section>
  );
}
