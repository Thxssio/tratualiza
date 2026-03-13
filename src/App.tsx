import {
  ArrowRight,
  ChevronDown,
  Instagram,
  MessageCircle,
  Play,
  Sparkles,
  Star,
} from 'lucide-react'

import logoImage from './assets/logo.png'
import trImage from './assets/tr.png'
import videoHome from './assets/video_home.mp4'
import { Reveal } from './components/Reveal'
import { VideoTestimonialCard } from './components/VideoTestimonialCard'
import {
  benefits,
  courses,
  galleryImages,
  instagramUrl,
  testimonialPrints,
  videoTestimonials,
  whatsappUrl,
} from './data/content'

function App() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#030712] text-slate-200 selection:bg-amber-500 selection:text-black font-inter"
    >
      <nav className="absolute top-0 z-50 flex w-full items-center justify-between px-6 py-6 lg:px-12">
        <Reveal
          direction="left"
          delay={200}
          className="flex items-center gap-3"
        >
          <a href="#top" className="group flex items-center">
              <img
                src={logoImage}
                alt="Logo TR Atualiza"
                className="h-20 w-auto transition-transform group-hover:scale-[1.02] sm:h-24"
              />
          </a>
        </Reveal>

        <Reveal direction="right" delay={200}>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2"
          >
            <div className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-colors group-hover:bg-amber-500/20">
              <Instagram className="h-5 w-5 text-amber-500 transition-colors group-hover:text-amber-400" />
            </div>
            <span className="hidden text-sm font-medium text-slate-300 transition-colors group-hover:text-white sm:block">
              @tr_atualiza
            </span>
          </a>
        </Reveal>
      </nav>

      <header className="relative flex min-h-[95vh] w-full flex-col items-center justify-center pt-20">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="animate-slow-zoom absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
          >
            <source
              src={videoHome}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/80 to-[#030712]"></div>
          <div className="absolute left-1/2 top-[10%] h-[60vh] w-[90vw] -translate-x-1/2 animate-pulse bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18),transparent_60%)] blur-[100px]"></div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center">
          <Reveal delay={100}>
            <div className="mb-8 inline-flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition-colors hover:bg-white/10">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
              <span className="text-xs font-medium uppercase tracking-widest text-amber-200/80">
                Cursos Presenciais
              </span>
            </div>
          </Reveal>

          <Reveal delay={300} direction="up">
            <h1 className="mb-6 font-montserrat text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Já pensou em se tornar uma <br className="hidden md:block" />
              <span className="inline-block bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent transition-transform hover:scale-[1.02]">
                referência na saúde?
              </span>
            </h1>
          </Reveal>

          <Reveal delay={500} direction="up">
            <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-slate-400 md:text-xl">
              Descubra como nossas formações exclusivas e práticas podem elevar
              o seu conhecimento e{' '}
              <strong className="font-medium text-slate-200">
                transformar a sua carreira clínica
              </strong>
              .
            </p>
          </Reveal>

          <Reveal delay={700} direction="scale">
            <a
              href="#cursos"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 font-semibold text-slate-950 shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2 font-montserrat text-sm uppercase tracking-wide">
                Conhecer Formações
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </span>
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
              <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:block"></div>
            </a>
          </Reveal>
        </div>
      </header>

      <section id="cursos" className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <h2 className="mb-4 font-montserrat text-3xl font-bold text-white md:text-4xl">
              Especialize-se com os Melhores
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Escolha a formação ideal para o seu momento profissional e domine
              as técnicas mais procuradas do mercado.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Reveal key={course.title} delay={index * 150} direction="up">
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:bg-slate-800/50">
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-slate-950/20 transition-colors group-hover:bg-transparent"></div>
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-amber-500">
                      {course.subtitle}
                    </span>
                    <h3 className="mb-4 font-montserrat text-lg font-semibold leading-snug text-white md:text-xl">
                      {course.title}
                    </h3>
                    <p className="mb-8 flex-1 text-sm font-light leading-relaxed text-slate-400">
                      {course.description}
                    </p>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-between rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:text-amber-400"
                    >
                      <span>Saber mais detalhes</span>
                      <ArrowRight className="h-4 w-4 opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute right-0 top-1/2 h-[40vw] w-[40vw] -translate-y-1/2 rounded-full bg-amber-500/5 blur-[100px]"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            <Reveal
              direction="left"
              className="relative w-full animate-float lg:w-1/2"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_42%)] blur-3xl"></div>
              <div className="relative z-10 rounded-[2rem] bg-gradient-to-br from-amber-500/20 via-slate-800/40 to-slate-950/70 p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-1px)] border border-white/8 bg-[linear-gradient(180deg,rgba(7,18,36,0.98)_0%,rgba(2,6,23,1)_100%)]">
                  <div className="absolute inset-x-[16%] top-10 h-28 rounded-full bg-amber-400/20 blur-3xl"></div>
                  <div className="absolute -left-10 top-24 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl"></div>
                  <div className="absolute -right-6 bottom-28 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl"></div>
                  <div className="absolute inset-x-[18%] bottom-10 h-10 rounded-full bg-black/65 blur-2xl"></div>

                  <div className="absolute inset-x-4 top-4 z-20 flex items-start justify-between gap-2 sm:inset-x-6 sm:top-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-slate-950/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-amber-100 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
                      <Sparkles className="h-3.5 w-3.5 animate-pulse text-amber-400 sm:h-4 sm:w-4" />
                      <span className="sm:hidden">Especialistas</span>
                      <span className="hidden sm:inline">Equipe Especialista</span>
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[9px] font-medium tracking-[0.18em] text-slate-300 backdrop-blur-md sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
                      TR ATUALIZA
                    </div>
                  </div>

                  <img
                    src={trImage}
                    alt="Equipe TR Atualiza"
                    loading="lazy"
                    className="absolute bottom-0 left-1/2 z-10 h-[88%] w-[92%] -translate-x-1/2 object-contain object-bottom drop-shadow-[0_32px_40px_rgba(0,0,0,0.55)] transition-transform duration-1000 hover:scale-[1.03] sm:h-[90%] sm:w-[88%]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_26%,transparent_74%,rgba(2,6,23,0.22)_100%)]"></div>
                </div>
              </div>
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-amber-500/35"></div>
              <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-br-[2rem] border-b-2 border-r-2 border-amber-500/35"></div>
            </Reveal>

            <Reveal
              direction="right"
              delay={200}
              className="flex w-full flex-col items-start lg:w-1/2"
            >
              <h2 className="mb-6 font-montserrat text-3xl font-bold text-white md:text-4xl">
                Quem Somos
              </h2>
              <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>

              <p className="mb-6 text-lg font-light leading-relaxed text-slate-300">
                <strong className="mb-4 block text-xl font-medium text-white">
                  Prazer em conhecê-los, somos a TR ATUALIZA!
                </strong>
                Com formações em fisioterapia e uma paixão inabalável pela
                educação, compartilhamos um objetivo em comum: oferecer
                experiências de capacitação na área da saúde que unem, de forma
                perfeita, a teoria mais atual à prática clínica.
              </p>
              <p className="mb-10 font-light leading-relaxed text-slate-400">
                Nossos cursos são conduzidos por profissionais especialistas,
                proporcionando resultados extraordinários para os nossos alunos:{' '}
                <span className="text-amber-400">
                  mais confiança, qualificação de excelência e segurança na
                  prática clínica.
                </span>
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-slate-700 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:translate-x-2 hover:border-amber-500 hover:bg-amber-500/5"
              >
                Conhecer a Equipe
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        className="border-y border-slate-800/50 bg-slate-900/20 py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <h2 className="font-montserrat text-3xl font-bold text-white">
              Nossos cursos são para você que deseja:
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <Reveal
                  key={benefit.text}
                  delay={index * 150}
                  direction="scale"
                >
                  <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-800 bg-slate-950/50 p-8 text-center transition-all hover:border-amber-500/30 hover:bg-slate-900">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 opacity-80 transition-all duration-300 group-hover:bg-amber-500/20 group-hover:opacity-100">
                      <Icon
                        className="h-10 w-10 text-amber-500 group-hover:animate-bounce"
                        strokeWidth={1.5}
                      />
                    </div>

                    <p className="font-light leading-relaxed text-slate-300">
                      {benefit.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="relative overflow-hidden bg-[#030712] py-24"
      >
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-24 border-l-[6px] border-y-[6px] border-amber-500/10 lg:block"></div>
        <div className="pointer-events-none absolute bottom-8 left-8 top-8 hidden w-24 border-l-[6px] border-y-[6px] border-amber-500/30 lg:block"></div>
        <div className="pointer-events-none absolute bottom-16 left-16 top-16 hidden w-24 border-l-[6px] border-y-[6px] border-amber-500/60 lg:block"></div>

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-24 border-r-[6px] border-y-[6px] border-amber-500/10 lg:block"></div>
        <div className="pointer-events-none absolute bottom-8 right-8 top-8 hidden w-24 border-r-[6px] border-y-[6px] border-amber-500/30 lg:block"></div>
        <div className="pointer-events-none absolute bottom-16 right-16 top-16 hidden w-24 border-r-[6px] border-y-[6px] border-amber-500/60 lg:block"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-24">
          <Reveal direction="up" className="mb-20">
            <div className="inline-block rounded-3xl bg-amber-500 px-8 py-5 text-lg font-black uppercase tracking-widest text-slate-950 shadow-[0_0_40px_rgba(245,158,11,0.2)] md:px-12 md:py-6 md:text-3xl">
              Momentos que transformam carreiras
            </div>
          </Reveal>

          <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Reveal key={image.src} delay={100 + index * 200} direction="up">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105 md:h-64"
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} direction="up">
            <h3 className="mx-auto mb-16 max-w-4xl font-montserrat text-2xl font-bold uppercase leading-snug tracking-wide text-white drop-shadow-lg md:text-3xl lg:text-4xl">
              Aqui você encontra a experiência que precisa para se destacar na
              sua carreira
            </h3>
          </Reveal>

          <Reveal delay={400} direction="up" className="flex justify-center">
            <a
              href="#depoimentos"
              className="flex cursor-pointer items-center justify-center rounded-full bg-amber-500 p-4 shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-transform hover:scale-110"
              aria-label="Ir para a seção de depoimentos"
            >
              <ChevronDown
                className="h-8 w-8 animate-bounce text-slate-950"
                strokeWidth={4}
              />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="depoimentos" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 font-montserrat text-3xl font-bold text-white md:text-4xl">
                O que dizem nossos alunos
              </h2>
              <p className="max-w-xl text-slate-400">
                Histórias reais de profissionais que transformaram suas
                carreiras após passarem pelas nossas formações.
              </p>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((item) => (
                <Star
                  key={item}
                  className="h-6 w-6 animate-pulse fill-amber-400 text-amber-400"
                  style={{ animationDelay: `${item * 200}ms` }}
                />
              ))}
            </div>
          </Reveal>

          <div className="relative p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border-[6px] border-amber-500/20"></div>

            <Reveal direction="up" className="mb-12 text-center">
              <h3 className="mb-2 font-montserrat text-2xl font-bold text-white">
                Veja com os seus próprios olhos
              </h3>
              <p className="font-light text-slate-400">
                Prints reais de quem passou pelas nossas formações
              </p>
            </Reveal>

            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {testimonialPrints.map((print, index) => (
                <Reveal key={print.image} delay={index * 150} direction="up">
                  <div className="group mx-auto w-full max-w-[320px] rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-950 p-[1px] shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1">
                    <div className="overflow-hidden rounded-[calc(2rem-1px)] border border-white/10 bg-slate-950">
                      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                        <span className="ml-2 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                          Depoimento Real
                        </span>
                      </div>
                      <div className="bg-slate-900">
                        <img
                          src={print.image}
                          alt={print.alt}
                          loading="lazy"
                          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Reveal direction="up" className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <Play className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
                  Depoimentos em video
                </span>
              </div>
              <h3 className="mb-2 font-montserrat text-2xl font-bold text-white">
                Veja relatos em video de quem viveu a experiencia
              </h3>
              <p className="mx-auto max-w-2xl font-light text-slate-400">
                Profissionais compartilham, com a propria voz, como nossas
                formacoes impactaram a seguranca, a pratica e os resultados no
                atendimento.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {videoTestimonials.map((video, index) => (
                <Reveal key={video.src} delay={index * 150} direction="up">
                  <VideoTestimonialCard
                    description={video.description}
                    poster={video.poster}
                    src={video.src}
                    title={video.title}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contato"
        className="relative overflow-hidden border-t border-slate-900 bg-slate-950 pb-12 pt-24"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
          <div className="absolute -right-[10%] -top-[20%] h-[50vw] w-[50vw] rounded-full bg-amber-500/5 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-orange-600/5 blur-[120px]"></div>
        </div>

        <Reveal className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 font-montserrat text-3xl font-bold text-white md:text-5xl">
            Pronto para dar o próximo passo?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-light text-slate-400">
            Junte-se a centenas de profissionais que já transformaram os seus
            atendimentos e tornaram-se referências nas suas áreas.
          </p>

          <div className="mb-20 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-10 py-4 text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all hover:scale-105 hover:from-amber-300 hover:to-amber-400 sm:w-auto"
            >
              <span>Garantir Minha Vaga</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-lg font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 text-green-400" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <a href="#top" className="group flex items-center">
              <img
                src={logoImage}
                alt="Logo TR Atualiza"
                className="h-14 w-auto opacity-90 transition-all group-hover:scale-[1.02] group-hover:opacity-100 sm:h-16"
              />
            </a>

            <p className="text-sm font-light text-slate-500">
              &copy; {new Date().getFullYear()} TR Atualiza. Todos os direitos
              reservados.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram da TR Atualiza"
              className="text-slate-500 transition-colors hover:text-amber-500"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </footer>
    </div>
  )
}

export default App
