import Image from 'next/image'
import Spans from './Spans'

export default function Project({
  src,
  name,
  spans,
}: {
  src: string
  name: string
  spans: string[]
}) {
  return (
    <a
      className="group flex w-full flex-col items-center gap-y-3 overflow-hidden rounded-md border border-solid border-[var(--background-body)] pb-3"
      href="#"
      target="_blank"
    >
      <picture className="h-56 w-full overflow-hidden">
        <Image
          className="h-full w-full object-cover transition-all group-hover:scale-110"
          src={src}
          width={7680}
          height={4320}
          alt="Imagem do Projeto"
        />
      </picture>
      <strong className="px-5 text-center text-base font-semibold text-[var(--secondary)] transition-all group-hover:text-[var(--link)]">
        {name}
      </strong>
      <Spans spans={spans} />
    </a>
  )
}
