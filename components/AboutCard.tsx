import Subtitle from '@/components/Subtitle'
import TechCard from '@/components/TechCard'

export default function AboutCard() {
  const calcularIdade = (dataNascimento: string) => {
    const dataNascimentoObj = new Date(dataNascimento)
    const hoje = new Date()
    let idade = hoje.getFullYear() - dataNascimentoObj.getFullYear()
    const mesAtual = hoje.getMonth()
    const mesNascimento = dataNascimentoObj.getMonth()
    if (
      mesAtual < mesNascimento ||
      (mesAtual === mesNascimento &&
        hoje.getDate() < dataNascimentoObj.getDate())
    ) {
      idade--
    }
    return idade
  }
  const idadeAtual = calcularIdade('2000-12-22')
  return (
    <section className="p-8 text-base font-light">
      <Subtitle name={'Sobre'} />
      <p className="mt-3 text-justify">
        {`Olá, meu nome é Douglas, tenho ${idadeAtual} e estou cursando bacharelado em Ciência da Computação na Universidade Federal de São João del Rei. Sou entusiasta do universo da programação, buscando constantemente aprimorar meus conhecimentos, especialmente em tecnologias de frontend. Possuo conhecimento das seguintes tecnologias:`}
      </p>
      <div className="mt-12 flex justify-around">
        <TechCard link="https://nextjs.org/" icon="nextjs.svg" />
        <TechCard link="https://tailwindcss.com/" icon="tailwind.svg" />
        <TechCard
          link="https://www.typescriptlang.org/"
          icon="typescript.svg"
        />
      </div>
    </section>
  )
}
