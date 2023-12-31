import Image from 'next/image'
import Spans from './Tags'

export default function Project({
  src,
  name,
  tags,
  link,
  index,
}: {
  src: string
  name: string
  tags: string[]
  link: string
  index: number
}) {
  return (
    <a
      className="group flex w-full flex-col items-center gap-y-3 overflow-hidden rounded-md border border-solid border-[var(--background-body)] pb-3"
      href={link}
      target="_blank"
      data-aos="zoom-in-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-offset="-100"
      data-aos-delay={150 * (index + 1)}
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
      <Spans tags={tags} />
    </a>
  )
}
