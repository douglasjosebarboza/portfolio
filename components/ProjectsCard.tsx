import Subtitle from '@/components/Subtitle'
import Project from './Project'

export default function ProjectsCard() {
  return (
    <section className="col-span-2 mt-4 gap-8 px-10 py-8">
      <Subtitle name="Projetos" />
      <div className="mt-4 grid grid-cols-3 gap-8">
        <Project
          src="/animelix.png"
          name="AnimeLix"
          spans={['HTML', 'CSS', 'Javascript', 'API Externa']}
        />
      </div>
    </section>
  )
}
