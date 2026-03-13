import {
  Award,
  BookOpen,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import depoimento1 from '../assets/depoimentos/1.png'
import depoimento2 from '../assets/depoimentos/2.png'
import depoimento3 from '../assets/depoimentos/3.png'
import depoimento4 from '../assets/depoimentos/4.png'
import depoimentoVideo1 from '../assets/depoimentos/dep_1.MP4'
import depoimentoVideo2 from '../assets/depoimentos/dep_2.MP4'
import depoimentoVideo3 from '../assets/depoimentos/dep_3.MP4'
import depoimentoVideoPoster1 from '../assets/depoimentos/dep_1-poster.jpg'
import depoimentoVideoPoster2 from '../assets/depoimentos/dep_2-poster.jpg'
import depoimentoVideoPoster3 from '../assets/depoimentos/dep_3-poster.jpg'
import especializacaoBandagem from '../assets/especializações/BANDAGEM ELÁSTICA FUNCIONAL APLICADA À GESTAÇÃO, PÓS PARTO E PÓS OPERATÓRIO.png'
import especializacaoCoberturas from '../assets/especializações/COBERTURAS NA PREVENÇÃO E TRATAMENTO DE FERIADAS AGUDAS OU CRÔNICAS.png'
import especializacaoDrenagem from '../assets/especializações/DRENAGEM LINFÁTICA MANUAL.png'
import especializacaoHarmonizacao from '../assets/especializações/HARMONIZAÇÃO E REJUVENESCIMENTO CORPORAL E DE GLÚTEOS.png'
import especializacaoManuseios from '../assets/especializações/MANUSEIOS NA FISIOTERAPIA NEUROPEDIÁTRICA.png'
import especializacaoMarketing from '../assets/especializações/VENDAS E MARKETING DIGITAL PARA PROFISSIONAIS DA SAÚDE.png'
import momento1 from '../assets/momentos/1.jpeg'
import momento2 from '../assets/momentos/2.jpeg'
import momento3 from '../assets/momentos/3.jpeg'

export const whatsappUrl =
  'https://api.whatsapp.com/send/?phone=5555996459986&text&type=phone_number&app_absent=0'

export const instagramUrl = 'https://instagram.com/tr_atualiza'

export type Course = {
  title: string
  subtitle: string
  description: string
  image: string
}

export type Benefit = {
  text: string
  icon: LucideIcon
}

export type GalleryImage = {
  src: string
  alt: string
}

export type TestimonialPrint = {
  image: string
  alt: string
}

export type VideoTestimonial = {
  description: string
  poster: string
  src: string
  title: string
}

export const courses: Course[] = [
  {
    title: 'Coberturas na Prevenção e Tratamento de Feridas',
    subtitle: 'Agudas ou Crônicas',
    description:
      'Utilize as melhores técnicas e produtos para tratar feridas de forma eficaz, seja no contexto agudo ou crônico.',
    image: especializacaoCoberturas,
  },
  {
    title: 'Bandagem Elástica Funcional',
    subtitle: 'Gestação, Pós-parto e Pós-operatório',
    description:
      'Aprenda como utilizar bandagem elástica de forma segura e eficaz para aliviar dores, reduzir edemas e promover a recuperação.',
    image: especializacaoBandagem,
  },
  {
    title: 'Manuseios na Fisioterapia',
    subtitle: 'Neuropediátrica',
    description:
      'Aprenda a identificar e tratar componentes atípicos do desenvolvimento sensoriomotor, dominar técnicas de controle e aprendizagem.',
    image: especializacaoManuseios,
  },
  {
    title: 'Vendas e Marketing Digital',
    subtitle: 'Para Profissionais da Saúde',
    description:
      'Receba orientação estratégica personalizada para superar desafios e levar seu negócio de saúde ao próximo nível.',
    image: especializacaoMarketing,
  },
  {
    title: 'Harmonização e Rejuvenescimento',
    subtitle: 'Corporal e de Glúteos',
    description:
      'Aprenda técnicas avançadas que valorizam as formas corporais, promovem o rejuvenescimento e realçam a autoestima.',
    image: especializacaoHarmonizacao,
  },
  {
    title: 'Drenagem Linfática',
    subtitle: 'Manual',
    description:
      'Descubra o poder da drenagem linfática! Aprenda a promover saúde e bem-estar, potencializando resultados extraordinários.',
    image: especializacaoDrenagem,
  },
]

export const benefits: Benefit[] = [
  {
    text: 'Perder o medo e aplicar as melhores técnicas em seus pacientes.',
    icon: ShieldCheck,
  },
  {
    text: 'Se especializar com o que há de mais atualizado no mercado.',
    icon: BookOpen,
  },
  {
    text: 'Entregar um serviço de qualidade e total segurança.',
    icon: Award,
  },
  {
    text: 'Se destacar potencializando resultados e promovendo saúde.',
    icon: Zap,
  },
]

export const galleryImages: GalleryImage[] = [
  {
    src: momento1,
    alt: 'Alunas com certificados',
  },
  {
    src: momento2,
    alt: 'Professor em aula teórica',
  },
  {
    src: momento3,
    alt: 'Turma reunida na prática',
  },
]

export const testimonialPrints: TestimonialPrint[] = [
  {
    image: depoimento1,
    alt: 'Print de depoimento de aluna agradecendo pela qualidade do curso',
  },
  {
    image: depoimento2,
    alt: 'Print de depoimento de aluna relatando aprendizado e resultados',
  },
  {
    image: depoimento3,
    alt: 'Print de depoimento de aluna elogiando a experiência do curso',
  },
  {
    image: depoimento4,
    alt: 'Print de depoimento de aluna destacando a clareza e qualidade da formação',
  },
]

export const videoTestimonials: VideoTestimonial[] = [
  {
    title: 'Experiencia real de aluna',
    description: 'Resultados percebidos na pratica e na confianca profissional.',
    poster: depoimentoVideoPoster1,
    src: depoimentoVideo1,
  },
  {
    title: 'Transformacao no atendimento',
    description: 'Um relato direto sobre aprendizado, aplicacao e evolucao clinica.',
    poster: depoimentoVideoPoster2,
    src: depoimentoVideo2,
  },
  {
    title: 'Capacitacao com impacto real',
    description: 'Depoimento de quem viveu a formacao e levou isso para a rotina profissional.',
    poster: depoimentoVideoPoster3,
    src: depoimentoVideo3,
  },
]
