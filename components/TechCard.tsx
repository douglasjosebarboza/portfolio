import Image from 'next/image'
export default function TechCard({
  link,
  icon,
}: {
  link: string
  icon: string
}) {
  return (
    <a
      className="flex h-12 w-12 items-center justify-center
      transition-all hover:translate-y-[-12px] hover:text-white"
      href={link}
      target="_blank"
    >
      <Image
        className="h-full w-full rounded-xl object-cover"
        src={icon}
        width={24}
        height={24}
        alt="Picture of the author"
      />
    </a>
  )
}
