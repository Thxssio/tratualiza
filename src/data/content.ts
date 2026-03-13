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
  src: string
  title: string
}

export const courses: Course[] = [
  {
    title: 'Coberturas na Prevenção e Tratamento de Feridas',
    subtitle: 'Agudas ou Crônicas',
    description:
      'Utilize as melhores técnicas e produtos para tratar feridas de forma eficaz, seja no contexto agudo ou crônico.',
    image:
      'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Bandagem Elástica Funcional',
    subtitle: 'Gestação, Pós-parto e Pós-operatório',
    description:
      'Aprenda como utilizar bandagem elástica de forma segura e eficaz para aliviar dores, reduzir edemas e promover a recuperação.',
    image:
      'https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Manuseios na Fisioterapia',
    subtitle: 'Neuropediátrica',
    description:
      'Aprenda a identificar e tratar componentes atípicos do desenvolvimento sensoriomotor, dominar técnicas de controle e aprendizagem.',
    image:
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Vendas e Marketing Digital',
    subtitle: 'Para Profissionais da Saúde',
    description:
      'Receba orientação estratégica personalizada para superar desafios e levar seu negócio de saúde ao próximo nível.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Harmonização e Rejuvenescimento',
    subtitle: 'Corporal e de Glúteos',
    description:
      'Aprenda técnicas avançadas que valorizam as formas corporais, promovem o rejuvenescimento e realçam a autoestima.',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Drenagem Linfática',
    subtitle: 'Manual',
    description:
      'Descubra o poder da drenagem linfática! Aprenda a promover saúde e bem-estar, potencializando resultados extraordinários.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
    title: 'Relato em video 01',
    description: 'Espaco reservado para o primeiro depoimento em video.',
    src: '/videos/depoimentos/1.mp4',
  },
  {
    title: 'Relato em video 02',
    description: 'Espaco reservado para o segundo depoimento em video.',
    src: '/videos/depoimentos/2.mp4',
  },
  {
    title: 'Relato em video 03',
    description: 'Espaco reservado para o terceiro depoimento em video.',
    src: '/videos/depoimentos/3.mp4',
  },
]
