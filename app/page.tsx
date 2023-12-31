import UserCard from '@/components/UserCard'
export default function Home() {
  return (
    <main className="mx-auto my-40 grid w-full max-w-7xl gap-12 px-6">
      <UserCard />
      <section>about</section>
      <section className="col-span-2">projects</section>
    </main>
  )
}
