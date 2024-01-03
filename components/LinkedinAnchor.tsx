import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function LinkedinArco() {
  return (
    <a
      className="flex h-12 w-12 items-center justify-center
      bg-[var(--background-body)] text-[var(--secondary)] transition-all hover:translate-y-[-12px] hover:bg-[var(--link)] hover:text-white"
      href="https://www.linkedin.com/in/douglasjosebarboza/"
      target="_blank"
      aria-label="Link para o Linkedin do Douglas José Barboza"
    >
      <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
    </a>
  )
}
