import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps, useState } from 'react';

const faqs = [
  {
    question: 'What is JuryDAO?',
    answer:
      'JuryDAO is a platform that uses blockchain technology and decentralized governance to address misconduct in online games and other digital platforms.',
  },
  {
    question: 'How does JuryDAO work?',
    answer:
      'JuryDAO has a community-driven approach to addressing misconduct, using an expertise-based jury selection process and a collateral-based penalty system. It also includes proactive fraud detection to prevent fraudulent activities.',
  },
  {
    question: 'Who can use JuryDAO?',
    answer:
      "Anyone can use JuryDAO to report or respond to wrongdoings, but it's designed to be community-driven, so it relies on the participation of ethical community members to maintain fairness.",
  },
  {
    question: "Is JuryDAO's system truly fair?",
    answer:
      "JuryDAO's system is designed to be as fair and transparent as possible, using objective decision-making processes. However, like any system, it's not perfect, and it relies on the honesty and ethical behavior of its users to maintain its integrity.",
  },
];

const ArrowIcon: React.FC<ComponentProps<'svg'>> = ({
  fill = '#4D94E7',
  ...props
}) => (
  <svg
    width="20"
    height="12"
    viewBox="0 0 20 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5118 1.00012C20.1627 1.65099 20.1627 2.70627 19.5118 3.35714L12.357 10.512C11.0553 11.8137 8.94472 11.8137 7.64298 10.512L0.488155 3.35714C-0.162718 2.70627 -0.162718 1.65099 0.488155 1.00012C1.13903 0.349244 2.19431 0.349244 2.84518 1.00012L10 8.15494L17.1548 1.00012C17.8057 0.349244 18.861 0.349244 19.5118 1.00012Z"
      fill={fill}
    />
  </svg>
);

const Section6: React.FC<ComponentProps<'article'>> = ({ className }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <article
      className={clsx([
        'flex flex-col w-full justify-center gap-24 h-screen bg-gray-light relative overflow-visible',
        className,
      ])}
    >
      <div className="container relative">
        <h2 className="w-fit text-gradient-type-1 font-bold text-[30px] xl:text-[70px] text-center xl:text-left mx-auto xl:mx-0">
          FAQ
        </h2>
        <div className="mt-8 xl:mt-14 flex flex-col gap-3 xl:gap-5 w-full xl:w-3/5 xl:pl-7 relative z-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex gap-1.5">
                <div
                  className="w-[50px] h-[50px] bg-gray-default rounded-full object-center"
                  role="img"
                >
                  <Image
                    src="/assets/landing/fag-emoji.png"
                    width={50}
                    height={50}
                    alt="Question"
                  />
                </div>
                <button
                  className={clsx([
                    'flex-grow flex justify-between items-center rounded-2xl text-left px-5 text-sm xl:text-xl shadow-md',
                    idx !== activeIdx && 'bg-gray-default',
                    idx === activeIdx && 'bg-primary-300 text-white',
                  ])}
                  onClick={() => setActiveIdx(idx)}
                  role="dialog"
                >
                  <span>{faq.question}</span>
                  <ArrowIcon
                    fill={idx === activeIdx ? '#ffffff' : '#4D94E7'}
                    // rotate
                    className={clsx([
                      'transition-all duration-200',
                      idx === activeIdx && 'rotate-180',
                    ])}
                  />
                </button>
              </div>
              <div
                className={clsx([
                  'overflow-hidden transition-all duration-500',
                  idx !== activeIdx && 'h-0 opacity-0',
                  idx === activeIdx &&
                    'h-auto text-white flex justify-start gap-1.5 opacity-100',
                ])}
              >
                <div
                  className="w-[50px] h-[50px] bg-primary-300 rounded-full flex justify-center items-center"
                  role="img"
                >
                  <Image
                    className="pb-1 brightness-125"
                    src="/assets/logo/logo-symbol.png"
                    width={30}
                    height={30}
                    alt="Question"
                  />
                </div>
                <p
                  className={clsx([
                    idx === activeIdx &&
                      'bg-primary-300 flex-grow px-4 py-3 xl:p-5 flex-1 rounded-2xl text-xs xl:text-sm',
                  ])}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image
          className="absolute top-1/2 -translate-y-1/3 right-1/2 xl:-right-14 translate-x-1/2 xl:translate-x-0 opacity-20 xl:opacity-100 z-0 xl:z-10"
          src="/assets/landing/ballot-big.png"
          width={379}
          height={379}
          alt="Ballot"
        />
      </div>
    </article>
  );
};

export default Section6;
