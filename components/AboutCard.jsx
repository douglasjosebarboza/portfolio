import Subtitle from '@/components/Subtitle'
import ParagraphAbout from '@/components/ParagraphAbout'

export default function AboutCard() {
  const hoje = new Date()
  const idade = hoje.getFullYear() - 2000
  return (
    <section className="p-8 text-base font-light">
      <Subtitle name={'Sobre'} />
      <ParagraphAbout
        content={`Olá, me chamo Douglas e atualmente tenho ${idade}, faço bacharel em Ciência da Computação na Universidade Federal de São João del Rei`}
      />
      <ParagraphAbout content={'asasdas'} />
      <ParagraphAbout content={'fjfgnhg'} />
    </section>
  )
}
