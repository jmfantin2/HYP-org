/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaRedo } from 'react-icons/fa';

// Componente do botão de navegação
const NavButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      fixed bottom-8 
      ${direction === 'left' || direction === 'redo' ? 'left-8' : 'right-8'}
      bg-slate-400
      disabled:opacity-30 
      text-white rounded-full p-2 
      transition-all duration-300 ease-in-out
      shadow-lg hover:shadow-xl
    `}
  >
    {direction === 'left' ? (
      <FaChevronLeft size={24} />
    ) : direction === 'right' ? (
      <FaChevronRight size={24} />
    ) : (
      <FaRedo size={24} />
    )}
  </button>
);

// Slide de texto simples
const TextSlide = ({ children, color }) => (
  <div
    className={`flex items-center justify-center min-h-[60vh] px-24 md:px-48 lg:px-[380px] text-justify
    ${color === 'violet' ? 'text-[#b143ff]' : 'text-[#beff9b]'}
  `}
  >
    <p className="text-xl font-medium leading-relaxed animate-fade-in">
      {children}
    </p>
  </div>
);

const ImageSlide = ({ path }) => (
  <div className="flex items-center justify-center min-h-[60vh] px-4">
    <div className="relative w-full max-w-lg animate-fade-in">
      <img
        src={`/images/${path}`}
        alt="Slide"
        className="w-full h-auto rounded-lg shadow-lg bg-[#beff9b]
                   object-cover animate-scale-in
                   hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  </div>
);

// Componente principal
const CompoundPresentation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1633); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []); //todo: loading context instead of useState() so i can hide anything that might go overflow-y while RingLoader is there x_x (TransactionSimulation)
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TextSlide key={0}>O ano é 2038.</TextSlide>,
    <TextSlide key={1}>
      Uma organização chamada seeD_reams descobriu como extrair o potencial
      máximo do cérebro humano durante o sono, via tecnologia de implante
      chamada SID.
    </TextSlide>,
    <ImageSlide key={2} path="2.webp" />,
    <TextSlide key={3}>
      O argumento é que a atividade cerebral em sono profundo era disperdiçada
      todas as noites, e que haveria um uso melhor para ela.
    </TextSlide>,
    <TextSlide key={4}>
      Dentre as promessas da seeD_reams, estava o aumento da qualidade do sono e
      a inserção dos adeptos no programa REMuneration, que converteria suas
      horas de sono em dinheiro.
    </TextSlide>,
    <ImageSlide key={5} path="5.webp" />,
    <TextSlide key={6}>
      Muitos aderiram à tecnologia e se tornaram conhecidos como REMnants, e a
      principal motivação é que queriam estar a par da eficiência das máquinas
      no mercado de trabalho, fugindo da iminente falência de suas profissões.
    </TextSlide>,
    <TextSlide key={7} color="violet">
      No entanto, meses mais tarde, ocorreu o evento conhecido como blac_kout,
      onde 20% dos usuários do programa ficaram presos em estado de comatose.
    </TextSlide>,
    <ImageSlide key={8} path="8.webp" />,
    <TextSlide key={9}>
      A origem da falha foi encoberta, e a seeD_reams ficou impune.
    </TextSlide>,
    <TextSlide key={10}>
      REMnants ao redor do mundo ficaram com receio do que poderia acontecer com
      eles durante a noite. A confiança na VEILnet declinou.
    </TextSlide>,

    <ImageSlide key={11} path="11.webp" />,

    <TextSlide key={12} color="violet">
      Vários REMnants morreram tentando retirar seus SIDs, causando ainda mais
      revolta. Esses episódios ficaram conhecidos como REMoval Faults.
    </TextSlide>,
    <TextSlide key={13}>
      Uma comunidade global chamada Insomnia angariou muitos membros, e diversas
      estratégias para mitigar os riscos se tornaram populares.
    </TextSlide>,

    <ImageSlide key={13.5} path="insomnia.webp" />,

    <TextSlide key={14}>
      Nessa comunidade, um projeto antigo ganhou notoriedade entre os assuntos.
    </TextSlide>,
    <TextSlide key={15}>
      Se tratava do Zion SleepGuard, uma alternativa segura para que REMnants
      pudessem se proteger durante o sono.
    </TextSlide>,

    <ImageSlide key={16} path="16.webp" />,

    <TextSlide key={17}>
      O whitepaper havia sido publicado há algum tempo, prevendo que a VEILnet
      culminaria na exploração do sono das pessoas para geração de energia e
      processamento de tarefas complexas.
    </TextSlide>,
    <TextSlide key={18}>
      SleepGuard era um protocolo de camada de segurança extra entre a VEILnet e
      os REMnants. Foi criado e testado por Rokaru-Hosuto, uma dupla de
      programadores. Mesmo após a ascenção da Zion, suas identidades
      permaneceram mantidas em sigilo.
    </TextSlide>,

    <ImageSlide key={19} path="19.webp" />,

    <TextSlide key={20}>
      O mecanismo do SleepGuard era simples e consistia das seguinte regras:{' '}
      <br />
      <br />- dois REMnants estabelecem uma conexão Keep-Alive entre seus IPs;{' '}
      <br />
      - seus SIDs são modificados para emitir um atributo boolean “awake”,
      referente ao estado de alerta diário. <br />- a exposição de um REMnant à
      VEILnet precisaria passar por um dado entre par de awakes chamado
      “sleep_token”, que só é válido quando ambos estão despertos.
    </TextSlide>,

    <ImageSlide key={21} path="21.webp" />,

    <TextSlide key={22}>
      A Insomnia passou a coordenar o pareamento de REMnants em lados opostos do
      planeta, para que suas comunicações com a VEILnet fossem vigiadas 24h por
      dia.
    </TextSlide>,
    <TextSlide key={23}>
      A ZionLabs expandiu e passou a incentivar regulamentações entre humano e
      máquina através de novas pesquisas.
    </TextSlide>,

    <ImageSlide key={24} path="24.webp" />,

    <TextSlide key={25}>Parece loucura, mas o fato é que...</TextSlide>,
    <TextSlide key={26} color="violet">
      ... estamos entrando na
      <br />
      Era Hypnoware.
    </TextSlide>,

    <ImageSlide key={27} path="27.webp" />,
  ];

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((curr) => curr + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((curr) => curr - 1);
    }
  };

  const goToFirstSlide = () => {
    setCurrentSlide(0);
  };

  if (loading) return null;

  return (
    <div className="relative w-full">
      <div className="min-h-screen flex items-center justify-center">
        {slides[currentSlide]}
      </div>

      {currentSlide !== slides.length - 1 ? (
        <NavButton
          direction="left"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
        />
      ) : (
        <NavButton direction="redo" onClick={goToFirstSlide} />
      )}
      {currentSlide !== slides.length - 1 ? (
        <NavButton direction="right" onClick={goToNextSlide} />
      ) : (
        <>
          {/* <NavButton direction="redo" onClick={goToFirstSlide} /> */}
          {null}
        </>
      )}
    </div>
  );
};

export default CompoundPresentation;
