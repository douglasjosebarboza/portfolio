import UserCard from '@/components/UserCard'
import AboutCard from '@/components/AboutCard'
import ProjectsCard from '@/components/ProjectsCard'

export default function Home() {
  return (
    <main className="mx-auto my-40 grid w-full max-w-7xl gap-12 px-6">
      <UserCard />
      <AboutCard />
      <ProjectsCard />
    </main>
  )
}
