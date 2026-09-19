"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// =====================================================
// NORTH BARBER CLUB
// =====================================================

// TODO: substituir pelo número REAL do WhatsApp da NORTH
const whatsappUrl = "https://wa.me/5500000000000";
const whatsappAgendamentoMensagem =
  "Olá! Vi o site da NORTH BARBER e gostaria de agendar um horário.";

const whatsappAgendamentoUrl =
  `https://wa.me/5500000000000?text=${encodeURIComponent(
    whatsappAgendamentoMensagem
  )}`;
const whatsappClubMensagem =
  "Olá! Vi o NORTH Club no site e gostaria de saber mais sobre o plano mensal.";

const whatsappClubUrl =
  `https://wa.me/5500000000000?text=${encodeURIComponent(
    whatsappClubMensagem
  )}`;
// TODO: substituir pelo Instagram REAL da NORTH
const instagramUrl = "https://www.instagram.com/marcos_campel07/";

// =====================================================
// SERVIÇOS
// =====================================================

const serviceGroups = [
  {
    title: "Corte & Barba",
    description: "O essencial da NORTH.",
    services: [
      { name: "Corte", price: "R$ 50" },
      { name: "Barba", price: "R$ 35" },
      { name: "Corte + Barba", price: "R$ 75" },
    ],
  },
  {
    title: "Transformação",
    description: "Para quem quer mudar.",
    services: [
      { name: "Descoloração", price: "Consulte" },
      { name: "Platinado", price: "Consulte" },
      { name: "Pigmentação", price: "Consulte" },
    ],
  },
  {
    title: "Estética",
    description: "Detalhes que fazem diferença.",
    services: [
      { name: "Micropigmentação", price: "Consulte" },
      { name: "Sobrancelha", price: "Consulte" },
      { name: "Camuflagem", price: "Consulte" },
    ],
  },
];

// =====================================================
// GALERIA
// =====================================================

const gallery = [
  {
    image: "/imagens/barba.png",
    number: "01",
    title: "Barba",
    description:
      "Modelagem precisa e acabamento detalhado para valorizar o formato do rosto e deixar a barba alinhada.",
    },


  {
    image: "/imagens/barbacompleta.png",
    number: "02",
    title: "Barba Completa",
    description:
      "Barba completa com desenho, volume e acabamento cuidadosamente trabalhados em cada detalhe.",
    },
  


  {
    image: "/imagens/buzzcut.png",
    number: "03",
    title: "Buzz Cut",
    description:
      "Corte curto e uniforme, com visual marcante, prático e acabamento limpo.",
      fit: "cover",
      position: "center 55%",
    },

  {
    image: "/imagens/cacheado.png",
    number: "04",
    title: "Cacheado",
    description:
      "Corte pensado para valorizar a textura natural, o movimento e a definição dos cachos.",
      fit: "cover",
      position: "center 45%",
    },

  {
    image: "/imagens/colorido.png",
    number: "05",
    title: "Colorido",
    description:
      "Uma proposta ousada para quem busca personalidade, cor e um visual que não passa despercebido.",
       fit: "cover",
      position: "center 35%",
    },

  {
    image: "/imagens/corte infantil.jpg",
    number: "06",
    title: "Corte Infantil",
    description:
      "Corte pensado para os pequenos, combinando estilo, cuidado e um acabamento bem feito.",
      fit: "cover",
      position: "center 75%",
    },

  {
    image: "/imagens/cortebarba.jpg",
    number: "07",
    title: "Corte + Barba",
    description:
      "A combinação completa entre corte e barba para criar um visual equilibrado, moderno e marcante.",
      fit: "cover",
      position: "center 25%",
    },
  {
    image: "/imagens/freestyle.jpg",
    number: "08",
    title: "Freestyle",
    description:
      "Design personalizado que transforma o corte em uma expressão de estilo e personalidade.",
  },

  {
    image: "/imagens/highfade.png",
    number: "09",
    title: "High Fade",
    description:
      "Degradê alto com contraste marcante e transição precisa para um visual moderno e ousado.",
 fit: "cover",
      position: "center 25%", 
    },


  {
    image: "/imagens/lowfade.png",
    number: "10",
    title: "Low Fade",
    description:
      "Degradê baixo com transição suave e acabamento preciso para um visual limpo e contemporâneo.",
    },

  {
    image: "/imagens/mechas.png",
    number: "11",
    title: "Mechas",
    description:
      "Iluminação estratégica para criar contraste, profundidade e personalidade no visual.",
      fit: "cover",
      position: "center 25%",
    },

  {
    image: "/imagens/moicatrem.png",
    number: "12",
    title: "Moicano",
    description:
      "Um corte de presença, com laterais marcadas e destaque para o topo do cabelo.",
  },

  {
    image: "/imagens/platinado.png",
    number: "13",
    title: "Platinado",
    description:
      "Visual platinado de alta personalidade, com acabamento moderno e presença marcante.",
      fit: "cover",
      position: "center 15%",
    },

  {
    image: "/imagens/social.png",
    number: "14",
    title: "Corte Social",
    description:
      "Elegância e precisão em um corte clássico que recebe acabamento contemporâneo.",
      fit: "cover",
      position: "center 35%",
    },

  {
    image: "/imagens/sombrancelha.png",
    number: "15",
    title: "Sobrancelha",
    description:
      "Design e alinhamento para valorizar os traços do rosto e completar o visual.",
  },

  {
    image: "/imagens/teperfade.png",
    number: "16",
    title: "Taper Fade",
    description:
      "Degradê concentrado nas laterais e nuca, criando um acabamento discreto, moderno e versátil.",
  },
];
// =====================================================
// AVALIAÇÕES
// PLACEHOLDERS — substituir pelos depoimentos reais
// =====================================================

const reviews = [
  {
    text: "Depoimento do cliente.",
    name: "CLIENTE 01",
  },
  {
    text: "Depoimento do cliente.",
    name: "CLIENTE 02",
  },
  {
    text: "Depoimento do cliente.",
    name: "CLIENTE 03",
  },
];

// =====================================================
// PÁGINA
// =====================================================
export default function Home() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeService, setActiveService] = useState(0);

  const toggleService = (serviceName: string) => {
    setSelectedServices((current) =>
      current.includes(serviceName)
        ? current.filter((name) => name !== serviceName)
        : [...current, serviceName]
    );
  };

  const bookingMessage =
    selectedServices.length === 0
      ? "Olá! Gostaria de agendar um horário."
      : selectedServices.length === 1
        ? `Olá! Gostaria de agendar ${selectedServices[0].toLowerCase()}.`
        : `Olá! Gostaria de agendar ${selectedServices
            .slice(0, -1)
            .map((name) => name.toLowerCase())
            .join(", ")} e ${selectedServices[
            selectedServices.length - 1
          ].toLowerCase()}.`;

  const bookingUrl = `${whatsappUrl}?text=${encodeURIComponent(
    bookingMessage
  )}`;

  const [currentGallery, setCurrentGallery] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // =====================================================
  // CONTROLE DA SETA DE ROLAGEM
  // Aparece enquanto a página está sendo rolada
  // e desaparece quando a rolagem para.
  // =====================================================
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setShowScrollTop(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setShowScrollTop(false);
      }, 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

 // =====================================================
// GALERIA AUTOMÁTICA
// =====================================================

useEffect(() => {
  const interval = setInterval(() => {
    if (isFading) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentGallery((prev) => (prev + 1) % gallery.length);
      setIsFading(false);
    }, 500);
  }, 4000);

  return () => clearInterval(interval);
}, [isFading]);

const current = gallery[currentGallery];

const nextGallery = () => {
  if (isFading) return;

  setIsFading(true);

  setTimeout(() => {
    setCurrentGallery((prev) => (prev + 1) % gallery.length);
    setIsFading(false);
  }, 380);
};

const previousGallery = () => {
  if (isFading) return;

  setIsFading(true);

  setTimeout(() => {
    setCurrentGallery(
      (prev) => (prev - 1 + gallery.length) % gallery.length
    );
    setIsFading(false);
  }, 300);
};
  return (
    <main className="overflow-hidden bg-[#f2efe9] text-[#111]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="absolute left-0 top-0 z-40 w-full px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">

         <a
  href="#"
  className="north-mark relative flex h-11 w-11 items-center justify-center"
  aria-label="NORTH"
>
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 44 44"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="22"
      cy="22"
      r="20"
      className="north-ring"
    />
  </svg>

  <span className="north-letter">
    N
  </span>
</a>

          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white md:flex">
            <a
              href="#club"
              className="transition-opacity hover:opacity-60"
            >
              Club
            </a>

            <a
              href="#servicos"
              className="transition-opacity hover:opacity-60"
            >
              Serviços
            </a>

            <a
              href="#galeria"
              className="transition-opacity hover:opacity-60"
            >
              Galeria
            </a>

            <a
              href="#sobre"
              className="transition-opacity hover:opacity-60"
            >
              Sobre
            </a>

            <a
              href="#avaliacoes"
              className="transition-opacity hover:opacity-60"
            >
              Avaliações
            </a>

            <a
              href="#localizacao"
              className="transition-opacity hover:opacity-60"
            >
              Localização
            </a>
          </nav>

        </div>
      </header>

      {/* =====================================================
    HERO
===================================================== */}

<section
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setHeroMouse({ x, y });
  }}
  onMouseLeave={() => setHeroMouse({ x: 0, y: 0 })}
  className="relative flex h-[100svh] min-h-[100svh] items-end overflow-hidden bg-black md:min-h-[92dvh]"
>
  {/* IMAGEM DO HERO */}
  <div className="absolute inset-0">
    <Image
      src="/imagens/hero-north.png"
      alt="Barbeiro realizando corte masculino"
      fill
      priority
      sizes="100vw"
      className="object-cover transition-transform duration-700 ease-out"
      style={{
        transform: `scale(1.06) translate(${heroMouse.x * -8}px, ${heroMouse.y * -8}px)`,
      }}
    />

    {/* CAMADAS DE CONTRASTE */}
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
  </div>

  {/* CONTEÚDO */}
  <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-12 md:px-10 md:pb-20">
    <div className="max-w-[1050px]">

      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white/60 md:text-xs">
        BARBER CLUB · IPATINGA MG
      </p>

      <h1 className="hero-title text-[22vw] font-black leading-[0.72] tracking-[-0.09em] text-white md:text-[14vw]">
        NORTH
      </h1>

      <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">

        <div className="max-w-md">

          <h2 className="hero-text text-2xl font-bold leading-tight text-white md:text-4xl">
            Seu estilo.
            <br />
            Do seu jeito.
          </h2>

          <p className="animate-[heroText_0.8s_ease-out_0.7s_both] mt-4 text-sm leading-6 text-white/65">
            Mais que uma barbearia. Um espaço criado para quem entende
            que estilo também está nos detalhes.
          </p>

        </div>

        <a
          href={whatsappAgendamentoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button mt-6 inline-flex w-fit items-center gap-3 bg-[#dc2626] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
        >
          Agendar horário
          <span></span>
        </a>

      </div>

    </div>
  </div>

</section>
{/* NAVEGAÇÃO DE SCROLL */}
<div
  className={`
    fixed right-3 bottom-[5.5rem] z-50
    transition-all duration-300
    ${
      showScrollTop
        ? "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-2 opacity-0"
    }
    md:right-6 md:bottom-8
  `}
>
  <button
    type="button"
    onClick={scrollToTop}
    aria-label="Voltar ao topo"
    className="flex h-12 w-12 items-center justify-center text-[#dc2626]"
  >
    <span className="text-3xl font-light leading-none">
      ↑
    </span>
  </button>
</div>
      {/* =====================================================
    01 — A NORTH
===================================================== */}

<section
  id="about"
  className="relative overflow-hidden bg-[#f2efe9] px-5 py-24 md:px-10 md:py-36"
>
  <div className="mx-auto max-w-[1600px]">

    {/* IDENTIFICAÇÃO DA SEÇÃO */}
    <div className="mb-14 flex items-center gap-4 md:mb-20">
      <span className="text-[10px] font-bold tracking-[0.3em] text-[#dc2626]">
        01
      </span>

      <span className="h-px w-10 bg-[#dc2626]" />

      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
        A NORTH
      </span>
    </div>

    {/* TÍTULO */}
    <div className="max-w-[1100px]">
      <h2 className="text-[12vw] font-black uppercase leading-[0.82] tracking-[-0.07em] text-black md:text-[7vw]">
        Não é só
        <br />
        sobre o{" "}
        <span className="text-[#dc2626]">corte.</span>
      </h2>

      <div className="mt-8 flex items-start gap-4 md:mt-12 md:gap-8">
        <span className="mt-2 h-16 w-[2px] bg-[#dc2626] md:h-24" />

        <p className="max-w-xl text-base leading-7 text-black/60 md:text-xl md:leading-8">
          É sobre como você sai daqui.
          <br />
          <span className="text-black/85">
            Um espaço para cuidar do visual, encontrar pessoas
            e viver a experiência NORTH.
          </span>
        </p>
      </div>
    </div>

    {/* DETALHE INFERIOR */}
    <div className="mt-20 flex items-center justify-between border-t border-black/10 pt-5 md:mt-28">
      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/35">
        ESTILO · PRESENÇA · EXPERIÊNCIA
      </span>

      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#dc2626]">
        NORTH BARBER CLUB
      </span>
    </div>

  </div>
</section>

```tsx
{/* =====================================================
    02 — SERVIÇOS
===================================================== */}

<section
  id="servicos"
  className="bg-white px-5 py-8 md:px-10 md:py-28"
>
  <div className="mx-auto max-w-[1600px]">

    {/* CABEÇALHO */}
    <div className="mb-6 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#dc2626]">
          02 — Serviços
        </p>

        <h2 className="mt-3 text-[11vw] font-black uppercase leading-[0.8] tracking-[-0.07em] md:text-[7vw]">
          Seu estilo.
        </h2>
      </div>

      <p className="max-w-xs text-sm leading-6 text-black/50 md:pb-2">
        Corte, barba e detalhes pensados para o seu estilo.
      </p>

    </div>

    {/* CATEGORIAS */}
    <div className="border-t border-black/10">

      <div className="flex gap-7 overflow-x-auto py-3 md:gap-10 md:py-5">

        {serviceGroups.map((group, index) => (

          <button
            key={group.title}
            type="button"
            onClick={() => setActiveService(index)}
            className={`relative shrink-0 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              activeService === index
                ? "text-black"
                : "text-black/30 hover:text-black/70"
            }`}
          >
            {group.title}

            {activeService === index && (
              <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-[#dc2626]" />
            )}
          </button>

        ))}

      </div>

    </div>

    {/* CONTEÚDO */}
    <div
      key={activeService}
      className="grid animate-[heroText_0.45s_ease-out_both] border-t border-black/10 md:grid-cols-[0.65fr_1.35fr]"
    >

      {/* INTRODUÇÃO */}
      <div className="py-5 md:border-r md:border-black/10 md:py-12 md:pr-14">

        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/25">
          0{activeService + 1}
        </p>

        <h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.05em] md:mt-3 md:text-4xl">
          {serviceGroups[activeService].title}
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-black/45 md:mt-4">
          {serviceGroups[activeService].description}
        </p>

      </div>

      {/* SERVIÇOS */}
      <div className="py-5 md:py-12 md:pl-14">

        <div className="grid grid-cols-2 gap-2">

          {serviceGroups[activeService].services.map((service, index) => {

            const isSelected = selectedServices.includes(service.name);

            return (
              <button
                key={service.name}
                type="button"
                onClick={() => toggleService(service.name)}
                className={`group flex items-center justify-between gap-4 border px-4 py-3 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-[#dc2626] bg-[#dc2626] text-white"
                    : "border-black/10 bg-white text-black hover:border-black/30"
                }`}
              >

                <div className="flex items-center gap-3">

                  <span
                    className={`text-[9px] font-bold ${
                      isSelected
                        ? "text-white/60"
                        : "text-black/20"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-wide">
                    {service.name}
                  </span>

                </div>

                <span
                  className={`shrink-0 text-sm font-black tracking-tight ${
                    isSelected
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {service.price}
                </span>

              </button>
            );

          })}

        </div>

      </div>

    </div>

    {/* RODAPÉ DA SEÇÃO */}
    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/25">
        Atendimento com hora marcada
      </p>

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black"
      >
        Agendar pelo WhatsApp

        <span className="text-[#dc2626] transition-transform duration-300 group-hover:translate-x-1">
        </span>
      </a>

    </div>

  </div>

</section>


{/* =====================================================
          03 — GALERIA
      ===================================================== */}

<section
  id="galeria"
  className="bg-[#111] px-5 py-14 text-white md:px-10 md:py-20"
>
  <div className="mx-auto max-w-[1600px]">

    {/* CABEÇALHO */}
    <div className="mb-8">

      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#dc2626]">
        03 — Galeria
      </p>

      <div className="mt-3 flex items-end justify-between gap-4">

        <h2 className="text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
          Trabalhos
        </h2>

        <p className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 md:block">
          Seleção NORTH
        </p>

      </div>

    </div>

    {/* =====================================================
          MOBILE — GALERIA COM DESLIZE
        ===================================================== */}

    <div className="md:hidden -mx-5 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
      <div className="flex gap-3">

        {gallery.map((item, index) => (

          <button
            key={item.number}
            type="button"
            onClick={() => setCurrentGallery(index)}
            aria-label={`Ver ${item.title}`}
            className="relative w-[calc(100vw-40px)] shrink-0 snap-center overflow-hidden bg-black text-left"
          >

            <div className="relative aspect-[4/3] overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="90vw"
                unoptimized
                className={`transition duration-700 ${
                  item.fit === "contain"
                    ? "object-contain"
                    : "object-cover"
                }`}
                style={{
                  objectPosition: item.position || "center",
                }}
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 pt-20">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  {item.number}
                </p>

                <h3 className="mt-1 text-xl font-black uppercase tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

              </div>

            </div>

          </button>

        ))}

      </div>
    </div>


    {/* =====================================================
          DESKTOP — 4 FOTOS POR VEZ
        ===================================================== */}

    <div className="hidden gap-3 md:grid md:grid-cols-4">

      {[0, 1, 2, 3].map((offset) => {

        const item =
          gallery[(currentGallery + offset) % gallery.length];

        return (
          <button
            key={`${item.number}-${currentGallery}-${offset}`}
            type="button"
            onClick={() => {
              setCurrentGallery(
                (currentGallery + offset) % gallery.length
              );
            }}
            aria-label={`Ver ${item.title}`}
            className="group relative overflow-hidden bg-black text-left"
          >

            <div className="relative aspect-[4/3] overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="25vw"
                unoptimized
                className={`transition duration-700 group-hover:scale-105 ${
                  item.fit === "contain"
                    ? "object-contain"
                    : "object-cover"
                }`}
                style={{
                  objectPosition: item.position || "center",
                }}
              />

              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 pt-14">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  {item.number}
                </p>

                <h3 className="mt-1 text-sm font-black uppercase tracking-[-0.02em] text-white md:text-base">
                  {item.title}
                </h3>

              </div>

            </div>

          </button>
        );

      })}

    </div>

    {/* =====================================================
          CONTROLES
        ===================================================== */}

    <div className="mt-6 flex items-center justify-between gap-4">

      {/* INDICADORES */}
      <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scrollbar-hide">

        {gallery.map((item, index) => (

          <button
            key={item.number}
            type="button"
            onClick={() => setCurrentGallery(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            className={`h-[3px] shrink-0 transition-all duration-300 ${
              index === currentGallery
                ? "w-8 bg-[#dc2626]"
                : "w-3 bg-white/25 hover:bg-white/60"
            }`}
          />

        ))}

      </div>
      {/* NÚMERO + SETAS — SOMENTE DESKTOP */}
      <div className="hidden shrink-0 items-center gap-3 md:flex">

        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40">
          {String(currentGallery + 1).padStart(2, "0")} /{" "}
          {String(gallery.length).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={previousGallery}
          aria-label="Imagem anterior"
          className="flex h-10 w-10 items-center justify-center border border-white/25 text-lg transition hover:border-white hover:bg-white hover:text-black"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextGallery}
          aria-label="Próxima imagem"
          className="flex h-10 w-10 items-center justify-center border border-white/25 text-lg transition hover:border-white hover:bg-white hover:text-black"
        >
          →
        </button>

      </div>

    </div>


    {/* DESCRIÇÃO */}
    <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-[1fr_auto] md:items-end">

      <p className="max-w-xl text-sm leading-7 text-white/50">
        {gallery[currentGallery].description}
      </p>

    </div>

  </div>
</section>

     {/* =====================================================
          04 — NORTH CLUB
      ===================================================== */}

<section
  id="club"
  className="bg-[#dc2626] px-5 py-12 text-white md:px-10 md:py-16"
>

  <div className="mx-auto max-w-[1600px]">

    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
      04 — NORTH CLUB
    </p>

    <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">

      <div>

        <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl lg:text-[7rem]">
          SEU
          <br />
          VISUAL
          <br />
          SEMPRE
          <br />
          EM DIA.
        </h2>

      </div>

      <div className="lg:pb-2">

        <p className="max-w-md text-sm leading-6 text-white/90 md:text-base">
          Faça parte do NORTH Club e mantenha seu estilo sempre
          alinhado. São <strong>4 atendimentos por mês</strong>,
          sendo <strong>1 por semana</strong>.
        </p>

        <div className="mt-6 border-t border-white/30 pt-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
            O plano inclui
          </p>

          <div className="mt-3 space-y-1.5 text-sm font-bold uppercase tracking-wide">
            <p>✓ Cabelo</p>
            <p>✓ Barba</p>
            <p>✓ Sobrancelha</p>
          </div>

        </div>

        <div className="mt-6 flex items-end gap-2">

          <span className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
            R$ 150
          </span>

          <span className="mb-1.5 text-sm font-bold uppercase tracking-wider text-white/70">
            / mês
          </span>

        </div>

        <a
          href={whatsappClubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]"
        >
          Quero fazer parte →
        </a>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          05 — SOBRE NÓS
      ===================================================== */}

<section
  id="sobre"
  className="px-5 py-12 md:px-10 md:py-16"
>

  <div className="mx-auto max-w-[1600px]">

    <div className="mb-8">

      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#dc2626]">
        05 — Sobre nós
      </p>

      <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
        A história
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

      <div className="relative aspect-[4/5] overflow-hidden bg-black">

        <Image
         src="/imagens/fundador.PNG"
          alt="Matheus — Fundador da NORTH"
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        unoptimized
        className="object-cover"
        style={{
        objectPosition: "center",
        }}
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-20">

          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">
            Fundador
          </p>

          <p className="mt-1 text-xl font-black uppercase text-white">
            MATHEUS RAMOS
          </p>

        </div>

      </div>

      <div className="flex flex-col justify-center">

        <p className="max-w-2xl text-2xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
          A NORTH nasceu de uma vontade simples: criar uma barbearia
          diferente.
        </p>

        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-black/55 md:text-base">

          <p>
            A história do fundador começou com a paixão pela profissão,
            pelo cuidado com os detalhes e pela vontade de construir um
            espaço onde cada cliente pudesse se sentir à vontade.
          </p>

          <p>
            Com o tempo, essa ideia ganhou forma e se transformou na
            NORTH: uma barbearia que une técnica, ambiente e identidade.
          </p>

          <p>
            Hoje, cada corte e cada atendimento fazem parte dessa
            história.
          </p>

        </div>

        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em]">
          MATHEUS RAMOS
        </p>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          06 — AVALIAÇÕES
      ===================================================== */}

<section
  id="avaliacoes"
  className="border-y border-black/10 bg-white px-5 py-12 md:px-10 md:py-16"
>

  <div className="mx-auto max-w-[1600px]">

    <div className="mb-8 flex items-end justify-between">

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#dc2626]">
          06 — Avaliações
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
          Quem vive
          <br />
          a NORTH
        </h2>

      </div>

      <span className="hidden text-4xl leading-none md:block">
        “
      </span>

    </div>

    <div className="grid border-t border-black/10 md:grid-cols-3">

      {/* AVALIAÇÃO 01 */}

      <div className="border-b border-black/10 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0">

        <p className="text-3xl leading-none">
          “
        </p>

        <p className="mt-3 text-base font-semibold leading-7">
          Ambiente muito bom e atendimento excelente. O corte ficou
          exatamente como eu queria.
        </p>

        <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
          Lucas Almeida
        </p>

      </div>

      {/* AVALIAÇÃO 02 */}

      <div className="border-b border-black/10 py-7 md:border-b-0 md:border-r md:px-7">

        <p className="text-3xl leading-none">
          “
        </p>

        <p className="mt-3 text-base font-semibold leading-7">
          Já virei cliente. Atendimento rápido, barbeiro caprichoso
          e resultado sempre muito bom.
        </p>

        <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
          Rafael Martins
        </p>

      </div>

      {/* AVALIAÇÃO 03 */}

      <div className="py-7 md:px-7 md:last:border-r-0">

        <p className="text-3xl leading-none">
          “
        </p>

        <p className="mt-3 text-base font-semibold leading-7">
          Barbearia diferenciada. Gostei bastante do atendimento e
          principalmente do cuidado com os detalhes.
        </p>

        <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
          Bruno Ferreira
        </p>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          07 — INSTAGRAM
      ===================================================== */}

<section
  className="bg-[#111] px-5 py-10 text-white md:px-10 md:py-14"
>

  <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-6 md:flex-row md:items-center">

    <div>

      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        07 — Instagram
      </p>

      <h2 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.04em] md:text-5xl">
        Siga a NORTH
      </h2>

    </div>

    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit border border-white/25 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
    >
      @northbarberclub 
    </a>

  </div>

</section>
      {/* =====================================================
          08 — LOCALIZAÇÃO
      ===================================================== */}

<section
  id="localizacao"
  className="px-5 py-12 md:px-10 md:py-16"
>

  <div className="mx-auto max-w-[1600px]">

    <div className="grid gap-8 md:grid-cols-2 md:gap-12">

      {/* INFORMAÇÕES */}

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#dc2626]">
          08 — Localização
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
          Encontre
          <br />
          a NORTH
        </h2>

        <div className="mt-7 space-y-5">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
              Cidade
            </p>

            <p className="mt-1 text-lg font-bold">
              Ipatinga · MG
            </p>

          </div>

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
              Endereço
            </p>

            <p className="mt-1 text-sm font-medium">
              Avenida Selim José de Sales, 1000
              <br />
              Ipatinga · MG
            </p>

          </div>

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
              Horário
            </p>

            <p className="mt-1 text-sm font-medium">
              Consulte pelo WhatsApp
            </p>

          </div>

        </div>

        <div className="mt-7 flex flex-wrap gap-3">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Selim+Jose+de+Sales+1000+Ipatinga+MG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-black/20 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
          >
            Abrir no Maps 
          </a>

        </div>

      </div>

      {/* MAPA */}

      <div className="relative min-h-[300px] overflow-hidden bg-[#dedbd5] md:min-h-[400px]">

        <iframe
          title="Localização da NORTH"
          src="https://www.google.com/maps?q=Ipatinga%20MG&output=embed"
          className="absolute inset-0 h-full w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pointer-events-none absolute bottom-4 left-4 bg-white px-4 py-3 shadow-sm">

          <p className="text-[9px] font-bold uppercase tracking-[0.2em]">
            NORTH BARBER CLUB
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-black/40">
            Ipatinga · MG
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* =====================================================
          09 — CTA FINAL
      ===================================================== */}

<section
  id="contato"
  className="bg-[#dc2626] px-5 py-12 text-white md:px-10 md:py-16"
>

  <div className="mx-auto max-w-[1600px]">

    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
      09 — Seu próximo horário
    </p>

    <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">

      <h2 className="max-w-5xl text-[12vw] font-black uppercase leading-[0.8] tracking-[-0.08em] md:text-[8vw]">
        Seu estilo
        <br />
        começa aqui.
      </h2>

      <a
        href={whatsappAgendamentoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit shrink-0 bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]"
      >
        Agendar agora 
      </a>

    </div>

  </div>

</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#111] px-5 py-10 text-white md:px-10 md:py-14">

        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-20">

            <div>

              <p className="text-4xl font-black tracking-[-0.08em]">
                NORTH
              </p>

              <p className="mt-4 max-w-sm text-xs leading-6 text-white/40">
                Barber Club. Estilo, técnica e experiência em Ipatinga · MG.
              </p>

            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                Navegação
              </p>

              <div className="mt-4 flex flex-col gap-3 text-[10px] font-bold uppercase tracking-[0.15em]">

                <a href="#club" className="hover:text-white/50">
                  Club
                </a>

                <a href="#servicos" className="hover:text-white/50">
                  Serviços
                </a>

                <a href="#galeria" className="hover:text-white/50">
                  Galeria
                </a>

                <a href="#sobre" className="hover:text-white/50">
                  Sobre
                </a>

                <a href="#localizacao" className="hover:text-white/50">
                  Localização
                </a>

              </div>

            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                Contato
              </p>

              <div className="mt-4 flex flex-col gap-3 text-[10px] font-bold uppercase tracking-[0.1em]">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/50"
                >
                  WhatsApp
                </a>

                <a
                  href="mailto:contato@northbarberclub.com.br"
                  className="normal-case tracking-normal text-white/60 hover:text-white"
                >
                  contato@northbarberclub.com.br
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/50"
                >
                  Instagram
                </a>

              </div>

            </div>

          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.15em] text-white/25 md:flex-row">

            <p>
              © {new Date().getFullYear()} NORTH BARBER CLUB
            </p>

           <div className="flex items-start text-white/60">
  <span className="text-[23px] font-bold leading-none tracking-[-0.08em]">
    G
  </span>
  <span className="ml-[1px] -mt-0.5 text-[9px] font-bold leading-none">
    x
  </span>
</div>

          </div>

        </div>

      </footer>

      {/* =====================================================
          WHATSAPP FIXO — MOBILE
      ===================================================== */}

      <a
  href={whatsappAgendamentoUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Agendar pelo WhatsApp"
  className="fixed bottom-5 right-2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#dc2626] text-white shadow-2xl transition-transform hover:scale-105 md:hidden"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.478-8.413"/>
  </svg>
</a>

    </main>
  );
}