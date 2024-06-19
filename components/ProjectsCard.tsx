import Subtitle from '@/components/Subtitle'
import Project from './Project'
import Projects from '@/utils/projects.json'

export default function ProjectsCard() {
  const data = Projects
  return (
    <section
      className="col-span-3 mt-4 gap-8 px-10 py-8"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      <Subtitle name="Projetos" />
      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {data.map((project, index) => (
          <Project
            key={project.name}
            src={project.image}
            name={project.name}
            tags={project.tags}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
