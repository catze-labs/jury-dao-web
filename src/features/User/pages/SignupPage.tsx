import { NextPage } from 'next';
import { useState } from 'react';

import ConnectWallet from '../components/ConnectWallet';
import SignError from '../components/SignError';
import Signing from '../components/Signing';
import PhaseCircle from '../components/signup/PhaseCircle';
import SignupForm from '../components/signup/SignupForm';

const Phase = {
  Wallet: 0,
  Signing: 1,
  Info: 2,
};

const SignupPage: NextPage = () => {
  const [phase, setPhase] = useState<number>(0);

  return (
    <div className="w-full h-[120vh] bg-primary-300 flex justify-center items-center">
      <div className="w-[412px] h-[490px] flex flex-col">
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-[32px] leading-[48px] text-center">
            Sign up
          </h1>
          <PhaseCircle phase={phase} onClick={setPhase} />
        </div>

        <form className="flex justify-center items-center">
          {phase === Phase.Wallet && <ConnectWallet />}
          {phase === Phase.Signing && <Signing />}
          {phase === Phase.Info && <SignupForm />}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
