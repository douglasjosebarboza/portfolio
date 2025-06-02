import Image from 'next/image'
import LinkedinAnchor from '@/components/LinkedinAnchor'
import InstagramAnchor from '@/components/InstagramAnchor'
import GithubAnchor from './GithubAnchor'

export default function UserCard() {
  return (
    <section
      className="col-span-3 flex flex-col items-center gap-y-3 py-0 pb-10 pt-0 lg:col-span-1"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      <picture className="mt-[-104px] h-52 w-52 rounded-xl shadow-image">
        <Image
          className="h-full w-full rounded-xl object-cover"
          src="/profile.jpg"
          width={500}
          height={500}
          alt="Foto de perfil"
        />
      </picture>
      <div className="flex flex-col items-center gap-y-2 text-center">
        <h1 className="text-3xl font-bold">Douglas José Barboza</h1>
        <p className="text-lg font-light">Desenvolvedor Frontend</p>
      </div>
      <div className="mt-6 flex gap-x-2">
        <GithubAnchor />
        <LinkedinAnchor />
      </div>
    </section>
  )
}
