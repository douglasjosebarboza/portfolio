'use client'
import UserCard from '@/components/UserCard'
import AboutCard from '@/components/AboutCard'
import ProjectsCard from '@/components/ProjectsCard'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
    })
  }, [])
  return (
    <main className="mx-auto my-40 grid max-w-7xl grid-cols-3 gap-12 px-6">
      <UserCard />
      <AboutCard />
      <ProjectsCard />
    </main>
  )
}
