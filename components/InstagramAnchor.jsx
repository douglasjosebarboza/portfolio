import { InstagramLogo } from '@phosphor-icons/react/dist/ssr'

export default function InstagramAnchor() {
  return (
    <a
      className="flex h-12 w-12 items-center justify-center
  bg-[var(--background-body)] text-[var(--secondary)] transition-all hover:translate-y-[-12px] hover:bg-[var(--link)] hover:text-white"
      href="#"
      target="_blank"
    >
      <InstagramLogo size={22} />
    </a>
  )
}
