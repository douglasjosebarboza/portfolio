import Image from 'next/image'
import LinkedinAnchor from '@/components/LinkedinAnchor'
import InstagramAnchor from '@/components/InstagramAnchor'

export default function UserCard() {
  return (
    <section className="flex flex-col items-center gap-y-3 py-0 pb-10 pt-0">
      <picture className="shadow-image mt-[-104px] h-52 w-52 rounded-xl">
        <Image
          className="h-full w-full rounded-xl object-cover"
          src="/profile.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </picture>
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-3xl font-bold">Douglas José Barboza</h1>
        <p className="text-lg font-light">Desenvolvedor Frontend</p>
      </div>
      <div className="mt-6 flex gap-x-2">
        <LinkedinAnchor />
        <InstagramAnchor />
      </div>
    </section>
  )
}
