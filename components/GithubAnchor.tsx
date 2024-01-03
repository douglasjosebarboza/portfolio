import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function GithubAnchor() {
  return (
    <a
      className="flex h-12 w-12 items-center justify-center
      bg-[var(--background-body)] text-[var(--secondary)] transition-all hover:translate-y-[-12px] hover:bg-[var(--link)] hover:text-white"
      href="#"
      target="_blank"
    >
      <FontAwesomeIcon className="h-6 w-6" icon={faSquareGithub} />
    </a>
  )
}
