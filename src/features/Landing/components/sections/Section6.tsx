import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps, useState } from 'react';

const faqs = [
  {
    question: 'What is JuryDAO?',
    answers: [
      'JuryDAO is a special purpose decentralized autonomous organization (DAO) that leverages smart contracts and community governance to prevent cheating, trolling, and abusive behavior in online gaming.',
    ],
  },
  {
    question: 'How does JuryDAO work?',
    answers: [
      'JuryDAO operates on a blockchain platform, utilizing smart contracts and a native token ($BIT for example) for governance and penalty mechanisms.',
      'Users can stake $BIT tokens to become jury members and participate in the decision-making process.',
      'Jury members review reported instances of misconduct and make informed decisions based on their expertise and knowledge.',
      'Decisions made by the jury are recorded on the IPFS and are subject to community validation through a consensus mechanism.',
    ],
  },
  {
    question: 'How can I participate in JuryDAO?',
    answers: [
      'To participate in JuryDAO, you can stake $BIT tokens and become a jury member.',
      'You can review reported misconducts and vote on decisions made by other jury members.',
      'You can also contribute to the community by providing feedback, suggestions, and ideas for improving the platform.',
    ],
  },
  {
    question: 'What are the benefits of participating in JuryDAO?',
    answers: [
      'As a jury member, you can earn rewards in $BIT tokens for your active participation in the decision-making process.',
      'You can contribute to creating a fair and transparent gaming environment by preventing cheating, trolling, and abusive behavior.',
      'You can have a say in the governance and development of JuryDAO, as decisions are made collectively by the community.',
    ],
  },
  {
    question: 'What happens if I report a false case in JuryDAO?',
    answers: [
      'Reporting false case is strictly prohibited and may result in penalties, such as loss of staked $BIT tokens or being disqualified from participating in the jury process.',
      'JuryDAO has measures in place to prevent fraudulent reporting and maintains a system of checks and balances to ensure the integrity of the decision-making process.',
    ],
  },
  {
    question: 'How secure is JuryDAO?',
    answers: [
      'JuryDAO is built on a blockchain platform, which provides inherent security features, such as transparency, immutability, and decentralization.',
      'Smart contracts are scheduled to be audited and thoroughly tested to minimize vulnerabilities and ensure the security of user interactions.',
      'However, itʼs important to exercise caution when staking tokens or participating in any decentralized platform, and follow best practices for securing your accounts and private keys.',
    ],
  },
  {
    question: 'How can I contact the JuryDAO team?',
    answers: [
      'You can contact the JuryDAO team through the Catze Labs (https://catze.xyz) website.',
    ],
  },
  {
    question: 'How are decisions made in JuryDAO?',
    answers: [
      'Decisions in JuryDAO are made through a consensus mechanism, where jury members review reported misconducts and vote on the proposed decisions.',
      'The consensus may be reached through a simple majority, supermajority, or other predetermined thresholds, as defined in the smart contract or governance rules.',
      'The decision with the most votes is considered the outcome, and it is recorded on the blockchain for transparency and auditability.',
    ],
  },
  {
    question: 'How can I withdraw my staked $BIT tokens from JuryDAO?',
    answers: [
      'Withdrawal of staked $BIT tokens from JuryDAO may be subject to specific rules and requirements, as defined in the smart contract or governance rules.',
      'Typically, you would need to initiate a withdrawal request through the platformʼs user interface and follow the instructions for the withdrawal process.',
      'Keep in mind that there may be a waiting period or other conditions associated with withdrawing your staked $BIT tokens, so be sure to review the documentation or FAQs for detailed information.',
    ],
  },
  {
    question:
      'Can I become a jury member in JuryDAO if I donʼt have $BIT tokens to stake?',
    answers: [
      'No, staking $BIT tokens is a requirement to become a jury member in JuryDAO.',
      '$BIT tokens serve as collateral for reporting instances of misconduct and participating in the decision-making process.',
      'You would need to acquire $BIT tokens through the platformʼs designated means or from other sources in order to stake and become a jury member.',
    ],
  },
  {
    question: 'Can I appeal a decision made by the jury in JuryDAO?',
    answers: [
      'Yes, JuryDAO may have a mechanism for appeals, allowing users to contest decisions made by the jury.',
      'The process for appeals may vary, and it is typically outlined in the smart contract or governance rules of the DAO.',
      'Users may need to provide valid reasons or evidence to support their appeal, which will be reviewed by the community or designated parties to determine the outcome.',
    ],
  },
  {
    question:
      'Can I participate in JuryDAO if I donʼt stake $BIT tokens and become a jury member?',
    answers: [
      'Yes, non-staked users can still participate in JuryDAO by reporting instances of misconduct and contributing to the communityʼs effort in preventing fraudulent activities in online gaming.',
      'Non-staked users can submit reports of suspected misconducts through the designated channels provided by JuryDAO, such as the platformʼs user interface or other communication channels.',
      'The reports will be reviewed by the jury members, who will make informed decisions based on their expertise and knowledge.',
      'However, please note that only staked jury members have the ability to vote on decisions and participate in the formal decision-making process within JuryDAO.',
    ],
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
  const [selectOpened, openSelectbox] = useState<boolean>(false);
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
          <div className="flex flex-col gap-2">
            <div className="flex gap-1.5 relative">
              <div
                className="w-[50px] h-[50px] flex-shrink-0 bg-primary-100 rounded-full object-center"
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
                  'flex-grow flex justify-between items-center rounded-2xl text-left px-5 py-2 text-sm xl:text-xl shadow-md bg-primary-100',
                ])}
                onClick={() => openSelectbox((prev) => !prev)}
              >
                <span className="text-white text-sm font-bold">
                  {faqs[activeIdx].question}
                </span>
                <ArrowIcon
                  fill="#fff"
                  className="transition-all duration-200"
                />
              </button>

              <ul
                className={clsx([
                  'absolute z-10 h-52 overflow-y-auto top-full mt-2.5 left-0 w-full rounded-2xl transition-opacity duration-200 scrollbar-hide',
                  selectOpened
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none',
                ])}
              >
                {faqs.map((faq, idx) => (
                  <li
                    role="button"
                    key={idx}
                    className="text-white px-5 py-3 bg-primary-100 hover:bg-primary-200"
                    onClick={() => {
                      setActiveIdx(idx);
                      openSelectbox(false);
                    }}
                  >
                    {faq.question}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-1.5">
              <div
                className="w-[50px] h-[50px] flex-shrink-0 bg-primary-300 rounded-full flex justify-center items-center"
                role="img"
              >
                <Image
                  className="pb-1 brightness-125"
                  src="/assets/logo/logo-symbol.png"
                  width={30}
                  height={30}
                  alt="Answer"
                />
              </div>
              <ul className="flex-grow min-h-[240px] flex flex-col p-5 gap-2 rounded-2xl text-left px-5 text-sm xl:text-xl shadow-md bg-primary-300 w-full">
                {faqs[activeIdx].answers.map((answer, idx) => (
                  <li
                    className="list-disc ml-4 text-white break-all text-sm leading-5"
                    key={idx}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
