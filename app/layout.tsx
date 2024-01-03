import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio de Douglas José Barboza',
  description:
    'Olá, meu nome é Douglas, estou cursando bacharelado em Ciência da Computação na Universidade Federal de São João del Rei. Sou entusiasta do universo da programação, buscando constantemente aprimorar meus conhecimentos, especialmente em tecnologias de frontend.',
  openGraph: {
    type: 'website',
    url: 'https://douglasjosebarboza.vercel.app/',
    title: 'Portfólio de Douglas José Barboza',
    description:
      'Olá, meu nome é Douglas, estou cursando bacharelado em Ciência da Computação na Universidade Federal de São João del Rei. Sou entusiasta do universo da programação, buscando constantemente aprimorar meus conhecimentos, especialmente em tecnologias de frontend.',
    images: {
      url: 'https://i.imgur.com/D8H8Rd9.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://douglasjosebarboza.vercel.app/',
    title: 'Portfólio de Douglas José Barboza',
    description:
      'Olá, meu nome é Douglas, estou cursando bacharelado em Ciência da Computação na Universidade Federal de São João del Rei. Sou entusiasta do universo da programação, buscando constantemente aprimorar meus conhecimentos, especialmente em tecnologias de frontend.',
    images: {
      url: 'https://i.imgur.com/D8H8Rd9.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
